import React from "react";

const NotFound = () => {
  return (
    <div className="container m-auto min-h-[calc(100vh_-_318.5px)] flex flex-col items-center justify-center text-center p-10 ug-playfair-black">
      <h1 className="text-9xl mb-5">404</h1>
      <h2 className="text-5xl mb-10">Accept our appologies!</h2>
      <h3 className="text-3xl ug-raleway-medium">
        The page you were looking for doesn&apos;t exists. You may have
        misstyped the address or the page may have moved.
      </h3>
    </div>
  );
};

export default NotFound;
