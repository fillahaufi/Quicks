import React, { useEffect } from "react";
import TaskItem from "./TaskItem";
import Loading from "../Loading";

const TaskList = () => {
    const [showOptions, setShowOptions] = React.useState(false);
    const [taskList, setTaskList] = React.useState<Task[]>([]);

    useEffect(() => {
        getAllTasks();
    }, []);

    const getAllTasks = async () => {
        const result = await fetch(
            "https://private-8480be-quicks.apiary-mock.com/tasks",
        );
        const data = await result.json();
        // console.log(data);
        setTaskList(data);
    };
    return (
        <div
            className="flex flex-col w-full h-full p-5 rounded-md"
            data-theme="light">
            <div className="flex flex-row mb-5">
                <div className="">
                    <button
                        className="btn bg-white hover:bg-slate-300 text-black min-h-0 h-11 ml-20"
                        onClick={() => setShowOptions(!showOptions)}>
                        My Tasks{" "}
                        <span className="ml-3">
                            <svg
                                width="11"
                                height="8"
                                viewBox="0 0 11 8"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M9.59795 0.912477L5.77295 4.72914L1.94795 0.912476L0.772949 2.08748L5.77295 7.08748L10.7729 2.08748L9.59795 0.912477Z"
                                    fill="#4F4F4F"
                                />
                            </svg>
                        </span>
                    </button>
                    <div
                        className={`absolute flex flex-col w-72 mt-2 duration-200 ease-in-out ${
                            showOptions
                                ? "opacity-100"
                                : "opacity-0 pointer-events-none"
                        }`}>
                        <button className="btn bg-white hover:bg-slate-200 text-black rounded-b-none">
                            Personal Errands
                        </button>
                        <button className="btn bg-white hover:bg-slate-200 text-black rounded-t-none">
                            Urgent To-DO
                        </button>
                    </div>
                </div>
                <button className="btn bg-quick-blue hover:bg-quick-blue border-quick-blue hover:border-quick-blue min-h-0 h-11 ml-auto">
                    New Task
                </button>
            </div>
            <div>
                {taskList.length > 0 ? (
                    taskList.map(task => {
                        return <TaskItem key={task.id} task={task} />;
                    })
                ) : (
                    <Loading loadWhat={"tasks"} />
                )}
            </div>
        </div>
    );
};

export default TaskList;
