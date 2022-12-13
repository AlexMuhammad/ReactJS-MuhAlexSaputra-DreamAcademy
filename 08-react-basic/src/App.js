import React, { useEffect, useState } from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import TableBody from "./components/TableBody";

function App() {
  const [todoList, setTodolist] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [checked, setChecked] = useState(false);
  const [isForEdit, setIsForEdit] = useState(false)
  const [editId, setEditId] = useState("")

  // useEffect(() => {
  //   localStorage.setItem("todoList", JSON.stringify(todoList))
  // }, [todoList])

  const submitHandler = (e) => {
    e.preventDefault();
    if (isForEdit) {
      const index = todoList.findIndex((todo) => {
        return todo.id === editId;
      })
      const copyTodolist = todoList;
      copyTodolist[index] = { id: editId, activity: newTodo, isComplete: checked }
      setTodolist(copyTodolist);
    } else {
      if (!newTodo) return;
      inputHandler(newTodo);
      setNewTodo("");
    }
  }

  // useEffect(() => {
  //   console.log(todoList);
  // }, [todoList])

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
  const deleteHandler = (id) => {
    console.log(id);
    setTodolist(todoList.filter((task) => task.id !== id));
  };
  const editHandler = (id) => {
    const updateTodo = todoList.find((uTodo) => {
      return uTodo.id === id;
    })
    setIsForEdit(true)
    setNewTodo(updateTodo.activity);
    setChecked(updateTodo.isComplete);
    setEditId(id)
  }
  return (
    <React.Fragment>
      <div className="">
        <Header />
      </div>
      <div className="mt-10">
        <Form submitHandler={submitHandler} setNewTodo={setNewTodo} newTodo={newTodo} setChecked={setChecked} checked={checked} />
      </div>
      <div className="mt-10">
        <TableBody todoList={todoList} setTodolist={setTodolist} deleteHandler={deleteHandler} editHandler={editHandler} />
      </div>
    </React.Fragment>
  );
}

export default App;
