import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import {createVuetify} from 'vuetify'
import {aliases, mdi} from 'vuetify/iconsets/mdi'

// Fonts
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/700.css'

const kubiakColors = {
    white: '#ffffff',
    whiteDark: '#fafafa',
    mint: '#0eb1bb',
    mintBright: '#b8f9ff',
    slate: '#3E517A',
    black: '#000000',
}

const mainTheme = {
  dark: false,
  colors: {
    kubiakMint: kubiakColors.mint,
    logoBackground: kubiakColors.slate,
    miniIconBackground: kubiakColors.mintBright,
    primary: kubiakColors.mint,
    secondary: kubiakColors.slate,
    accent: '#82B1FF',
    error: '#FF5252',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FFC107',
    background: kubiakColors.white,
    surface: kubiakColors.white,
    navBarColor: kubiakColors.mint,
    appBarColor: kubiakColors.mint,
    'surface-bright': kubiakColors.black,
    'surface-light': kubiakColors.black,
    'surface-variant': kubiakColors.black,
    'surface-emphasis': kubiakColors.black,
    'on-surface-variant': kubiakColors.white,
    'secondary-darken-1': '#018786',
    'primary-darken-1': '#1F5592'
  },
  variables: {
    'border-color': '#000000',
    'border-opacity': 0.12,
    'high-emphasis-opacity': 1,
    'medium-emphasis-opacity': 0.9,
    'disabled-opacity': 0.35,
    'idle-opacity': 0.04,
    'hover-opacity': 0.04,
    'focus-opacity': 0.12,
    'selected-opacity': 0.08,
    'activated-opacity': 0.1,
    'pressed-opacity': 0.12,
    'dragged-opacity': 0.08,
    'theme-kbd': '#0000ff',
    'theme-on-kbd': '#ff0000',
    'theme-code': '#ff0000',
    'theme-on-code': '#3eff00'
  }
}

export default createVuetify({
    theme: {
        defaultTheme: 'mainTheme',
        themes: {
            mainTheme
        },
    },
    icons: {
        defaultSet: 'mdi',
        aliases,
        sets: {
            mdi,
        },
    },
})
