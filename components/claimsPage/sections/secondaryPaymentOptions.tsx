'use client';

import { motion } from 'framer-motion';
import { Clock, ArrowRight } from 'lucide-react';

interface PaymentMethod {
  id: string;
  name: string;
  description: string;
  icon: any;
  timeframe: string;
  priority: number;
  color: string;
}

interface SecondaryPaymentOptionProps {
  method: PaymentMethod;
  onSelect: (methodId: string) => void;
  variants: any;
}

export function SecondaryPaymentOption({ method, onSelect, variants }: SecondaryPaymentOptionProps) {

  const methodColorClasses: Record<string, string> = {
  'direct-card':
    'bg-green-50 dark:bg-green-900/30 text-green-600 dark:text-green-400',
  ach:
    'bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400',
  check:
    'bg-amber-50 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400',
  'virtual-card':
    'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400',
};

  return (
    <motion.div key={method.id} variants={variants}>
      <button
        onClick={() => onSelect(method.id)}
        className="w-full h-full bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-200 dark:border-gray-700 flex flex-col text-left gap-4 relative overflow-hidden group"
      >
        <div className="flex items-center gap-3 mb-1">
          <div
              className={`p-2 rounded-full ${
                methodColorClasses[method.id]
              }`}
            >
              <method.icon className="h-5 w-5" />
            </div>
          <h3 className="font-bold">{method.name}</h3>
        </div>
        <p className="text-gray-600 dark:text-gray-400 text-sm">
          {method.description}
        </p>
        <div className="mt-auto flex items-center justify-between">
          <span className="text-xs text-gray-500 flex items-center gap-1">
            <Clock className="h-3 w-3" />
            {method.timeframe}
          </span>
          <span className="text-blue-600 flex items-center text-sm">
            <span>Select</span>
            <ArrowRight className="h-3 w-3 ml-1 transition-transform group-hover:translate-x-1" />
          </span>
        </div>
        
        {/* Background glow effect on hover */}
        <div className="absolute inset-0 bg-gray-600/5 dark:bg-gray-600/10 opacity-0 group-hover:opacity-100 transition-opacity" />
      </button>
    </motion.div>
  );
}