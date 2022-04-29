import React, { useState } from 'react'
import PropTypes from 'prop-types'

import './approval-item.scss'
import { mainavatar } from '../../../../static/image'

import ApprovalStage from './approval-stage'
import ApprovalEdit from './approval-edit'

const ApprovalItem = ({ title }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [data, setData] = useState([
    {
      title: 'Level 1',
      multiple: false,
      users: [
        {
          avatar: mainavatar
        },
        {
          avatar: mainavatar
        },
        { avatar: mainavatar }
      ]
    },
    {
      title: 'Level 2',
      multiple: true,
      users: [
        { avatar: mainavatar },
        {
          avatar: mainavatar
        }
      ]
    }
  ])

  function accordionOpenHandler() {
    setIsOpen(!isOpen)
  }

  function openEditStageHandler() {
    setIsOpen(true)
    addNewStage()
  }

  function addNewStage() {
    const newStage = {
      title: `Level ${data.length + 1}`,
      multiple: false
    }
    setData([...data, newStage])
  }

  return (
    <div className='admission-approvals-item'>
      <div className='admission-approvals-item_header'>
        <h2 className='admission-approvals-item_title'>{title}</h2>
        <ul className='admission-approvals-item_stages admission-approvals-stages '>
          {data.map((item, idx) => {
            return (
              <ApprovalStage
                key={idx + '_' + item.title}
                title={item.title}
                subtitle={item.multiple}
                data={item.users}
              />
            )
          })}
          <li className='admission-approvals-stages_column'>
            <h4 className='admission-approvals-stages_title'>Level {data.length + 1}</h4>
            <div className='admission-approvals-stages_list'>
              <div className='admission-approvals-item_btn-plus' onClick={openEditStageHandler}>
                <span>+</span>
              </div>
            </div>
            <h6 className='admission-approvals-stages_subtitle'>Not Requiered</h6>
          </li>
        </ul>
        <button onClick={accordionOpenHandler} className='admission-approvals-item_btn none-after'>
          <span></span>
        </button>
      </div>
      {isOpen && (
        <div className='admission-approvals-item_body'>
          {data.map((item, idx) => {
            return <ApprovalEdit num={idx + 1} value={item.title} multiple={item.multiple} />
          })}

          <button className='admission-approvals-additem' onClick={addNewStage}>
            <div className='admission-approvals-item_btn-plus'>
              <span>+</span>
            </div>
            add stage
          </button>
          <div className='w-full flex justify-end items-end mt-10'>
            <button className='border border-main-blue text-main-blue mr-4 pt-2 pb-2.5 w-40 rounded'>Cancel</button>
            <button className='bg-main-blue text-white pt-2.5 mr-10 pb-2.5 w-40 rounded'>Save</button>
          </div>
        </div>
      )}
    </div>
  )
}

ApprovalItem.propTypes = {
  title: PropTypes.string
}

ApprovalItem.defaultProps = {
  title: 'Approval Title'
}

export default ApprovalItem
