import React from 'react'
import PropTypes from 'prop-types'

const ApprovalStage = ({ title, subtitle, data }) => {
  return (
    <li className='admission-approvals-stages_column'>
      <h4 className='admission-approvals-stages_title'>{title}</h4>
      <div className='admission-approvals-stages_list'>
        {data.map((item, idx) => {
          return (
            <img
              key={idx + '_' + item.avatar}
              src={item.avatar}
              alt='avatar'
              className='admission-approvals-stages_avatar'
            />
          )
        })}
      </div>
      <h6 className='admission-approvals-stages_subtitle'>{subtitle ? 'Multiple' : 'Single'} Approval</h6>
    </li>
  )
}

ApprovalStage.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  data: PropTypes.array
}

ApprovalStage.defaultProps = {
  title: 'Stage Name',
  title: 'Stage Subtitle',
  data: [
    {
      avatar: 'https://place-hold.it/32x32'
    },
    {
      avatar:
        'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.djulideil.com%2Fbitches%2Ftochka-ru-sobaka-09.jpg&f=1&nofb=1'
    },
    {
      avatar: 'https://place-hold.it/32x32'
    }
  ]
}

export default ApprovalStage
