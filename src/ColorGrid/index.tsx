import Pictures from "./Pictures";
import styles from "./index.module.css";
import { useState } from "react";

const ColorGrid = () => {
  const [index, setIndex] = useState(0);
  console.log(index);
  const { code, data, title } = Pictures[Math.abs(index) % Pictures.length];
  const rows = data.map((row, rowIndex) => {
    const columns = row.map((cell, colIndex) => {
      return (
        <td
          key={`${rowIndex}:${colIndex}`}
          style={{ backgroundColor: code[cell] }}
        />
      );
    });
    return <tr key={rowIndex}>{columns}</tr>;
  });

  return (
    <>
      <table className={styles.table}>
        <caption>{title}</caption>
        <tbody>{rows}</tbody>
      </table>
      <div>
        <button type="button" onClick={() => setIndex(index - 1)}>
          Prev
        </button>
        <button type="button" onClick={() => setIndex(index + 1)}>
          Next
        </button>
      </div>
    </>
  );
};

export default ColorGrid;
