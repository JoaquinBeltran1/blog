module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['"Inter"']
      },
      colors: {
        grey: {
          100: "#F5F7FA",
          1000: "#1F2933"
        },
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
            },
            pre: {
              color: theme("colors.gray.100"),
              backgroundColor: theme("colors.slate.700")
            },
            "pre code::before": {
              "padding-left": "unset"
            },
            "pre code::after": {
              "padding-right": "unset"
            },
            code: {
              backgroundColor: theme("colors.green.100"),
              color: "#DD1144",
              fontWeight: "400",
              "border-radius": "0.25rem"
            },
            "code::before": {
              content: '""',
              "padding-left": "0.25rem"
            },
            "code::after": {
              content: '""',
              "padding-right": "0.25rem"
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