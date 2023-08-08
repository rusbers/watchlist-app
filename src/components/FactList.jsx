import { List, Grid } from '@mui/material';
import FactsListItem from './FactsListItem';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const customBreakpoints = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 450,
    },
  },
});

const FactsList = ({ details }) => {
  const factListData = Object.entries(details)
    .filter(([_, value]) => value)
    .map(([key, value], index) => <FactsListItem key={index} primary={key} secondary={value} />);

  return (
    <ThemeProvider theme={customBreakpoints}>
      <Grid component={List} container spacing={2} display='inline-flex'>
        {factListData.map((item, key) => (
          <Grid item xs={12} sm={6} component='li' key={key}>
            {item}
          </Grid>
        ))}
      </Grid>
    </ThemeProvider>
  );
};

export default FactsList;
