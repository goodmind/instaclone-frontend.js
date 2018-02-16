const css = String.raw

export const color = {
  primary: '#3897f0',

  backgroundLight: '#fafafa',
  backgroundWhite: '#fff',

  text: '#262626',
  textLight: '#999',

  border: '#efefef',
  borderDark: '#e6e6e6',
}

export const font = {
  formElement: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
}

export const globalStyles = css`
  html, body {
    font-size: 10px;
    -webkit-font-smoothing: antialiased;
    margin: 0;
    padding: 0;
    background-color: #fafafa;
  }

  * {
    box-sizing: border-box;
  }
`
