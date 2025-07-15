import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({data}) => {
  return (
    <div id='taskList' className='h-[55%] overflow-x-auto w-full py-5 mt-10 flex items-center justify-start gap-5'>
      {/* <AcceptTask/>
      <NewTask/>
      <CompleteTask/>
      <FailedTask/> */}
      {data.tasks.map((e,idx)=>{
        if(e.active){
          return <AcceptTask key={idx} data={e}/>
        }
        else if(e.newTask){
          return <NewTask key={idx} data={e}/>
        }
        else if(e.completed){
          return <CompleteTask key={idx} data={e}/>
        }
        else if(e.failed){
          return <FailedTask key={idx} data={e}/>
        }
      })}
    </div>
  )
}

export default TaskList
