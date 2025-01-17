export const AddTask = ({tasklist, setTasklist, task, setTask}) => {

    const handleSubmit = (e) => {
        e.preventDefault();

        if(task.id) {
            const date = new Date();
            const updatedTasklist = tasklist.map((todo) => (
                todo.id === task.id ? {id: task.id, name: e.target.task.value, time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`} : todo
            ));
            setTasklist(updatedTasklist);
            setTask({});
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
            setTask({});
        }
    }

    /*
        The line value={task.name || ""} is very important, when we set the
        value of task to {} after finishing our works, it becomes undefined.
        It does not become 0 or null, it will become undefined, so
        for our functionality to work, ie, for the text to erase from the
        input field after submitting or updating, the line should be written like this
        If we do not write this line, then we can see an error in the console,
        but after writing this line that error will also be gone from the console.
    */
    
    return (
        <section className="addTask">
            <form onSubmit={handleSubmit}>
                <input type="text" name="task" value={task.name || ""} autoComplete="off" placeholder="Add Task" maxLength={25} onChange={e => setTask({...task, name: e.target.value})} />
                <button type="submit">{task.id ? "UPDATE" : "ADD"}</button>
            </form>
        </section>
    )
}