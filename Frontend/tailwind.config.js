/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            boxShadow: {
                default:
                  '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
                neumorphismdark:
                  'inset 1px 1px 3px #1f2327,9px 9px 20px rgb(11, 11, 11, 0.1),-0px -0px 20px #1f2327',
                neumorphismlight:
                  'inset 1px 1px 5px #fff, 9px 9px 20px rgba(222, 222, 222, 0.8),-0px -0px 20px #ffffff',
              }
        },
    },
    plugins: [],
};
