import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const Modal = ({
  selectedId,
  setSelectedId,
  scheduleItems,
  setScheduleItems,
}) => {
  const { id, day, title, description } =
    scheduleItems.find((x) => x.id === selectedId) || {};
  const [newItem, setNewItem] = useState({
    id: id,
    day: day,
    title: title,
    description: description,
  });

  useEffect(() => {
    setNewItem({
      id: id,
      day: day,
      title: title,
      description: description,
    });
  }, [selectedId]);

  return (
    <AnimatePresence>
      {selectedId && (
        <motion.div layoutId={selectedId} className="bg-gray-500">
          <p className="text-white text-xl">ID: {id}</p>
          <form onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="">day</label>
            <input
              type="text"
              value={newItem.day}
              onChange={(e) => {
                setNewItem((prev) => {
                  return {
                    ...prev,
                    day: e.target.value,
                  };
                });
              }}
            />
            <label htmlFor="">title</label>
            <input
              type="text"
              value={newItem.title}
              onChange={(e) => {
                console.log(e.target.value);
                setNewItem((prev) => {
                  return {
                    ...prev,
                    title: e.target.value,
                  };
                });
              }}
            />
            <label htmlFor="">description</label>
            <input
              type="text"
              value={newItem.description}
              onChange={(e) => {
                setNewItem((prev) => {
                  return {
                    ...prev,
                    description: e.target.value,
                  };
                });
              }}
            />
          </form>
          <button onClick={() => setSelectedId(null)}>Close</button>
          <button
            onClick={() => {
              setScheduleItems((prev) => {
                return prev.map((x) => {
                  if (x.id === id) {
                    return {
                      ...x,
                      ...newItem,
                    };
                  }
                  return x;
                });
              });
              setSelectedId(null);
            }}
          >
            Save
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
