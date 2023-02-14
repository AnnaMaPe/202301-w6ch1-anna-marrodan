import { Form } from "../Form/Form";
import { Task } from "../Task/Task";

export const Layout = (): JSX.Element => {
  return (
    <>
      <h1 className="title">My To-do list</h1>
      <Form />
      <Task />
    </>
  );
};
