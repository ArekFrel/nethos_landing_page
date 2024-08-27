import "./slider-styles.css";
import { useState } from "react";
import { CLIENTS, clientsNum } from "./satisfiedClients";

export function ClientSlider() {
  const [dotVal, setDotVal] = useState(1);
  const [offset, setOffset] = useState(0)

  const arrowLeftHandler = () => { 
    if (dotVal === 1 ) {
      setDotVal(clientsNum)
      setOffset(-500 * (clientsNum - 1))
      return
    } else setDotVal((prevDotVal) =>  prevDotVal - 1)
    setOffset((prevOffset) => prevOffset + 500)
  };

  const arrowRightHandler = () => { 
    if (dotVal === clientsNum ) {
      setDotVal(1)
      setOffset(0)
      return
    } else setDotVal((prevDotVal) =>  prevDotVal + 1)
    setOffset((prevOffset) => prevOffset - 500)
  };

  const arrowToLeft = '<<'
  const arrowToRight = '>>'


  return (
    <div className="slider-main">
    <div className="slider-area">
      <div style={{ left: offset, position: 'relative', transition: 'left 0.6s ease'}}>
      <div className="slider-pictures" 
      >
        {CLIENTS.map((client) => {
          return <div>
            <img src={client.pic} alt="" />
          </div>
        })}
      </div>
      </div>
      <div className="dot-container">
      <button className='slider-button' onClick={arrowLeftHandler}> {arrowToLeft} </button>
      {CLIENTS.map((client) => {
        const clientClassName = () => {
          if (dotVal === client.id) {
            return "dot-bolded";
          } else {
            return "dot-slim";
          }
        };
        return <div className={clientClassName()}></div>;
      })}
      <button className='slider-button' onClick={arrowRightHandler}> {arrowToRight} </button>
      </div>
    </div>
    </div>
  );
}
