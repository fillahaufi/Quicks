import React from "react";

type Props = {
    chat: Chat;
    onClick: () => void;
};

const ChatItem: React.FC<Props> = props => {
    return (
        <div
            onClick={props.onClick}
            className="py-[22px] px-3 flex flex-row rounded-md bg-white hover:bg-slate-200 hover:cursor-pointer">
            <div className="flex flex-row">
                <div className="py-[10px] px-[11px] w-[34px] h-[34px] rounded-full bg-slate-400">
                    <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M6 0C4.3425 0 3 1.3425 3 3C3 4.6575 4.3425 6 6 6C7.6575 6 9 4.6575 9 3C9 1.3425 7.6575 0 6 0ZM7.5 3C7.5 2.175 6.825 1.5 6 1.5C5.175 1.5 4.5 2.175 4.5 3C4.5 3.825 5.175 4.5 6 4.5C6.825 4.5 7.5 3.825 7.5 3ZM10.5 10.5C10.35 9.9675 8.025 9 6 9C3.9825 9 1.6725 9.96 1.5 10.5H10.5ZM0 10.5C0 8.505 3.9975 7.5 6 7.5C8.0025 7.5 12 8.505 12 10.5V12H0V10.5Z"
                            fill="white"
                        />
                    </svg>
                </div>
                <div className="py-[10px] px-[11px] w-[34px] h-[34px] rounded-full bg-quick-blue -ml-4">
                    <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M6 0C4.3425 0 3 1.3425 3 3C3 4.6575 4.3425 6 6 6C7.6575 6 9 4.6575 9 3C9 1.3425 7.6575 0 6 0ZM7.5 3C7.5 2.175 6.825 1.5 6 1.5C5.175 1.5 4.5 2.175 4.5 3C4.5 3.825 5.175 4.5 6 4.5C6.825 4.5 7.5 3.825 7.5 3ZM10.5 10.5C10.35 9.9675 8.025 9 6 9C3.9825 9 1.6725 9.96 1.5 10.5H10.5ZM0 10.5C0 8.505 3.9975 7.5 6 7.5C8.0025 7.5 12 8.505 12 10.5V12H0V10.5Z"
                            fill="white"
                        />
                    </svg>
                </div>
            </div>
            <div className="flex flex-col flex-auto text-left mx-3">
                <h1 className="text-quick-blue font-semibold">
                    {props.chat.name}
                </h1>
                <p className="font-semibold">
                    {
                        props.chat.messages[props.chat.messages.length - 1].user
                            .name
                    }{" "}
                    :
                </p>
                <p>
                    {props.chat.messages[props.chat.messages.length - 1].text}
                </p>
            </div>
            <div>
                <p>
                    {new Date(
                        props.chat.messages[
                            props.chat.messages.length - 1
                        ].createdAt,
                    ).toLocaleString()}
                </p>
            </div>
        </div>
    );
};

export default ChatItem;
