import { useState } from "react"
import TodoList from "../component/TodoList";
import { IoMdAdd } from "react-icons/io";

const Dashboard = () => {
    const [data, setData] = useState("");
    const [todoList, setTodoList] = useState("")

    const handileSubmit = () => {
        console.log(data)
    }

    return (
        <div className="bg-amber-100 w-[300px] justify-center content-center">
            <div className="justify-items-center">
                <input className="border-black border-2 m-4 p-4 w-[200px]"
                    type="text"
                    value={data}
                    onChange={(e) => setData(e.target.value)} />

                <button className="bg-blue-600 rounded-2xl p-4 text-black"
                    onClick={handileSubmit}> Add</button>
            </div>
            {
                TodoList.length > 0 && (
                    TodoList.map((item, index) => {
                        <TodoList item={item} index={index} />
                    })
                )
            }

        </div>


    )
}

export default Dashboard;