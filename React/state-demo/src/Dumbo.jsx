import { useState } from "react";

function generateBoard() {
  console.log("MAKING A NEW GAMEBOARD");
  return Array(5000);
}
export default function Dumbo() {
  // eslint-disable-next-line no-unused-vars
  const [board, setBoard] = useState(generateBoard()); // Giá trị khởi tạo này chỉ được gọi một lần duy nhất

  // generateBoard() sẽ được gọi mỗi khi component Dumbo được render
  // generateBoard sẽ chỉ được gọi 1 lần và khi component Dumbo được render lại lần 2 thì hàm này sẽ không được gọi nữa
  return (
    <div>
      <button onClick={() => setBoard("Hiiii")}>Reset Board</button>
    </div>
  );
}
