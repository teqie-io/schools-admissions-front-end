import * as React from 'react'
import TablePagination from '@mui/material/TablePagination'
import PropTypes from 'prop-types'

export default function Pagination({
  page,
  rowsPerPage,
  handleChangeRowsPerPage,
  handleChangePage,
  rowsPerPageCount,
  customStyle,
  customClass,
  countPages
}) {
  return (
    <div style={customStyle} className={customClass}>
      <TablePagination
        component='div'
        sx={{ overflow: 'hidden' }}
        count={countPages}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        rowsPerPageOptions={rowsPerPageCount}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </div>
  )
}

Pagination.propTypes = {
  previewPage: PropTypes.number,
  rowsPerPageCount: PropTypes.array,
  customStyle: PropTypes.object,
  customClass: PropTypes.string,
  rowsPerPage: PropTypes.number,
  handleChangeRowsPerPage: PropTypes.func,
  handleChangePage: PropTypes.func,
  countPages: PropTypes.number
}

Pagination.defaultProps = {
  previewPage: 1,
  rowsPerPageCount: [5, 10],
  countPages: 11
}
