import React from "react";

type Props = {
    isMe: boolean;
};

const ChatBubble: React.FC<Props> = props => {
    return (
        <div
            className={`flex flex-col px-5 mb-3 ${
                props.isMe ? "text-right" : "text-left"
            }`}>
            <h1 className="text-txt-chat-purple font-bold">You</h1>
            <div
                className={`flex ${
                    props.isMe ? "flex-row-reverse" : "flex-row"
                }`}>
                <div
                    className={`rounded-md p-3 bg-bubble-chat-purple max-w-xl ${
                        props.isMe ? "text-right" : "text-left"
                    }`}>
                    <p className="text-txt-default">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Velit illo reprehenderit cumque dolores, deleniti nulla
                        dicta libero ducimus. Minus cupiditate quod eveniet
                        voluptate dolorum. Sed maiores nisi ducimus cupiditate
                        obcaecati.
                    </p>
                </div>
                <button className="btn px-1 bg-transparent hover:bg-transparent border-transparent hover:border-transparent h-3 min-h-[1px]">
                    <svg
                        className=""
                        width="12"
                        height="4"
                        viewBox="0 0 12 4"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M2.00008 0.666672C1.26675 0.666672 0.666748 1.26667 0.666748 2.00001C0.666748 2.73334 1.26675 3.33334 2.00008 3.33334C2.73341 3.33334 3.33341 2.73334 3.33341 2.00001C3.33341 1.26667 2.73341 0.666672 2.00008 0.666672ZM10.0001 0.666672C9.26675 0.666672 8.66675 1.26667 8.66675 2.00001C8.66675 2.73334 9.26675 3.33334 10.0001 3.33334C10.7334 3.33334 11.3334 2.73334 11.3334 2.00001C11.3334 1.26667 10.7334 0.666672 10.0001 0.666672ZM4.66675 2.00001C4.66675 1.26667 5.26675 0.666672 6.00008 0.666672C6.73341 0.666672 7.33341 1.26667 7.33341 2.00001C7.33341 2.73334 6.73341 3.33334 6.00008 3.33334C5.26675 3.33334 4.66675 2.73334 4.66675 2.00001Z"
                            fill="#4F4F4F"
                        />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default ChatBubble;