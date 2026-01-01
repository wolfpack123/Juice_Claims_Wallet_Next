export function TransactionsTable() {
  return (
    <div className="overflow-x-auto bg-white dark:bg-gray-800 rounded-xl p-6 shadow">
      <table className="w-full">
        <thead>
          <tr className="border-b">
            <th className="text-left py-3">Date</th>
            <th className="text-left py-3">Description</th>
            <th className="text-left py-3">Amount</th>
            <th className="text-left py-3">Status</th>
            <th className="text-left py-3">Method</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b">
            <td className="py-3">2024-03-15</td>
            <td className="py-3">Home Depot Purchase</td>
            <td className="py-3">$250.00</td>
            <td className="py-3 text-green-600">Completed</td>
            <td className="py-3">Virtual Card</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
