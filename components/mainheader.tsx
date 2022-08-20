
import { FC } from "react";
interface Props {
    children: React.ReactNode;
    style?: React.CSSProperties;
    margin?: boolean;
    firstHeader?: boolean;
}

const MainHeader: FC<Props> = ({ children, style, margin, firstHeader}) => {
    let marginStyle = " mt-48"
    if (margin) marginStyle = " mt-20";
    if (firstHeader) marginStyle = " mt-10 xm:mt-36"
    let defaultStyle = "xm:text-2xl text-xl text-violet-300" + marginStyle;
    
    return (
        <h1 className={defaultStyle} style={style}>
            {children}
        </h1>
    )
}

export default MainHeader;