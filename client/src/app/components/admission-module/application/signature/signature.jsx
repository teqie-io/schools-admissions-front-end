import React, { useState } from 'react'
import clsx from 'clsx'
import { css } from '@emotion/react'
import BounceLoader from 'react-spinners/BounceLoader'

import done from './done.svg'
import doc from './doc.png'
import './signature.scss'

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`

export default function Signature() {
  const [state, setState] = useState({
    waiting: false,
    done: false
  })

  const delay = () => {
    setState({
      ...state,
      waiting: true
    })

    setTimeout(function () {
      setState({
        waiting: false,
        done: true
      })
    }, 3000)
  }

  const styles = {
    main: { background: `url(${doc})`, backgroundPosition: 'center' },
    box: { width: '44.375rem', height: '55.438rem' }
  }

  return (
    <div className={clsx('mt-10 mb-10 flex items-end justify-end relative')} style={styles.box}>
      <div className='absolute' style={Object.assign(styles.main, styles.box)} />
      <div
        className={clsx(
          'absolute top-1 left-3 flex flex-col items-center justify-center',
          state.done && 'signature-done z-10',
          state.waiting && 'signature-waiting z-10'
        )}
        style={{ width: '42.813rem', height: '53.875rem' }}
      >
        {state.waiting && <BounceLoader color='#AEE9D1' loading={true} css={override} size={60} />}
        {state.done && <img src={done} style={{ width: '3.75rem', height: '3.75rem' }} alt='done' />}
        {state.waiting && <p className='text-sm text-main-black font-semibold mt-3'>Waiting for Signature</p>}
        {state.done && <p className='text-sm text-main-black font-semibold mt-3'>Application Complete</p>}
      </div>
      <div className='flex flex-col right-10 bottom-24 relative'>
        <input placeholder='Your signature' className='border-b border-main-black w-32 mb-5' />
        <button onClick={() => delay()}>Confirm signature</button>
      </div>
    </div>
  )
}
