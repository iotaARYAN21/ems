import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider';
// Note : React's setState is ASYNC -> on using setState to set a new value and then printing the new value of the variable it will print the empty initialised value
// so construct the object directly and use it 
const CreateTask = () => {
    const [taskTitle,setTaskTitle] = useState('');
    const [taskDescription,setTaskDescription] = useState('');
    const [assignTo,setAssignTo] = useState('');
    const [taskDate,setTaskDate] = useState('');
    const [category,setCategory] = useState(''); 
    // const [taskContainer,setTaskContainer] = useState({});
    let taskContainer = {};
    // const authData = useContext(AuthContext);
    const [userData,setUserData] = useContext(AuthContext);
    function submitHandler(e){
        e.preventDefault();
        // setTaskContainer({taskTitle:taskTitle,category:category,taskDate:taskDate,taskDescription:taskDescription,active:false,completed:false,failed:false,newTask:true})
        
        taskContainer = {taskTitle:taskTitle,category:category,taskDate:taskDate,taskDescription:taskDescription,active:false,completed:false,failed:false,newTask:true}

        // console.log(taskTitle,taskDescription,taskDate,assignTo,category);
        // const data = JSON.parse(localStorage.getItem('employees'));
        let data = []
        userData.forEach(function(employee){
            if(assignTo != employee.name){

                data.push(employee)
                console.log(employee.name)
                // employee.tasks.push(taskContainer);  // React does shallow comparisons to detect state changes . if the reference to array not changes , react assumes nothng changed
                // employee.taskCounts.newTask+=1  
                // console.log("Added to => "+employee);
                
            }
            else{
                const updatedEmp = {...employee,tasks:[...employee.tasks,taskContainer],
                    taskCounts:{...employee.taskCounts,newTask:employee.taskCounts.newTask+1}
                }
                data.push(updatedEmp)
            }
        })
        setUserData(data);
        console.log("New Data ",data);
        // localStorage.setItem("employees",JSON.stringify(data))

        // setTaskTitle('')
        // setTaskDescription('')
        // setCategory('')
        // setAssignTo('')
        // setTaskDate('')
        
    }
  return (
    <form onSubmit={(e)=>{submitHandler(e)}}>
        <div className='flex items-center justify-around mt-10 bg-[#1c1c1c] rounded-2xl p-5'>
        <div className='flex w-1/2 flex-col gap-4 p-4 text-xl '>
                <div>
                    <h3>Task Title</h3>
                    <input 
                    value={taskTitle}
                    onChange={(e)=>setTaskTitle(e.target.value)}
                    className='bg-[#1c1c1c] border border-amber-50  rounded placeholder:text-amber-50 p-2 w-[80%]'
                    type="text" placeholder='Make an UI design' />
                </div>
                <div>
                    <h3>Date</h3>
                    <input
                    value={taskDate}
                    onChange={e=>setTaskDate(e.target.value)} 
                    className='bg-[#1c1c1c] border border-amber-50  rounded placeholder:text-amber-50 p-2 w-[80%]'
                    type="date" />
                </div>
                <div>
                    <h3>Assign To</h3>
                    <input 
                    value={assignTo}
                    onChange={e=>setAssignTo(e.target.value)}
                    className='bg-[#1c1c1c] border border-amber-50  rounded placeholder:text-amber-50 p-2 w-[80%]'
                    type="text" placeholder='employee name'/>
                </div>
                <div>
                    <h3>Category</h3>
                    <input 
                    value={category}
                    onChange={e=>setCategory(e.target.value)}
                    className='bg-[#1c1c1c] border border-amber-50  rounded placeholder:text-amber-50 p-2 w-[80%]'
                    type="text" placeholder='Design, Development,etc' />
                </div>
            </div>
            <div className='flex w-1/2 flex-col justify-start text-xl'>
                <div>
                    <h3>Description</h3>
                    <textarea cols={5} rows={8} 
                    value={taskDescription}
                    onChange={e=>setTaskDescription(e.target.value)}
                    className='bg-[#1c1c1c] border border-amber-50  rounded placeholder:text-amber-50 p-2 w-[80%] mb-7'
                    name="" id=""></textarea>
                </div>
                <button className='w-[80%] h-10 rounded text-black bg-green-500 hover:cursor-pointer'>Create Task</button>
            </div>      
    </div>
    </form>
  )
}

export default CreateTask
