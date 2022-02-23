import { makeStyles } from "@material-ui/core";
import React, { useContext } from "react";
import UsabilityContext from "../context/UsabilityContext";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";
import line from "../assets/Line4.png";
import circulo from "../assets/circulo.png";
import rectangle from "../assets/Rectangle.png";
import pencil from "../assets/Pencil.png";
import erase from "../assets/Erase.png";

const useStyles = makeStyles({
  continueButton: {
    marginLeft: "10%",
    textTransform: "none",
    height: "62px",
    width: "222px",
    background: "#7A54BA",
    boxShadow: "0px 3px 6px #dfdfdf",
    borderRadius: "61px",
    color: "#FFFFFF",
    font: "bold 20px lato ",
    "&:hover": {
      background: "#dd78fb",
    },
  },
  containerDrawerTools: {
    zIndex: 2,
    boxShadow: "0px 3px 4px #0000001A",

    // height: "10%",
    // paddingLeft: "4%",
    background: "#fff",
    // height: "90px",
    position: "absolute",
    top: "-250px",
    width: "214px",
    height: "250px",
    backgroundColor: "#FFFCFC",
    borderTopLeftRadius: "10px",
    borderTopRightRadius: "10px",
    border: "1px solid #EFEFEF",
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    alignContent: "center",
    justifyContent: "space-evenly",
    padding: "20px",
    // "&:before": {
    //   // display: (props) => (props.openMenuInDesktop ? "none" : "flex"),
    //   display: "flex",
    //   zIndex: 1,
    //   textTransform: "none",
    //   justifyContent: "center",
    //   alignItems: "center",
    //   // borderRadius: "25px",
    //   position: "absolute",
    //   content: '""',
    //   height: "16px",
    //   // width: "80px",
    //   // background: (props) => (props.color ? `${props.color} 0% 0% no-repeat padding-box` : "#61728C"),
    //   border: "20px solid",
    //   borderTopColor: "#fff",
    //   borderLeftColor: "transparent",
    //   borderBottomColor: "transparent",
    //   borderRightColor: "transparent",
    //   font: "bold 14px lato",
    //   // border: "25px solid white",

    //   // position: "absolute",
    //   bottom: "-40px",
    //   left: "calc(50% - 20px)",
    // },
  },
  button: {
    width: "100%",
    backgroundColor: "transparent",
    justifyContent: "center",
    border: "none",
    borderBottom: "1.38px solid #EFEFEF",
    display: "flex",
    gap: "20px",
    alignItems: "center",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#8AE9DF50",
    },
  },

  containerButtonColors: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignContent: "center",
    justifyContent: "space-evenly",
  },
  buttonColor: {
    width: "20px",
    height: "20px",
    borderRadius: "50%",
    border: "none",
    outline: "none",
    cursor: "pointer",
  },

  buttonToolBar: {
    margin: "0 20px 0 20px",
    width: "54px",
    height: "54px",
    borderRadius: "15px",
    border: "#EFEFEF 3px solid",
    "&:hover": {
      background: "#8AE9DF",
      border: "#F1CB5A 3px solid",
    },
  },

  Nota: {
    "&:hover": {
      "&:before": {
        textTransform: "none",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        content: '"Agregar notas"',
        textAlign: "center",
        bottom: "60px",
        width: "80px",
        background: "#fff",
        font: "bold 16px lato",
      },
    },
  },
});
const DrawTools = () => {
  const { handleBrushWidth, save, clear, handleColor, openDrawTools, habiliteDrawing } = useContext(UsabilityContext);
  const classes = useStyles();
  const colors = ["#05CFFF", "#FF5C5C", "#FFD240", "#29D686", "#FCA55A", "#9D73E0", "#575757"];
  return (
    <>
      {openDrawTools && (
        <div className={classes.containerDrawerTools}>
          {/* <select name="" id="" onChange={handleBrushWidth}>
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="20">20</option>
      </select> */}

          <button onClick={save} className={classes.button}>
            <img src={line} alt="Linea" />
            Lineas
          </button>

          <button onClick={save} className={classes.button}>
            <img src={rectangle} alt="Cuadros" />
            Cuadro
          </button>

          <button onClick={save} className={classes.button}>
            <img src={circulo} alt="Circulo" />
            Circulos
          </button>

          <button onClick={save} className={classes.button} onClick={habiliteDrawing}>
            <img src={pencil} alt="Lapiz" />
            Lapiz
          </button>
          <button onClick={clear} className={classes.button}>
            <img src={erase} alt="Lapiz" />
            Borrar
          </button>

          <div className={classes.containerButtonColors}>
            {colors.map((color, index) => (
              <button
                onClick={() => handleColor(color)}
                style={{ backgroundColor: color }}
                className={classes.buttonColor}
                key={index}
              ></button>
            ))}
          </div>
          {/* <input type="color" onChange={handleColor} /> */}
          {/* <button onClick={handleCursor}>Cambiar cursor</button> */}
        </div>
      )}
    </>
  );
};

export default DrawTools;
