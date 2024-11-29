import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "./firebase";
import TaskList from "./TaskList";

const AddTask = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !description) {
      alert("Please fill in all fields!");
      return;
    }
    try {
      await addDoc(collection(db, "Tasks"), {
        title,
        description,
        status: "pending",
      });
      setTitle("");
      setDescription("");
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  return (
    <>
    <div className="container">
      <h1>Welcome to Task Manager, Shaina!</h1>
    <form id="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Add Description Here"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">Add a Task</button>
    </form>
    <TaskList/>
    </div>
    </>
  );
};

export default AddTask;
