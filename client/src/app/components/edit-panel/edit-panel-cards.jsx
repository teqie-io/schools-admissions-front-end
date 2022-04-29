import React from 'react'

export default function EditPanelCards({ edits }) {
  return edits.map((edit, key) => {
    const typeCheck =
      (edit.type === 'Add' && <Add />) || (edit.type === 'Edit' && <Edit />) || (edit.type === 'Delete' && <Delete />)

    const typeCheckTitle =
      (edit.type === 'Add' && 'Added') || (edit.type === 'Edit' && 'Edited') || (edit.type === 'Delete' && 'Deleted')

    return (
      <div key={key} className='flex items-center ml-1.5 cursor-pointer mb-5'>
        <div className='flex items-center justify-center w-7 h-7 bg-white z-10 mr-2 rounded-full border'>
          {typeCheck}
        </div>
        <div className='text-10px'>
          <p>
            {typeCheckTitle} {edit.title}
          </p>
          <p className='text-second-gray'>
            {edit.date} | {edit.roleName}
          </p>
        </div>
      </div>
    )
  })
}

const Add = () => {
  return (
    <svg width='14' height='14' viewBox='0 0 14 14' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path d='M7.875 6.125V0H6.125V6.125H0V7.875H6.125V14H7.875V7.875H14V6.125H7.875Z' fill='#4285F4' />
    </svg>
  )
}

const Edit = () => {
  return (
    <svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M15.6582 6.09155L11.5748 2.00821C11.5235 1.95122 11.4604 1.90605 11.3899 1.87583C11.3194 1.84562 11.2432 1.83108 11.1665 1.83321H5.33317C5.02404 1.83414 4.72783 1.95735 4.50923 2.17594C4.29064 2.39453 4.16743 2.69074 4.1665 2.99988V16.9999C4.16743 17.309 4.29064 17.6052 4.50923 17.8238C4.72783 18.0424 5.02404 18.1656 5.33317 18.1665H14.6665C14.9756 18.1656 15.2718 18.0424 15.4904 17.8238C15.709 17.6052 15.8322 17.309 15.8332 16.9999V6.49988C15.8353 6.42321 15.8208 6.34698 15.7905 6.27648C15.7603 6.20598 15.7152 6.14288 15.6582 6.09155ZM11.1665 3.23321L14.4332 6.49988H11.1665V3.23321ZM14.6665 16.9999H5.33317V2.99988H9.99984V6.49988C10.0008 6.80902 10.124 7.10523 10.3426 7.32382C10.5612 7.54241 10.8574 7.66562 11.1665 7.66655H14.6665V16.9999Z'
        fill='#00AB55'
      />
    </svg>
  )
}

const Delete = () => {
  return (
    <svg width='14' height='18' viewBox='0 0 14 18' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M9.12 7.47L7 9.59L4.87 7.47L3.46 8.88L5.59 11L3.47 13.12L4.88 14.53L7 12.41L9.12 14.53L10.53 13.12L8.41 11L10.53 8.88L9.12 7.47ZM10.5 1L9.5 0H4.5L3.5 1H0V3H14V1H10.5ZM1 16C1 17.1 1.9 18 3 18H11C12.1 18 13 17.1 13 16V4H1V16ZM3 6H11V16H3V6Z'
        fill='#EB5757'
      />
    </svg>
  )
}
