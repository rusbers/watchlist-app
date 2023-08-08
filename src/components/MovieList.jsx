import { Box, Typography, Link, Skeleton } from '@mui/material';
import Card from './Card';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import theme from '../theme/theme';
import styled from '@emotion/styled';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import SkeletonCard from './SkeletonCard';

const breakpoints = {
  390: {
    slidesPerView: 2.5,
  },
  500: {
    slidesPerView: 3.5,
    slidesPerGroup: 2,
  },
  700: {
    slidesPerView: 4.5,
    slidesPerGroup: 3,
  },
  1000: {
    slidesPerView: 5.5,
    slidesPerGroup: 4,
  },
  1100: {
    slidesPerView: 6.5,
    slidesPerGroup: 5,
  },
};

function MovieList({ categoryTitle, data, isLoading }) {
  return (
    <Box>
      <MovieListTitle>
        {isLoading ? <Skeleton variant='h2' width={250} /> : categoryTitle}
      </MovieListTitle>

      <SwiperStyled
        loop={true}
        slidesPerView={2}
        slidesPerGroup={1}
        spaceBetween={8}
        centeredSlides={true}
        navigation
        modules={[Navigation]}
        speed={300}
        breakpoints={breakpoints}
      >
        {data.map((item, index) => (
          <SwiperSlide style={{ maxWidth: '180px' }} key={isLoading ? index : item.id}>
            {isLoading ? <SkeletonCard /> : <Card item={item} />}
          </SwiperSlide>
        ))}
      </SwiperStyled>
    </Box>
  );
}

const SwiperStyled = styled(Swiper)`
  .swiper {
    height: 100%;
  }

  .swiper-wrapper {
    box-sizing: border-box;
    padding: 10px 0;
  }

  .swiper-slide {
    height: auto !important;
    transition: all 250ms;

    &:hover {
      transform: scale(1.01);
      z-index: 1;
    }
  }
`;

const MovieListTitle = styled(({ ...props }) => (
  <Typography component='h2' variant='h5' gutterBottom {...props} />
))`
  display: inline-flex;
  font-weight: 600;
  color: ${theme.palette.neutral.grey[400]};
`;

const LinkStyled = styled(Link)`
  color: ${theme.palette.neutral.grey[400]};
  display: flex;
  text-decoration: none;
  align-items: baseline;

  &::after {
    content: 'Explore all >';
    margin-left: 8px;
    display: inline-block;
    width: 0;
    color: ${theme.palette.primary.light};
    font-size: ${theme.typography.body2.fontSize};
    overflow: hidden;
    white-space: nowrap;
    transition: width 0.5s linear;
  }

  &:hover::after {
    width: 100px;
  }
`;

export default MovieList;
