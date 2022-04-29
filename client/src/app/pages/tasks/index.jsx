import React, { useState } from 'react'
import clsx from 'clsx'

import {
  search,
  time,
  headplus,
  sort,
  plus,
  clock,
  calendar,
  list,
  ar,
  kanban,
  filter,
  bloom,
  miniarrow
} from './image'
import { DragDrop } from '../../components/tasks'
import { mainavatar } from '../../static/image'
import './tasks.scss'

const types = [
  { title: 'List View', svg: list },
  { title: 'Calendar View', svg: calendar },
  { title: 'Workload', svg: clock },
  { title: 'Kanban', svg: kanban },
  { title: 'Timeline', svg: time },
  { title: 'Add View', svg: plus }
]

export default function Tasks({ burger }) {
  const [active, setActive] = useState(types && types[0].title)

  return (
    <div className={clsx('tasks-page pr-6', burger ? 'pl-0 1400px:pl-69  2xl:pl-69' : 'pl-0 1400px:pl-20')}>
      <div className='flex items-center justify-between w-full pl-10 h-28 pr-10'>
        <h1 className='namepage relative top-3'>Tasks</h1>
        <div className='flex relative left-16'>
          <div className='flex flex-col items-center'>
            <p className='text-xs text-second-gray'>Manager</p>
            <img src={mainavatar} alt='avatar' className='w-8 h-8' />
          </div>
          <div className='flex flex-col ml-5'>
            <p className='text-xs text-second-gray'>Members</p>
            <div className='flex -space-x-2 items-center'>
              {[0, 1, 2, 3].map((key) => {
                return key !== 3 ? (
                  <img
                    key={key}
                    className='inline-block h-9 w-9 rounded-full ring-2 ring-white'
                    src={mainavatar}
                    alt=''
                  />
                ) : (
                  <div className='flex items-center justify-center bg-green-200 text-sm h-9 w-9 rounded-full ring-2 ring-white'>
                    +18
                  </div>
                )
              })}
            </div>
          </div>
          <div className='flex flex-col ml-5'>
            <p className='text-xs text-second-gray'>Team/Board</p>
            <div className='flex mt-1.5 cursor-pointer'>
              <img src={bloom} alt='bloom' className='mr-2' />
              Pyp Team
              <img src={miniarrow} alt='lol' className='ml-2' />
            </div>
          </div>
        </div>
      </div>
      <div className='flex items-center justify-between w-full pl-10 pr-10'>
        <div className='flex' style={{ width: '55rem' }}>
          {types.map((type) => (
            <button
              key={type.title}
              onClick={() => setActive(type.title)}
              className={clsx('tasks-page-tab', type.title === active && 'tasks-page-tab_active')}
            >
              <img src={type.svg} className='mr-2' />
              {type.title}
            </button>
          ))}
        </div>
        <div className='flex relative bottom-2 left-14 2xl:left-32' style={{ width: 400 }}>
          <img src={search} className='mr-2' />
          <input placeholder='Search' className='w-20' />
          <div className='flex relative text-second-gray cursor-pointer'>
            <img src={sort} className='mr-1 2xl:mr-2 w-5 h-5 2xl:w-7 2xl:h-7 relative top-1 2xl:top-0 2xl:bottom-0.5' />
            <p className='relative top-0.5'>Sort</p>
          </div>
          <div className='button-chuka'>
            <img src={filter} className='ml-2 mr-3' />
            <p className='w-24'>Filter / 1</p>
            <img src={ar} className='ml-2' />
          </div>
        </div>
      </div>
      <div className='flex pl-14 pr-4 mt-10 w-full justify-between' style={{ color: 'rgba(99, 115, 129, 0.6)' }}>
        <div className='flex items-center text-xs' style={{ width: 296 }}>
          <img src={headplus} className='mr-3' />
          Task Name
        </div>
        <p className='flex'>Status</p>
        <p className='flex relative right-3'>Owner</p>
        <p className='flex relative right-1'>Dates</p>
        <p className='flex'>Time / Work Estimate</p>
        <p className='flex relative right-5'>Goals or KRI</p>
        <p className='flex relative right-5'>Dependency</p>
      </div>
      <DragDrop />
    </div>
  )
}
