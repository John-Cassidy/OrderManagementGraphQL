import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

import { Customer, Order } from '../../../graphql/generated/schema';
import { useEffect, useMemo, useState } from 'react';

import { AgGridReact } from 'ag-grid-react';
import { ColDef } from 'ag-grid-community';

interface OrderListProps {
  orders: Order[];
}

export default function OrderList({ orders }: OrderListProps) {
  const [rowData, setRowData] = useState<Order[]>([]);
  const [gridApi, setGridApi] = useState<any>(null);

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
      { field: 'status' },
    ],
    []
  );

  const defaultColDef = useMemo(
    () => ({
      sortable: true,
      filter: true,
      resizable: true,
    }),
    []
  );

  useEffect(() => {
    setRowData(orders);
    if (gridApi) {
      gridApi.refreshCells();
    }
  }, [orders, gridApi]);

  const onGridReady = (params: any) => {
    setGridApi(params.api);
  };

  return (
    <div className='ag-theme-alpine' style={{ height: 500, width: '100%' }}>
      <AgGridReact
        rowData={rowData}
        columnDefs={columnDefs}
        defaultColDef={defaultColDef}
        onGridReady={onGridReady}
      />
    </div>
  );
}
