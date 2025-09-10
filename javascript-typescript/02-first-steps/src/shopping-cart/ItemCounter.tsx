import { useState } from "react";

const mySectionStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: 10,
  marginTop: 16,
}

const myItemStyle = {
  width: 150
}

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
    <section style={mySectionStyle}>
      <span style={myItemStyle}>{name}</span>
      <button onClick={handleSubtract}>-1</button>
      <span>{count ? count : 0}</span>
      <button onClick={handleAdd}> +1 </button>
    </section>
  )
}
