import { createGlobalStyle, ThemeProvider } from "styled-components";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStleAndResets />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
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
  color: #777;
  line-height: 1.6;
  font-weight: 400;
  font-size: 1.6rem;
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

const theme = {
  color: {
    turquoise: "#1abc9c",
    greenSea: "#16a085",
    emerald: "#2ecc71",
    nephritis: "#27ae60",
    sunFlower: "#f1c40f",
    orange: "#f39c12",
    carrot: "#e67e22",
    pumpkin: "#d35400",
    alizarin: "#e74c3c",
    pomegranate: "#c0392b",
    amethyst: "#9b59b6",
    wisteria: "#8e44ad",
    peterRiver: "#3498db",
    belizeHole: "#2980b9",
    wetAsphalt: "#34495e",
    midgniteBlue: "#2c3e50",
    clouds: "#ecf0f1",
    silver: "#bdc3c7",
    concrete: "#95a5a6",
    asbestos: "#7f8c8d",
  },
  fontWeight: [400, 600],
};

export default MyApp;
