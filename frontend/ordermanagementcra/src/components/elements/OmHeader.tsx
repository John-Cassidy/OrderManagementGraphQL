import { HeaderCellCtrl } from 'ag-grid-community';
import React from 'react';
import { Typography } from '@mui/material';

interface Props {
  header: string;
}

export default function OmHeader({ header }: Props) {
  return (
    <Typography
      component='div'
      variant='h5'
      display='block'
      gutterBottom
      align='center'
    >
      {header}
    </Typography>
  );
}
