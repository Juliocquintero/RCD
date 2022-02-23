import { useContext, useState } from "react";
import { Rnd } from "react-rnd";

import MinimizeIcon from "@mui/icons-material/Minimize";
import DeleteIcon from "@mui/icons-material/Delete";
import UsabilityContext from "./context/UsabilityContext";

export const BosSlide = ({ data }) => {
  const { id, size, position } = data;
  const { removeOneFromList, handleMoveOneSquare, handleTextOneSquare, handleResizeSquare } = useContext(UsabilityContext);

  const [minimize, setMinimize] = useState(true);
  const minimizeValues = {
    height: "50px",
    width: "50px",
    x: data.size.x,
    y: data.size.y,
  };

  const styleHeader = {
    display: minimize ? "none" : "grid",
    gridTemplateColumns: "1fr 50px 50px",
    gridTemplateRows: "30px",
    borderTopLeftRadius: "5px",
    borderTopRightRadius: "5px",
    width: "100%",
    backgroundColor: "#ddf6fa",
  };
  const style = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    // border: "solid 1px #fff",
    background: "transparent",
    outline: "none",
    overflow: "hidden",
  };
  const styleTextArea = {
    backgroundColor: "#FEFAF1",
    resize: "none",
    height: "100%",
    width: "100%",
    cursor: "move",
    border: "none",
    padding: "20px",
    color: minimize ? "transparent" : "#000",
    overflow: "hidden",
  };

  const Bar = {
    backgroundColor: "#fff",
  };
  const Button = {
    border: "none",
    backgroundColor: "transparent",
    cursor: "pointer",
  };

  const handleMinimize = () => {
    setMinimize(!minimize);
  };
  const closeWindow = () => {
    setMinimize(false);
  };

  return (
    <Rnd
      style={style}
      // default={{
      //   x: 0,
      //   y: 0,
      //   width: size.width,
      //   height: size.height,
      // }}
      position={position}
      size={minimize ? minimizeValues : size}
      onDragStop={(e, d) => {
        handleMoveOneSquare(id, { x: d.x, y: d.y });
      }}
      onResizeStop={(e, direction, ref, delta, position) => {
        let newSize = {
          width: ref.style.width,
          height: ref.style.height,
          ...position,
        };
        handleResizeSquare(id, newSize);

        // localStorage.setItem(
        //   "size",
        //   JSON.stringify({
        //     width: ref.style.width,
        //     height: ref.style.height,
        //     ...position,
        //   })
        // );
        e.stopPropagation();
      }}
      minHeight={minimize ? "50px" : "100px"}
      minWidth={minimize ? "50px" : "100px"}
      // onResize={resizeevent}

      maxWidth={500}
    >
      <div style={styleHeader}>
        <div id="bar"></div>
        <button onClick={handleMinimize} style={Button}>
          <MinimizeIcon sx={{ color: "#20A698" }} />
        </button>
        <button
          style={Button}
          onClick={() => {
            let confirm = window.confirm("Are you sure?");
            if (confirm) removeOneFromList(id);
          }}
        >
          <DeleteIcon sx={{ color: "#20A698" }} />
        </button>
      </div>
      <textarea
        style={styleTextArea}
        // disabled={minimize}
        onClick={(e) => {
          e.stopPropagation();
          if (minimize) {
            handleMinimize();
          }
        }}
        onMouseUp={(e) => {
          e.stopPropagation();
        }}
        onChange={(e) => {
          const text = e.target.value;
          handleTextOneSquare(id, text);
        }}
        value={data.text}
      ></textarea>
    </Rnd>
  );
};
