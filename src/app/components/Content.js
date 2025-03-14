"use client";
import { motion } from "framer-motion";

const Content = () => {
    return (
        <div className="pt-25 md:pt-20 px-4">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
                className="text-center"
            >
                <motion.h1
                    className="text-5xl md:text-6xl lg:text-9xl font-bold bg-gradient-to-r from-gray-600 via-blue-500 to-cyan-400 inline-block text-transparent bg-clip-text pb-2"
                    initial={{ y: -100 }}
                    animate={{ y: 0 }}
                    transition={{ type: "spring", stiffness: 100 }}
                >
                    GRI Chatbot
                </motion.h1>
                <motion.p
                    className="text-base md:text-xl text-gray-500"
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                >
                    Un chatbot pour vous aider à trouver des informations sur le GRI
                </motion.p>
            </motion.div>
        </div>
    );
};

export default Content;
