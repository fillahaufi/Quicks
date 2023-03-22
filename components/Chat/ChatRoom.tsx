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
        <div className="grid grid-cols-1 w-full">
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
            {userColor.length > 0
                ? props.chat.messages.map(message => (
                      <ChatBubble
                          key={message.id}
                          isMe={message.user.id == "current"}
                          msg={message}
                          color={
                              userColor.find(
                                  userColor =>
                                      userColor.user.id == message.user.id,
                              )?.color || "purple"
                          }
                      />
                  ))
                : null}
        </div>
    );
};

export default ChatRoom;
