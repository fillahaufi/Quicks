import React from "react";

type Props = {
    loadWhat: string;
};

const Loading: React.FC<Props> = props => {
    return (
        <div className="w-full h-full">
            <div className="absolute flex flex-col justify-center top-1/2 left-0 w-full text-center">
                <div className="mx-auto">
                    <svg
                        className="loader"
                        width="86"
                        height="86"
                        viewBox="0 0 86 86"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M17.801 60.5045L67.6057 24.9025L67.6796 25.0058C67.6551 24.9713 67.6306 24.9369 67.606 24.9025C57.7748 11.1492 38.6557 7.96983 24.9024 17.8011C11.1492 27.6323 7.96981 46.7513 17.801 60.5045Z"
                            fill="#C4C4C4"
                        />
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M67.6059 24.9025L17.801 60.5047L17.7772 60.4716C17.7851 60.4826 17.793 60.4937 17.8009 60.5047C27.6322 74.258 46.7513 77.4374 60.5045 67.6061C74.2578 57.7748 77.4372 38.6558 67.6059 24.9025Z"
                            fill="#F8F8F8"
                        />
                        <path
                            d="M26.3986 59.0807C26.3986 61.4391 24.4867 63.351 22.1283 63.351C19.7698 63.351 17.8579 61.4391 17.8579 59.0807C17.8579 56.7222 19.7698 54.8103 22.1283 54.8103C24.4867 54.8103 26.3986 56.7222 26.3986 59.0807Z"
                            fill="#C4C4C4"
                        />
                        <path
                            d="M68.3256 27.2472C68.3256 29.6056 66.4137 31.5175 64.0553 31.5175C61.6968 31.5175 59.7849 29.6056 59.7849 27.2472C59.7849 24.8887 61.6968 22.9768 64.0553 22.9768C66.4137 22.9768 68.3256 24.8887 68.3256 27.2472Z"
                            fill="#C4C4C4"
                        />
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M24.1859 55.9404C31.4963 66.1672 45.7131 68.5313 55.9399 61.2209C66.1666 53.9105 68.5308 39.6937 61.2204 29.4669C53.9099 19.2402 39.6932 16.876 29.4664 24.1864C19.2396 31.4969 16.8755 45.7136 24.1859 55.9404Z"
                            fill="white"
                        />
                    </svg>
                </div>
                <p>
                    Loading <span>{props.loadWhat}</span>...
                </p>
            </div>
        </div>
    );
};

export default Loading;
