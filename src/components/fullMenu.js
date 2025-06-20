import { motion, AnimatePresence } from "framer-motion";
import React from "react";
import { GrClose } from "react-icons/gr";

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    transition: { duration: 0.2, ease: "easeIn" },
  },
};

const modalVariants2 = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.4, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.3, ease: "easeIn" },
  },
};

const FullScreenModal = ({ isOpen, onClose, children }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50"
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <motion.div
            className="absolute inset-0 bg-white/50 z-20 md:p-6 p-3 overflow-auto top-0"
            variants={modalVariants2}
            initial="hidden"
            animate="visible"
            exit="exit"
          ></motion.div>
          <motion.div
            className="absolute inset-0 bg-black/95 z-20 md:p-6 p-3 overflow-auto top-0"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="md:relative absolute w-full h-full left-0 top-0 flex items-center justify-center">
              <button
                onClick={onClose}
                className="text-white text-xl font-bold w-14 h-14 flex items-center justify-center bg-black/30 rounded-full cursor-pointer hover:bg-black/40 md:relative absolute top-5"
              >
                <GrClose />
              </button>
              <div className="h-full w-full md:flex items-center pl-15 md:pt-0 pt-25">
                {children}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FullScreenModal;
