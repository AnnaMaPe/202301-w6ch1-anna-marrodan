# DATA

## DATA LAYER

- List of tasks:
  - id
  - name
  - isDone

## DATA MODIFICATIONS

- Load tasks
- Create tasks
- Delete tasks from my list
- Toggle isDone status

# COMPONENTS

## APP

- Shows layout component

## Layout

- Shows a "My To-Do list" title in a heading
- Shows a form
- Shows a list of tasks

## TASK

- Receives toggle isDone action
- Receives delete task action
- Receives a new task
- Shows task name inside a heading
- Shows a button component to toggle the isDone status
- Shows button component to delete task
- Sends a check to button component that shows isDone status
- Sends an empty check-box to button component that shows tha is not-isDone status
- Sends a "X" to button componet to delete a task
- Sends toggle isDone action to button component that shows status
- Sends delete task action to button component that deletes task

## LISTS OF TASKS

- Receives list of tasks
- Shows a task component for every task in the list of tasks
- Sends a task from the list to each task component

## BUTTON

## FORM

- Receives the add task action
- Shows an input for the task name with the label "Task name"
- Shows a button "Add" to submit the form
- On submit executes the received add task action
