export const Task = (): JSX.Element => {
  return (
    <>
      <li>
        <input type="checkbox" name="task" id="1" />
        <label htmlFor="task">Water the plants</label>
      </li>
      <li>
        <input type="checkbox" name="task" id="2" />
        <label htmlFor="task">Feed Róman</label>
      </li>
    </>
  );
};
