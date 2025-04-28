import React, { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

function Loader({ isLoading, setIsLoading }: any) {
  useEffect(() => {
    setTimeout(() => {
      setIsLoading();
    }, 1900);
  }, [setIsLoading]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="loader"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "rgba(0, 0, 0, 0.1)",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
          }}
        >
          <motion.svg
            id="logo"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            style={{ width: "100px", height: "100px" }}
          >
            <title>Logo</title>
            <g>
              <g id="PS" transform="translate(50, 50)">
                <motion.text
                  fill="currentColor"
                  fontSize="20"
                  fontFamily="Arial, sans-serif"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 0.8,
                    ease: "easeOut",
                    delay: 0.5,
                  }}
                  exit={{ y: 20, opacity: 0 }}
                >
                  PS
                </motion.text>
              </g>
              <motion.path
                initial={{ strokeDasharray: 260, strokeDashoffset: 260 }}
                animate={{ strokeDashoffset: 0 }}
                transition={{
                  duration: 1.2,
                  ease: "easeInOut",
                  delay: 0.2,
                }}
                exit={{ strokeDashoffset: 260 }}
                stroke="currentColor"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M 50, 5
                  L 11, 27
                  L 11, 72
                  L 50, 95
                  L 89, 73
                  L 89, 28 z"
              />
            </g>
          </motion.svg>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Loader;