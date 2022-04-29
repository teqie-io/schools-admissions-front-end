import React from 'react'
import clsx from 'clsx'
import { useParams } from 'react-router-dom'

import { CreateInstitute, StepOne, Payment, Domain, Buddy } from '../index.jsx'

export default function GettingStartModal({ modal, setModal, burger }) {
  const { id } = useParams()

  const renderComponents = [
    {
      linkId: 'getting-start',
      componentRender: (key) => <CreateInstitute burger={burger} modal={modal} setModal={setModal} key={key} />
    },
    {
      linkId: 'step-one',
      componentRender: (key) => <StepOne burger={burger} modal={modal} setModal={setModal} key={key} />
    },
    {
      linkId: 'payment',
      componentRender: (key) => <Payment burger={burger} modal={modal} setModal={setModal} key={key} />
    },
    {
      linkId: 'domain',
      componentRender: (key) => <Domain burger={burger} modal={modal} setModal={setModal} key={key} />
    },
    {
      linkId: 'buddy',
      componentRender: (key) => <Buddy burger={burger} modal={modal} setModal={setModal} key={key} />
    }
  ]

  return (
    <div
      className={clsx(
        'institutions-modal',
        modal ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      )}
    >
      {renderComponents.map((item, key) => {
        return id === item.linkId && item.componentRender(key)
      })}
    </div>
  )
}
