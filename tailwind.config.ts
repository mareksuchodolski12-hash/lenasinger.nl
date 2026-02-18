import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

const config: Config = {
  content: ['./src/app/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        // Dark Premium Color System (Design System v1.0)
        dark: {
          primary: '#1a1a1a', // Main background
          secondary: '#2d2d2d', // Cards, sections
          tertiary: '#3d3d3d', // Borders, dividers
          gray: '#4a4a4a', // Disabled, inactive
        },
        text: {
          primary: '#ffffff', // Headlines, primary text
          secondary: '#e0e0e0', // Body text, descriptions
          muted: '#b0b0b0', // Meta, hints, placeholders
          disabled: '#707070', // Disabled text
        },
        accent: {
          50: '#f8ede9',
          100: '#e9d8ce',
          200: '#dcc3b3',
          300: '#cfae98',
          400: '#c6957e',
          500: '#C67C4E', // PRIMARY ACCENT (Copper)
          600: '#b06f46',
          700: '#9d5f3a', // Hover dark
          800: '#8a5132',
          900: '#77442a',
        },
        semantic: {
          success: '#4CAF50',
          error: '#EF5350',
          warning: '#FFC107',
          info: '#29B6F6',
        },
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        serif: ['Georgia', 'Garamond', 'serif'],
      },
      spacing: {
        xs: '4px',
        sm: '8px',
        md: '16px',
        lg: '24px',
        xl: '32px',
        '2xl': '40px',
        '3xl': '60px',
        '4xl': '80px',
        '5xl': '120px',
      },
      fontSize: {
        xs: '12px',
        sm: '14px',
        base: '16px',
        lg: '18px',
        xl: '24px',
        '2xl': '36px',
        '3xl': '48px',
        '4xl': '64px',
      },
      boxShadow: {
        sm: '0 2px 8px rgba(0, 0, 0, 0.3)',
        md: '0 4px 16px rgba(0, 0, 0, 0.4)',
        lg: '0 8px 32px rgba(0, 0, 0, 0.5)',
        xl: '0 12px 48px rgba(0, 0, 0, 0.6)',
        '2xl': '0 20px 64px rgba(0, 0, 0, 0.7)',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.text.secondary'),
            a: {
              color: theme('colors.accent[500]'),
              '&:hover': {
                color: theme('colors.accent[400]'),
              },
            },
            'h1, h2, h3, h4, h5, h6': {
              color: theme('colors.text.primary'),
            },
            strong: {
              color: theme('colors.text.primary'),
            },
          },
        },
      }),
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(var(--tw-gradient-stops))',
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in-out',
        slideUp: 'slideUp 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')],
};

export default config;
