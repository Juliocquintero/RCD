import React, { useContext } from "react";
import { makeStyles, Grid } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
// import Barra from "./assets/Barra.png";
import Pizarra from "./assets/Pizarra.png";
import Limpiar from "./assets/Limpiar.png";
import Deshacer from "./assets/Deshacer.png";
import Zoom from "./assets/Zoom.png";
import Marcatextos from "./assets/Marcatextos.png";
import Dibujar from "./assets/Dibujar.png";
import Notas from "./assets/Notas.png";
import SaveIcon from "@mui/icons-material/Save";
import UsabilityContext from "./context/UsabilityContext";
import DrawTools from "./components/DrawTools";

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
  containerToolBar: {
    zIndex: 2,
    boxShadow: "0px 2px 5px #00000029",
    height: "10%",
    paddingLeft: "4%",
    background: "#fff",
    height: "90px",
    position: "fixed",
    bottom: "0",
    width: "100%",
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
  Dibujar: {
    position: "relative",
    "&:hover": {
      "&:before": {
        textTransform: "none",
        display: (props) => (props.openDrawTools ? "none" : "flex"),
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        content: '"Dibujar"',
        textAlign: "center",
        bottom: "60px",
        width: "80px",
        background: "#fff",
        font: "bold 16px lato",
      },
    },
  },
  Marcatextos: {
    "&:hover": {
      "&:before": {
        textTransform: "none",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        content: '"Marcar texto"',
        textAlign: "center",
        bottom: "60px",
        width: "80px",
        background: "#fff",
        font: "bold 16px lato",
      },
    },
  },
  Zoom: {
    "&:hover": {
      "&:before": {
        textTransform: "none",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        content: '"Zoom"',
        textAlign: "center",
        bottom: "60px",
        width: "80px",
        background: "#fff",
        font: "bold 16px lato",
      },
    },
  },
  Deshacer: {
    "&:hover": {
      "&:before": {
        textTransform: "none",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        content: '"Deshacer"',
        textAlign: "center",
        bottom: "60px",
        width: "80px",
        background: "#fff",
        font: "bold 16px lato",
      },
    },
  },
  Pizarra: {
    "&:hover": {
      "&:before": {
        textTransform: "none",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        content: '"Pizarra"',
        textAlign: "center",
        bottom: "60px",
        width: "80px",
        background: "#fff",
        font: "bold 16px lato",
      },
    },
  },
  Limpiar: {
    "&:hover": {
      "&:before": {
        textTransform: "none",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        content: '"Limpiar pantalla"',
        textAlign: "center",
        bottom: "60px",
        width: "80px",
        background: "#fff",
        font: "bold 16px lato",
      },
    },
  },
  Guardar: {
    "&:hover": {
      "&:before": {
        textTransform: "none",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        content: '"Guardar"',
        textAlign: "center",
        bottom: "60px",
        width: "80px",
        background: "#fff",
        font: "bold 16px lato",
      },
    },
  },
  textToolBar: {
    margin: "0",
    textAlign: "center",
    font: " 20px Lato",
    letterSpacing: "0.36px",
  },
  linkButton: {
    textDecoration: "none",
  },
  buttonContainer: {
    height: "75px",
    marginTop: "10px",
  },
});

const ToolBar = (props) => {
  const { toActivity } = props;
  const { addNewSquare, handleSave, handleErase, undo, openDrawTools, handleDrawTools, handleHabiliteMarker } =
    useContext(UsabilityContext);
  const classes = useStyles({ openDrawTools });

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <Grid container item xl={12} direction="row" justifyContent="center" alignItems="center" className={classes.containerToolBar}>
      <Grid
        container
        item
        sm={1}
        direction="column"
        justifyContent="flex-start"
        alignItems="center"
        className={classes.buttonContainer}
      >
        <Button variant="outlined" className={`${classes.buttonToolBar} ${classes.Nota}`} onClick={addNewSquare}>
          <img alt={"notes"} src={Notas} />
        </Button>
      </Grid>
      <Grid
        container
        item
        sm={1}
        direction="column"
        justifyContent="flex-start"
        alignItems="center"
        className={classes.buttonContainer}
      >
        <DrawTools />
        <Button variant="outlined" className={`${classes.buttonToolBar} ${classes.Dibujar}`} onClick={handleDrawTools}>
          <img alt={"draw"} src={Dibujar} />
        </Button>
      </Grid>
      <Grid
        container
        item
        sm={1}
        direction="column"
        justifyContent="flex-start"
        alignItems="center"
        className={classes.buttonContainer}
      >
        <Button variant="outlined" className={`${classes.buttonToolBar} ${classes.Marcatextos}`} onClick={handleHabiliteMarker}>
          <img className="Marcatextos" alt={"marcatextos"} src={Marcatextos} />
        </Button>
      </Grid>
      <Grid
        container
        item
        sm={1}
        direction="column"
        justifyContent="flex-start"
        alignItems="center"
        className={classes.buttonContainer}
      >
        <Button variant="outlined" className={`${classes.buttonToolBar} ${classes.Zoom}`}>
          <img className="Zoom" alt={"zoom"} src={Zoom} />
        </Button>
      </Grid>
      <Grid
        container
        item
        sm={1}
        direction="column"
        justifyContent="flex-start"
        alignItems="center"
        className={classes.buttonContainer}
      >
        <Button variant="outlined" className={`${classes.buttonToolBar} ${classes.Deshacer}`} onClick={undo}>
          <img className="Deshacer" alt={"deshacer"} src={Deshacer} />
        </Button>
      </Grid>
      <Grid
        container
        item
        sm={1}
        direction="column"
        justifyContent="flex-start"
        alignItems="center"
        className={classes.buttonContainer}
      >
        <Button variant="outlined" className={`${classes.buttonToolBar} ${classes.Pizarra}`}>
          <img className="Pizarra" alt={"pizarra"} src={Pizarra} />
        </Button>
      </Grid>
      <Grid
        container
        item
        sm={1}
        direction="column"
        justifyContent="flex-start"
        alignItems="center"
        className={classes.buttonContainer}
      >
        <Button variant="outlined" className={`${classes.buttonToolBar} ${classes.Limpiar}`} onClick={handleErase}>
          <img className="Limpiar" alt={"limpiar"} src={Limpiar} />
        </Button>

        <Button variant="outlined" className={`${classes.buttonToolBar} ${classes.Guardar}`} onClick={handleSave}>
          <SaveIcon sx={{ color: "#20A698" }} />
        </Button>
      </Grid>
      <Grid container item sm={3} justifyContent="flex-start" alignItems="center">
        {/* <Link className={classes.linkButton} to={toActivity}>
          <Button className={classes.continueButton}>Ir a actividad ➜</Button>
        </Link> */}
      </Grid>
    </Grid>
  );
};

export default ToolBar;
