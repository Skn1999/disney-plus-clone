import React from "react";
import styled from "styled-components";

function Login() {
  return (
    <Container>
      <Content>
        <CTA>
          <CTALogoOne src="/images/cta-logo-one.svg" alt="" />
          <SignUp>Get All There</SignUp>
          <Description>
            Get Premiere Access to movies like Raya and The Last Dragon with
            Disney+ subscription.
          </Description>
          <CTALogoOne src="/images/cta-logo-two.png" alt="" />
        </CTA>
        <BgImage />
      </Content>
    </Container>
  );
}

const Container = styled.section`
  overflow: hidden;
  display: flex;
  height: 100vh;
  flex-direction: column;
  text-align: center;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 100%;
  margin-bottom: 10vh;
  flex-direction: column;
  padding: 80px 40px;
  height: 100%;
`;

const CTA = styled.div`
  max-width: 650px;
  display: flex;
  flex-direction: column;
  /* flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 0 auto 2vw;
  transition-timing-function: ease-out;
  transition: opacity 0.2s; */
  width: 100%;
`;
const CTALogoOne = styled.img`
  margin-bottom: 12px;
  max-width: 600px;
  min-height: 1px;
  display: block;
  width: 100%;
`;

const BgImage = styled.div`
  background-image: url("/images/login-background.jpg");
  background-position: top;
  background-size: cover;
  position: absolute;
  z-index: -1;
  inset: 0;
  height: 100%;
  background-repeat: no-repeat;
`;

const SignUp = styled.a`
  font-weight: bold;
  text-transform: uppercase;
  color: #f9f9f9;
  background-color: #0063e5;
  margin-bottom: 12px;
  width: 100%;
  letter-spacing: 1.5px;
  padding: 1rem 0;
  font-size: 18px;
  border-radius: 0.25rem;
  cursor: pointer;

  &:hover {
    background-color: #0483ee;
  }
`;

const Description = styled.p`
  font-size: 12px;
  margin: 0 0 24px;
  opacity: 1;
  line-height: 1.5;
  letter-spacing: 1.5px;
`;

export default Login;
