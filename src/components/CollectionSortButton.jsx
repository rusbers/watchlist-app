import { IconButton } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

const CollectionSortButton = ({ sortCollection, sorted }) => {
  return (
    <IconButton onClick={sortCollection}>
      {sorted ? <ArrowDropUpIcon fontSize='large' /> : <ArrowDropDownIcon fontSize='large' />}
    </IconButton>
  );
};

export default CollectionSortButton;
