import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
} from '@mui/material';
import { useField, useFormikContext } from 'formik';

interface Props {
  name: string;
  label: string;
  legend: string;
  otherProps: any;
}

export default function OmCheckBox({ name, label, legend, otherProps }: Props) {
  const { setFieldValue } = useFormikContext();
  const [field, meta] = useField(name);

  function handleChange(e: any) {
    setFieldValue(name, e.target.checked);
  }

  const configCheckBox = {
    ...otherProps,
    ...field,
    onChange: handleChange,
    checked: meta.value,
  };

  const configFormControl: any = {};

  if (meta && meta.touched && meta.error) {
    configFormControl.error = true;
    // configFormControl.helperText = meta.error;
  }

  return (
    <FormControl {...configFormControl}>
      <FormLabel component='legend'>{legend}</FormLabel>
      <FormGroup>
        <FormControlLabel
          control={<Checkbox {...configCheckBox} />}
          label={label}
          //   labelPlacement='end'
        />
      </FormGroup>
    </FormControl>
  );
}
