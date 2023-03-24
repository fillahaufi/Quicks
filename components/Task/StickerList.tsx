import React, { useEffect } from "react";

type Props = {
    activeStickers: Sticker[];
    addorRemoveStickerToTask: (sticker: Sticker) => void;
};

const StickerList: React.FC<Props> = props => {
    // const stickers: Sticker[] = [
    //     {
    //         name: "Important ASAP",
    //         bgColor: "#E5F1FF",
    //     },
    //     {
    //         name: "Offline Meeting",
    //         bgColor: "#FDCFA4",
    //     },
    //     {
    //         name: "Virtual Meeting",
    //         bgColor: "#F9E9C3",
    //     },
    //     {
    //         name: "ASAP",
    //         bgColor: "#AFEBDB",
    //     },
    //     {
    //         name: "Client Related",
    //         bgColor: "#CBF1C2",
    //     },
    //     {
    //         name: "Self Task",
    //         bgColor: "#CFCEF9",
    //     },
    //     {
    //         name: "Appointment",
    //         bgColor: "#F9E0FD",
    //     },
    //     {
    //         name: "Court Related",
    //         bgColor: "#9DD0ED",
    //     },
    // ];

    const [testingStickers, setTestingStickers] = React.useState<
        {
            sticker: Sticker;
            border: boolean;
        }[]
    >([
        {
            sticker: {
                name: "Important ASAP",
                bgColor: "#E5F1FF",
            },
            border: false,
        },
        {
            sticker: {
                name: "Offline Meeting",
                bgColor: "#FDCFA4",
            },
            border: false,
        },
        {
            sticker: {
                name: "Virtual Meeting",
                bgColor: "#F9E9C3",
            },
            border: false,
        },
        {
            sticker: {
                name: "ASAP",
                bgColor: "#AFEBDB",
            },
            border: false,
        },
        {
            sticker: {
                name: "Client Related",
                bgColor: "#CBF1C2",
            },
            border: false,
        },
        {
            sticker: {
                name: "Self Task",
                bgColor: "#CFCEF9",
            },
            border: false,
        },
        {
            sticker: {
                name: "Appointment",
                bgColor: "#F9E0FD",
            },
            border: false,
        },
        {
            sticker: {
                name: "Court Related",
                bgColor: "#9DD0ED",
            },
            border: false,
        },
    ]);

    useEffect(() => {
        props.activeStickers && setStickerBorder();
    }, [props.activeStickers]);

    const setStickerBorder = () => {
        const newStickers = testingStickers.map(sticker => {
            const activeSticker = props.activeStickers.find(
                activeSticker => activeSticker.name === sticker.sticker.name,
            );
            if (activeSticker) {
                return {
                    ...sticker,
                    border: true,
                };
            }
            return {
                ...sticker,
                border: false,
            };
        });
        setTestingStickers(newStickers);
    };

    return (
        <div
            className="absolute flex flex-col gap-1 rounded-md p-3 bg-white border-[1px] border-[#828282] w-1/2 mt-11 ml-3"
            data-theme="light">
            {testingStickers.map((sticker, index) => {
                return (
                    <button
                        key={index}
                        className={`btn rounded-md text-[#4F4F4F] bg-[${
                            sticker.sticker.bgColor
                        }] hover:bg-[${sticker.sticker.bgColor}] border-[${
                            sticker.sticker.bgColor
                        }] hover:border-[${
                            sticker.sticker.bgColor
                        }] justify-start normal-case min-h-0 h-9 px-3 py-2 w-full ${
                            sticker.border
                                ? "border-[#2F80ED] hover:border-[#2F80ED]"
                                : ""
                        }`}
                        onClick={() =>
                            props.addorRemoveStickerToTask(sticker.sticker)
                        }>
                        <p>{sticker.sticker.name}</p>
                    </button>
                );
            })}
        </div>
    );
};

export default StickerList;
