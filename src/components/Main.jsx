import Edittodo from "./Edittodo"
import "../css/main.css"

export default function Main({ classchanged, name, value}) {
  return (
    <div className={classchanged === "sidebarnavchange" ? "currenttabchange" : "currenttab"}>
      <span className="animate" title={name}>{name}</span>
      <hr style={{ position: "absolute", border: "none", height: ".2rem", width: "100%", backgroundColor: "#242731" }} />
      {
        value === "homevalue" ?
          <>
            <p>home</p>
          </>
          :
          value === "sectionvalue" ?
            <Edittodo />
            :
            <h1>Waiting for new tab</h1>
      }
    </div>
  )
}
