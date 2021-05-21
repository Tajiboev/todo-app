import { FC, Suspense, lazy } from "react";
import { useStoreState } from "./Store/typedhooks";
import useBodyClass from "./useBodyClass";
import SwitchModes from "./Components/SwitchModes";
import "./Styles/app.sass";

const Header = lazy(() => import("./Components/Header"));
const AddTodo = lazy(() => import("./Components/AddTodo"));
const TodoList = lazy(() => import("./Components/TodoList"));

const App: FC = () => {
	const nightMode = useStoreState((state) => state.nightMode);
	const mode = nightMode ? "dark" : "light";
	useBodyClass(`${mode}`);

	return (
		<main className="main">
			<Suspense fallback={<div className="fallback">Loading...</div>}>
				<SwitchModes />
				<Header />
				<AddTodo />
				<TodoList />
			</Suspense>
		</main>
	);
};

export default App;
