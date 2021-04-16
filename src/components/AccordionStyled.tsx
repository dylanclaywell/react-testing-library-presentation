import React, { useState } from "react";
import { createUseStyles } from "react-jss";
import classnames from "classnames";

const width = "20em";
const useStyles = createUseStyles({
  button: {
    padding: "1em",
    width,
    border: "1px solid #dadada",
    outline: "none",
    background: "none",
    cursor: "pointer",
    borderRadius: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    font: "inherit",
    boxSizing: "initial",
    transition: "300ms all",
    "&:hover": {
      background: "#e8e8e8",
    },
  },
  content: {
    opacity: 0,
    visibility: "hidden",
    padding: "1em",
    width,
    border: "1px solid #dadada",
    borderTop: "none",
  },
  visible: {
    opacity: 1,
    visibility: "visible",
  },
});

type Props = {
  label: string;
  onClick?: () => void;
  children?: React.ReactNode;
};

const Accordion: React.FC<Props> = ({ label, onClick, children }) => {
  const classes = useStyles();
  const [isExpanded, setIsExpanded] = useState(false);

  const contentClasses = classnames(classes.content, {
    [classes.visible]: isExpanded,
  });

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);

    if (onClick) {
      onClick();
    }
  };

  return (
    <>
      <button
        className={classes.button}
        onClick={toggleExpansion}
        aria-expanded={isExpanded}
      >
        {label}
        <span className={"material-icons"}>
          {isExpanded ? "expand_less" : "expand_more"}
        </span>
      </button>
      <div className={contentClasses}>{children}</div>
    </>
  );
};

export default Accordion;
