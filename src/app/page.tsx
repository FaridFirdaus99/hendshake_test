import TaskForm from "@/components/TaskForm";
import TaskList from "@/components/TaskList";

export default function Home() {
  return (
    <main className="container">
      <h1>To-Do List</h1>
      <TaskForm />
      <TaskList />
    </main>
  );
}
