/** @type {import('tailwindcss').Config} */
export default {
  content: ["index.html" , "./src/**/*.tsx"],
  theme: {
    extend: {
      screens : {
        'xsm' : { 'max' : '425px'}
      }
    },
  },
  plugins: [],
}

