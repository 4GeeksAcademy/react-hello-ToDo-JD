import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';

const Lista = () => {
	const [inputValue, SetInputValue] = useState("");
	const [todos, setTodos] = useState([]);

	const handleDelete = (index) => {
		const newTodos = todos.filter((todo, todoIndex) => todoIndex !== index);
		setTodos(newTodos);
	};

	const clearTodos = () => {
		setTodos([]);
	};

	return (
		<div className="container mt-5 p-5 bg-dark align-item-center col-6 border rounded-4">
			<ul className="list-group">
				<h1 className="text-center text-white">To Do List</h1>
				<li className="list-group-item p-3 rounded">
					<input
						type="text"
						onChange={(e) => SetInputValue(e.target.value)}
						value={inputValue}
						onKeyPress={(e) => {
							if (e.key === "Enter" && inputValue.trim() !== "") {
								setTodos([...todos, inputValue]);
								SetInputValue("");
							}
						}}
						className="border w-100 rounded-3"
						placeholder="¿Qué necesitas hacer?"
					/>
				</li>
				{todos.map((todo, index) => (
					<li key={index} className="list-group-item p-3 d-flex justify-content-between align-items-center">
						{todo}
						<FaTimes
							className="delete-icon"
							onClick={() => handleDelete(index)}
						/>
					</li>
				))}
				<div className="div p-1 text-white">{todos.length} items left.</div>
				<button type="button" class="btn btn-outline-info" onClick={clearTodos}>
					Vaciar Tareas
				</button>
			</ul>
		</div>
	);
};

export default Lista;