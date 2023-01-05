import React from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";

const Backdrop = ({ onClick }) => {
  return <div className={classes.backdrop} onClick={onClick}></div>;
};

const Layout = ({ children }) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlay");

const Modal = ({ children, onClick }) => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop onClick={onClick} />, portalElement)}
      {ReactDOM.createPortal(<Layout children={children} />, portalElement)}
    </>
  );
};

export default Modal;
