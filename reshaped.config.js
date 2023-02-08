const config = {
  themes: {
    productTheme: {
      color: {
        foregroundNeutral: { hex: '#eb4034', hexDark: '#34eb65' },
      },
      fontFamily: {
        body: {
          family: 'Poppins, sans-serif',
        },
      },
      font: {
        display41: {
          fontSize: { px: 30 },
          lineHeight: { px: 20 },
          fontWeightToken: 'regular',
          fontFamilyToken: 'body',
          responsive: {
            s: 'title1',
            l: 'display44',
          },
        },
        display3: {
          fontSize: { px: 28 },
          lineHeight: { px: 20 },
          fontWeightToken: 'regular',
          fontFamilyToken: 'body',
          responsive: {
            s: 'title1',
            l: 'display28',
          },
        },
      },
    },
  },
  themeFragments: {
    twitter: {
      color: {
        // backgroundPrimary: { hex: '#03fc35' },
        foregroundNeutral: { hex: '#ffffff' },
        //   #d7da1a
      },
      font: {
        display41: {
          fontSize: { px: 30 },
          lineHeight: { px: 20 },
          fontWeightToken: 'regular',
          fontFamilyToken: 'body',
          responsive: {
            s: 'title1',
            l: 'display44',
          },
        },
      },
    },
  },
};

module.exports = config;
