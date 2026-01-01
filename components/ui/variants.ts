// ui/variants.ts

/* =========================
   CARD SURFACE (SINGLE SOURCE)
========================= */
export const cardBase =
  `
  w-full rounded-xl
  bg-white text-gray-900
  border border-gray-200
  shadow-lg hover:shadow-xl transition-shadow
  relative overflow-hidden
  dark:bg-slate-900 dark:text-gray-100 dark:border-slate-700
  `;

/* =========================
   CARD BORDERS
========================= */
export const cardBorderPrimary =
  `
  border-2 border-blue-600/50
  dark:border-blue-500/30
  `;

/* =========================
   ICONS
========================= */
export const iconPrimary =
  `
  p-2 rounded-full
  bg-blue-100 text-blue-700
  dark:bg-blue-900/30 dark:text-blue-400
  `;

/* =========================
   TYPOGRAPHY
========================= */
export const headingLg =
  "text-xl font-bold";

export const bodyText =
  "text-gray-700 dark:text-gray-400";

export const actionText =
  "flex items-center font-medium text-blue-700 dark:text-blue-400";

/* =========================
   BADGES
========================= */
export const badgeSuccess =
  `
  inline-flex items-center px-3 py-1 rounded-full text-xs font-medium
  bg-green-100 text-green-700
  dark:bg-green-900/30 dark:text-green-400
  `;

/* =========================
   TABLE
========================= */
export const sectionTitle =
  "text-2xl font-bold mb-6";

export const tableCell =
  "py-4 px-4 text-left";

export const tableRowBorder =
  "border-b border-gray-200 dark:border-slate-700";
