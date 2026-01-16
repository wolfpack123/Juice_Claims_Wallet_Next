// ui/variants.ts

/* =========================
   CARD SURFACE (EXACT MATCH)
========================= */
export const cardBase = `
  w-full rounded-xl
  bg-white dark:bg-gray-800
  border border-gray-200 dark:border-gray-700
  shadow-lg
  relative overflow-hidden
`;

/* =========================
   CARD BORDERS
========================= */
export const cardBorderPrimary = `
  border-2 border-blue-600/50
  dark:border-blue-500/30
`;

/* =========================
   ICONS
========================= */
export const iconPrimary = `
  p-2 rounded-full
  bg-blue-50 text-blue-600
  dark:bg-blue-900/30 dark:text-blue-400
`;

/* =========================
   TYPOGRAPHY
========================= */
export const headingLg = `
  text-xl font-bold
`;

export const bodyText = `
  text-gray-600 dark:text-gray-400
`;

export const actionText = `
  flex items-center font-medium
  text-blue-600 dark:text-blue-400
`;

/* =========================
   BADGES
========================= */
export const badgeSuccess = `
  inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-50 dark:bg-green-900/30 text-green-600 dark:text-green-400
  `;

/* =========================
   TABLE
========================= */
export const sectionTitle = `
  text-2xl font-bold mb-6 gradient-heading
`;

export const tableCell = `
  py-4 px-4 text-left
`;

export const tableRowBorder = `
  border-b border-gray-200 dark:border-gray-700
`;
