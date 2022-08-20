import { FC } from "react";

interface Props {
    children: React.ReactNode;
    title: string;
    style?: React.CSSProperties;
}

const HeaderArray: FC<Props> = ({ children, title, style }) => {
    return (
        <>
            <div className="flex justify-start items-center mt-4">
                <h2 style={style} className="mt-4 text-lg  inline-block text-orange border-violet-300 px-1">
                &quot;{title}&quot;
                </h2>

                <div className="mt-4 text-lg ">{": ["}</div>

            </div>
            <p className="mt-2  ml-5 w-full  text-green-200">
                {children}
            </p>
            <div className="text-lg">{"],"}</div>
        </>


    )
}

export default HeaderArray;
