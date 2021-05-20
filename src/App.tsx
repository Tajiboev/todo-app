import { FC } from "react";
import Header from "./Components/Header";
import AddTodo from "./Components/AddTodo";
import TodoList from "./Components/TodoList";

import "./Styles/app.sass";
import { useStoreState } from "./Store/typedhooks";
import useBodyClass from "./useBodyClass";
import SwitchModes from "./Components/SwitchModes";

const App: FC = () => {
	const nightMode = useStoreState((state) => state.nightMode);
	const mode = nightMode ? "dark" : "light";
	useBodyClass(`${mode}`);

	return (
		<main className="main">
			<SwitchModes />
			<Header />
			<AddTodo />
			<TodoList />
		</main>
	);
};

export default App;
