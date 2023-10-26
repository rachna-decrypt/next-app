import React from "react";

const AuthLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="bg-cyan-500 h-full">
      <h1 className="text-4xl text-green-300">
        Dashboard Header
      </h1>
      {children}
      <h1 className="text-4xl text-purple-500">
        Sidebar
      </h1>
    </div>
  );
};

export default AuthLayout;
