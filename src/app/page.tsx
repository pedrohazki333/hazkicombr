"use client";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="h-screen flex justify-center items-center bg-gray-100">
      <motion.h1
        className="text-4xl font-bold text-blue-500"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Hello, FramerMotion!
      </motion.h1>
    </div>
  );
}
