export default function Edittodo({taskName, taskDescription }) {
  return (
    <div style={{color:"white"}}>
      <p>Session</p>
            {
              taskName === "" ? null :
                  <p>{taskName}</p>
            }

            {
              taskDescription === "" ? null :
                  <p>{taskDescription}</p>
            }
      </div>
  )
}
