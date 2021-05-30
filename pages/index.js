import Head from "next/head";
import styled, { css } from "styled-components";

export default function Home() {
  return (
    <>
      <Head>
        <title>Oyeyipo Olawale - Software Engineer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <h1>Oyeyipo Olawale</h1>
        <h2>Software engineer & open sourcerer</h2>
      </header>

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
