'use client';

import { motion } from 'framer-motion';
import { CreditCard, ArrowRight } from 'lucide-react';
import {
  cardBase,
  cardBorderPrimary,
  iconPrimary,
  headingLg,
  bodyText,
  actionText,
  badgeSuccess,
} from '../../ui/variants';

interface VirtualCardOptionProps {
  onSelect: (methodId: string) => void;
  variants: any;
}

export function VirtualCardOption({ onSelect, variants }: VirtualCardOptionProps) {
  return (
    <motion.div className="md:col-span-2" variants={variants}>
      <button
        onClick={() => onSelect('virtual-card')}
        className={`${cardBase} ${cardBorderPrimary} p-8 flex md:flex-row flex-col items-center text-left gap-6 group`}
      >
        {/* Card visual */}
        <div className="w-[200px] h-[120px] rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 p-4 flex-shrink-0 shadow-lg relative">
          <img
            src="/assets/JuiceWallet.png"
            alt="Juice Financial"
            className="h-6 absolute top-2 left-2"
          />
          <img
            src="https://www.mastercard.com/content/dam/public/mastercardcom/na/us/en/homepage/Home/mc-logo-52.svg"
            alt="Mastercard"
            className="h-6 absolute bottom-2 right-2"
          />
          <div className="absolute bottom-2 left-2 text-[10px] font-mono text-white/70">
            **** 4444
          </div>
        </div>

        <div className="flex-grow">
          <div className="flex items-center gap-3 mb-2">
            <div className={iconPrimary}>
              <CreditCard className="h-6 w-6" />
            </div>

            <h3 className={headingLg}>Virtual Mastercard</h3>

            <div className="ml-auto">
              <span className={badgeSuccess}>INSTANT</span>
            </div>
          </div>

          <p className={`${bodyText} mb-2`}>
            Get instant access to your funds with a virtual Mastercard that can be used anywhere online or added to your mobile wallet.
          </p>

          <div className={actionText}>
            <span>Select Virtual Card</span>
            <ArrowRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" />
          </div>
        </div>

        {/* Hover glow */}
        <div className="absolute inset-0 bg-blue-600/5 dark:bg-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity" />
      </button>
    </motion.div>
  );
}
