import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  root: {
    padding: "1em",
    outline: "none",
    background: "none",
    border: "none",
    borderRadius: 0,
    cursor: "pointer",
    textTransform: "uppercase",
    transition: "300ms all",
    "&:hover": {
      background: "#246ba3",
      color: "white",
    },
  },
});

type Props = {
  label: string;
  onClick?: () => void;
};

const Button: React.FC<Props> = ({ label, onClick }) => {
  const classes = useStyles();

  return (
    <button className={classes.root} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
