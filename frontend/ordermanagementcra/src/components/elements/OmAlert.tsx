import { Alert } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

interface Props {
  message: string;
}

export default function OmAlert({ message }: Props) {
  return (
    <Box sx={{ display: 'flex' }}>
      <Alert severity='error'>{message}</Alert>
    </Box>
  );
}
