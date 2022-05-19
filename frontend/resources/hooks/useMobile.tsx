import { useState, useEffect } from "react";

const checkIfIsMobile = (width: number, boundary: number) => {
  return width < boundary;
};

const useMobile = (boundaryWidth: number = 900) => {
  useEffect(() => {
    const onResize = () => {
      setIsMobile(checkIfIsMobile(global.innerWidth, boundaryWidth));
    };
    global.addEventListener("resize", onResize);

    return () => global.removeEventListener("resize", onResize);
  }, [boundaryWidth]);

  const [isMobile, setIsMobile] = useState(
    checkIfIsMobile(global.innerWidth, boundaryWidth)
  );

  return isMobile;
};

export default useMobile;