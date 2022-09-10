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
                <h2 style={style} className="mt-4 xm:text-lg   inline-block text-emerald-300 border-violet-300 px-1">
                &quot;{title}&quot;
                </h2>

                <div className="mt-4 xm:text-lg text-gray-300">{": ["}</div>

            </div>
            <p className="mt-2  ml-5 w-full  text-emerald-300">
                {children}
            </p>
            <div className="xm:text-lg text-gray-300">{"],"}</div>
        </>


    )
}

export default HeaderArray;
