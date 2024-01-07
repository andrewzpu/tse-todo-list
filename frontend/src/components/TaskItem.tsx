import React, { useState } from "react";
import type { Task } from "src/api/tasks";
import { CheckButton } from "src/components";
import styles from "src/components/TaskItem.module.css";
import { updateTask } from "src/api/tasks";

export interface TaskItemProps {
  task: Task;
}

export function TaskItem({ task: initialTask }: TaskItemProps) {
  const [task, setTask] = useState<Task>(initialTask);
  const [isLoading, setLoading] = useState<boolean>(false);

  const handleToggleCheck = () => {
    setLoading(true);
    const newTask = task;
    newTask.isChecked = !task.isChecked;
    setTask(newTask);
    updateTask(task).then((result) => {
      if (!result.success) {
        alert(result.error);
      }
      setLoading(false);
    });
  };

  const wrapperClass = styles.item;
  let contentClass = styles.textContainer;
  const titleClass = styles.title;
  const descClass = styles.description;

  if (task.isChecked) {
    contentClass += ` ${styles.checked}`;
  }

  return (
    <div className={wrapperClass}>
      <CheckButton checked={task.isChecked} disabled={isLoading} onPress={handleToggleCheck} />

      <div className={contentClass}>
        <span className={titleClass}>{task.title}</span>
        {task.description && <span className={descClass}>{task.description}</span>}
      </div>
    </div>
  );
}
