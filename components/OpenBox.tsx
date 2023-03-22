import React from "react";

type Props = {
    className?: string;
};
const OpenBox: React.FC<Props> = props => {
    return (
        <div
            className={`w-[734px] h-[737px] bg-white rounded-md ${props.className}`}>
            <h1>tes</h1>
        </div>
    );
};

export default OpenBox;
