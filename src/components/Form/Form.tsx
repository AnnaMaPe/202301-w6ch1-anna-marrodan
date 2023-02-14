export const Form = (): JSX.Element => {
  return (
    <form className="form" aria-label="create a task">
      <label htmlFor="todo">What do I need to do?</label>
      <input id="todo" type="text" placeholder="My thingies" />
      <button type="submit">Create a task!</button>
    </form>
  );
};
