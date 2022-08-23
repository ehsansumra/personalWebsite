import { FC } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';

interface Props {
    children: React.ReactNode;
}

const Transition: FC<Props> = ({ children }) => {
    const { asPath } = useRouter();

    const variants = {
        out: {
            opacity: 0,
            y: 40,
            transition: {
                duration: 0.55,
            }
        },

        in: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.55,
                
            }
        }
    }
    return (
        <div className="effect-1">
            <AnimatePresence
                initial={true}
                mode="wait"
            >
                <motion.div
                    key={asPath}
                    variants={variants}
                    animate="in"
                    initial="out"
                    exit="out"
                >
                    {children}
                </motion.div>
            </AnimatePresence>
        </div>
    )
}

export default Transition;