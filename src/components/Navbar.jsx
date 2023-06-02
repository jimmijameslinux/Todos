import { BrowserRouter as Router, Routes, Route, NavLink, useLocation, Navigate } from "react-router-dom";
import Main from "./Main";
import "../css/navbar.css";
import { useState } from "react";
import { createContext } from "react";
import Sidemenu from "./Sidemenu";

const LocationAwareNavLink = ({ title, to, iconActive, iconInactive, label }) => {
  const location = useLocation();
  return (
    <NavLink
      title={title}
      to={to}
      style={({ isActive }) => {
        return isActive ? { color: "white", backgroundColor: "#353945" } : {};
      }}
    >
      <img width="24" height="24" src={location.pathname === to ? iconActive : iconInactive} alt={title} />
      <span className="navitem">{label}</span>
    </NavLink>
  );
};

export const AppContext = createContext();
export default function Navbar() {
  const [Style, setStyle] = useState("sidebarnav")
  const [taskName, setTaskName] = useState("")
  const [todoName, setTodoName] = useState("")
  const [taskDescription, setTaskDescription] = useState("")
  const [close, setClose] = useState("imgclose")
  const [btnClicked, setBtnClicked] = useState(0);
  const [todoList, setTodoList] = useState([]);
  const [todoItem, setTodoItem] = useState([]);
  const [selectedListIndex, setSelectedListIndex] = useState(null);
  const [selectedItemIndex, setSelectedItemIndex] = useState(null);

  const changeWidth = (change) => {
    setStyle(change)
  };
  return (
    <div className="side">
      <AppContext.Provider value={{ taskName,setSelectedListIndex, setTodoList,setTodoItem, setSelectedItemIndex, setTodoName, todoList, todoItem, todoName, taskDescription, close, btnClicked, setBtnClicked, setClose, setTaskDescription, setTaskName }}>
        <Router>
          <div className={Style}>
            <div className="account">
              <span id="acclogo" title="Account">N</span>
              <span id="accname">Name</span>
              {
                Style !== "sidebarnavchange" ?
                  <img width="30" height="30" onClick={() => changeWidth("sidebarnavchange")} src="https://img.icons8.com/ios/50/FFFFFF/long-arrow-left.png" alt="arrow-pointing-left--v2"
                    title="Shrink"
                  />
                  :
                  <img width="30" height="30" onClick={() => changeWidth("sidebarnav")} src="https://img.icons8.com/ios/50/FFFFFF/long-arrow-right--v1.png" alt="long-arrow-right--v1"
                    title="Expand"
                  />
              }
            </div>
            <ul>
              <li className="home">
                <LocationAwareNavLink
                  title="Home"
                  to="/"
                  iconActive="https://img.icons8.com/material-outlined/24/FFFFFF/grid-2.png"
                  iconInactive="https://img.icons8.com/material-outlined/24/808191/grid-2.png"
                  label="Home"
                />
              </li>

              <li className="home">
                <LocationAwareNavLink
                  title="Section"
                  to="/section"
                  iconActive="https://img.icons8.com/ios-glyphs/30/FFFFFF/share--v1.png"
                  iconInactive="https://img.icons8.com/ios-glyphs/30/808191/share--v1.png"
                  label="Section"
                />
              </li>
            </ul>
          </div>
          <Routes>
            <Route path="/" element={<Main name={"Home"} value={"homevalue"} classchanged={Style} />} />
            <Route path="/section" element={<Main name={"Section"} value={"sectionvalue"} classchanged={Style} />} />
            <Route path="*" element={<Navigate to="/" />} />
            {/* <Route path="/session" element={<Edittodo />} /> */}
          </Routes>
        </Router>
        <Sidemenu todoList={todoList} selectedItemIndex={selectedItemIndex} selectedListIndex={selectedListIndex} setTodoList={setTodoList} todoItem={todoItem} setTodoItem={setTodoItem} btnClicked={btnClicked} close={close} taskDescription={taskDescription} setClose={setClose} setTaskDescription={setTaskDescription} setTaskName={setTaskName} setTodoName={setTodoName} />
      </AppContext.Provider>
    </div>
  );
}