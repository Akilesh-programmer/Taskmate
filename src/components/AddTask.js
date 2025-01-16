export const AddTask = ({tasklist, setTasklist, task, setTask}) => {

    const handleSubmit = (e) => {
        e.preventDefault();

        if(task.id) {
            const date = new Date();
            const updatedTasklist = tasklist.map((todo) => (
                todo.id === task.id ? {id: task.id, name: e.target.task.value, time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`} : todo
            ));
            setTasklist(updatedTasklist);
        } else {
            const date = new Date();
            // date.getTime will get the millisecond at which task was created.
            // Impossible to match the millisecond for creating the task.
            const newTask = {
                id: date.getTime(), 
                name: e.target.task.value, 
                time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`
            };
            setTasklist([...tasklist, newTask]);
            e.target.task.value = "";
        }
    }
    
    return (
        <section className="addTask">
            <form onSubmit={handleSubmit}>
                <input type="text" name="task" value={task.name} autoComplete="off" placeholder="Add Task" maxLength={25} onChange={e => setTask({...task, name: e.target.value})} />
                <button type="submit">{task.id ? "UPDATE" : "ADD"}</button>
            </form>
        </section>
    )
}