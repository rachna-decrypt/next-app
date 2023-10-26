import React from "react";

const AuthLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="bg-gray-500-100 h-full">
      <h1 className="text-4xl text-green-300">
        Header
      </h1>
      {children}
      <h1 className="text-4xl text-purple-500">
        Footer
      </h1>
    </div>
  );
};

export default AuthLayout;
