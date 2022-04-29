import React from 'react'

import Pagination from './pagination.jsx'

export default {
  title: 'Sub Components/Pagination',
  component: Pagination,
  argTypes: {}
}

export const Template = (args) => {
  const [page, setPage] = React.useState(1)
  const [rowsPerPage, setRowsPerPage] = React.useState(5)

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  return (
    <div className='information-field overflow-hidden' style={{ width: 400, height: 100 }}>
      <Pagination
        {...args}
        page={page}
        rowsPerPage={rowsPerPage}
        handleChangeRowsPerPage={handleChangeRowsPerPage}
        handleChangePage={handleChangePage}
      />
    </div>
  )
}

Template.args = { rowsPerPageCount: [5, 10], countPages: 11, previewPage: 1 }
