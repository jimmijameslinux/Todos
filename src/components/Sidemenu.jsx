import { useEffect, useState } from "react"
import "../css/sidebar.css"
export default function Sidemenu({ todoList,selectedListIndex,selectedItemIndex, setTodoList, todoItem, setTodoItem,setTaskName, close, setClose, btnClicked, setTodoName }) {
  // const [close, setClose] = useState("sidemenuright")
  const [input, setInput] = useState("");
  const [input_new, setInputNew] = useState("");
  const [input_new_edit, setInputNewEdit] = useState("");
  const [taskDescription,setTaskDescription]=useState("")
  const [taskDescription_new,setTaskDescriptionnew]=useState("")

  // /////////////////////////
  useEffect(() => {
    // Load todoList from localStorage
    const storedTodoList = localStorage.getItem("todoList");
    // Load todoItem from localStorage
    const storedTodoItem = localStorage.getItem("todoItem");

    if (storedTodoList) {
      setTodoList(JSON.parse(storedTodoList));
    }

    if (storedTodoItem) {
      setTodoItem(JSON.parse(storedTodoItem));
    }
  }, [setTodoList, setTodoItem]);

  useEffect(() => {
    // Save todoList to localStorage
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);

  useEffect(() => {
    // Save todoItem to localStorage
    localStorage.setItem("todoItem", JSON.stringify(todoItem));
  }, [todoItem]);

  const handleInput = (e) => {
    setInput(e.target.value);
  }

  const handleInput2 = (e) => {
    setInputNew(e.target.value);
  }

  const handleInput3 = (e) => {
    setInputNewEdit(e.target.value);
  }

  const handleDescinput = (e) => {
    setTaskDescription(e.target.value);
  }

  const handleDescinput2 = (e) => {
    setTaskDescriptionnew(e.target.value);
  }

  const AddTodoName = () => {
    setTaskName(input)
    setInput("");
    input!==""&&
    setTodoList([...todoList, input])
    setTodoItem([...todoItem, []]);
    
    // setTodoList(updatedTodoList);
  
  }

  const AddTodoItemName = () => {
    setTodoName(input_new)
    setInputNew("");
    setTaskDescription("");
    
    if (btnClicked === 2 && selectedListIndex !== null) {
      const input_desc = {
        input:input_new,
        desc:taskDescription,
      }
      const updatedTodoItem = [...todoItem]; // Create a copy of todoItem array
      updatedTodoItem[selectedListIndex] = [...updatedTodoItem[selectedListIndex], input_desc]; // Add new todoitem to the corresponding todolist
      input_new!==""&&setTodoItem(updatedTodoItem); // Update todoItem array with the modified todoitem
    }
  }

  const UpdateTodoItemName = () => {
    setTodoName(input_new_edit)
    setInputNewEdit("");
    setTaskDescriptionnew("");
    
    if (btnClicked === 3 && selectedItemIndex !== null && selectedListIndex !== null) {
      const input_desc = {
        input:input_new_edit,
        desc:taskDescription_new,
      }
      const updatedTodoItem = [...todoItem]; // Create a copy of todoItem array
      updatedTodoItem[selectedListIndex][selectedItemIndex] = input_desc; // Add new todoitem to the corresponding todolist
      input_new!==""&&setTodoItem(updatedTodoItem); // Update todoItem array with the modified todoitem
    }
  }

  const closeBtn = () => {
    setClose("imgclose")
  }

  return (
    <div className={close}>
      <div className="topbar">
        <img width="30" height="30" onClick={closeBtn} src="https://img.icons8.com/ios/50/FFFFFF/long-arrow-right--v1.png" alt="long-arrow-right--v1" title="Expand" />
        {
          btnClicked === 1 ?
            <span>Add Todo-list</span>
            :
          btnClicked ===2?
            <span>Add Todo-item</span>
            :
          btnClicked ===3&&
          <span>Edit Todo-item</span>

        }
      </div>
      <div className="addinputs">
        {
          btnClicked === 1 ?
            <>
              <input type="text" name="text" id="text" onChange={handleInput} value={input} placeholder="Carrot" />
              <button className="save" type="submit" onClick={AddTodoName}>Save</button>
            </>
            :
            btnClicked ===2?
            <>
              <input type="text" name="text" id="text" onChange={handleInput2} value={input_new} placeholder="Carrot" />
              <textarea value={taskDescription} onChange={handleDescinput} name="textarea" id="textarea" cols="30" rows="10" placeholder="Carrot improves eyesight." />
              <button className="save" type="submit" onClick={AddTodoItemName}>Save</button>
            </>
            :
            btnClicked ===3&&
            <>
              <input type="text" name="text" id="text" onChange={handleInput3} value={input_new_edit} placeholder="Carrot" />
              <textarea value={taskDescription_new} onChange={handleDescinput2} name="textarea" id="textarea" cols="30" rows="10" placeholder="Carrot improves eyesight." />
              <button className="save" type="submit" onClick={UpdateTodoItemName}>Save</button>
            </>
        }
      </div>
    </div>
  )
}