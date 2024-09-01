import { MenuItem, TextField } from '@mui/material';
import { useField, useFormikContext } from 'formik';

interface Props {
  name: string;
  options: any;
  otherProps: any;
}

export default function OmSelect({ name, options, otherProps }: Props) {
  const { setFieldValue } = useFormikContext();
  const [field, meta] = useField(name);

  const handleChange = (e: any) => {
    setFieldValue(name, e.target.value);
  };

  const configSelect = {
    ...field,
    ...otherProps,
    select: true,
    fullWidth: true,
    variant: 'outlined',
    onChange: handleChange,
  };

  if (meta && meta.touched && meta.error) {
    configSelect.error = true;
    // configSelect.helperText = meta.error;
  }

  return (
    <TextField {...configSelect}>
      {Object.keys(options).map((item, pos) => {
        return (
          <MenuItem key={pos} value={item}>
            {options[item]}
          </MenuItem>
        );
      })}
    </TextField>
  );
}
