import { useEffect, useState } from "react";
import Days from "./Days";
import Modal from "./Modal";

const Schedule = () => {
  const [scheduleItems, setScheduleItems] = useState([]);
  const [selectedId, setSelectedId] = useState(null);

  useEffect(() => {
    const scheduleItems = localStorage.getItem("scheduleItems");
    if (scheduleItems) {
      setScheduleItems(JSON.parse(scheduleItems));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("scheduleItems", JSON.stringify(scheduleItems));
  }, [scheduleItems]);

  return (
    <div>
      <div className="grid grid-cols-1 gap-4 text-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7">
        <Days
          day={"Monday"}
          setScheduleItems={setScheduleItems}
          scheduleItems={scheduleItems}
          selectedId={selectedId}
          setSelectedId={setSelectedId}
        />
        <Days
          day={"Tuesday"}
          setScheduleItems={setScheduleItems}
          scheduleItems={scheduleItems}
          selectedId={selectedId}
          setSelectedId={setSelectedId}
        />
        <Days
          day={"Wednesday"}
          setScheduleItems={setScheduleItems}
          scheduleItems={scheduleItems}
          selectedId={selectedId}
          setSelectedId={setSelectedId}
        />
        <Days
          day={"Thursday"}
          setScheduleItems={setScheduleItems}
          scheduleItems={scheduleItems}
          selectedId={selectedId}
          setSelectedId={setSelectedId}
        />
        <Days
          day={"Friday"}
          setScheduleItems={setScheduleItems}
          scheduleItems={scheduleItems}
          selectedId={selectedId}
          setSelectedId={setSelectedId}
        />
        <Days
          day={"Saturday"}
          setScheduleItems={setScheduleItems}
          scheduleItems={scheduleItems}
          selectedId={selectedId}
          setSelectedId={setSelectedId}
        />
        <Days
          day={"Sunday"}
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
