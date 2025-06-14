import { useState } from "react"
import {v4 as uuidv4} from "uuid";

export default function TodoList(){
    let[todos , setTodos] = useState([{task :"sample task" , id: uuidv4(),isDone: false}]);
    let [newTodo , setNewTodo] = useState("");

    let addNewTask = ()=>{
        setTodos((prevTodo)=>{
         return   [...prevTodo , {task : newTodo , id: uuidv4(),isDone:false}]
        });
        setNewTodo("");
    };

    let updateTodoValue = (event)=>{
        setNewTodo(event.target.value);
    } 

    let deleteTodo = (id)=>{
    setTodos((prevTodo) => prevTodo.filter((todo) => todo.id != id));
    }
    
    let markAsAllDone = ()=>{
     setTodos((prevTodo) => prevTodo.map((todo)=>{
        return {
            ...todo,
          isDone:true
        }
      }));
    };

    let  marskAsDone= (id)=>{
         setTodos((prevTodo) => prevTodo.map((todo)=>{
            if(todo.id == id){
        return {
            ...todo,
            isDone: true
        }
    }else{
        return todo;
    }
      }));
    };

    return(
        <div>
            <input type="text" name="" id="" placeholder="Add a task" onChange={updateTodoValue}/><br />
            <button onClick={addNewTask}>Add task</button>
            <br />
            <br />
            <br />
            <br />

             <hr />
            <h4>Task Todos</h4>
            <ul>
                {
                todos.map((todo)=>(
                    <li key={todo.id}>
                       <span style={todo.isDone ? {textDecorationLine: "line-through" }: {}}> {todo.task} </span>
                       &nbsp;&nbsp;
                       <button onClick={()=> deleteTodo(todo.id)}>Delete</button>
                       &nbsp;&nbsp;
                       <button onClick={()=> markAsAllDone(todo.id)}>Mark As Done</button>
                    </li>

                ))
                }
            </ul>
            <button onClick={markAsAllDone}>Mark as Done</button>
        </div>
    )
}