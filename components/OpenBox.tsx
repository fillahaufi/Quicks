import React from "react";

type Props = {
    className?: string;
    children: React.ReactNode;
};
const OpenBox: React.FC<Props> = props => {
    return (
        <div
            className={`w-[734px] h-[737px] bg-white rounded-md ${props.className}`}>
            {props.children}
        </div>
    );
};

export default OpenBox;
