"use client";
import { motion } from 'framer-motion';

const Description = () => {
    return (
        <div className="pt-20 md:pt-20 w-11/12 md:w-3/4 lg:w-1/2 mx-auto">
            <motion.h1
                className="text-center text-2xl md:text-4xl font-bold text-gray-700"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: "easeOut", delay: 1.2 }}
            >
                Soulager le support IT
            </motion.h1>
            <motion.p
                className="text-justify text-base md:text-xl p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: "easeOut", delay: 1.4 }}
            >
                Ce projet a été réalisé dans le cadre du module 245, ayant pour objectif de résoudre une problématique métier grâce à une solution innovante. J&apos;ai donc choisi de développer un chatbot capable de réduire la charge de travail du support, qui fait face à un grand nombre de demandes répétitives. Ce bot vise à automatiser certaines tâches et à améliorer l&apos;efficacité du support.
            </motion.p>
        </div>
    );
}

export default Description;
