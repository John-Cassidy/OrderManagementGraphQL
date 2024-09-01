import { Customer, Order } from '../../../graphql/generated/schema';

import { ColDef } from 'ag-grid-community';
import OmgGrid from '../../../components/elements/OmGrid';
import { useMemo } from 'react';

interface OrderListProps {
  orders: Order[];
}

export default function OrderList({ orders }: OrderListProps) {
  const columnDefs: ColDef<Order>[] = useMemo(
    () => [
      {
        field: 'id',
        width: 50,
        suppressSizeToFit: true,
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
