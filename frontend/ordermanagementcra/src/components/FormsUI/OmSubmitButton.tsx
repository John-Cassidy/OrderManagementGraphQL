import { Button } from '@mui/material';
import { useFormikContext } from 'formik';

interface Props {
  children: any;
  otherProps: any;
}

export default function OmSubmitButton({ children, otherProps }: Props) {
  const { submitForm } = useFormikContext();

  function handleSubmit() {
    submitForm();
  }

  const configButton = {
    ...otherProps,
    color: 'primary',
    variant: 'contained',
    fullWidth: true,
    onClick: handleSubmit,
  };

  return <Button {...configButton}>{children}</Button>;
}
