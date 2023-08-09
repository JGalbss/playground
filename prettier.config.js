// prettier.config.js
module.exports = {
  bracketSpacing: true,
  semi: true,
  trailingComma: 'all',
  printWidth: 100,
  tabWidth: 2,
  singleQuote: true,
  importOrder: ['<THIRD_PARTY_MODULES>', '^@/lib/(.*)$', '^[./]'],
  importOrderSeparation: false,
  importOrderSortSpecifiers: true,
  // plugins: [require('@trivago/prettier-plugin-sort-imports')],
};
