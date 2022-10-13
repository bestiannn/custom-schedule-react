import { useState } from "react";
import Days from "./Days";
import Modal from "./Modal";

const Schedule = () => {
  const [scheduleItems, setScheduleItems] = useState([
    {
      id: "1", // id
      day: 1, // day of the week 1-7
      title: "Monday 1", // title
      description: "Monday 1 description", // description of the item
    },
    {
      id: "2",
      day: 2,
      title: "Tuesday 1",
      description: "Tuesday 1 description",
    },
    {
      id: "3",
      day: 3,
      title: "Wednesday 1",
      description: "Wednesday 1 description",
    },
    {
      id: "4",
      day: 4,
      title: "Thursday 1",
      description: "Thursday 1 description",
    },
    {
      id: "5",
      day: 5,
      title: "Friday 1",
      description: "Friday 1 description",
    },
    {
      id: "6",
      day: 6,
      title: "Saturday 1",
      description: "Saturday 1 description",
    },
    {
      id: "7",
      day: 7,
      title: "Sunday 1",
      description: "Sunday 1 description",
    },
  ]);
  const [selectedId, setSelectedId] = useState(null);

  return (
    <div>
      <div className="grid grid-cols-7 gap-4 text-center">
        <Days
          day={1}
          setScheduleItems={setScheduleItems}
          scheduleItems={scheduleItems}
          selectedId={selectedId}
          setSelectedId={setSelectedId}
        />
        <Days
          day={2}
          setScheduleItems={setScheduleItems}
          scheduleItems={scheduleItems}
          selectedId={selectedId}
          setSelectedId={setSelectedId}
        />
        <Days
          day={3}
          setScheduleItems={setScheduleItems}
          scheduleItems={scheduleItems}
          selectedId={selectedId}
          setSelectedId={setSelectedId}
        />
        <Days
          day={4}
          setScheduleItems={setScheduleItems}
          scheduleItems={scheduleItems}
          selectedId={selectedId}
          setSelectedId={setSelectedId}
        />
        <Days
          day={5}
          setScheduleItems={setScheduleItems}
          scheduleItems={scheduleItems}
          selectedId={selectedId}
          setSelectedId={setSelectedId}
        />
        <Days
          day={6}
          setScheduleItems={setScheduleItems}
          scheduleItems={scheduleItems}
          selectedId={selectedId}
          setSelectedId={setSelectedId}
        />
        <Days
          day={7}
          setScheduleItems={setScheduleItems}
          scheduleItems={scheduleItems}
          selectedId={selectedId}
          setSelectedId={setSelectedId}
        />
      </div>
      <Modal
        selectedId={selectedId}
        setSelectedId={setSelectedId}
        scheduleItems={scheduleItems}
        setScheduleItems={setScheduleItems}
      />
    </div>
  );
};

export default Schedule;
