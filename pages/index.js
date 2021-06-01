import Head from "next/head";
import styled, { css } from "styled-components";

export default function Home() {
  return (
    <>
      <Head>
        <title>Oyeyipo Olawale - Software Engineer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <StyledBackground>&nbsp;</StyledBackground>
      <Header>
        <div>
          <Avatar>
            <img src="/avatar.png" alt="Oyeyipo Olawale' avatar" />
          </Avatar>
          <h1>Oyeyipo Olawale</h1>
          <h2>Full-Stack Software Programmer</h2>
          <p>
            I build and create quality software. Mostly for the web and
            sometimes mobile apps. I like contributing to Open Source Softwares
            and writing about newfound knowledge in the fields of Software
            Engineering and Econometrics.
          </p>
        </div>
      </Header>

      <StyledMain>
        <SectionBlog id="blog-posts">
          <SectionContentWrapper>
            <SectionTitle>Recent articles</SectionTitle>
          </SectionContentWrapper>
        </SectionBlog>
      </StyledMain>
    </>
  );
}

// STYLINGS
const StyledBackground = styled.div`
  width: 100%;
  height: var(--ssr-xxx-xxlarge);
  background-color: #2c3e50;
  clip-path: polygon(0 0, 100% 0, 100% 75%, 0 100%);
`;

const Header = styled.header`
  width: 100vw;
  margin-top: var(--ssr-xx-xlarge);
  position: absolute;
  top: 0;
  left: 0;

  display: grid;
  place-content: center;
  justify-items: center;

  div {
    text-align: center;
    width: var(--ssr-xxx-xxlarge);
    z-index: 1;
  }

  h1 {
    color: ${(props) => props.theme.color.clouds};
    font-size: var(--ssr-xxx-large);
    letter-spacing: var(--letter-spacing-sm);
    font-weight: ${(props) => props.theme.fontWeight.normal};
    line-height: 1.3;
  }

  h2 {
    color: ${(props) => props.theme.color.turquoise};
    font-size: var(--ssr-large);
    letter-spacing: var(--letter-spacing-lg);
    font-weight: ${(props) => props.theme.fontWeight.bold};
  }

  p {
    color: ${(props) => props.theme.color.silver};
    margin-top: var(--ssr-xx-small);
    font-weight: ${(props) => props.theme.fontWeight.bold};
  }
`;

const Avatar = styled.div`
  width: 65% !important;
  margin: 0 auto;
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

const StyledMain = styled.main`
  margin-top: -13rem;
  padding-top: 13rem;
`;

const SectionBlog = styled.section`
  padding: var(--ssr-large);
`;

const SectionContentWrapper = styled.div``;

const SectionTitle = styled.h3`
  text-align: center;
  font-size: var(--ssr-x-large);
`;
