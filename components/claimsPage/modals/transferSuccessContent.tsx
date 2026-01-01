'use client';

import { Check } from 'lucide-react';

interface TransferSuccessContentProps {
  transferAmount: string;
  modalPaymentMethod: string;
  onClose: () => void;
}

export function TransferSuccessContent({
  transferAmount,
  modalPaymentMethod,
  onClose
}: TransferSuccessContentProps) {
  return (
    <div className="py-6 text-center">
      <div className="flex justify-center mb-4">
        <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
          <Check className="h-8 w-8 text-green-600 dark:text-green-400" />
        </div>
      </div>
      <h3 className="text-xl font-bold mb-2">Transfer Successful!</h3>
      <p className="text-gray-600 dark:text-gray-400 mb-6">
        ${parseFloat(transferAmount).toFixed(2)} has been sent to your {modalPaymentMethod.toLowerCase()}.
      </p>
      <button
        onClick={onClose}
        className="px-6 py-2 bg-blue-50 hover:bg-blue-100 dark:bg-blue-900/20 dark:hover:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg transition-colors"
      >
        Close
      </button>
    </div>
  );
}