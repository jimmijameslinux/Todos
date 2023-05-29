import Edittodo from "./Edittodo"
import "../css/main.css"

export default function Main({ classchanged, name, value, taskName, taskDescription }) {
  return (
    <div className={classchanged === "sidebarnavchange" ? "currenttabchange" : "currenttab"}>
      <span className="animate" title={name}>{name}</span>
      <hr style={{ position: "absolute", border: "none", height: ".2rem", width: "100%", backgroundColor: "#242731" }} />
      {
        value === "homevalue" ?
          <>
            <p>home</p>
            {/* {
              taskName === "" ? null :
                  <p>{taskName}</p>
            }

            {
              taskDescription === "" ? null :
                  <p>{taskDescription}</p>
            } */}
          </>
          :
          value === "sessionvalue" ?
            <Edittodo taskName={taskName} taskDescription={taskDescription} />
            :
            <h1>Waiting for new tab</h1>
      }
    </div>
  )
}
