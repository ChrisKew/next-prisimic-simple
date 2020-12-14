import React from "react";
import { reset, globals } from "styles";

const DivWrapper = (props) => {
  return (
    <div data-wrapper="panel">
      {props.children}
      <style jsx global>
        {reset}
      </style>
      <style jsx global>
        {globals}
      </style>
    </div>
  );
};

export default DivWrapper;
