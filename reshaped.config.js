const config = {
  themes: {
    productTheme: {
      fontFamily: {
        body: {
          family: 'Poppins, sans-serif',
        },
      },
      color: { chartColor: { hex: 'red', hexDark: 'yellow' } },

      font: {
        display31: {
          fontSize: { px: 38 },
          lineHeight: { px: 20 },
          fontWeightToken: 'regular',
          fontFamilyToken: 'body',
          responsive: {
            s: 'title1',
            l: 'display3',
          },
        },
      },
    },
  },
  themeFragments: {
    toolTip: {
      color: {
        foregroundNeutral: { hex: '#ffffff', hexDark: '#000000' },
      },
    },
  },
};

module.exports = config;
