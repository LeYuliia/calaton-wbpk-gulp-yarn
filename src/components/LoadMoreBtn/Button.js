import React from "react";
 import "./Button.scss";

const Button = ({ onLoadMore }) => (
  <>
    <button className="load-more" type="button" onClick={() => onLoadMore()}>
      Load more
    </button>
  </>
);

export default Button;
