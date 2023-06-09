declare type User = {
    id: number | "current";
    name: string;
};

declare type Message = {
    id: number;
    text: string;
    createdAt: Date;
    user: User;
};

declare type Reply = {
    msgId: number;
    msgReplyId: number;
};

declare type Chat = {
    id: number;
    name: string;
    messages: Message[];
};

declare type MailBox = {
    id: number;
    name: string;
    chats: Chat[];
};

declare type Task = {
    id: number;
    title: string;
    description: string;
    deadline: Date?;
    stickers: Sticker[];
    completed: boolean;
};

declare type Sticker = {
    name: string;
    bgColor: string;
};
