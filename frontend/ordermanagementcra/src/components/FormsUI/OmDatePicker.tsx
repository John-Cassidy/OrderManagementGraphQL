import { Input, TextField } from '@mui/material';

import { useField } from 'formik';

interface Props {
  name: string;
  otherProps: any;
}

export default function OmDatePicker({ name, otherProps }: Props) {
  const [field, meta] = useField(name);

  const configDatePicker = {
    ...field,
    ...otherProps,
    type: 'date',
    fullWidth: true,
    variant: 'outlined',
    InputLabelProps: {
      shrink: true,
    },
  };

  if (meta && meta.touched && meta.error) {
    configDatePicker.error = true;
    // configDatePicker.helperText = meta.error;
  }

  return <TextField {...configDatePicker} />;
}
