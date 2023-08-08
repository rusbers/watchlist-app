import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Box, Typography, Stack } from '@mui/material';
import InfiniteScroll from 'react-infinite-scroll-component';
import movieDbService from '../services/tmdbService';
import SelectOptions from '../components/SelectOptions';
import CategoryList from '../components/CategoryList';
import ScrollTop from '../components/ScrollTop';

const filterLabel = {
  sortBy: 'sort_by',
  genre: 'genre',
};

const sortOptions = [
  { name: 'Popularity', param: 'popularity.desc' },
  { name: 'Release date', param: 'release_date.desc' },
  { name: 'Vote average', param: 'vote_average.desc' },
];

function MediaList({ mediaType, pageTitle }) {
  const [searchParams, setSearchParams] = useSearchParams({
    sort_by: '',
    genre: '',
  });
  const [isLoading, setIsLoading] = useState(true);
  const [mediaList, setMediaList] = useState([]);
  const [error, setError] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [genres, setGenres] = useState([]);

  const getGenresList = async (media) => {
    try {
      const genresRequest = await movieDbService.getMediaGenres(media);
      setGenres(genresRequest);
    } catch (error) {
      console.log(`Error by trying fetching genres`);
    }
  };

  useEffect(() => {
    getGenresList(mediaType);
  }, [mediaType]);

  useEffect(() => {
    setCurrentPage(1);
    setMediaList([]);
  }, [searchParams]);

  useEffect(() => {
    const sortByParam = searchParams.get(filterLabel.sortBy) || '';
    const genreParam = searchParams.get(filterLabel.genre) || '';

    getMediaList(mediaType, sortByParam, genreParam, currentPage);
  }, [mediaType, searchParams, currentPage]);

  const getMediaList = async (media, sortBy, genre, page) => {
    try {
      setIsLoading(true);
      const request = await movieDbService.getDiscoverMedia(media, sortBy, genre, page);
      const newData = request.results;
      setMediaList((prevData) => [...prevData, ...newData]);
      setTotalPages(request.total_pages);
      setIsLoading(false);
      setError('');
    } catch (error) {
      console.log(error);
      setError('Ups something went wrong');
      setIsLoading(false);
    }
  };

  const handleSortChange = (event) => {
    searchParams.set(filterLabel.sortBy, event.target.value);
    setSearchParams(searchParams);
  };

  const handleGenreChange = (event) => {
    searchParams.set(filterLabel.genre, event.target.value);
    setSearchParams(searchParams);
  };

  const fetchMoreData = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const sortValue = searchParams.get(filterLabel.sortBy) || '';
  const genreValue = searchParams.get(filterLabel.genre) || '';

  return (
    <>
      <Stack
        id='back-to-top-anchor'
        flexDirection={{ sm: 'row' }}
        justifyContent='space-between'
        alignItems={{ sm: 'center' }}
        sx={{ marginBottom: 2 }}
      >
        <Typography lineHeight={1.5} variant='h3' component='h2'>
          {pageTitle}
        </Typography>
        <Box>
          <SelectOptions
            label='Sort by'
            value={sortValue}
            onSelectChange={handleSortChange}
            selectList={sortOptions}
            defaultValue=''
          />
          <SelectOptions
            label='Genres'
            value={genreValue}
            onSelectChange={handleGenreChange}
            selectList={genres}
            defaultValue=''
          />
        </Box>
      </Stack>

      <InfiniteScroll
        dataLength={mediaList.length}
        next={fetchMoreData}
        hasMore={currentPage < totalPages}
        scrollThreshold={1}
      >
        <CategoryList mediaList={mediaList} isLoading={isLoading} error={error} />
      </InfiniteScroll>

      <ScrollTop />
    </>
  );
}

export default MediaList;
