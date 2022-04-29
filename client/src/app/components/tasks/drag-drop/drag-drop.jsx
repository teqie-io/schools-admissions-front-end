import React, { useState } from 'react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import ReactTooltip from 'react-tooltip'
import PropTypes from 'prop-types'

import Timer from './timer.jsx'
import { done, msg, eclips, activeimg } from '../../../pages/tasks/image'
import { mainavatar } from '../../../static/image'

const dragContext = [
  {
    id: 'one',
    done: false,
    num: 20,
    date: '20th Jan - 10th Feb ',
    color: '#008060',
    time: 10
  },
  {
    id: 'two',
    done: true,
    num: 50,
    date: '25th Oct - 30th Oct ',
    color: '#EB5757',
    time: 0
  },
  {
    id: 'three',
    done: true,
    num: 30,
    date: '10th Sep - 30th Oct ',
    color: '#008060',
    time: 30
  }
]

export default function DragDrop() {
  const [tasks, updatetasks] = useState(dragContext)

  function handleOnDragEnd(result) {
    if (!result.destination) return

    const items = Array.from(tasks)
    const [reorderedItem] = items.splice(result.source.index, 1)
    items.splice(result.destination.index, 0, reorderedItem)

    updatetasks(items)
  }

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId='tasks'>
        {(provided) => (
          <ul className='tasks pl-10 w-full' {...provided.droppableProps} ref={provided.innerRef}>
            {tasks.map((item, index) => {
              return (
                <Draggable key={item.id} draggableId={item.id} index={index}>
                  {(provided) => (
                    <li
                      className='flex items-center justify-between pr-4 pl-4 mt-10 border rounded-lg w-full h-14 bg-white overflow-hidden'
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <ReactTooltip id='main' place='top' type='dark' effect='float' multiline={true} />
                      <div className='flex items-center'>
                        <button className='mr-4'>
                          <img src={eclips} className='w-4 h-4' />
                        </button>
                        <img src={item.done === true ? done : activeimg} className='w-5 h-5 mr-2.5' />
                        <p
                          className='text-second-gray w-52 mr-2.5 text-sm whitespace-pre overflow-hidden overflow-ellipsis'
                          data-for='main'
                          data-tip='Complete Designs for all Screens'
                          data-iscapture='true'
                        >
                          Complete Designs for all Screens
                        </p>
                        <button>
                          <img src={msg} className='w-4 h-4' />
                        </button>
                      </div>
                      <div className='flex items-center' data-for='main' data-tip='In Progress' data-iscapture='true'>
                        <div className='h-2 w-2 2xl:w-1 2xl:h-1 rounded-full bg-yellow-600 mr-3' />
                        <p className=''>In Progress</p>
                      </div>
                      <div className='flex justify-center'>
                        <img src={mainavatar} className='w-8 h-8' />
                      </div>
                      <div className='flex flex-col items-center'>
                        <p className='text-second-gray text-sm'>{item.date}</p>
                        <div
                          className='rounded-lg border w-140 mb-1'
                          style={{
                            height: '0.438rem',
                            background: `linear-gradient(to right, #27C59A ${item.num}%, #fff ${item.num - 10}%)`
                          }}
                        />
                      </div>
                      <Timer sec={item.time} />
                      <div
                        className='border rounded-md flex items-center justify-center'
                        style={{ height: '1.5rem', borderColor: item.color }}
                      >
                        <p
                          className='text-xs whitespace-pre pr-2 pl-2 overflow-hidden overflow-ellipsis'
                          style={{ color: item.color }}
                        >
                          Better Experience
                        </p>
                      </div>
                      <div
                        className='w-32'
                        data-for='main'
                        data-tip='Requirment Documents...<br />Due on 20thOct'
                        data-iscapture='true'
                      >
                        <p className='text-xs whitespace-pre overflow-hidden overflow-ellipsis'>Requirment Documents</p>
                        <p className='text-sm' style={{ color: 'rgba(99, 115, 129, 0.6)' }}>
                          Due on <span style={{ color: '#27C59A' }}>20th Oct</span>
                        </p>
                      </div>
                    </li>
                  )}
                </Draggable>
              )
            })}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
    </DragDropContext>
  )
}

DragDrop.propTypes = {
  /**  @param Type An array of objects.
   * @param Object Keys for objects - id: string, done: boolean, num: number, date: string, color: string, time: number
   * @param Example [
  {
    id: 'one',
    done: false,
    num: 20,
    date: '20th Jan - 10th Feb ',
    color: '#008060',
    time: 10
  },
  {
    id: 'two',
    done: true,
    num: 50,
    date: '25th Oct - 30th Oct ',
    color: '#EB5757',
    time: 0
  },
  {
    id: 'three',
    done: true,
    num: 30,
    date: '10th Sep - 30th Oct ',
    color: '#008060',
    time: 30
  }
]
   *
   *
   **/
  data: PropTypes.array
}
