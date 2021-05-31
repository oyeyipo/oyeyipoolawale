import Head from "next/head";
import styled, { css } from "styled-components";

export default function Home() {
  return (
    <>
      <Head>
        <title>Oyeyipo Olawale - Software Engineer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header>
        <div>
          <Avatar>
            <img />
          </Avatar>
          <h1>Oyeyipo Olawale</h1>
          <h2>Software engineer & open sourcerer</h2>
          <p>
            I build and create quality softwares. Mostly for the web and
            sometimes mobile apps.
          </p>
        </div>
      </Header>

      <main>
        <section id="blog-posts">
          <h2>Blog posts</h2>
        </section>
      </main>
    </>
  );
}

// STYLINGS
const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;

  ${(props) =>
    props.primary &&
    css`
      background-color: palevioletred;
      color: white;
    `}
`;

const Header = styled.header`
  height: 40rem;
  background-color: #2c3e50;
  clip-path: polygon(0 0, 100% 0, 100% 75%, 0 100%);

  display: grid;
  place-content: center;
  justify-items: center;

  div {
    display: block;
    text-align: center;
    width: 45rem;
    z-index: 1;
  }

  h1 {
    color: ${(props) => props.theme.color.clouds};
    font-size: 3.5rem;
    letter-spacing: 0.2rem;
  }

  h2 {
    color: ${(props) => props.theme.color.turquoise};
    font-size: 2rem;
  }

  p {
    color: ${(props) => props.theme.color.silver};
    margin-top: 0.5rem;
    font-weight: ${(props) => props.theme.fontWeight[1]};
  }
`;

const Avatar = styled.div`
  border-top: 3px solid ${(props) => props.theme.color.turquoise};

  img {
    height: 14rem;
    width: 14rem;
    background-color: ${(props) => props.theme.color.wetAsphalt};
    background-size: cover;
    border-radius: 100%;
    border: 3px solid ${(props) => props.theme.color.turquoise};
    margin-top: -7rem;
  }
`;
