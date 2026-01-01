'use client';

import {
  cardContainer,
  sectionTitle,
  tableCell,
  tableRowBorder,
  badgeSuccess,
} from '../../ui/variants';

export function RecentTransactionsTable() {
  return (
    <div className="max-w-5xl mx-auto mb-16">
      <div className={`${cardContainer} p-8`}>
        <h2 className={sectionTitle}>Recent Transactions</h2>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className={tableRowBorder}>
                <th className={tableCell}>Date</th>
                <th className={tableCell}>Description</th>
                <th className={tableCell}>Amount</th>
                <th className={tableCell}>Status</th>
                <th className={tableCell}>Method</th>
              </tr>
            </thead>

            <tbody>
              {[
                {
                  date: '2024-03-15',
                  description: 'Home Depot Purchase',
                  amount: '$250.00',
                  method: 'Virtual Card',
                },
                {
                  date: '2024-03-14',
                  description: 'Lowes Hardware',
                  amount: '$175.50',
                  method: 'Virtual Card',
                },
                {
                  date: '2024-03-13',
                  description: 'Claim Payment',
                  amount: '$5,000.00',
                  method: 'Deposit',
                },
              ].map((tx) => (
                <tr key={tx.date + tx.amount} className={tableRowBorder}>
                  <td className={tableCell}>{tx.date}</td>
                  <td className={tableCell}>{tx.description}</td>
                  <td className={tableCell}>{tx.amount}</td>
                  <td className={tableCell}>
                    <span className={badgeSuccess}>Completed</span>
                  </td>
                  <td className={tableCell}>{tx.method}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
