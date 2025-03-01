"use client";
import { useState } from "react";
import { useTaskStore } from "../task";
import * as Slider from "@radix-ui/react-slider";

const TaskForm = () => {
  const addTask = useTaskStore((state) => state.addTask);

  const [activity, setActivity] = useState("");
  const [price, setPrice] = useState("");
  const [type, setType] = useState("education");
  const [bookingRequired, setBookingRequired] = useState(false);
  const [accessibility, setAccessibility] = useState(0.5);

  const getEmoji = (value: number) => {
    if (value < 0.34) return "😢";
    if (value < 0.67) return "😐";
    return "😃";
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!activity || !price) return;

    addTask({
      id: Date.now(),
      activity,
      price: parseFloat(price),
      type,
      bookingRequired,
      accessibility,
    });

    setActivity("");
    setPrice("");
    setType("education");
    setBookingRequired(false);
    setAccessibility(0.5);
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        type="text"
        placeholder="Activity"
        value={activity}
        onChange={(e) => setActivity(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        required
      />
      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="education">Education</option>
        <option value="recreational">Recreational</option>
        <option value="social">Social</option>
        <option value="diy">DIY</option>
        <option value="charity">Charity</option>
        <option value="cooking">Cooking</option>
        <option value="relaxation">Relaxation</option>
        <option value="music">Music</option>
        <option value="busywork">Busywork</option>
      </select>

      <label>
        <input
          type="checkbox"
          checked={bookingRequired}
          onChange={(e) => setBookingRequired(e.target.checked)}
        />
        Booking Required
      </label>

      <div className="slider-container">
        <label>Accessibility: {accessibility.toFixed(2)}</label>
        <Slider.Root
          className="slider-root"
          value={[accessibility]}
          min={0}
          max={1}
          step={0.01}
          onValueChange={(value) => setAccessibility(value[0])}
        >
          <Slider.Track className="slider-track">
            <Slider.Range className="slider-range" />
          </Slider.Track>
          <Slider.Thumb className="slider-thumb">
            <span role="img" aria-label="slider-emoji">{getEmoji(accessibility)}</span>
          </Slider.Thumb>
        </Slider.Root>
      </div>

      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
