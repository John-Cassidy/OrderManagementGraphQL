import { Customer, Order } from '../../../graphql/generated/schema';

import { ColDef } from 'ag-grid-community';
import { IconButton } from '@mui/material';
import LaunchIcon from '@mui/icons-material/Launch';
import OmgGrid from '../../../components/elements/OmGrid';
import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

interface Props {
  orders: Order[];
}

export default function OrderList({ orders }: Props) {
  const navigate = useNavigate();
  const columnDefs: ColDef<Order>[] = useMemo(
    () => [
      {
        field: 'id',
        width: 50,
        suppressSizeToFit: true,
        cellRenderer: function (params: any) {
          return (
            <IconButton onClick={() => navigate(`/orders/${params.value}`)}>
              <LaunchIcon fontSize='small' color='secondary' />
            </IconButton>
          );
        },
      },
      {
        field: 'customer',
        cellRenderer: function (params: any) {
          const customer = params.value as Customer;
          return customer.firstName + ' ' + customer.lastName;
        },
      },
      {
        field: 'orderDate',
      },
      { field: 'description' },
      { field: 'totalAmount' },
      { field: 'status' },
    ],
    []
  );

  return <OmgGrid columnDefs={columnDefs} rowDataProps={orders} />;
}
