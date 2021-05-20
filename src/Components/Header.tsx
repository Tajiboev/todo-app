import { FC } from "react";
import dayjs from "dayjs";
import { useStoreState } from "../Store/typedhooks";

import styles from "../Styles/header.module.sass";

const Header: FC = () => {
	const totalTodos = useStoreState((state) => state.totalTodos);
	const completedTodos = useStoreState((state) => state.completedTodos);
	const dayOfMonth = dayjs().format("D");
	const dayOfWeek = dayjs().format("dddd");
	const month = dayjs().format("MMMM");

	let taskText: string = "tasks";
	if (totalTodos === 1) taskText = "task";

	return (
		<header className={styles.header}>
			<div className={styles.row}>
				<p className={styles.day}>{dayOfWeek}</p>
				<p className={styles.completed_text}>
					{completedTodos}/{totalTodos} {taskText} done
				</p>
			</div>
			<div>
				<p className={styles.month_date}>
					{month}, {dayOfMonth}
				</p>
			</div>
		</header>
	);
};

export default Header;
