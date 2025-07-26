module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'vcard-bg': 'var(--vcard-bg)',
        'vcard-card': 'var(--vcard-card)',
        'vcard-text': 'var(--vcard-text)',
        'vcard-muted': 'var(--vcard-muted)',
        'vcard-border': 'var(--vcard-border)',
        'gold': 'var(--gold)',
      },
      borderRadius: {
        'vcard': '1.5rem',
      },
      boxShadow: {
        'vcard': '0 4px 32px 0 rgba(0,0,0,0.12)',
      },
    },
  },
  plugins: [],
}; 