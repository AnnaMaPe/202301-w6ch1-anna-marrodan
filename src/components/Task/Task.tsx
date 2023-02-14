import { ToggleStateButton } from "../ToggleStateButton/ToggleStateButton";
import { TaskStyled } from "./TaskStyled";

export const Task = (): JSX.Element => {
  return (
    <>
      <TaskStyled className="tasks">
        <li className="task">
          <ToggleStateButton />
          <h3 className="task__title">Water the plants</h3>
        </li>
        <li className="task">
          <button>✔️</button>
          <h3 className="task__title">Feed Róman</h3>
        </li>
      </TaskStyled>
    </>
  );
};
