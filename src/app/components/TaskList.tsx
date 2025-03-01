"use client";
import { useTaskStore } from "../task";

const TaskList = () => {
  const { tasks, removeTask } = useTaskStore();

  return (
    <div className="task-list">
      <h3>Total Tasks: {tasks.length}</h3>
      {tasks.length === 0 && <p>No tasks added yet.</p>}

      <ul>
        {tasks.map((task) => (
          <li key={task.id} className="task-item">
            <div>
              <strong>{task.activity}</strong> - <span>RM{task.price}</span> ({task.type})
            </div>
            <div className="booking-status">
              {task.bookingRequired ? "📌 Needs Booking" : "✅ No Booking Required"}
            </div>
            <div className="accessibility">
              <small>Accessibility: {task.accessibility.toFixed(2)}</small>
            </div>
            <button onClick={() => removeTask(task.id)} className="delete-button">❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
