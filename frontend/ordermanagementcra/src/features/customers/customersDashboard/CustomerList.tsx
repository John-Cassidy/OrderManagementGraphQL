import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

import { Address, Customer } from '../../../graphql/generated/schema';
import { useEffect, useMemo, useState } from 'react';

import { AgGridReact } from 'ag-grid-react';
import { ColDef } from 'ag-grid-community';

interface Props {
  customers: Customer[];
}

export default function CustomerList({ customers }: Props) {
  const [rowData, setRowData] = useState<Customer[]>([]);
  const [gridApi, setGridApi] = useState<any>(null);

  // define column definitions we are going to use in the table based on the data we have from Customer in #file: ../../../graphql/generated/schema
  const columnDefs: ColDef<Customer>[] = useMemo(
    () => [
      {
        field: 'id',
        width: 50,
        suppressSizeToFit: true,
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

  const defaultColDef = useMemo(
    () => ({
      sortable: true,
      filter: true,
      resizable: true,
    }),
    []
  );

  useEffect(() => {
    setRowData(customers);
    if (gridApi) {
      gridApi.refreshCells();
    }
  }, [customers, gridApi]);

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
