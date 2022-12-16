import * as React from 'react';
import TablePagination from '@mui/material/TablePagination';
import "../assets/css/style.css";


function PaginationComponent({
    rowsPerPageOptions,
    component,
    count,
    rowsPerPage,
    page,
    onPageChange,
    onRowsPerPageChange
}) {

    return (
        <>
            <TablePagination
                style={{
                    border: "1px solid yellow",
                    borderRadius: 20
                }}
                className="text-white bg-dark"
                rowsPerPageOptions={rowsPerPageOptions}
                labelRowsPerPage={"Records Per Page"}
                component={component}
                count={count}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={onPageChange}
                onRowsPerPageChange={onRowsPerPageChange}
            />
        </>
    );
}

export default PaginationComponent;