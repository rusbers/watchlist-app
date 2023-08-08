import ActionsGroup from './ActionsGroup';
import Action from './Action';

const CardActions = ({ item, actionStyle }) => (
  <ActionsGroup>
    <Action sx={{ ...actionStyle }} variant='favorite' item={item} />
    <Action sx={{ ...actionStyle }} variant='watchlist' item={item} />
  </ActionsGroup>
);

export default CardActions;
