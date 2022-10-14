import { Reorder } from "framer-motion";
import { AiOutlinePlus } from "react-icons/ai";
import { v4 as uuidv4 } from "uuid";
import Item from "./Item";

const Days = ({
  day,
  scheduleItems,
  setScheduleItems,
  selectedId,
  setSelectedId,
}) => {
  const handleAddItem = () => {
    const newScheduleItems = {
      id: uuidv4(),
      day: day,
      title: `New ${day} item`,
      description: "Some description...",
    };
    setScheduleItems((prev) => [...prev, newScheduleItems]);
  };
  const itemsDay = scheduleItems.filter((item) => item.day === day);

  return (
    <div className="font-extrabold text-ctp-lavender">
      <h2 className="mt-5 mb-3 text-lg underline decoration-2">{day}</h2>
      <button
        className="p-px rounded-full bg-ctp-surface1 hover:bg-ctp-surface0"
        onClick={handleAddItem}
      >
        <AiOutlinePlus className="mx-auto text-2xl text-ctp-lavender" />
      </button>
      <div className="mt-5 text-md font-extrabold text-ctp-text">
        <Reorder.Group
          axis="y"
          values={itemsDay.map((x) => x.id)}
          onReorder={(values) => {
            setScheduleItems((prev) =>
              values
                .map((id) => prev.find((x) => x.id === id))
                .concat(scheduleItems.filter((x) => !values.includes(x.id)))
            );
          }}
        >
          {itemsDay.map((item) => (
            <Item key={item.id} item={item} setSelectedId={setSelectedId} />
          ))}
        </Reorder.Group>
      </div>
    </div>
  );
};

export default Days;
