import { motion } from "framer-motion";
import { achievements } from "../../config/about_me/info";

export const StatsSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="w-full md:w-4/5 mx-auto py-16"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {achievements.map((achievement, index) => (
          <motion.div
            key={achievement.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="text-center bg-[#1E1E1E] p-6 rounded-lg border border-gray-700/50 hover:border-green-400/50 transition-all duration-300"
          >
            <motion.h3
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
              className="text-4xl font-bold text-green-400 mb-2"
            >
              {achievement.value}
            </motion.h3>
            <h4 className="text-xl font-semibold text-white mb-1">
              {achievement.title}
            </h4>
            <p className="text-gray-400">
              {achievement.description}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};