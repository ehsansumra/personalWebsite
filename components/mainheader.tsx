
import { FC } from "react";
interface Props {
    children: React.ReactNode;
    style?: React.CSSProperties;
    margin?: boolean;
    firstHeader?: boolean;
}

const MainHeader: FC<Props> = ({ children, style, margin, firstHeader}) => {
    let marginStyle = " lg:mt-0 mt-48"
    if (margin) marginStyle = " lg:mt-10 mt-48";
    if (firstHeader) marginStyle = " lg:mt-0 mt-36"
    let defaultStyle = "text-2xl text-violet-300" + marginStyle;
    
    return (
        <h1 className={defaultStyle} style={style}>
            {children}
        </h1>
    )
}

export default MainHeader;