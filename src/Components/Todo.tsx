import { FC, HTMLAttributes } from "react";
import { ITodo } from "../interfaces";
import { useStoreActions, useStoreState } from "../Store/typedhooks";
import styles from "../Styles/todo.module.sass";

import { Icon } from "@iconify/react";
import timesIcon from "@iconify-icons/uil/times";
import checkIcon from "@iconify-icons/uil/check";

interface TodoProps extends HTMLAttributes<HTMLLIElement> {
	todo: ITodo;
}

const Todo: FC<TodoProps> = ({ todo, ...props }) => {
	const setCompleted = useStoreActions((actions) => actions.setCompleted);
	const removeTodo = useStoreActions((actions) => actions.removeTodo);
	const isCompleted = todo.isCompleted;
	const nightMode = useStoreState((state) => state.nightMode);

	return (
		<li {...props} className={styles.li + ` ${nightMode ? styles.dark : ""}`}>
			<div className={styles.wrapper} onClick={() => setCompleted(todo)}>
				<div
					className={
						styles.checkbox + ` ${todo.isCompleted ? styles.checkbox_checked : ""}`
					}
				>
					{todo.isCompleted && <Icon icon={checkIcon} width={18} />}
				</div>
				<p className={styles.todo_text + ` ${isCompleted ? styles.todo_completed : ""}`}>
					{todo.text}
				</p>
			</div>
			<button
				className={styles.remove_button}
				onClick={() => removeTodo(todo)}
				title="Remove item"
			>
				<Icon icon={timesIcon} width={18} />
			</button>
		</li>
	);
};

export default Todo;
