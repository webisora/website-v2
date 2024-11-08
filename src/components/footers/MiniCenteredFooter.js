import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import {Container as ContainerBase } from "components/misc/Layouts.js"
import logo from "../../images/webisora/logo-white.png";
import { ReactComponent as TwitterIcon } from "../../images/icons/twitter-icon.svg";
import { ReactComponent as LinkedInIcon } from "../../images/icons/linkedin-icon.svg";
import { ReactComponent as MediumIcon } from "../../images/icons/medium-icon.svg";


const Container = tw(ContainerBase)`bg-gray-900 text-gray-100 -mx-8 -mb-8`
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;

const Row = tw.div`flex items-center justify-center flex-col px-8`

const LogoContainer = tw.div`flex items-center justify-center md:justify-start`;
const LogoImg = tw.img`max-w-xs `;

const SocialLinksContainer = tw.div`mt-10`;
const SocialLink = styled.a`
  ${tw`cursor-pointer inline-block text-gray-100 hover:text-gray-500 transition duration-300 mx-4`}
  svg {
    ${tw`w-5 h-5`}
  }
`;

const CopyrightText = tw.p`text-center mt-10 font-medium tracking-wide text-sm text-gray-600`
export default () => {
  return (
    <Container>
      <Content>
        <Row>
          <LogoContainer>
            <LogoImg src={logo} />
          </LogoContainer>
          <SocialLinksContainer>
            <SocialLink href="https://twitter.com/Sahero">
              <TwitterIcon />
            </SocialLink>
            <SocialLink href="https://www.linkedin.com/in/sagar-shrestha/">
              <LinkedInIcon />
            </SocialLink>
            <SocialLink href="https://sagar-shrestha.medium.com/">
              <MediumIcon />
            </SocialLink>
          </SocialLinksContainer>
          <CopyrightText>
            &copy; Copyright 2022, Webisora. All Rights Reserved.
          </CopyrightText>
        </Row>
      </Content>
    </Container>
  );
};
