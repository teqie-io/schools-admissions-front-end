import tailwindCss from '!style-loader!css-loader!postcss-loader!../src/app/static/styles/tailwind.scss'

const storybookStyles = document.createElement('style')
storybookStyles.innerHTML = tailwindCss
document.body.appendChild(storybookStyles)

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  }
}
