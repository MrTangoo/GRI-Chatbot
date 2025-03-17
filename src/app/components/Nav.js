'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const Nav = () => {
    return (
        <nav className="p-5 border-b border-gray-300 backdrop-blur-xl">
            <ul className="flex justify-left">
                <li className="text-2xl">
                    <motion.div
                        initial={{ opacity: 0, y: 0 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: 'easeOut' }}
                    >
                        <Image
                            src="/logo.png"
                            alt="Logo GRI"
                            width={90}
                            height={90}
                            priority
                        />
                    </motion.div>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;