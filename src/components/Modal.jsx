import { AnimatePresence, motion } from "framer-motion";
import { FaSave } from "react-icons/fa";
import { AiOutlineClose, AiFillDelete } from "react-icons/ai";
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
        <motion.div
          layoutId={selectedId}
          className="fixed top-0 grid h-screen w-screen place-items-center bg-black/50"
        >
          <motion.div className="w-screen bg-ctp-surface1 py-5 px-5 pb-10 md:w-96">
            <div className="grid place-content-end">
              <button
                onClick={() => setSelectedId(null)}
                className="text-white text-xl font-bold"
              >
                <AiOutlineClose className="h-6 w-6" />
              </button>
            </div>
            <h3 className="text-center text-xl font-bold text-ctp-text">
              Edit item
            </h3>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-5 mb-10 grid place-content-center"
            >
              <label className="font-bold text-ctp-flamingo">Day</label>
              <select
                onChange={(e) =>
                  setNewItem({ ...newItem, day: e.target.value })
                }
                value={newItem.day}
              >
                <option value="Monday">Monday</option>
                <option value="Tuesday">Tuesday</option>
                <option value="Wednesday">Wednesday</option>
                <option value="Thursday">Thursday</option>
                <option value="Friday">Friday</option>
                <option value="Saturday">Saturday</option>
                <option value="Sunday">Sunday</option>
              </select>
              <label className="font-bold text-ctp-flamingo">Title</label>
              <input
                type="text"
                value={newItem.title}
                onChange={(e) => {
                  setNewItem((prev) => {
                    return {
                      ...prev,
                      title: e.target.value,
                    };
                  });
                }}
              />
              <label className="font-bold text-ctp-flamingo">Description</label>
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

            <div className="mt-5 flex justify-center gap-10">
              <button
                className="rounded-xl bg-ctp-red px-7 py-1 font-bold text-white"
                onClick={() => {
                  setScheduleItems((prev) => {
                    return prev.filter((x) => x.id !== id);
                  });
                  setSelectedId(null);
                }}
              >
                <AiFillDelete className="inline-block" /> Delete
              </button>
              <button
                className="rounded-xl bg-ctp-green px-7 py-1 font-bold text-white"
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
                <FaSave className="inline-block" /> Save
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
