import { Box, InputBase as MuiInputBase, IconButton, useMediaQuery } from '@mui/material';
import theme from '../theme/theme';
import styled from '@emotion/styled';
import SearchIcon from '../assets/icons/search-normal.svg';
import CloseIcon from '../assets/icons/close-square.svg';
import { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearSearchResult, selectMediaTypeSearch } from '../app/features/searchSlice';
import { useLocation, useNavigate } from 'react-router-dom';
import { fetchSearchResults } from '../app/features/searchSlice';
import useDebounce from '../hooks/useDebounce';

function SearchInput({ fullWidth, ...props }) {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const isSmallScreenVersion = useMediaQuery(theme.breakpoints.down('md'));
  const inputRef = useRef(null);

  const debouncedQuery = useDebounce(query, 500);

  const mediaTypeSearch = useSelector(selectMediaTypeSearch);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search).get('query');
    if (searchParams) setQuery(searchParams);
  }, []);

  useEffect(() => {
    if (debouncedQuery) {
      dispatch(fetchSearchResults({ mediaTypeSearch, query: debouncedQuery }));
      navigate(`/watchlist-app/search?query=${debouncedQuery}`);
    }
  }, [debouncedQuery, mediaTypeSearch]);

  useEffect(() => {
    if (!location.pathname.startsWith('/watchlist-app/search')) {
      setQuery('');
    }
  }, [location.pathname]);

  useEffect(() => {
    if (isSmallScreenVersion) {
      inputRef.current.focus();
    }
  }, [isSmallScreenVersion]);

  const onSubmitHandler = (event) => {
    event.preventDefault();
  };

  const onChangeHandler = (event) => {
    setQuery(event.target.value);
  };

  const clearSearchQueryHandler = () => {
    setQuery('');
    dispatch(clearSearchResult());
    navigate(`/watchlist-app/search?query=`);
  };

  return (
    <Box {...props}>
      <form onSubmit={onSubmitHandler}>
        <SearchInputBox borderBottom={fullWidth}>
          <IconWrapper disableRipple aria-label='search' type='submit' sx={{ left: 0, top: 0 }}>
            <SearchIconStyled />
          </IconWrapper>
          <InputBase
            inputRef={inputRef}
            fullWidth={fullWidth}
            value={query}
            onChange={onChangeHandler}
            placeholder='Search…'
            inputProps={{ 'aria-label': 'search' }}
          />
          <IconWrapper
            disableRipple
            aria-label='clear search query'
            type='button'
            sx={{ right: 0, top: 0 }}
            onClick={clearSearchQueryHandler}
          >
            <CloseIconStyled query={query} />
          </IconWrapper>
        </SearchInputBox>
      </form>
    </Box>
  );
}

const SearchInputBox = styled(Box)`
  position: relative;
  border-bottom: ${({ borderBottom }) =>
    borderBottom ? `2px solid ${theme.palette.neutral.grey[300]}` : 'none'};
  /* &:hover > button > svg {
    stroke: ${theme.palette.primary.light};
  } */
`;

const SearchIconStyled = styled(SearchIcon)`
  width: 24px;
  height: 24px;
  stroke: ${theme.palette.neutral.grey[300]};
`;

const CloseIconStyled = styled(CloseIcon)`
  display: ${({ query }) => (query ? 'block' : 'none')};
  width: 24px;
  height: 24px;
`;

const IconWrapper = styled(IconButton)`
  padding: 0;
  height: 100%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover > svg {
    stroke: ${theme.palette.primary.light};
  }
`;

const InputBase = styled(MuiInputBase)`
  color: inherit;
  & .MuiInputBase-input {
    padding: ${theme.spacing(1, 1, 1, 0)};
    padding-left: calc(1em + ${theme.spacing(4)});
    transition: ${theme.transitions.create('width')};
    width: ${({ value }) => (value ? '25ch' : 0)};
    flex-grow: ${({ fullWidth }) => (fullWidth ? 1 : 0)};

    &:focus {
      width: 25ch;
    }

    @media (max-width: 435px), (min-width: 600px) and (max-width: 720px) {
      width: ${({ value }) => (value ? '13ch' : 0)};

      &:focus {
        width: 13ch;
      }
    }
  }
`;

export default SearchInput;
