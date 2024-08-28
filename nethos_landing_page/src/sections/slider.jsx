import "./slider-styles.css";
import { useState } from "react";
import { CLIENTS, clientsNum, SIZES } from "./satisfiedClients";

export function ClientSlider() {
  const [dotVal, setDotVal] = useState(1);
  const [offset, setOffset] = useState(0);

  const arrowLeftHandler = () => {
    if (dotVal === 1) {
      setDotVal(clientsNum);
      setOffset(-(SIZES.width + SIZES.extraSpace) * (clientsNum - 1));
      return;
    } else setDotVal((prevDotVal) => prevDotVal - 1);
    setOffset((prevOffset) => prevOffset + (SIZES.width + SIZES.extraSpace));
  };

  const arrowRightHandler = () => {
    if (dotVal === clientsNum) {
      setDotVal(1);
      setOffset(0);
      return;
    } else setDotVal((prevDotVal) => prevDotVal + 1);
    setOffset((prevOffset) => prevOffset - (SIZES.width + SIZES.extraSpace));
  };

  const dotHandler = (arg) => {
    setDotVal(arg);
    setOffset(-(SIZES.width + SIZES.extraSpace) * (arg - 1));
  };

  return (
    <div className="slider-main">
      <div className="slider-area">
        <div
          style={{
            left: offset,
            position: "relative",
            transition: "left 0.6s ease",
            width: SIZES.width,
          }}
        >
          <div
            className="slider-pictures"
            style={{
              height: SIZES.height,
              width: SIZES.width,
              "column-gap": SIZES.extraSpace,
            }}
          >
            {CLIENTS.map((client) => {
              return (
                <div>
                  <img
                    style={{ height: SIZES.height, width: SIZES.width }}
                    src={client.pic}
                    alt={client.name + " Logo"}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="dot-container">
        <button className="slider-button" onClick={arrowLeftHandler}>
          {" "}
          prev{" "}
        </button>
        {CLIENTS.map((client) => {
          const clientClassName = () => {
            if (dotVal === client.id) {
              return "dot-bolded";
            } else {
              return "dot-slim";
            }
          };
          return (
            <div
              className={clientClassName()}
              onClick={() => {
                dotHandler(client.id);
              }}
            ></div>
          );
        })}
        <button className="slider-button" onClick={arrowRightHandler}>
          {" "}
          next{" "}
        </button>
      </div>
    </div>
  );
}
