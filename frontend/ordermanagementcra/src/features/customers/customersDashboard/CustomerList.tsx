import { Address, Customer } from '../../../graphql/generated/schema';

import { ColDef } from 'ag-grid-community';
import { IconButton } from '@mui/material';
import LaunchIcon from '@mui/icons-material/Launch';
import OmgGrid from '../../../components/elements/OmGrid';
import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

interface Props {
  customers: Customer[];
}

export default function CustomerList({ customers }: Props) {
  const navigate = useNavigate();
  const columnDefs: ColDef<Customer>[] = useMemo(
    () => [
      {
        field: 'id',
        width: 50,
        suppressSizeToFit: true,
        cellRenderer: function (params: any) {
          return (
            <IconButton onClick={() => navigate(`/customers/${params.value}`)}>
              <LaunchIcon fontSize='small' color='secondary' />
            </IconButton>
          );
        },
      },
      { field: 'firstName' },
      { field: 'lastName' },
      { field: 'contactNumber' },
      { field: 'email' },
      {
        field: 'address',
        cellRenderer: function (params: any) {
          const address = params.value as Address;
          return (
            address.addressLine1 +
            ', ' +
            address.addressLine2 +
            ', ' +
            address.city +
            ', ' +
            address.state +
            ', ' +
            address.country
          );
        },
      },
    ],
    []
  );

  return <OmgGrid columnDefs={columnDefs} rowDataProps={customers} />;
}
