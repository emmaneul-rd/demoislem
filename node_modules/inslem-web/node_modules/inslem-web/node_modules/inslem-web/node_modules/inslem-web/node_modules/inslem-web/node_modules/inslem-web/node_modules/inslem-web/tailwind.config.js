/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Blue system — structural authority
        'inslem-blue': '#1E40AF',
        'inslem-blue-dark': '#1E3A8A',
        'inslem-blue-deeper': '#0F1D4A',
        'inslem-blue-light': '#2563EB',
        'inslem-blue-soft': '#DBEAFE',
        'inslem-blue-muted': '#EFF6FF',
        // Turquoise / teal — real brand accent from the actual business
        'inslem-teal': '#0D9488',
        'inslem-teal-light': '#14B8A6',
        'inslem-teal-soft': '#CCFBF1',
        'inslem-teal-muted': '#F0FDFA',
        // Orange — action and energy
        'inslem-orange': '#EA580C',
        'inslem-orange-hover': '#C2410C',
        'inslem-orange-light': '#FFF7ED',
        // Neutrals
        'warm-light': '#F9F6F0',
        'soft-gray': '#F3F4F6',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
