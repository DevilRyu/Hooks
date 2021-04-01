import React from 'react'
import { useForm } from '../../hooks/useForm';

export const TodoAdd = ({handleAddTodo}) => {

    const [{ description }, handleInputChange, reset] = useForm({
        description: ''
    });

    const handleSubmit = (e) => {

        if (description.trim().length <= 1) {
            return;
        }
        e.preventDefault();

        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false
        };

        handleAddTodo(newTodo);
        reset();

    };

    return (
        <>
            <h4>Agregar TODO</h4>
            <hr />
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="description"
                    placeholder="Aprender..."
                    autoComplete="off"
                    className="form-control"
                    value={description}
                    onChange={handleInputChange}
                >
                </input>

                <button
                    type="submit"
                    className="btn btn-outline-primary mt-1"
                    style={{ width: "100%" }}
                >
                    Agregar
                        </button>
            </form>
        </>
    )
}
