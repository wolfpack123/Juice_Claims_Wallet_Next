'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { TransferProgressContent } from './transferProgressContent';
import { TransferSuccessContent } from './transferSuccessContent';
import { TransferFormContent } from './transferFormContent';

interface PaymentMethod {
  id: string;
  name: string;
  description: string;
  icon: any;
  timeframe: string;
  priority: number;
  color: string;
}

interface PaymentTransferModalProps {
  showTransferModal: boolean;
  setShowTransferModal: (show: boolean) => void;
  modalPaymentMethod: string;
  paymentMethods: PaymentMethod[];
  walletBalance: number;
  transferAmount: string;
  setTransferAmount: (value: string) => void;
  transferInProgress: boolean;
  transferSuccess: boolean;
  setTransferSuccess: (success: boolean) => void;
  handleTransfer: () => void;
}

export function PaymentTransferModal({
  showTransferModal,
  setShowTransferModal,
  modalPaymentMethod,
  paymentMethods,
  walletBalance,
  transferAmount,
  setTransferAmount,
  transferInProgress,
  transferSuccess,
  setTransferSuccess,
  handleTransfer
}: PaymentTransferModalProps) {
  if (!showTransferModal) return null;

  const handleClose = () => {
    setShowTransferModal(false);
    setTransferAmount('');
    setTransferSuccess(false);
  };

  return (
    <AnimatePresence>
      <motion.div 
        className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => {
          if (!transferInProgress && !transferSuccess) {
            handleClose();
          }
        }}
      >
        <motion.div 
          className="bg-white dark:bg-gray-800 rounded-xl p-8 max-w-md w-full mx-4 relative"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
        >
          {transferSuccess ? (
            <TransferSuccessContent
              transferAmount={transferAmount}
              modalPaymentMethod={modalPaymentMethod}
              onClose={handleClose}
            />
          ) : transferInProgress ? (
            <TransferProgressContent modalPaymentMethod={modalPaymentMethod} />
          ) : (
            <TransferFormContent
              modalPaymentMethod={modalPaymentMethod}
              paymentMethods={paymentMethods}
              walletBalance={walletBalance}
              transferAmount={transferAmount}
              setTransferAmount={setTransferAmount}
              transferInProgress={transferInProgress}
              onTransfer={handleTransfer}
              onClose={handleClose}
            />
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}