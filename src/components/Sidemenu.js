import { useState } from "react"
import "../css/sidebar.css"
export default function Sidemenu({ setTaskName, setTaskDescription }) {
  const [close, setClose] = useState("sidemenuright")
  const [input, setInput] = useState("");
  const [description, setDescription] = useState("");

  const handleInput = (e) => {
    setInput(e.target.value);
  }

  const handleDescinput = (e) => {
    setDescription(e.target.value);
  }

  const changeName = () => {
    setTaskName(input)
    setTaskDescription(description)
  }

  const closeBtn = () => {
    setClose("imgclose")
  }

  return (
    <div className={close}>
      <div className="topbar">
        <img width="30" height="30" onClick={closeBtn} src="https://img.icons8.com/ios/50/FFFFFF/long-arrow-right--v1.png" alt="long-arrow-right--v1" title="Expand" />
        <span>Edit Todo</span>
      </div>
      <div className="addinputs">
        <input type="text" name="text" id="text" onChange={handleInput} value={input} placeholder="Carrot" />
        {/* {input===""&&<h4 color="red">Task empty</h4>} */}
        <textarea value={description} onChange={handleDescinput} name="textarea" id="textarea" cols="30" rows="10" placeholder="Carrot improves eyesight." />
        {/* {description===""&&<h4 color="red">Description empty</h4>} */}
        <button type="submit" onClick={changeName}>Save</button>
      </div>
    </div>
  )
}
