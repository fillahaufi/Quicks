import React, { useEffect } from "react";

type Props = {
    task: Task;
    updateTask?: (task: Task) => void;
};

const TaskItem: React.FC<Props> = props => {
    const [isComplete, setIsComplete] = React.useState(false);
    const [isCollapsed, setIsCollapsed] = React.useState(true);
    const [showOptions, setShowOptions] = React.useState(false);

    useEffect(() => {
        if (props.task.title === "") {
            setIsCollapsed(false);
        }
    }, []);

    return (
        <div className="flex flex-col mt-4" data-theme="light">
            <div
                className="flex flex-row gap-3 w-full"
                onClick={() => setIsCollapsed(!isCollapsed)}>
                <input
                    type="checkbox"
                    className="checkbox"
                    onClick={e => e.stopPropagation()}
                    onChange={() => setIsComplete(!isComplete)}
                />
                {props.task.title === "" ? (
                    <input
                        className={`input input-xs font-bold flex-auto text-left text-base ${
                            isComplete
                                ? "line-through font-normal text-quick-disabled"
                                : ""
                        } ${
                            props.task.title === ""
                                ? "input-bordered"
                                : "input-ghost"
                        }`}
                        type="text"
                        // value={}
                        onClick={e => e.stopPropagation()}
                        placeholder="Add a task"
                        onChange={e => {
                            props.task.title = e.target.value;
                        }}
                        onKeyDown={e => {
                            if (e.key === "Enter") {
                                e.preventDefault();
                                props.updateTask &&
                                    props.updateTask(props.task);
                            }
                        }}
                    />
                ) : (
                    <h1
                        className={`font-bold flex-auto text-left ${
                            isComplete
                                ? "line-through font-normal text-quick-disabled"
                                : ""
                        }`}>
                        {props.task.title}
                    </h1>
                )}
                <p
                    className={`min-w-fit text-red-600 ${
                        isComplete ? "invisible" : ""
                    }`}>
                    <span>2</span> Days left
                </p>
                <p className="min-w-fit">
                    {props.task.deadline &&
                        new Date(props.task.deadline).getDate() +
                            "/" +
                            new Date(props.task.deadline).getMonth() +
                            "/" +
                            new Date(props.task.deadline).getFullYear()}
                    {/* {new Date(props.task.deadline).getDate()}/{""}
                    {new Date(props.task.deadline).getMonth()}/{""}
                    {new Date(props.task.deadline).getFullYear()} */}
                </p>
                <button
                    className="btn btn-circle bg-white hover:bg-white border-white hover:border-white min-h-0 h-6 w-5"
                    onClick={() => setIsCollapsed(!isCollapsed)}>
                    {isCollapsed ? (
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
                    ) : (
                        <svg
                            width="10"
                            height="8"
                            viewBox="0 0 10 8"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M1.175 7.08753L5 3.27086L8.825 7.08752L10 5.91252L5 0.912526L-1.02722e-07 5.91253L1.175 7.08753Z"
                                fill="#4F4F4F"
                            />
                        </svg>
                    )}
                </button>
                <div className="h-fit flex flex-col">
                    <button
                        className="btn btn-circle bg-white hover:bg-white border-white hover:border-white min-h-0 h-6 w-5"
                        onClick={e => {
                            e.stopPropagation();
                            setShowOptions(!showOptions);
                        }}>
                        <svg
                            className=""
                            width="12"
                            height="4"
                            viewBox="0 0 12 4"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M2.00008 0.666672C1.26675 0.666672 0.666748 1.26667 0.666748 2.00001C0.666748 2.73334 1.26675 3.33334 2.00008 3.33334C2.73341 3.33334 3.33341 2.73334 3.33341 2.00001C3.33341 1.26667 2.73341 0.666672 2.00008 0.666672ZM10.0001 0.666672C9.26675 0.666672 8.66675 1.26667 8.66675 2.00001C8.66675 2.73334 9.26675 3.33334 10.0001 3.33334C10.7334 3.33334 11.3334 2.73334 11.3334 2.00001C11.3334 1.26667 10.7334 0.666672 10.0001 0.666672ZM4.66675 2.00001C4.66675 1.26667 5.26675 0.666672 6.00008 0.666672C6.73341 0.666672 7.33341 1.26667 7.33341 2.00001C7.33341 2.73334 6.73341 3.33334 6.00008 3.33334C5.26675 3.33334 4.66675 2.73334 4.66675 2.00001Z"
                                fill="#4F4F4F"
                            />
                        </svg>
                    </button>
                    <button
                        className={`absolute right-5 mt-5 btn min-h-0 h-10 w-28 bg-white hover:bg-white text-red-600 ${
                            showOptions ? "visible" : "invisible"
                        }`}
                        onClick={e => {
                            e.stopPropagation();
                        }}>
                        Delete
                    </button>
                </div>
            </div>
            <div
                className={`text-left mx-10 transition-[max-height] duration-300 ease-in-out ${
                    isCollapsed ? "invisible max-h-0" : "max-h-[500px]"
                }`}>
                <div className="flex flex-col gap-2 mt-3">
                    <div className="flex flex-row items-center gap-4">
                        <div>
                            <svg
                                width="18"
                                height="18"
                                viewBox="0 0 18 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M8.99181 0.666626C4.39181 0.666626 0.666809 4.39996 0.666809 8.99996C0.666809 13.6 4.39181 17.3333 8.99181 17.3333C13.6001 17.3333 17.3335 13.6 17.3335 8.99996C17.3335 4.39996 13.6001 0.666626 8.99181 0.666626ZM9.0003 15.6666C5.31697 15.6666 2.33364 12.6833 2.33364 8.99996C2.33364 5.31662 5.31697 2.33329 9.0003 2.33329C12.6836 2.33329 15.667 5.31662 15.667 8.99996C15.667 12.6833 12.6836 15.6666 9.0003 15.6666ZM8.16681 4.83329H9.41681V9.20829L13.1668 11.4333L12.5418 12.4583L8.16681 9.83329V4.83329Z"
                                    fill="#2F80ED"
                                />
                            </svg>
                        </div>
                        <input
                            type="date"
                            className="input input-bordered input-sm p-5 w-48"
                            value={
                                props.task.deadline
                                    ? new Date(props.task.deadline)
                                          .toISOString()
                                          .slice(0, 10)
                                    : ""
                            }
                            onChange={e => {
                                if (props && props.updateTask) {
                                    props.updateTask({
                                        ...props.task,
                                        deadline: new Date(e.target.value),
                                    });
                                }
                            }}
                        />
                    </div>
                    <div className="flex flex-row items-center gap-5">
                        <div>
                            <svg
                                width="16"
                                height="15"
                                viewBox="0 0 16 15"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M12.2165 0C12.0082 0 11.7915 0.0833333 11.6332 0.241667L10.1082 1.76667L13.2332 4.89167L14.7582 3.36667C15.0832 3.04167 15.0832 2.51667 14.7582 2.19167L12.8082 0.241667C12.6415 0.075 12.4332 0 12.2165 0ZM9.21667 5.01667L9.98333 5.78333L2.43333 13.3333H1.66667V12.5667L9.21667 5.01667ZM0 11.875L9.21667 2.65833L12.3417 5.78333L3.125 15H0V11.875Z"
                                    fill="#2F80ED"
                                />
                            </svg>
                        </div>
                        <textarea
                            placeholder="No Description"
                            className="textarea textarea-ghost textarea-xs w-full max-w-xl"
                            rows={1}
                            value={props.task.description}
                            onChange={(e: { target: { value: any } }) => {
                                if (props && props.updateTask) {
                                    props.updateTask({
                                        ...props.task,
                                        description: e.target.value,
                                    });
                                }
                            }}></textarea>
                    </div>
                </div>
            </div>
            <svg
                className="mt-5 w-full"
                width="671"
                height="2"
                viewBox="0 0 671 2"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M671 1.5H0V0.5H671V1.5Z"
                    fill="#828282"
                />
            </svg>
        </div>
    );
};

export default TaskItem;
