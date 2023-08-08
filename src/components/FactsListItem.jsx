import { ListItem as MuiListItem, ListItemText } from '@mui/material';
import theme from '../theme/theme';

const FactsListItem = ({ primary, secondary }) => {
  return (
    <MuiListItem component='div' disablePadding>
      <ListItemText
        primary={primary}
        secondary={secondary}
        primaryTypographyProps={{
          fontSize: '16px',
          fontWeight: 600,
          color: theme.palette.neutral.grey[400],
        }}
        secondaryTypographyProps={{
          fontSize: '16px',
          color: theme.palette.neutral.grey[100],
        }}
      />
    </MuiListItem>
  );
};

export default FactsListItem;
