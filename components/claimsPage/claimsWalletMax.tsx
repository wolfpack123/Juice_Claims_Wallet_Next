'use client';

import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Header } from '../../components/layout/header';
import { ChatBubble } from '../../components/chat/chatBubble';
import {
  Shield,
  Clock,
  CreditCard,
  Globe,
  Landmark,
  MailCheck
} from 'lucide-react';
import { ClaimsWalletCardPlus } from '../../components/wallet/claimsWalletCardPlus';
import { OTPVerificationModal } from '../../components/claimsPage/modals/otpVerificationModal';
import { PaymentTransferModal } from '../../components/claimsPage/modals/paymentTransferModal';
import { HeroSection } from '../../components/claimsPage/sections/heroSection';
import { VirtualCardOption } from '../../components/claimsPage/sections/virtualCard';
import { SecondaryPaymentOption } from '../../components/claimsPage/sections/secondaryPaymentOptions';
import { RecentTransactionsTable } from '../../components/claimsPage/sections/recentTransactions';
import { FeatureCard } from '../../components/claimsPage/sections/featureCard';
import { Footer } from '../layout/footer';

export default function ClaimsWalletMax() {
  const { t } = useTranslation();
  const [showCardDetails, setShowCardDetails] = useState(false);
  const [showOTPModal, setShowOTPModal] = useState(false);
  const [otp, setOtp] = useState('');
  const [otpError, setOtpError] = useState('');
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [isHelpOpen, setIsHelpOpen] = useState(false);
  const [activePaymentMethod, setActivePaymentMethod] = useState<string | null>(null);
  const [transferAmount, setTransferAmount] = useState('');
  const [transferInProgress, setTransferInProgress] = useState(false);
  const [transferSuccess, setTransferSuccess] = useState(false);
  const [showTransferModal, setShowTransferModal] = useState(false);
  const [modalPaymentMethod, setModalPaymentMethod] = useState('');
  
  // Wallet and card data
  const walletData = {
    balance: 4750.00
  };
  
  const virtualCard = {
    number: '4111 2222 3333 4444',
    expiry: '12/25',
    cvv: '123',
    balance: 0
  };

  // Payment method details
  const paymentMethods = [
    {
      id: 'virtual-card',
      name: 'Virtual Card',
      description: 'Instant access to funds with Mastercard',
      icon: CreditCard,
      timeframe: 'Instant',
      priority: 1,
      color: 'from-blue-600 to-indigo-600'
    },
    {
      id: 'direct-card',
      name: 'Direct to Visa/Mastercard',
      description: 'Send money to your existing credit or debit card',
      icon: CreditCard,
      timeframe: '10-30 minutes',
      priority: 2,
      color: 'from-green-600 to-emerald-600'
    },
    {
      id: 'ach',
      name: 'ACH to Bank',
      description: 'Transfer directly to your bank account',
      icon: Landmark,
      timeframe: '1-3 business days',
      priority: 3,
      color: 'from-purple-600 to-violet-600'
    },
    {
      id: 'check',
      name: 'eCheck',
      description: 'Traditional check sent to your mailing address',
      icon: MailCheck,
      timeframe: '5-7 business days',
      priority: 4,
      color: 'from-amber-600 to-orange-600'
    }
  ];

  const handleVerifyOTP = () => {
    if (otp.length !== 6) {
      setOtpError('Please enter a 6-digit code');
      return;
    }
    
    if (otp === '123456') {
      setShowOTPModal(false);
      setShowCardDetails(true);
      setOtp('');
      setOtpError('');
    } else {
      setOtpError('Invalid verification code');
    }
  };

  const handleSelectPaymentMethod = (methodId: string) => {
    setActivePaymentMethod(methodId);
    
    const method = paymentMethods.find(m => m.id === methodId);
    if (method) {
      setModalPaymentMethod(method.name);
      setShowTransferModal(true);
    }
  };

  const handleTransfer = () => {
    const amount = parseFloat(transferAmount);
    if (isNaN(amount) || amount <= 0 || amount > walletData.balance) {
      return;
    }

    setTransferInProgress(true);

    setTimeout(() => {
      setTransferInProgress(false);
      setTransferSuccess(true);
      
      setTimeout(() => {
        setShowTransferModal(false);
        setTransferSuccess(false);
        setTransferAmount('');
      }, 2000);
    }, 1500);
  };
  
  const handleRefreshWallet = () => {
    setShowTransferModal(true);
  };

  // Animation variants
  const cardContainerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 }
    }
  };
  
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[var(--color-background)]">
      <Header />

      <main className="flex-grow pt-24">
        <div className="container mx-auto px-4 py-12">
          <HeroSection />

          {/* Wallet Display */}
          <div className="max-w-5xl mx-auto mb-10">
            <ClaimsWalletCardPlus 
              balance={walletData.balance}
              onRefresh={handleRefreshWallet}
            />
          </div>

          {/* Payment Method Options Section */}
          <motion.div 
            className="max-w-5xl mx-auto mb-16"
            variants={cardContainerVariants}
            initial="hidden"
            animate="visible"
          >
            <h2 className="text-2xl font-bold mb-8 text-center">Select Payment Method</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <VirtualCardOption 
                onSelect={handleSelectPaymentMethod}
                variants={cardVariants}
              />
            
              {paymentMethods.slice(1).map((method) => (
                <SecondaryPaymentOption
                  key={method.id}
                  method={method}
                  onSelect={handleSelectPaymentMethod}
                  variants={cardVariants}
                />
              ))}
            </div>
          </motion.div>
          
          <RecentTransactionsTable />
          
          {/* Additional Features */}
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <FeatureCard
                icon={Shield}
                title="Secure Access"
                description="Bank-grade security protecting your virtual card details"
              />
              <FeatureCard
                icon={Globe}
                title="Global Acceptance"
                description="Use your virtual card anywhere Mastercard is accepted"
              />
              <FeatureCard
                icon={Clock}
                title="Real-time Updates"
                description="Track transactions and balance updates instantly"
              />
            </div>
          </div>
        </div>
      </main>

      <ChatBubble />
      
      <OTPVerificationModal
        showOTPModal={showOTPModal}
        setShowOTPModal={setShowOTPModal}
        otp={otp}
        setOtp={setOtp}
        otpError={otpError}
        setOtpError={setOtpError}
        acceptedTerms={acceptedTerms}
        setAcceptedTerms={setAcceptedTerms}
        handleVerifyOTP={handleVerifyOTP}
      />
      
      <PaymentTransferModal
        showTransferModal={showTransferModal}
        setShowTransferModal={setShowTransferModal}
        modalPaymentMethod={modalPaymentMethod}
        paymentMethods={paymentMethods}
        walletBalance={walletData.balance}
        transferAmount={transferAmount}
        setTransferAmount={setTransferAmount}
        transferInProgress={transferInProgress}
        transferSuccess={transferSuccess}
        setTransferSuccess={setTransferSuccess}
        handleTransfer={handleTransfer}
      />

      <Footer/>
    </div>
  );
}