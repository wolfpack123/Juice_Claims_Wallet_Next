'use client';

interface CheckTransferFormProps {}

export function CheckTransferForm(props: CheckTransferFormProps) {
  return (
    <div className="space-y-4 mb-6">
      <div>
        <label className="block text-sm font-medium mb-2">Mailing Address</label>
        <textarea
          className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700"
          placeholder="Enter your mailing address"
          rows={3}
        />
      </div>
    </div>
  );
}
