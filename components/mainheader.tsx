
import { FC } from "react";
interface Props {
    children: React.ReactNode;
    style?: React.CSSProperties;
    margin?: boolean;
}

const MainHeader: FC<Props> = ({ children, style, margin }) => {
    let marginStyle = " sm:mt-0 mt-36"
    if (margin) marginStyle = " sm:mt-10 mt-36";
    let defaultStyle = "text-2xl text-violet-300" + marginStyle;
    
    return (
        <h1 className={defaultStyle}>
            {children}
        </h1>
    )
}

export default MainHeader;