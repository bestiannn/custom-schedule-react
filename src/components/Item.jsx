import { Reorder } from "framer-motion";

const Item = ({ item, setSelectedId }) => {
  return (
    <Reorder.Item key={item.id} value={item.id}>
      <p onDoubleClick={() => setSelectedId(item.id)}>{item.title}</p>
    </Reorder.Item>
  );
};

export default Item;
