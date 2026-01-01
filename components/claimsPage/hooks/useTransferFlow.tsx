'use client';

import { useState } from "react";

export function useTransferFlow() {
  const [showOTPModal, setShowOTPModal] = useState(false);
  const [otp, setOtp] = useState("");
  const [otpError, setOtpError] = useState("");

  const [showTransferModal, setShowTransferModal] = useState(false);
  const [transferAmount, setTransferAmount] = useState("");
  const [transferInProgress, setTransferInProgress] = useState(false);
  const [transferSuccess, setTransferSuccess] = useState(false);

  const [activePaymentMethod, setActivePaymentMethod] = useState<string | null>(null);
  const [modalPaymentMethod, setModalPaymentMethod] = useState("");

  const handleVerifyOTP = () => {
    if (otp.length !== 6) {
      setOtpError("Please enter a 6-digit code");
      return;
    }

    if (otp === "123456") {
      setShowOTPModal(false);
      setOtp("");
      setOtpError("");
    } else {
      setOtpError("Invalid verification code");
    }
  };

  const handleTransfer = (balance: number) => {
    const amount = parseFloat(transferAmount);
    if (!amount || amount <= 0 || amount > balance) return;

    setTransferInProgress(true);

    setTimeout(() => {
      setTransferInProgress(false);
      setTransferSuccess(true);

      setTimeout(() => {
        setShowTransferModal(false);
        setTransferSuccess(false);
        setTransferAmount("");
      }, 2000);
    }, 1500);
  };

  return {
    showOTPModal,
    setShowOTPModal,

    otp,
    setOtp,
    otpError,
    setOtpError,
    handleVerifyOTP,

    showTransferModal,
    setShowTransferModal,

    transferAmount,
    setTransferAmount,

    transferInProgress,
    transferSuccess,

    activePaymentMethod,
    setActivePaymentMethod,

    modalPaymentMethod,
    setModalPaymentMethod,

    handleTransfer,
  };
}
