import React, { useState } from "react";
import { createUseStyles } from "react-jss";
import classnames from "classnames";

const useStyles = createUseStyles({
  content: {
    opacity: 0,
    visibility: "hidden",
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
      <button onClick={toggleExpansion} aria-expanded={isExpanded}>
        {label}
      </button>
      <div className={contentClasses}>{children}</div>
    </>
  );
};

export default Accordion;
