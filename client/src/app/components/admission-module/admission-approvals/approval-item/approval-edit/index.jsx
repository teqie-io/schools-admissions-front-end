import React, { useState } from 'react'

import './approval-edit.scss'

import Chip from '../../../../../../stories/chip/chip.jsx'
import Input from '../../../../../../stories/input/input'
import Checkbox from '../../../../../../stories/checkbox/checkbox'
import { mainavatar } from '../../../../../static/image'

const stageStyle = {
  width: '195px',
  height: '40px'
}
const textareaStyle = {
  width: '322px',
  minHeight: '72px',
  fontWeight: '500',
  fontSize: '14px'
}

const data = [
  { label: 'Karthik', image: mainavatar, deleteChip: true, customStyle: { background: 'red' } },
  { label: 'Anushman', image: mainavatar, deleteChip: true, customStyle: { background: 'blue' } },
  { label: 'Jack', image: mainavatar, deleteChip: true, customStyle: { background: 'green' } }
]

const ApprovalEdit = ({ num, value, multiple }) => {
  const [chips, setChips] = useState(data)

  return (
    <div className='admission-approvals-edit'>
      <h4 className='admission-approvals-edit_title'>Stage {num}</h4>
      <div className='admission-approvals-edit_body'>
        <div className='admission-approvals-edit_column'>
          <Input label='Name' customStyle={stageStyle} value={value} />
          <div className='admission-approvals-edit_group'>
            <Checkbox value={multiple} />
            <span>Multiple Approval</span>
          </div>
        </div>
        <div className='admission-approvals-edit_column'>
          <div className='area' style={textareaStyle}>
            <label>Approvers</label>
            {chips.map((item, key) => (
              <div className='inline-block'>
                <Chip
                  key={key}
                  label={item.label}
                  image={item.image}
                  customStyle={{ height: 24 }}
                  chipAvatarStyle={{ width: 18, height: 18 }}
                  deleteChip={true}
                  customStyle={item.customStyle}
                  onDeleteClick={() => {
                    setChips([
                      ...chips.filter((value, index, arr) => {
                        return index !== key
                      })
                    ])
                  }}
                />
              </div>
            ))}
          </div>
        </div>
        <div className='admission-approvals-edit_column'>
          <Input label='Description' customStyle={textareaStyle} />
        </div>
      </div>
    </div>
  )
}

export default ApprovalEdit
