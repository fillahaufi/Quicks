import React from "react";

type Props = {
    className?: string;
    onclick?: () => void;
    children: React.ReactNode;
};
const QButton: React.FC<Props> = props => {
    return (
        <button
            onClick={props.onclick}
            className={`btn btn-circle ${props.className}`}>
            {props.children}
        </button>
    );
};

export default QButton;
