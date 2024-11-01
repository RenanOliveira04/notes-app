import { useEffect, useState } from "react";
import { Todo } from "../types/todo";

export default function useTodos() {
    const [todos, setTodos] = useState<Todo[]>([]);

    useEffect(() => {
        async function fetchTodos() {
            try {
                const response = await fetch('http://localhost:3000/todos');
                const data = await response.json();
                setTodos(data);
            } catch (error) {
                console.error("Erro ao buscar todos:", error);
            }
        }
        fetchTodos();
    }, []);

    async function addTodo(title: string) {
        try {
            const response = await fetch('http://localhost:3000/todos', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ title }),
            });
            const newTodo = await response.json();
            setTodos((prevTodos) => [...prevTodos, newTodo]);
        } catch (error) {
            console.error("Erro ao adicionar todo:", error);
        }
    }

    async function setTodoCompleted(id: number, completed: boolean) {
        try {
            const response = await fetch(`http://localhost:3000/todos/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ completed }),
            });
            const updatedTodo = await response.json();
            setTodos((prevTodos) =>
                prevTodos.map((todo) => (todo.id === id ? updatedTodo : todo))
            );
        } catch (error) {
            console.error("Erro ao atualizar todo:", error);
        }
    }

    async function deleteTodo(id: number) {
        try {
            await fetch(`http://localhost:3000/todos/${id}`, {
                method: 'DELETE',
            });
            setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
        } catch (error) {
            console.error("Erro ao deletar todo:", error);
        }
    }

    const deleteAllCompletedTodos = async () => {
        try {
            await fetch('/api/todos/completed', {
                method: 'DELETE',
            });
            setTodos(prevTodos => prevTodos.filter(todo => !todo.completed));
        } catch (error) {
            console.error('Failed to delete completed todos:', error);
        }
    };

    return { todos, addTodo, setTodoCompleted, deleteTodo, deleteAllCompletedTodos };
}