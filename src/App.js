import React, {useState} from "react";
// import EditForm from "./components/EditForm";
import "./App.css";

const App = () => {
  const [todoList, setTodoList] = useState([]);

  const [state, setState] = useState("");
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");

  const onClickAdd = (e) => {
    let uuid = crypto.randomUUID();
    e.preventDefault();
    setTodoList([...todoList, {id:uuid,state:"未着手",title:title,detail:detail}]);    
    setTitle("");
    setDetail("");
  }

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  }
  const handleDetailChange = (e) => {
    setDetail(e.target.value);
  }

  const onClickDelete = (id) => {
    const removedList = todoList.filter((todo) => {
      return todo.id !== id;
    })
    setTodoList(removedList);
  }

  // プルダウンのための
  // const states = [
  //   {value:"未着手",label:"未着手"},
  //   {value:"着手",label:"着手"},
  //   {value:"完了",label:"完了"},
  // ]

  
  return(
    <div className="App">
      <h1>Todo App</h1>
      <div className="input-area">
      <input 
        name="addTitle" 
        type="text" 
        placeholder="タイトル" 
        value={title}
        onChange={handleTitleChange}
      /> 
      <input 
        name="addDetail" 
        type="text" 
        placeholder="詳細"
        value={detail}
        onChange={handleDetailChange}
        /> 
        <button onClick={onClickAdd}>Add</button>
      </div>


{/* 編集の時に表示されるところ */}
      {/* <EditForm /> */}

{/* ↓普段表示されるところ */}
<div className="todo-area">
        <ul>
          {todoList.map((todo) => {
            return(
              <li className="todo-item" key={todo.id}>
                <select>
                  <option value="未着手">未着手</option>
                  <option value="着手">着手</option>
                  <option value="完了">完了</option>
                </select>
                <p>{todo.title}</p>
                <p>{todo.detail}</p>
                <button>Edit</button>
                <button onClick={() => onClickDelete(todo.id)}>Delete</button>
              </li>
            )
          })}


        </ul>
      </div>



    </div>
  );
}

export default App;