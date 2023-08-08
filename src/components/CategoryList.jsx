import { Typography, Grid, Skeleton } from '@mui/material';
import Card from './Card';
import SkeletonCard from './SkeletonCard';

function CategoryList({ categoryTitle, mediaList, isLoading, error }) {
  const skeletonContent = new Array(8).fill(null);

  return (
    <>
      {categoryTitle && (
        <Typography gutterBottom variant='h4'>
          {isLoading ? <Skeleton width={250} /> : categoryTitle}
        </Typography>
      )}
      <Grid container rowSpacing={2} columnSpacing={1.5} marginBottom={1.5}>
        {mediaList &&
          mediaList.map((item) => (
            <Grid key={item.id} item xs={6} sm={3} md={2}>
              <Card
                item={item}
                sx={{ minWidth: 'initial !important', maxWidth: 'initial !important' }}
              />
            </Grid>
          ))}
        {isLoading &&
          skeletonContent.map((_, index) => (
            <Grid key={index} item xs={6} sm={3} md={2}>
              <SkeletonCard sx={{ maxWidth: 'initial !important' }} />
            </Grid>
          ))}
        {error && <div style={{ marginTop: 16, marginLeft: 12 }}>{error}</div>}
      </Grid>
    </>
  );
}
export default CategoryList;
