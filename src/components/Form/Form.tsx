export const Form = (): JSX.Element => {
  return (
    <form className="form" aria-label="create a task">
      <label className="form__label" htmlFor="todo">
        What do I need to do?
      </label>
      <input
        className="form__input"
        id="todo"
        type="text"
        placeholder="My thingies"
      />
      <button className="form__button" type="submit">
        Create a task!
      </button>
    </form>
  );
};
