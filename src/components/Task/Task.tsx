export const Task = (): JSX.Element => {
  return (
    <>
      <li>
        <h3>Water the plants</h3>
        <button>☑️</button>
        <button>❌</button>
      </li>
      <li>
        <input type="checkbox" name="task" id="2" />
        <label htmlFor="task">Feed Róman</label>
      </li>
    </>
  );
};
