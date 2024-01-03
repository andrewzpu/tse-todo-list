import React from "react";
import type { Task } from "src/api/tasks";
import { CheckButton } from "src/components";
import styles from "src/components/TaskItem.module.css";

export interface TaskItemProps {
  task: Task;
}

export function TaskItem({ task }: TaskItemProps) {
  const wrapperClass = styles.item;
  let contentClass = styles.textContainer;
  const titleClass = styles.title;
  const descClass = styles.description;

  if (task.isChecked) {
    contentClass += ` ${styles.checked}`;
  }

  return (
    <div className={wrapperClass}>
      <CheckButton checked={task.isChecked} />

      <div className={contentClass}>
        <span className={titleClass}>{task.title}</span>
        {task.description && <span className={descClass}>{task.description}</span>}
      </div>
    </div>
  );
}
