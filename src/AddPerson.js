import { useState } from 'react';
import AddPerson from './AddPerson.js';
import TaskList from './TaskList.js';

let nextId = 3;

export default function TaskApp() {
    const [todos, setTodos] = useState('');

    function handleAddPerson(title) {
        setTodos([
            ...todos,
            {
                id: nextId++,
                title: title,
                done: false
            }
        ]);
    }

    function handleChangePerson(nextTodo) {
        setTodos(todos.map(t => {
            if (t.id === nextTodo.id) {
                return nextTodo;
            } else {
                return t;
            }
        }));
    }

    function handleDeleteTodo(todoId) {
        setTodos(
            todos.filter(t => t.id !== todoId)
        );
    }

    return (
        <>
            <AddPerson
                onAddTodo={handleAddPerson}
            />
            <TaskList
                todos={todos}
                onChangeTodo={handleChangePerson}
                onDeleteTodo={handleDeleteTodo}
            />
        </>
    );
}
