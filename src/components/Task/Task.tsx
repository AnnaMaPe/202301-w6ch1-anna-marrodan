import { TaskStyled } from "./TaskStyled";

export const Task = (): JSX.Element => {
  return (
    <>
      <TaskStyled className="tasks">
        <li className="task">
          <button>✔️</button>
          <h3 className="task__title">Water the plants</h3>
          <button>❌</button>
        </li>
        <li className="task">
          <button>✔️</button>
          <h3 className="task__title">Feed Róman</h3>
          <button>❌</button>
        </li>
      </TaskStyled>
    </>
  );
};
