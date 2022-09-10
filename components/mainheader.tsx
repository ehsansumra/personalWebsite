
import { FC } from "react";
interface Props {
    children: React.ReactNode;
    style?: React.CSSProperties;
    margin?: boolean;
    firstHeader?: boolean;
    noMargin?:boolean;
    color?: string;
}

const MainHeader: FC<Props> = ({ children, style, margin, firstHeader, noMargin, color}) => {
    let colorStyle = color ? color : " text-violet-300 "
    let marginStyle = " mt-48 "
    if (margin) marginStyle = " mt-20 ";
    if (firstHeader) marginStyle = " mt-10 xm:mt-36 "
    if (noMargin) marginStyle= " ";
    
    let defaultStyle = "xm:text-2xl text-xl" + marginStyle + colorStyle;
    
    return (
        <h1 className={defaultStyle} style={style}>
            {children}
        </h1>
    )
}

export default MainHeader;