'use client';

import { motion } from 'framer-motion';

interface TransferProgressContentProps {
  modalPaymentMethod: string;
}

export function TransferProgressContent({ modalPaymentMethod }: TransferProgressContentProps) {
  return (
    <div className="py-10 flex flex-col items-center justify-center">
      <div className="mb-6">
        <motion.div 
          className="h-16 w-16 rounded-full border-4 border-blue-200 border-t-blue-600"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
      </div>
      <p className="text-center text-gray-600 dark:text-gray-400">
        Transferring funds to your {modalPaymentMethod.toLowerCase()}...
      </p>
    </div>
  );
}