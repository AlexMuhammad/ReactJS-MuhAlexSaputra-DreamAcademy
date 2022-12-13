import React, { useEffect, useState } from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import TableBody from "./components/TableBody";

function App() {
  const [todoList, setTodolist] = useState(() => {
    const savedTodos = localStorage.getItem("todoList");
    if (savedTodos) {
      return JSON.parse(savedTodos);
    } else {
      return [];
    }
  });
  const [newTodo, setNewTodo] = useState("");
  const [checked, setChecked] = useState(false);
  const [editTodo, setEditTodo] = useState(null)

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList))
  }, [todoList])

  const submitHandler = (e) => {
    e.preventDefault();
    if (!newTodo) return;
    inputHandler(newTodo);
    checkboxHandler(checked);
    setNewTodo("");
  }
  
  const inputHandler = () => {
    const id = Math.floor(Math.random() * 100);
    const newTodos = [
      ...todoList,
      {
        id: id,
        activity: newTodo,
        isComplete: checked,
      },
    ];
    setTodolist(newTodos);
  };
  const checkboxHandler = () => {
    const newCheck = {
      isComplete: true,
    };
    setChecked(newCheck);
  };
  const deleteHandler = (id) => {
    console.log(id);
    setTodolist(todoList.filter((task) => task.id !== id));
  };
  // const editHandler = (id) => {
  //   const updateTodo = todoList.find((uTodo) => {
  //     return uTodo.id === id;
  //   })
  //   currentTodo = updateTodo
  //   // setCurrentTodo(currentTodo === updateTodo.activity ? )
  // }
  return (
    <React.Fragment>
      <div className="">
        <Header />
      </div>
      <div className="mt-10">
        <Form submitHandler={submitHandler} setNewTodo={setNewTodo} newTodo={newTodo} setChecked={setChecked} editTodo={editTodo} setEditTodo={setEditTodo} />
      </div>
      <div className="mt-10">
        <TableBody todoList={todoList} setTodolist={setTodolist} deleteHandler={deleteHandler} setEditTodo={setEditTodo} />
      </div>
    </React.Fragment>
  );
}

export default App;
