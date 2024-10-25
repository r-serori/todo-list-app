import React, { useState } from "react";

function ToDoInput({ onAddTask }) {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // trim() : 文字列の先頭と末尾の空白（スペース、タブ、改行など）を取り除くメソッド
    if (task.trim()) {
      onAddTask(task); // 親コンポーネントにタスクを渡す
      setTask(""); // 入力欄をクリア
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="タスクを入力"
      />
      <button type="submit">追加</button>
    </form>
  );
}

export default ToDoInput;
