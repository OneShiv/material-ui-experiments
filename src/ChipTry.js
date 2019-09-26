import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";
import ClearIcon from "@material-ui/icons/Clear";
const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    justifyContent: "start",
    flexWrap: "wrap"
  },
  chip: {
    margin: "4px"
  },
  crossiconstyle: {
    color: "white",
    "&:hover": {
      color: "white"
    }
  }
}));

const ChipTry = () => {
  const classes = useStyles();
  return (
    <div>
      <Chip
        deleteIcon={
          <ClearIcon className={classes.crossiconstyle} fontSize="small" />
        }
        label="Clickable Deletable Chip"
        onClick={() => console.log("clicked")}
        onDelete={() => console.log("deleted")}
        className={classes.chip}
      />
    </div>
  );
};

export default ChipTry;
