import { FC } from "react";

interface Props {
    children: React.ReactNode;
    title: string;
    style?: React.CSSProperties;
    margin?: boolean,
    firstHeader?:boolean,
}

const JsonHeader: FC<Props> = ({ children, title, style,margin, firstHeader }) => {
    let marginStyle = " mt-48"
    if (margin) marginStyle = " mt-48";
    if (firstHeader) marginStyle = " mt-36"
    let defaultStyle = "text-2xl text-violet-300";
    return (

        <section className={marginStyle}>

            <div className="flex justify-start items-center mt-4">
                <h1 className={defaultStyle} style={style}>
                    {title}<span className="text-red-300">.json</span>
                </h1>

                <div className={defaultStyle}>{": {"}</div>

            </div>
            <section className="ml-2">
                {children}
            </section>
            <div className={defaultStyle + " mt-4"}>{"}"}</div>
        </section>


    )
}

export default JsonHeader;