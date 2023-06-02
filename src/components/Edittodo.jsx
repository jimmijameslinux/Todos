import "../css/edit.css";
import { AppContext } from "./Navbar";
import { useContext } from "react";

export default function Edittodo() {
  const { taskName, setSelectedItemIndex, setSelectedListIndex, setTodoName, todoList, todoItem, setClose, setBtnClicked, btnClicked } = useContext(AppContext);

  const addList = () => {
    setClose("sidemenuright");
    setBtnClicked(1);
  };

  const addTodo = (listIndex) => {
    setClose("sidemenuright");
    setBtnClicked(2);
    setTodoName(todoList[listIndex])
    setSelectedListIndex(listIndex);
  };

  const editList = (itemIndex) => {
    setBtnClicked(3);
    setSelectedItemIndex(itemIndex)
  }

  return (
    <div className="edittodoclass" style={{ color: "white", display: "flex", position: "relative", top: "1rem", minWidth: "28rem" }}>
      <div className="addlist">
        <span>Add Todo-List</span>
        <button onClick={addList}>&#43;</button>
      </div>
      {btnClicked === 1 || btnClicked === 2 || btnClicked === 3 ? (
        <>
          {todoList === "" ? null : (
            <>
              {todoList.map((list, index) => (
                <div key={index} className="listtodo">
                  <div className="list">
                    <span>List: {list}</span>
                  </div>
                  {Array.isArray(todoItem[index]) && todoItem[index].map((item, ix) => (
                    <div key={ix} className="todo">
                      <div className="moneyimg">
                        <img width="24" height="24" src="https://img.icons8.com/external-kosonicon-solid-kosonicon/48/FFFFFF/external-money-sack-money-and-payment-kosonicon-solid-kosonicon.png" alt="external-money-sack-money-and-payment-kosonicon-solid-kosonicon" />
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", marginLeft: "-2.8rem" }}>
                        <span>{item.input}</span>
                        <span>{item.desc}</span>
                      </div>
                      {/* <button>&#43;</button> */}
                      <div>
                        <img onClick={() => editList(ix)} width="30" height="30" src="https://img.icons8.com/glyph-neue/64/FFFFFF/pencil--v1.png" alt="pencil--v1" />
                      </div>
                    </div>
                  ))}
                  <div className="addtodo">
                    <div className="moneyimg">
                      <img width="24" height="24" src="https://img.icons8.com/external-kosonicon-solid-kosonicon/48/FFFFFF/external-money-sack-money-and-payment-kosonicon-solid-kosonicon.png" alt="external-money-sack-money-and-payment-kosonicon-solid-kosonicon" />
                    </div>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <span >Add Todo</span>
                      <span>Add Todo Description</span>
                    </div>
                    <button onClick={() => addTodo(index)}>&#43;</button>
                  </div>
                </div>
              ))}
            </>
          )}
        </>
      ) : (
        <>
          {taskName === "" ? null : <p>{taskName}</p>}
        </>
      )}
    </div>
  );
}