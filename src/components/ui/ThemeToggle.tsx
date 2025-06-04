// // src/components/ui/ThemeToggle.tsx
// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Sun, Moon, Monitor, ChevronDown } from 'lucide-react';
// import { useTheme } from '../../contexts/ThemeContext';

// interface ThemeToggleProps {
//   variant?: 'button' | 'dropdown';
//   className?: string;
// }

// const ThemeToggle: React.FC<ThemeToggleProps> = ({ 
//   variant = 'button', 
//   className = '' 
// }) => {
//   const { theme, effectiveTheme, setTheme, toggleTheme } = useTheme();
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//   const themeOptions = [
//     { value: 'light', label: 'Light', icon: Sun },
//     { value: 'dark', label: 'Dark', icon: Moon },
//     { value: 'system', label: 'System', icon: Monitor },
//   ] as const;

//   const currentThemeOption = themeOptions.find(option => option.value === theme);
//   const CurrentIcon = currentThemeOption?.icon || Sun;

//   if (variant === 'button') {
//     return (
//       <motion.button
//         onClick={toggleTheme}
//         className={`
//           relative p-3 rounded-xl border border-gray-300 dark:border-gray-600 
//           bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700
//           transition-all duration-300 group ${className}
//         `}
//         whileHover={{ scale: 1.05 }}
//         whileTap={{ scale: 0.95 }}
//         aria-label="Toggle theme"
//       >
//         <div className="relative w-5 h-5">
//           <AnimatePresence mode="wait">
//             {effectiveTheme === 'light' ? (
//               <motion.div
//                 key="sun"
//                 initial={{ opacity: 0, rotate: -90, scale: 0 }}
//                 animate={{ opacity: 1, rotate: 0, scale: 1 }}
//                 exit={{ opacity: 0, rotate: 90, scale: 0 }}
//                 transition={{ duration: 0.3 }}
//                 className="absolute inset-0"
//               >
//                 <Sun className="w-5 h-5 text-amber-500" />
//               </motion.div>
//             ) : (
//               <motion.div
//                 key="moon"
//                 initial={{ opacity: 0, rotate: 90, scale: 0 }}
//                 animate={{ opacity: 1, rotate: 0, scale: 1 }}
//                 exit={{ opacity: 0, rotate: -90, scale: 0 }}
//                 transition={{ duration: 0.3 }}
//                 className="absolute inset-0"
//               >
//                 <Moon className="w-5 h-5 text-blue-400" />
//               </motion.div>
//             )}
//           </AnimatePresence>
//         </div>
        
//         {/* Tooltip */}
//         <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
//           Switch to {effectiveTheme === 'light' ? 'dark' : 'light'} mode
//         </div>
//       </motion.button>
//     );
//   }

//   return (
//     <div className={`relative ${className}`}>
//       <motion.button
//         onClick={() => setIsDropdownOpen(!isDropdownOpen)}
//         className="
//           flex items-center space-x-2 px-4 py-2 rounded-xl border border-gray-300 dark:border-gray-600 
//           bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700
//           transition-all duration-300 min-w-[120px]
//         "
//         whileHover={{ scale: 1.02 }}
//         whileTap={{ scale: 0.98 }}
//       >
//         <CurrentIcon className="w-4 h-4 text-gray-600 dark:text-gray-300" />
//         <span className="text-sm font-medium text-gray-700 dark:text-gray-300 capitalize">
//           {theme}
//         </span>
//         <ChevronDown 
//           className={`w-4 h-4 text-gray-600 dark:text-gray-300 transition-transform duration-200 ${
//             isDropdownOpen ? 'rotate-180' : ''
//           }`} 
//         />
//       </motion.button>

//       <AnimatePresence>
//         {isDropdownOpen && (
//           <>
//             {/* Backdrop */}
//             <div
//               className="fixed inset-0 z-10"
//               onClick={() => setIsDropdownOpen(false)}
//             />
            
//             {/* Dropdown */}
//             <motion.div
//               initial={{ opacity: 0, y: -10, scale: 0.95 }}
//               animate={{ opacity: 1, y: 0, scale: 1 }}
//               exit={{ opacity: 0, y: -10, scale: 0.95 }}
//               transition={{ duration: 0.2 }}
//               className="
//                 absolute top-full mt-2 left-0 w-full z-20
//                 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600
//                 rounded-xl shadow-lg backdrop-blur-sm
//               "
//             >
//               <div className="py-1">
//                 {themeOptions.map((option) => {
//                   const Icon = option.icon;
//                   const isSelected = theme === option.value;
                  
//                   return (
//                     <motion.button
//                       key={option.value}
//                       onClick={() => {
//                         setTheme(option.value);
//                         setIsDropdownOpen(false);
//                       }}
//                       className={`
//                         w-full flex items-center space-x-3 px-4 py-2 text-left
//                         hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-150
//                         ${isSelected ? 'bg-blue-50 dark:bg-blue-900/30' : ''}
//                       `}
//                       whileHover={{ x: 4 }}
//                       transition={{ duration: 0.15 }}
//                     >
//                       <Icon className={`w-4 h-4 ${
//                         isSelected 
//                           ? 'text-blue-600 dark:text-blue-400' 
//                           : 'text-gray-600 dark:text-gray-300'
//                       }`} />
//                       <span className={`text-sm font-medium ${
//                         isSelected 
//                           ? 'text-blue-600 dark:text-blue-400' 
//                           : 'text-gray-700 dark:text-gray-300'
//                       }`}>
//                         {option.label}
//                       </span>
//                       {isSelected && (
//                         <motion.div
//                           initial={{ scale: 0 }}
//                           animate={{ scale: 1 }}
//                           className="ml-auto w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full"
//                         />
//                       )}
//                     </motion.button>
//                   );
//                 })}
//               </div>
//             </motion.div>
//           </>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// export default ThemeToggle;