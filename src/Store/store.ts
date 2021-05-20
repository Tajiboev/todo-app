import { createStore, action, computed, persist } from "easy-peasy";
import { IStoreModel } from "./model";

const store = createStore<IStoreModel>(
	persist(
		{
			nightMode: false,
			todos: [],
			addTodo: action((state, payload) => {
				state.todos.push(payload);
			}),
			removeTodo: action((state, payload) => {
				state.todos = state.todos.filter((todo) => todo.id !== payload.id);
			}),
			totalTodos: computed((state) => state.todos.length),
			completedTodos: computed(
				(state) => state.todos.filter((todo) => todo.isCompleted).length
			),
			setCompleted: action((state, payload) => {
				state.todos.map((todo) => {
					if (todo.id === payload.id) {
						todo.isCompleted = !todo.isCompleted;
					}
					return todo;
				});
			}),
			toggleNightMode: action((state) => {
				state.nightMode = !state.nightMode;
			}),
		},
		{ storage: "localStorage" }
	)
);

export default store;
