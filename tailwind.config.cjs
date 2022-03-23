module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['"Inter"']
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            h1: {
              color: '#344ea2',
            },
            color: '#344ea2',
            h2: {
              color: '#344ea2',
            },
            h3: {
              color: '#344ea2',
            },
            p: {
              color: '#474747'
            },
            strong: {
              color: '#474747',
            },
            li: {
              color: '#474747'
            },
            a: {
              color: '#344ea2',
              '&:hover': {
                color: '#88b7f2'
              },
            },
            td: {
              color: '#828282'
            }
          },
        },
      })
    }
  },
  plugins: [
    require('@tailwindcss/typography')
  ]
};