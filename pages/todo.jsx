import { useState } from "react";
import Button from "./button";
import Card from "./card";
import Input from "./input";

export default function tasks() {
    const [newTaks, setNewTask] = useState("");
    const [tasks, setTasks] = useState([]);
    function handleClick(e) {
        e.preventDefault();
        setTasks((prevtasks) => [
            ...prevtasks,
            {
                id: Math.floor(Math.random() * Date.now()),
                name: newTaks,
                completed: false,
            },
        ]);
        setNewTask(" ");
    }
    function handleCompletedTask(id) {
        const updateTask = tasks.map((task) => {
            if (id === task.id) {
                return {
                    ...task,
                    completed: true,
                };
            }
            return tasks;
        });
        setTasks(updateTask);
    }
    function handleRemoveTask(id) {
        const removeTask = tasks.filter((task) => id !== task.id);
        setTasks(removeTask);
    }
    return (
        <Card>
            <Card.Title>tasks</Card.Title>
            <Card.Body>
                <form>
                    <div className="flex items-center gap-2">
                        <Input value={newTaks} onChange={(e) => setNewTask(e.target.value)} />
                        <Button onClick={handleClick} tombol={"ADD"} />
                    </div>
                </form>
                {tasks.length > 0 ? (
                    <ol className="space-y-2 mt-4">
                        {tasks.map((tasks) => {
                            return (
                                <li key={tasks.id} className={"flex items-center justify-between"}>
                                    <span>
                                        {tasks.name}
                                        {tasks.completed ? "✔" : "❌"}
                                    </span>
                                    <div className="flex items-center gap-x-2">
                                        <button
                                            onClick={() => handleCompletedTask(tasks.id)}
                                            className="px-2 py-1 border text-xs"
                                        >
                                            complete
                                        </button>
                                        <button
                                            onClick={() => handleRemoveTask(tasks.id)}
                                            className="px-2 py-1 border text-xs"
                                        >
                                            remove
                                        </button>
                                    </div>
                                </li>
                            );
                        })}
                    </ol>
                ) : null}
            </Card.Body>
            <Card.Footer>You have {tasks.length} taskss</Card.Footer>
        </Card>
    );
}
