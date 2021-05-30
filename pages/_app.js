import { createGlobalStyle } from "styled-components";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStleAndResets />
      <Component {...pageProps} />
    </>
  );
}

const GlobalStleAndResets = createGlobalStyle`
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

html {
  box-sizing: border-box;
  font-size: 62.5%; // 1rem = 1px, 10px/16px = 62.5%

  scroll-behavior: smooth;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #999999;
  line-height: 1.6;
  font-weight: 400;
}

::selection {
  background-color: green;
  color: yellow;
}

.code {
  background: #fafafa;
  border-radius: 5px;
  padding: 0.75rem;
  font-size: 1.1rem;
  font-family: Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono,
    Bitstream Vera Sans Mono, Courier New, monospace;
}

a {
  vertical-align: baseline;
  background: transparent;
  transition: color 0.2s ease, text-decoration-color 0.2s ease;
  text-decoration-thickness: 0.1em;
}

`;

export default MyApp;
