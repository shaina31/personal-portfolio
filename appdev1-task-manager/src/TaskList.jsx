import { useState, useEffect } from "react";
import { collection, onSnapshot, updateDoc, doc, deleteDoc } from "firebase/firestore";
import { db } from "./firebase";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "Tasks"), (snapshot) => {
      setTasks(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
    return unsubscribe;
  }, []);

  const markAsCompleted = async (id) => {
    const taskDoc = doc(db, "Tasks", id);
    await updateDoc(taskDoc, { status: "completed" });
  };

  const deleteTask = async (id) => {
    const taskDoc = doc(db, "Tasks", id);
    await deleteDoc(taskDoc);
  };

  return (
    <>
      <ul className="task-list">
        {tasks.map((task) => (
        
            <li key={task.id} style={{ color: task.status === "completed" ? "green" : "black" }}   
          >
            <h3><b>Title:</b>  {task.title}</h3>
            <p><b>Description:</b>  {task.description}</p>
            <p><b>Status:</b> {task.status}</p>
            <div className="task-actions">
              {/* Mark as Completed Button */}
              <button
                className={`task-status ${task.status === "completed" ? "disabled" : ""}`}
                onClick={() => markAsCompleted(task.id)}
                disabled={task.status === "completed"}
              >
              Completed
              </button>
              {/* Delete Task Button */}
              <button className="delete-task" onClick={() => deleteTask(task.id)}>
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TaskList;
