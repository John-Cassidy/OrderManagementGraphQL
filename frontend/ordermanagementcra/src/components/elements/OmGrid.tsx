import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

import { useEffect, useMemo, useState } from 'react';

import { AgGridReact } from 'ag-grid-react';
import { ColDef } from 'ag-grid-community';

interface OmGridProps {
  rowDataProps: any;
  columnDefs: ColDef<any>[];
}

export default function OmGrid({ rowDataProps, columnDefs }: OmGridProps) {
  const [rowData, setRowData] = useState<any[]>([]);
  const [gridApi, setGridApi] = useState<any>(null);

  const defaultColDef = useMemo(
    () => ({
      sortable: true,
      filter: true,
      resizable: true,
    }),
    []
  );

  useEffect(() => {
    setRowData(rowDataProps);
    if (gridApi) {
      gridApi.refreshCells();
    }
  }, [rowDataProps, gridApi]);

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
