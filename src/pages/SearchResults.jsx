import { Typography, Tabs, Tab, Box } from '@mui/material';
import ScrollTop from '../components/ScrollTop';
import SearchInput from '../components/SearchInput';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setMediaTypeSearch } from '../app/features/searchSlice';
import {
  selectIsLoading,
  selectSearchResults,
  selectSearchError,
} from '../app/features/searchSlice';
import CategoryList from '../components/CategoryList';
import { MOVIE, TV_SHOW } from '../helpers/mediaTypeNamespace';

function SearchResults() {
  const [mediaType, setMediaType] = useState(MOVIE);
  const isLoading = useSelector(selectIsLoading);
  const searchResults = useSelector(selectSearchResults);
  const searchError = useSelector(selectSearchError);

  const dispatch = useDispatch();

  const handleMediaTypeChange = (event, newValue) => {
    setMediaType(newValue);
    dispatch(setMediaTypeSearch(newValue));
  };

  return (
    <>
      {searchError && <div>Ups, something went wrong ... </div>}
      {searchResults && (
        <>
          <Box
            id='back-to-top-anchor'
            sx={{ padding: '16px 0', display: { xs: 'block', md: 'none' } }}
          >
            <SearchInput fullWidth />
          </Box>
          <Typography gutterBottom variant='h4'>
            Search results
          </Typography>
          <Tabs
            sx={{ marginBottom: 2 }}
            textColor='inherit'
            value={mediaType}
            onChange={handleMediaTypeChange}
          >
            <Tab label='Movies' value={MOVIE} {...a11yProps(MOVIE)} />
            <Tab label='TV shows' value={TV_SHOW} {...a11yProps(TV_SHOW)} />
          </Tabs>

          <TabPanel
            value={mediaType}
            index={MOVIE}
            mediaList={searchResults.movies}
            isLoading={isLoading}
          />
          <TabPanel
            value={mediaType}
            index={TV_SHOW}
            mediaList={searchResults.tvShows}
            isLoading={isLoading}
          />
          <ScrollTop />
        </>
      )}
    </>
  );
}

function TabPanel(props) {
  const { mediaList, isLoading, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && <CategoryList mediaList={mediaList} isLoading={isLoading} />}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `tab-${index}`,
    'aria-controls': `tabpanel-${index}`,
  };
}

export default SearchResults;
