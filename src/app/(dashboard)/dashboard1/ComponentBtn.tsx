"use client";
import React from "react";

const ComponentBtn = (props: { handleClick?: React.MouseEventHandler<HTMLButtonElement> | undefined; label: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined; }) => {
    return (
    <button
    >{props.label}</button>
  );
};

export default ComponentBtn;
