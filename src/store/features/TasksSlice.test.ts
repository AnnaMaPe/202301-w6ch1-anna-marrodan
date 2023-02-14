import { TasksStructure, TaskStructure } from "../../types";
import { tasksReducer, toggleTasksStatusActionCreator } from "./tasksSlice";

describe("Given a tasksReducer functions", () => {
  describe("When it receives a tasks named 'Feed' with a isDone true state", () => {
    test("Then it should return the task with a isDone false state", () => {
      const feedRoman: TaskStructure = {
        id: 1,
        name: "Feed Róman",
        isDone: false,
      };
      const waterPlants: TaskStructure = {
        id: 2,
        name: "Water the plants",
        isDone: false,
      };
      const tasks: TasksStructure = [feedRoman, waterPlants];

      const toggleFeedAction = toggleTasksStatusActionCreator(feedRoman.id);
      const expectedFeedRoman: TaskStructure = {
        id: 1,
        name: "Feed Róman",
        isDone: true,
      };
      const expectedWaterPlants: TaskStructure = {
        id: 2,
        name: "Water the plants",
        isDone: false,
      };
      const expectedNewTasks: TasksStructure = [
        expectedFeedRoman,
        expectedWaterPlants,
      ];

      const newTasks = tasksReducer(tasks, toggleFeedAction);

      expect(newTasks).toStrictEqual(expectedNewTasks);
    });
  });
});
