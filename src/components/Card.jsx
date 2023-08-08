import { CardContent, CardMedia, CardActionArea, Typography } from '@mui/material';
import CardActions from './CardActions';
import CardWrapper from './CardWrapper';
import CardTitle from './CardTitle';
import { Link as RouterLink } from 'react-router-dom';
import Rating from './Rating';
import MuiCardActionsStyled from './MuiCardActionsStyled';
import { AuthContext } from '../context/AuthContext';
import { useContext } from 'react';
import formatCardDetails from '../helpers/formatCardDetails';

function Card({ item, ...rest }) {
  const { credentials } = useContext(AuthContext);
  const isLogged = credentials.authenticated;

  const cardDetails = formatCardDetails(item);
  const { name, rating, posterPath, releaseDate, routerPath } = cardDetails;

  return (
    <CardWrapper {...rest}>
      <MuiCardActionsStyled>
        <Rating rating={rating} />
        {isLogged && <CardActions actionStyle={{ padding: 0 }} item={item} />}
      </MuiCardActionsStyled>
      <CardActionArea
        sx={{ display: 'inline-block', marginBottom: 'auto' }}
        component={RouterLink}
        to={routerPath}
      >
        <CardMedia
          component='img'
          width='300'
          height='450'
          image={posterPath}
          sx={{ borderRadius: '4px' }}
        />
      </CardActionArea>
      <CardContent sx={{ padding: 1 }}>
        <CardTitle title={name} urlPath={routerPath} />
        <Typography>{releaseDate}</Typography>
      </CardContent>
    </CardWrapper>
  );
}

export default Card;
