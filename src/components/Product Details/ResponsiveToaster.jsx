import { useState, useEffect } from "react";
import { Toaster } from "react-hot-toast";

const ResponsiveToaster = () => {
  const [toastStyle, setToastStyle] = useState({});

  useEffect(() => {
    const updateStyle = () => {
      if (window.innerWidth < 640) {
        setToastStyle({
          marginTop: "40px",
          marginRight: "0px",
          padding: "10px 14px",
          borderRadius: "0.5rem",
        });
      } else if (window.innerWidth >= 1024) {
        setToastStyle({
          marginTop: "75px",
          marginRight: "215px",
          padding: "12px 16px",
          borderRadius: "0.75rem",
        });
      } else {
        setToastStyle({
          marginTop: "60px",
          marginRight: "50px",
          padding: "12px 16px",
          borderRadius: "0.6rem",
        });
      }
    };

    updateStyle();
    window.addEventListener("resize", updateStyle);
    return () => window.removeEventListener("resize", updateStyle);
  }, []);

  return (
    <Toaster
      position="top-right"
      toastOptions={{
        duration: 2000,
        style: {
          fontWeight: "600",
          color: "#fff",
          background: "#fe741d",
          ...toastStyle,
        },
        success: {
          style: {
            background: "linear-gradient(to right, #22c55e, #16a34a)",
            color: "#fff",
          },
        },
        error: {
          style: {
            background: "linear-gradient(to right, #f97316, #f59e0b)",
            color: "#fff",
          },
        },
      }}
    />
  );
};

export default ResponsiveToaster;
