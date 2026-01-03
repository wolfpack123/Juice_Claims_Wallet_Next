'use client';

interface BankTransferFormProps {}

export function BankTransferForm(props: BankTransferFormProps) {
  return (
    <div className="space-y-4 mb-6">
      <div>
        <label className="block text-sm font-medium mb-2">Bank Name</label>
        <input
          type="text"
          className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700"
          placeholder="Enter bank name"
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-2">Routing Number</label>
          <input
            type="text"
            className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700"
            placeholder="9 digits"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Account Number</label>
          <input
            type="text"
            className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700"
            placeholder="Account number"
          />
        </div>
      </div>
    </div>
  );
}
