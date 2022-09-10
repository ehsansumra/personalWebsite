
import { FC } from "react";
interface Props {
    children: React.ReactNode;
    style?: React.CSSProperties;
}

const HeaderBox: FC<Props> = ({ children, style }) => {
    return (
        <h2 style={style} className="mt-4 text-lg border inline-block text-violet-200 border-violet-300 p-1 px-2">
            {children}
        </h2>

    )
}

export default HeaderBox;