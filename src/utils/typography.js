import Typography from 'typography'

const typography = new Typography({
  baseLineHeight: 1.666,
  headerFontFamily: ['Poppins', 'Helvetica', 'Arial', 'sans-serif'],
  bodyFontFamily: ['Poppins', 'Helvetica', 'Arial', 'sans-serif'],
  googleFonts: [
    {
      name: 'Poppins',
      styles: ['300', '600', '700']
    }
  ]
})

export default typography
