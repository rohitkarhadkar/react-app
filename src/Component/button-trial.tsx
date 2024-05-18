import React, { ReactNode, useState } from "react";
import Alert from "./alert-trial";

interface Props {
  children: ReactNode;
  handleClick: () => void;
  color: string;
}

const [check, setCheck] = useState(false);
const Button1 = (props: Props) => {
  return (
    <>
      {/* <Alert /> */}
      <button
        type="button"
        className={"btn btn-" + props.color}
        onClick={() => setCheck(true)}
      >
        {props.children}
      </button>
    </>
  );
};

export default Button1;
