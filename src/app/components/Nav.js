'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Nav = () => {
    // État pour vérifier si l'image est chargée
    const [isImageLoaded, setIsImageLoaded] = useState(false);

    // Fonction qui se déclenche lorsque l'image est chargée
    const handleImageLoad = () => {
        setIsImageLoaded(true);
    };

    return (
        <nav className="p-5 border-b border-gray-300 backdrop-blur-xl">
            <ul className="flex justify-left">
                <li className="text-2xl">
                    <motion.div
                        initial={{ opacity: 0, y: 0 }}
                        animate={{ opacity: isImageLoaded ? 1 : 0, y: 0 }}
                        transition={{ duration: 0.5, ease: 'easeOut' }}
                    >
                        <Image
                            src="/logo.png"
                            alt="Logo GRI"
                            width={90}
                            height={90}
                            priority
                            onLoad={handleImageLoad} // Appeler handleImageLoad quand l'image est complètement chargée
                        />
                    </motion.div>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;
