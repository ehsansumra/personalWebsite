
import { FC } from "react";
interface Props {
    children: React.ReactNode;
    style?: React.CSSProperties;
    narrowStyle?: boolean;
    href: string;
}

const LinkBox: FC<Props> = ({ children, href, style, narrowStyle}) => {
    let defaultStyle = "hover:bg-emerald-300 hover:text-emerald-800 hover:font-bold text-emerald-300 border border-emerald-800 mt-2";
    let padding = " p-1 px-2";
    if (narrowStyle) padding = " px-1 ml-3";
    return (
        <a className={defaultStyle + padding}
            
            href={href}
            target="_blank" rel="noopener noreferrer" style={style}
        >
            {children}
        </a>
    )
}

export default LinkBox;