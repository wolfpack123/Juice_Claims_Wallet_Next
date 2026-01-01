'use client';

import { DollarSign, Clock, Shield, ArrowRight, X, Wallet } from 'lucide-react';
// import { BankTransferForm } from './BankTransferForm';
// import { CardTransferForm } from './CardTransferForm';
// import { CheckTransferForm } from './CheckTransferForm';

interface PaymentMethod {
  id: string;
  name: string;
  description: string;
  icon: any;
  timeframe: string;
  priority: number;
  color: string;
}

interface TransferFormContentProps {
  modalPaymentMethod: string;
  paymentMethods: PaymentMethod[];
  walletBalance: number;
  transferAmount: string;
  setTransferAmount: (value: string) => void;
  transferInProgress: boolean;
  onTransfer: () => void;
  onClose: () => void;
}

export function TransferFormContent({
  modalPaymentMethod,
  paymentMethods,
  walletBalance,
  transferAmount,
  setTransferAmount,
  transferInProgress,
  onTransfer,
  onClose
}: TransferFormContentProps) {
  const isTransferDisabled = !transferAmount || parseFloat(transferAmount) <= 0 || parseFloat(transferAmount) > walletBalance;

  const getTimeframeText = () => {
    if (modalPaymentMethod === paymentMethods[0].name) return 'Available immediately';
    if (modalPaymentMethod === paymentMethods[1].name) return 'Typically takes 10-30 minutes';
    if (modalPaymentMethod === paymentMethods[2].name) return 'Processing time: 1-3 business days';
    return 'Delivery time: 5-7 business days';
  };

  return (
    <>
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <Wallet className="h-6 w-6 text-blue-600" />
          <h3 className="text-xl font-bold">
            {transferInProgress ? "Processing..." : `Transfer to ${modalPaymentMethod}`}
          </h3>
        </div>
        {!transferInProgress && (
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          >
            <X className="h-6 w-6" />
          </button>
        )}
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 mb-6 flex items-center">
        <DollarSign className="h-10 w-10 text-blue-600 dark:text-blue-400 mr-3" />
        <div>
          <div className="text-sm text-gray-600 dark:text-gray-400">Available Balance</div>
          <div className="text-xl font-bold">${walletBalance.toLocaleString()}</div>
        </div>
      </div>
      
      <div className="mb-6">
        <label className="block text-sm font-medium mb-2">Transfer Amount</label>
        <div className="relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
          <input
            type="number"
            value={transferAmount}
            onChange={(e) => setTransferAmount(e.target.value)}
            placeholder="0.00"
            className="w-full pl-8 pr-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 text-xl"
            min="0.01"
            max={walletBalance}
            step="0.01"
          />
        </div>
      </div>

      {/* {modalPaymentMethod === paymentMethods[2].name && <BankTransferForm />}
      {modalPaymentMethod === paymentMethods[1].name && <CardTransferForm />}
      {modalPaymentMethod === paymentMethods[3].name && <CheckTransferForm />} */}

      <div className="flex flex-col gap-2 text-sm text-gray-600 dark:text-gray-400 mb-6">
        <div className="flex items-center gap-2">
          <Clock className="h-4 w-4" />
          <span>{getTimeframeText()}</span>
        </div>
        <div className="flex items-center gap-2">
          <Shield className="h-4 w-4" />
          <span>Secure, encrypted transfer</span>
        </div>
      </div>

      <button
        onClick={onTransfer}
        disabled={isTransferDisabled}
        className={`w-full flex items-center justify-center gap-2 py-3 rounded-lg font-medium transition-all 
          ${isTransferDisabled
            ? 'bg-gray-200 text-gray-500 cursor-not-allowed dark:bg-gray-700 dark:text-gray-400' 
            : 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:shadow-lg'}`}
      >
        <span>Transfer Funds</span>
        <ArrowRight className="h-5 w-5" />
      </button>
    </>
  );
}