import { createGlobalStyle, ThemeProvider } from "styled-components";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStleAndResets />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

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
  fontWeight: { normal: 400, bold: 600 },
};

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
  font-weight: ${(props) => props.theme.fontWeight.normal};
  font-size: 1.6rem;
}

#__next {
  position: relative;
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

:root {

  // px
  --ss-xxx-small: 4px;
  --ss-xx-small: 8px;
  --ss-x-small: 12px;
  --ss-small: 14px;
  --ss-medium: 16px;
  --ss-large: 24px;
  --ss-x-large: 32px;
  --ss-xx-large: 48px;
  --ss-xxx-large: 64px;
  --ss-x-xlarge: 96px;
  --ss-xx-xlarge: 128px;
  --ss-xxx-xlarge: 192px;
  --ss-x-xxlarge: 256px;
  --ss-xx-xxlarge: 384px;
  --ss-xxx-xxlarge: 512px;
  --ss-x-xxxlarge: 640px;
  --ss-xx-xxxlarge: 768px;

  // rem
  --ssr-xxx-small: 0.4rem;
  --ssr-xx-small: 0.8rem;
  --ssr-x-small: 1.2rem;
  --ssr-small: 1.4rem;
  --ssr-medium: 1.6rem;
  --ssr-large: 2.4rem;
  --ssr-x-large: 3.2rem;
  --ssr-xx-large: 4.8rem;
  --ssr-xxx-large: 6.4rem;
  --ssr-x-xlarge: 9.6rem;
  --ssr-xx-xlarge: 12.8rem;
  --ssr-xxx-xlarge: 19.2rem;
  --ssr-x-xxlarge: 25.6rem;
  --ssr-xx-xxlarge: 38.4rem;
  --ssr-xxx-xxlarge: 51.2rem;
  --ssr-x-xxxlarge: 64rem;
  --ssr-xx-xxxlarge: 76.8rem;

  // font size
  --type-base: calc(1.6em + 0.5vw);

  --type-x-small: 1.2rem;
  --type-small: 1.4rem;
  --type-medium: 1.6rem;
  --type-large: 1.8rem;
  --type-x-large: 2rem;
  --type-xx-large: 2.4rem;
  --type-xxx-large: 3rem;
  --type-x-xlarge: 3.6rem;
  --type-xx-xlarge: 4.8rem;
  --type-xxx-xlarge: 6rem;
  --type-x-xxlarge: 7.2rem;

  // Letter spacing
  --letter-spacing-sm: -0.05em; // preferable for headlines
  --letter-spacing-lg: 0.05em;
}

:root {
  --line: 1px solid var(--color-grey-light);

  // Line Height
  --default-line-height: 1.6;

  // Font Size
  --default-font-size: var(--ssr-medium);

  // box-shadow (gotten from stripe.com)
  --box-shadow--large: 0 15px 35px 0 rgb(60 66 87 / 8%),
    0 5px 15px 0 rgb(0 0 0 / 12%);

  // good for buttons when you wan the user to notice it but don't
  // want to dominate the page
  --shadow-sm: 0 0.1rem 0.3rem hsla(0, 0%, 0%, 0.2);

  // Elements like dropdowns
  --shadow-md: 0 0.4rem 0.6rem hsla(0, 0%, 0%, 0.2);

  --shadow-lg: 0 0.5rem 1.5rem hsla(0, 0%, 0%, 0.2);

  --shadow-xl: 0 1rem 2.4rem hsla(0, 0%, 0%, 0.2);
  // Modal dialogs
  --shadow-xxl: 0 1.5rem 3.5rem hsla(0, 0%, 0%, 0.2);

  // DOUBLE - Box Shadow
  // good for buttons
  --box-shadow-sm: 0 0.1rem 0.3rem hsla(0, 0%, 0%, 0.12),
    0 0.1rem 0.2rem hsla(0, 0%, 0%, 0.24);

  // Elements like dropdowns
  --box-shadow-md: 0 0.3rem 0.6rem hsla(0, 0%, 0%, 0.15),
    0 0.2rem 0.4rem hsla(0, 0%, 0%, 0.12);

  --box-shadow-lg: 0 1rem 2rem hsla(0, 0%, 0%, 0.15),
    0 0.3rem 0.6rem hsla(0, 0%, 0%, 0.1);

  --box-shadow-xl: 0 1.5rem 2.5rem hsla(0, 0%, 0%, 0.15),
    0 0.5rem 1rem hsla(0, 0%, 0%, 0.5);
  // Modal dialogs
  --box-shadow-xxl: 0 2rem 4rem hsla(0, 0%, 0%, 0.2);

  // no blur shadow
  --shadow-no-blur: 0 0.3rem 0 hsl(220, 7%, 83%);
}

`;

export default MyApp;
