import "./App.css";
import CanvasDraw from "react-canvas-draw";
import { useContext, useEffect, useRef, useState } from "react";
import { RealBox } from "./resizable";
import { BosSlide } from "./Rnd";
import ToolBar from "./ToolBar";
import UsabilityContext from "./context/UsabilityContext";

// const props = {
//   onChange: null,
//   loadTimeOffset: 5,
//   lazyRadius: 30,
//   brushRadius: 12,
//   brushColor: "#444",
//   catenaryColor: "#0a0302",
//   gridColor: "rgba(150,150,150,0.17)",
//   hideGrid: true,
//   canvasWidth: 400,
//   canvasHeight: 400,
//   disabled: true,
//   imgSrc: "",
//   saveData: null,
//   immediateLoading: false,
//   hideInterface: false,
//   gridSizeX: 25,
//   gridSizeY: 25,
//   gridLineWidth: 0.5,
//   hideGridX: false,
//   hideGridY: false,
//   enablePanAndZoom: false,
//   mouseZoomFactor: 0.01,
//   zoomExtents: { min: 0.33, max: 3 },
// };
function App() {
  // const secondCanvas = useRef(null);
  // const drawDiv = useRef(null);

  const [showCursor, setShowCursor] = useState(true);

  const vWidth = window.innerWidth;
  const vHeight = window.innerHeight;

  const { squares, firstCanvas, colorDraw, colorMarker, brushWidth, disabledCanvas, habiliteDraw, habiliteMarker } =
    useContext(UsabilityContext);

  // const handleCursor = () => {
  //   setShowCursor(!showCursor);
  // };

  // const handleSize = (e) => {
  //   console.log(e);
  // };
  // const handleSize = () => {
  //   setShowCursor(!showCursor);
  // };

  const handleSelect = (e) => {
    const selection = window.getSelection();
    // const data = getSelectText();
  };

  return (
    <div className="App">
      <header
        className="App-header"
        onClick={(e) => {
          console.log(e);
        }}
      >
        <div>{/* <div style={{ display: "none" }}> */}</div>
        <div style={{ display: "flex" }}>
          <CanvasDraw
            ref={firstCanvas}
            brushColor={habiliteDraw ? colorDraw : colorMarker}
            brushRadius={brushWidth}
            canvasWidth={vWidth}
            canvasHeight={vHeight}
            disabled={disabledCanvas}
            hideGrid={true}
            zoomExtends={0.5}
            style={{
              border: "1px solid black",
              // cursor: handleCursor ? "crosshair" : "auto",
              backgroundColor: "transparent",
            }}
            hideInterface={showCursor}
            enablePanAndZoom={true}
            // mouseZoomFactor={5.5}
          />
        </div>

        <div style={{ backgroundColor: "withe" }}>{/* <Resize /> */}</div>
        {squares.map((cuadro) => (
          <BosSlide data={cuadro} key={cuadro.id} />
        ))}
        <ToolBar />
      </header>
    </div>
  );
}

export default App;
