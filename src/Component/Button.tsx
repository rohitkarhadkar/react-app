import React, { Fragment, useState } from "react";
import Alert from "./Alert";

interface ButtonProps {
  children: string;
  color?: "primary" | "secondary" | "danger" | "warning";
  onclicked: () => void;
}

const Button = ({ children, onclicked, color = "secondary" }: ButtonProps) => {
  const [check, setCheck] = useState(false);
  return (
    <>
      {check ? (
        <Alert onClose={() => setCheck(false)}>
          Hello <span>World</span>
        </Alert>
      ) : null}
      <button
        type="button"
        className={"btn btn-" + color}
        onClick={() => setCheck(true)}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
