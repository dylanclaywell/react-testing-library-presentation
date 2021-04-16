import React, { useState } from "react";
import { createUseStyles } from "react-jss";

const width = "20em";
const useStyles = createUseStyles({
  button: {
    padding: "1em",
    width,
    border: "1px solid gray",
    outline: "none",
    background: "none",
    cursor: "pointer",
    borderRadius: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  content: {
    padding: "1em",
    width,
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
      {isExpanded ? <div className={classes.content}>{children}</div> : null}
    </>
  );
};

export default Accordion;
