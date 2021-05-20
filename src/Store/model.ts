import { Action, Computed } from "easy-peasy";
import { ITodo } from "../interfaces";

export interface IStoreModel {
	todos: ITodo[];
	addTodo: Action<IStoreModel, ITodo>;
	removeTodo: Action<IStoreModel, ITodo>;
	setCompleted: Action<IStoreModel, ITodo>;
	totalTodos: Computed<IStoreModel, number>;
	completedTodos: Computed<IStoreModel, number>;
	nightMode: boolean;
	toggleNightMode: Action<IStoreModel>;
}
