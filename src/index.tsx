import { render } from "react-dom";
import { StoreProvider } from "easy-peasy";
import "./Styles/basecss.sass";

import App from "./App";
import store from "./Store/store";

render(
	<StoreProvider store={store}>
		<App />
	</StoreProvider>,
	document.getElementById("root")
);
