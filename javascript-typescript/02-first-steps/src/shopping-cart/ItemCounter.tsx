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

export const ItemCounter = ({ name, quantity }: ItemCounterProps) => {
  return (
    <section style={mySectionStyle}>
      <span style={myItemStyle}>{name}</span>
      <button>+1</button>
      <span>{quantity ? quantity : 0}</span>
      <button>-1</button>
    </section>
  )
}
