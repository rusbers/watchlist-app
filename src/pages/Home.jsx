import React from 'react';
import MovieList from '../components/MovieList';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectContentData,
  selectLastFetched,
  selectIsLoading,
  selectError,
} from '../app/features/homeContentSlice';
import { fetchHomeContent } from '../app/features/homeContentSlice';

const skeletonContent = [{ CategoryTitle: null, data: new Array(20).fill(null) }];

function Home() {
  const dispatch = useDispatch();

  const isLoading = useSelector(selectIsLoading);
  const contentData = useSelector(selectContentData);
  const lastFetched = useSelector(selectLastFetched);
  const error = useSelector(selectError);

  useEffect(() => {
    const CACHE_DURATION = 60 * 60 * 1000;
    const SHOULD_FETCH_DATA = !lastFetched || Date.now() - lastFetched > CACHE_DURATION;

    if (SHOULD_FETCH_DATA) {
      dispatch(fetchHomeContent());
    }
  }, []);

  return (
    <>
      {error && <div>Ups, something went wrong, try again</div>}
      {(isLoading ? skeletonContent : contentData).map((item, index) => (
        <MovieList
          key={index}
          categoryTitle={item.CategoryTitle}
          data={item.data}
          isLoading={isLoading}
        />
      ))}
    </>
  );
}

export default React.memo(Home);
