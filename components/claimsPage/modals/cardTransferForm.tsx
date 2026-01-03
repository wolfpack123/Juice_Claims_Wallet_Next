'use client';

interface CardTransferFormProps {}

export function CardTransferForm(props: CardTransferFormProps) {
  return (
    <div className="space-y-4 mb-6">
      <div>
        <label className="block text-sm font-medium mb-2">Card Number</label>
        <input
          type="text"
          className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700"
          placeholder="Card number"
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-2">Expiration Date</label>
          <input
            type="text"
            className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700"
            placeholder="MM/YY"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Zip Code</label>
          <input
            type="text"
            className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700"
            placeholder="Billing zip code"
          />
        </div>
      </div>
    </div>
  );
}
