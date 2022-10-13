import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const Test = () => {
  const [selectedId, setSelectedId] = useState(null);
  const items = [
    { id: 1, title: "Item 1", subtitle: "Item 1" },
    { id: 2, title: "Item 2", subtitle: "Item 2" },
    { id: 3, title: "Item 3", subtitle: "Item 3" },
    { id: 4, title: "Item 4", subtitle: "Item 4" },
  ];

  return (
    <div className="text-white text-center text-3xl">
      {items.map((item) => (
        <motion.div layoutId={item.id} onClick={() => setSelectedId(item.id)}>
          <motion.h5>{item.subtitle}</motion.h5>
          <motion.h2>{item.title}</motion.h2>
        </motion.div>
      ))}

      <AnimatePresence>
        {selectedId && (
          <motion.div layoutId={selectedId}>
            <motion.h5>{"item.subtitle"}</motion.h5>
            <motion.h2>{"item.title"}</motion.h2>
            <motion.button onClick={() => setSelectedId(null)}>
              Boton
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Test;
