module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'body': '#17171f',
        'selected-text': '#A3A3FF',
        'theme': '#3F3FFF',
        'nav': '#404053',
        'secondary': '#9191A4',
        'badge': '#3F3F51',
        'input-border': '#565666',
        'input': '#2A2A35',
      },
      backgroundImage: {
        'little-rock': "url('assets/untitled-1-2.jpg')",
        'bw_lr': "url('assets/untitled-1-2-bw.jpg')",
      },
    },
    FontFamily: {
      'poppins': ["'Poppins'", 'sans-serif'],
    },
    plugins: [],
  },
}
