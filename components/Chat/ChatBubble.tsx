import React from "react";

type Props = {
    isMe: boolean;
    msg: Message;
    color: string;
    setIsReply?: (isReply: boolean) => void;
};

const ChatBubble: React.FC<Props> = props => {
    const [options, setOptions] = React.useState<boolean>(false);
    return (
        <div
            className={`flex flex-col px-5 mb-3 ${
                props.isMe ? "text-right" : "text-left"
            }`}>
            <h1
                className={`${
                    props.color == "orange"
                        ? "text-txt-chat-orange"
                        : props.color == "green"
                        ? "text-txt-chat-green"
                        : "text-txt-chat-purple"
                } font-bold`}>
                {props.msg.user.id == "current" ? "You" : props.msg.user.name}
            </h1>
            <div
                className={`flex ${
                    props.isMe ? "flex-row-reverse" : "flex-row"
                }`}>
                <div
                    className={`rounded-md p-3 ${
                        props.color == "orange"
                            ? "bg-bubble-chat-orange"
                            : props.color == "green"
                            ? "bg-bubble-chat-green"
                            : "bg-bubble-chat-purple"
                    } max-w-xl ${props.isMe ? "text-right" : "text-left"}`}>
                    <p className="text-txt-default">{props.msg.text}</p>
                    <p className="text-txt-default text-sm mt-3">
                        {new Date(props.msg.createdAt).getHours() +
                            ":" +
                            new Date(props.msg.createdAt).getMinutes()}
                    </p>
                </div>
                <div>
                    <button
                        className="btn px-1 bg-transparent hover:bg-transparent border-transparent hover:border-transparent h-3 min-h-[1px]"
                        onClick={() => setOptions(!options)}>
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
                    {options ? (
                        props.isMe ? (
                            <div
                                className="absolute flex flex-col w-32"
                                data-theme="light">
                                <button className="btn bg-white hover:bg-slate-300 text-quick-blue rounded-b-none min-h-0 h-9">
                                    edit
                                </button>
                                <button className="btn bg-white hover:bg-slate-300 text-red-500 rounded-t-none min-h-0 h-9">
                                    delete
                                </button>
                            </div>
                        ) : (
                            <div
                                className="absolute flex flex-col w-32"
                                data-theme="light">
                                <button className="btn bg-white hover:bg-slate-300 text-quick-blue rounded-b-none min-h-0 h-9">
                                    Share
                                </button>
                                <button
                                    className="btn bg-white hover:bg-slate-300 text-quick-blue rounded-t-none min-h-0 h-9"
                                    onClick={() => {
                                        props.setIsReply &&
                                            props.setIsReply(true);

                                        setOptions(false);
                                    }}>
                                    Reply
                                </button>
                            </div>
                        )
                    ) : null}
                </div>
            </div>
        </div>
    );
};

export default ChatBubble;
