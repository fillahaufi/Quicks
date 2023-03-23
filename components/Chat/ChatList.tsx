import React, { useEffect } from "react";
import ChatItem from "./ChatItem";
import ChatRoom from "./ChatRoom";

type Props = {
    className?: string;
};

const ChatList: React.FC<Props> = props => {
    const [chatList, setChatList] = React.useState<Chat[]>([]);
    const [activeChat, setActiveChat] = React.useState<Chat | null>(null);

    useEffect(() => {
        getAllChats();
    }, []);

    const getAllChats = async () => {
        const result = await fetch(
            "https://private-8480be-quicks.apiary-mock.com/chats",
        );
        const data = await result.json();
        // console.log(data);
        setChatList(data);
    };

    const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value);
    };

    return activeChat ? (
        <ChatRoom chat={activeChat} onBackClick={() => setActiveChat(null)} />
    ) : (
        <div
            className={`px-8 pt-6 flex flex-col rounded-md ${props.className}`}
            data-theme="light">
            <div className="mb-1">
                <input
                    type="text"
                    className="input input-sm input-bordered w-full"
                    placeholder="Search"
                    onChange={onSearch}
                />
                <svg
                    className="absolute right-10 top-[34px]"
                    width="13"
                    height="12"
                    viewBox="0 0 13 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M8.71143 7.54717H9.25345L12.6771 10.9777L11.6548 12L8.22429 8.57633V8.03431L8.03905 7.8422C7.25688 8.51458 6.24145 8.91938 5.13682 8.91938C2.67369 8.91938 0.677124 6.92281 0.677124 4.45969C0.677124 1.99657 2.67369 0 5.13682 0C7.59994 0 9.59651 1.99657 9.59651 4.45969C9.59651 5.56432 9.1917 6.57976 8.51932 7.36192L8.71143 7.54717ZM2.04933 4.4597C2.04933 6.16811 3.42841 7.54718 5.13681 7.54718C6.84522 7.54718 8.22429 6.16811 8.22429 4.4597C8.22429 2.7513 6.84522 1.37222 5.13681 1.37222C3.42841 1.37222 2.04933 2.7513 2.04933 4.4597Z"
                        fill="#333333"
                    />
                </svg>
            </div>
            {chatList.length > 0 ? (
                chatList.map((chat, index) => (
                    <div key={chat.id}>
                        <ChatItem
                            chat={chat}
                            onClick={() => setActiveChat(chat)}
                        />
                        {index !== chatList.length - 1 ? (
                            <svg
                                className="w-full"
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
                        ) : (
                            <></>
                        )}
                    </div>
                ))
            ) : (
                <div className="w-full h-full">
                    <div className="absolute top-1/2 left-0 w-full text-center">
                        <p>Loading chats...</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ChatList;
