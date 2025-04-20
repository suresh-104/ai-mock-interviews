import React from "react";

const Logo = () => {
  return (
    <div className="flex items-center">
      <div className="relative">
        <span className="text-2xl font-bold text-gray-900 dark:text-white">
          Prepa<span className="text-blue-600 dark:text-blue-400">FR</span>
        </span>
        <div className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-gradient-to-r from-blue-600 via-white to-red-600 dark:from-blue-500 dark:via-white dark:to-red-500 rounded-full"></div>
      </div>
    </div>
  );
};

export default Logo;
