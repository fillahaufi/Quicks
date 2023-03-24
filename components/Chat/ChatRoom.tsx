import React, { useEffect } from "react";
import ChatBubble from "./ChatBubble";

type Props = {
    chat: Chat;
    onBackClick: () => void;
};

const ChatRoom: React.FC<Props> = props => {
    useEffect(() => {
        assignColorToEachUser();
    }, []);

    const [userColor, setUserColor] = React.useState<
        | {
              user: User;
              color: string;
          }[]
        | []
    >([]);
    const [isReply, setIsReply] = React.useState<boolean>(false);

    const assignColorToEachUser = () => {
        const users = props.chat.messages.map(message => message.user);
        console.log("users", users);
        const uniqueUsers = users.filter((user, index) => {
            return users.indexOf(user) === index;
        });
        console.log("uniqueUsers", uniqueUsers);
        const colors = ["orange", "green"];
        const randNum = Math.floor(Math.random() * 2);
        const userColor = uniqueUsers.map(user => {
            return {
                user,
                color: user.id == "current" ? "purple" : colors[randNum],
            };
        });
        console.log("userColor", userColor);
        setUserColor(userColor);
        console.log("userColorFinal", userColor);
    };

    const countUser = () => {
        const users = props.chat.messages.map(message => message.user);
        const uniqueUsers = users.filter((user, index) => {
            return users.indexOf(user) === index;
        });
        return uniqueUsers.length;
    };
    return (
        <div className="flex flex-col w-full h-full">
            <div className="flex flex-row w-full p-5">
                <button
                    className="btn btn-circle bg-transparent border-transparent hover:bg-slate-200 hover:border-transparent"
                    onClick={props.onBackClick}>
                    <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M16 7H3.83L9.42 1.41L8 0L0 8L8 16L9.41 14.59L3.83 9H16V7Z"
                            fill="#333333"
                        />
                    </svg>
                </button>
                <div className="flex flex-col flex-auto mx-3 text-left">
                    <h1 className="text-quick-blue font-semibold text-xl">
                        {props.chat.name}
                    </h1>
                    <p className="text-black">
                        <span>{countUser()}</span> Participants
                    </p>
                </div>
                <button
                    className="btn btn-circle bg-transparent border-transparent hover:bg-slate-200 hover:border-transparent"
                    onClick={props.onBackClick}>
                    <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z"
                            fill="#333333"
                        />
                    </svg>
                </button>
            </div>
            <svg
                className="w-full mb-3"
                height="2"
                viewBox="0 0 706 2"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M706 1.50006L-8.74228e-08 1.5L0 0.5L706 0.500062L706 1.50006Z"
                    fill="#BDBDBD"
                />
            </svg>
            <div className="flex-auto overflow-y-auto">
                {userColor.length == countUser() ? (
                    props.chat.messages.map(message => (
                        <ChatBubble
                            key={message.id}
                            isMe={message.user.id == "current"}
                            msg={message}
                            color={
                                userColor.find(
                                    userColor =>
                                        userColor.user.id === message.user.id,
                                )?.color || "orange"
                            }
                            setIsReply={setIsReply}
                        />
                    ))
                ) : (
                    <div>
                        <h1>loading</h1>
                    </div>
                )}
            </div>
            <div className="flex flex-row p-5" data-theme="light">
                <div className="flex flex-col flex-auto relative">
                    {isReply && (
                        <ReplyBubble
                            className="absolute bottom-11 w-full bg-[#F2F2F2] border-[1px] border-[#828282] rounded-t-md"
                            onCloseClick={() => setIsReply(false)}
                        />
                    )}
                    <input
                        type="text"
                        placeholder="Type a new message"
                        className={`input input-bordered flex-auto focus:outline-none border-[1px] border-[#828282] ${
                            isReply ? "rounded-t-none" : "rounded-md"
                        }`}
                    />
                </div>
                <button className="btn bg-quick-blue hover:bg-quick-blue border-quick-blue hover:border-quick-blue ml-3 mt-auto">
                    Send
                </button>
            </div>
        </div>
    );
};

type ReplyBubbleProps = {
    className?: string;
    onCloseClick?: () => void;
};

const ReplyBubble: React.FC<ReplyBubbleProps> = props => {
    return (
        <div className={`p-4 flex flex-col text-left ${props.className}`}>
            <button
                className="absolute top-1 right-1 bg-transparent hover:bg-transparent border-transparent btn btn-circle min-h-0 h-9 min-w-0 w-9"
                onClick={props.onCloseClick}>
                <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M12 1.20857L10.7914 0L6 4.79143L1.20857 0L0 1.20857L4.79143 6L0 10.7914L1.20857 12L6 7.20857L10.7914 12L12 10.7914L7.20857 6L12 1.20857Z"
                        fill="#4F4F4F"
                    />
                </svg>
            </button>
            <h1 className="font-semibold">
                Replying to <span></span>
            </h1>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias
                quaerat, placeat, maxime nesciunt ad sed excepturi repudiandae
                explicabo ab, accusantium saepe ipsam. Quos quisquam est,
                aperiam maiores ullam obcaecati eos!
            </p>
        </div>
    );
};

export default ChatRoom;
