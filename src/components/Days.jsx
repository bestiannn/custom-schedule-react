import { Reorder } from "framer-motion";
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
      title: "New Item",
      description: "some description",
    };
    setScheduleItems((prev) => [...prev, newScheduleItems]);
  };
  const itemsDay = scheduleItems.filter((item) => item.day === day);

  return (
    <div className="text-ctp-lavender font-extrabold">
      <h2>day {day}</h2>
      <button
        className="bg-ctp-surface1 hover:bg-ctp-surface0 w-10 rounded-lg"
        onClick={handleAddItem}
      >
        +
      </button>
      <div className="text-ctp-text mt-5">
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
