import { nanoid } from "nanoid";
import { FC } from "react";
import { useStoreActions } from "../Store/typedhooks";
import { ITodo, IInput } from "../interfaces";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { inputschema } from "../schemas";
import styles from "../Styles/addtodo.module.sass";

const AddTodo: FC = () => {
	const addTodo = useStoreActions((actions) => actions.addTodo);

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<IInput>({
		resolver: yupResolver(inputschema),
	});
	const onSubmit: SubmitHandler<IInput> = (data) => {
		console.log("submit", data);
		let todo: ITodo = {
			id: nanoid(6),
			text: data.text,
			isCompleted: false,
		};
		addTodo(todo);
		reset({ text: "" });
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} spellCheck={false} autoComplete="off">
			<div className={styles.wrapper}>
				<input
					className={styles.input + ` ${errors.text ? styles.input_error : ""}`}
					type="text"
					placeholder="What do you need to do today?"
					{...register("text")}
				/>
				<button type="submit" className={styles.button}>
					Add todo
				</button>
			</div>
			{errors.text && <p className={styles.error_message}>{errors.text.message}</p>}
		</form>
	);
};

export default AddTodo;
