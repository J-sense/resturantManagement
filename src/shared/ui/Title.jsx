import React from "react";

const Title = ({ children }) => {
  return (
    <div>
      <p className="text-secondary text-base md:text-lg lg:text-xl">
        {children}
      </p>
    </div>
  );
};

export default Title;
