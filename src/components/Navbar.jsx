import { BrowserRouter as Router, Routes, Route, NavLink,useLocation, Navigate } from "react-router-dom";
import Main from "./Main";
import "../css/navbar.css";
import { useState} from "react";
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


export default function Navbar() {
  const [Style, setStyle] = useState("sidebarnav")
  const [taskName,setTaskName] = useState("")
  const [taskDescription,setTaskDescription] = useState("")
  const changeWidth = (change) => {
    setStyle(change)
  };
  return (
    <div className="side">
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
                title="Session"
                to="/session"
                iconActive="https://img.icons8.com/ios-glyphs/30/FFFFFF/share--v1.png"
                iconInactive="https://img.icons8.com/ios-glyphs/30/808191/share--v1.png"
                label="Session"
              />
            </li>
          </ul>
        </div>
        <Routes>
          <Route path="/" element={<Main name={"Home"} value={"homevalue"} classchanged={Style} />} />
          <Route path="/session" element={<Main taskDescription={taskDescription} taskName={taskName} name={"Session"} value={"sessionvalue"} classchanged={Style} />} />
          <Route path="*" element={<Navigate to="/"/>} />
          {/* <Route path="/session" element={<Edittodo />} /> */}
        </Routes>
      </Router>
        <Sidemenu setTaskDescription={setTaskDescription} setTaskName={setTaskName}/>
    </div>
  );
}
