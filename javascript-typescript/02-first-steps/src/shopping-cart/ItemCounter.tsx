import { useState } from "react";
// import "./ItemCounter.css";
import styles from "./temCounter.module.css";

interface ItemCounterProps {
  name: string;
  quantity?: number;
}

export const ItemCounter = ({ name, quantity = 0 }: ItemCounterProps) => {
  const [count, setCount] = useState(quantity);

  const handleAdd = () => setCount(prev => prev + 1);

  const handleSubtract = () => {
    if (count === 1) return;

    setCount(prev => prev - 1)
  };

  return (
    <section className={styles.itemRow}>
      <span
        className={styles["item-text"]}
        style={{
          color: count === 1 ? 'red' : 'black'
        }}>
        {name}
      </span>
      <button onClick={handleSubtract}>-1</button>
      <span>{count ? count : 0}</span>
      <button onClick={handleAdd}> +1 </button>
    </section>
  )
}
