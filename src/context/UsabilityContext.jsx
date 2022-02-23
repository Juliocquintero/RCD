import React, { useEffect, useRef, useState } from "react";
import { createContext } from "react";

const UsabilityContext = createContext();

const UsabilityProvider = ({ children }) => {
  const [squares, setSquares] = useState([]);
  const [draw, setDraw] = useState(null);

  const [disabledCanvas, setDisabledCanvas] = useState(true);
  const [openDrawTools, setOpenDrawTools] = useState(false);
  const [colorDraw, setColorDraw] = useState("#575757");
  const colorMarker = "#FFFF0050";

  const [habiliteDraw, setHabiliteDraw] = useState(false);
  const [habiliteMarker, setHabiliteMarker] = useState(false);
  const [brushWidth, setBrushWidth] = useState(5);
  const firstCanvas = useRef(null);

  useEffect(() => {
    const oldDraw = localStorage.getItem("Draw");
    if (oldDraw) firstCanvas.current.loadSaveData(oldDraw);
    const bdSquares = JSON.parse(localStorage.getItem("squares"));

    setSquares(bdSquares || []);
  }, []);

  //DrawTools
  const habiliteDrawing = () => {
    setDisabledCanvas(!disabledCanvas);
    setOpenDrawTools(!openDrawTools);
    setHabiliteDraw(!habiliteDraw);
    setHabiliteMarker(false);
  };

  const handleHabiliteMarker = () => {
    if (disabledCanvas) setDisabledCanvas(!disabledCanvas);
    setOpenDrawTools(false);
    setHabiliteMarker(true);
    setHabiliteDraw(false);
  };

  const undo = () => {
    firstCanvas.current.undo();
  };
  const clear = () => {
    firstCanvas.current.clear();
  };
  const save = () => {
    const newPic = firstCanvas.current.getSaveData();
    setDraw(newPic);
    // secondCanvas.current.loadSaveData(newPic, true);
    localStorage.setItem("Draw", newPic);
  };

  const handleColor = (color) => {
    // e.preventDefault();
    setColorDraw(color);
    setDisabledCanvas(false);
    setHabiliteDraw(true);
    setHabiliteMarker(false);
    setOpenDrawTools(!openDrawTools);
  };

  const handleBrushWidth = (e) => {
    const newWidth = Number(e.target.value);
    setBrushWidth(newWidth);
  };

  const handleDrawTools = () => {
    setOpenDrawTools(!openDrawTools);
    if (disabledCanvas) setDisabledCanvas(true);
  };
  const addNewSquare = () => {
    const newSquare = {
      id: Date.now(),
      position: {
        x: 50,
        y: 50,
      },
      size: {
        height: "150px",
        width: "150px",
        x: 424,
        y: 140,
      },
      text: "",
    };
    const newList = [...squares, newSquare];
    setSquares(newList);
  };
  const handleMoveOneSquare = (id, data) => {
    let newList = squares.map((item) => {
      return item.id === id
        ? {
            ...item,
            position: data,
          }
        : item;
    });

    setSquares(newList);
  };

  const removeOneFromList = (id) => {
    const newList = squares.filter((item) => item.id !== id);
    setSquares(newList);
  };
  const handleResizeSquare = (id, data) => {
    let newList = squares.map((item) => {
      return item.id === id
        ? {
            ...item,
            size: data,
          }
        : item;
    });
    setSquares(newList);
  };

  const handleTextOneSquare = (id, text) => {
    let newList = squares.map((item) => {
      return item.id === id
        ? {
            ...item,
            text: text,
          }
        : item;
    });

    setSquares(newList);
  };

  const handleSave = () => {
    localStorage.setItem("squares", JSON.stringify(squares));
    save();
  };

  const handleErase = () => {
    let confirm = window.confirm("Are you sure?");
    if (confirm) {
      setSquares([]);
      localStorage.setItem("squares", JSON.stringify([]));
      clear();
    }
  };

  const data = {
    firstCanvas,
    habiliteDraw,
    habiliteDrawing,
    disabledCanvas,
    undo,
    colorDraw,
    colorMarker,
    brushWidth,
    handleBrushWidth,
    handleColor,
    habiliteMarker,
    handleHabiliteMarker,
    squares,
    addNewSquare,
    handleMoveOneSquare,
    handleResizeSquare,
    handleTextOneSquare,
    removeOneFromList,
    handleSave,
    handleErase,
    openDrawTools,
    handleDrawTools,
  };
  return <UsabilityContext.Provider value={data}>{children}</UsabilityContext.Provider>;
};

export { UsabilityProvider };

export default UsabilityContext;
