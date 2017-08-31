import * as Actions from "../constants/ActionTypes";

const initialState = [
  {
    text: "I am Lost",
    completed: false,
    id: 0
  }
];

export default function todos(state = initialState, action) {
  switch (action.type) {
    case Actions.ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          completed: false,
          id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1
        }
      ];

    default:
      return state;
  }
}
