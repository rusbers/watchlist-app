import { FormControl, Select, InputLabel, MenuItem } from '@mui/material';
import theme from '../theme/theme';
import styled from '@emotion/styled';

function SelectOptions({ label, value, onSelectChange, selectList, ...rest }) {
  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} {...rest}>
      <InputLabelStyled color='success' id='sort-by'>
        {label}
      </InputLabelStyled>
      {selectList.length > 0 && (
        <SelectStyled
          variant='outlined'
          color='success'
          labelId='sort-by'
          value={value}
          label={label}
          onChange={onSelectChange}
        >
          <MenuItem value=''>None</MenuItem>
          {selectList.map((selectOption, index) => (
            <MenuItem
              sx={{ display: 'flex', alignItems: 'center', gap: 1 }}
              key={index}
              value={selectOption.param ?? selectOption.id}
            >
              {selectOption.name}
            </MenuItem>
          ))}
        </SelectStyled>
      )}
    </FormControl>
  );
}

const InputLabelStyled = styled(InputLabel)`
  color: inherit;
`;

const SelectStyled = styled(Select)`
  --primary-color: ${theme.palette.primary.main};
  --success-color: ${theme.palette.success.main};

  & .MuiSelect-icon {
    color: var(--primary-color);
  }

  & .MuiSelect-iconOpen {
    color: var(--success-color);
  }

  & .MuiOutlinedInput-notchedOutline {
    border-color: var(--primary-color);
  }
`;

export default SelectOptions;
