import { useEffect } from "react";

const addBodyClass = (className: string) => document.body.classList.add(className);
const removeBodyClass = (className: string) => document.body.classList.remove(className);

export default function useBodyClass(className: any) {
	useEffect(() => {
		// Set up
		className instanceof Array ? className.map(addBodyClass) : addBodyClass(className);

		// Clean up
		return () => {
			className instanceof Array
				? className.map(removeBodyClass)
				: removeBodyClass(className);
		};
	}, [className]);
}
