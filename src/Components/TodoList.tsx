import { FC } from "react";
import { useStoreState } from "../Store/typedhooks";
import Todo from "./Todo";
import styles from "../Styles/todolist.module.sass";

const TodoList: FC = () => {
	const todos = useStoreState((state) => state.todos);
	const totalTodos = useStoreState((state) => state.totalTodos);
	return (
		<section className={styles.section}>
			{totalTodos ? (
				<ul className={styles.ul}>
					{todos.map((todo, index) => {
						return <Todo key={index} todo={todo} />;
					})}
				</ul>
			) : (
				<div className={styles.no_content}>No todos yet...</div>
			)}
		</section>
	);
};

export default TodoList;
