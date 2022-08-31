
    import './TodoList.css'
import Task from './Task'

const TodoList = (props) => {


    return (
        <div>
            <h1>To do list</h1>
            <ul>
                {props.tasks.map((elt, i) =>
                    <Task
                        key={i}
                        icon={elt.icon}
                        text={elt.task}
                        img={elt.img}
                    />
                )}
            </ul>
        </div>
    )
}

export default TodoList;