import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { SectionHeading } from "components/misc/Headings.js";

import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const Container = tw.div`relative`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(Column)`w-full flex-shrink-0 relative`;
const TextColumn = styled(Column)(props => [
  tw`tracking-wide px-5 mt-16 md:mt-0`,
  props.textOnLeft ? tw`md:mr-12 lg:mr-16 md:order-first` : tw`md:ml-12 lg:ml-16 md:order-last`
]);

const Image = styled.img`
max-height: 400px;
${(props => [
    props.imageRounded && tw`rounded`,
    props.imageBorder && tw`border`,
    props.imageShadow && tw`shadow`,
    tw`mx-auto`,
  ])}`;

const TextContent = tw.div` flex flex-col lg:py-8 text-center md:text-left`;

const Heading = tw(
  SectionHeading
)`my-6 font-black text-4xl  text-center leading-tight`;
const Description = tw.p`mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed `;

const PrimaryButton = tw.button`my-5 mx-auto font-bold px-8 lg:px-10 py-3 rounded bg-primary-500 text-gray-100 hocus:bg-primary-700 focus:shadow-outline focus:outline-none transition duration-300`;


//const Link = tw.a`w-full sm:w-auto text-sm sm:text-base px-6 py-3 sm:px-8 sm:py-4 lg:px-10 lg:py-5 mt-4 first:mt-0 sm:mt-0 sm:mr-8 sm:last:mr-0 rounded-full font-bold border border-transparent tracking-wide transition duration-300 focus:outline-none focus:shadow-outline`;
//const PrimaryLink = tw(Link)`bg-red-500 text-gray-100 shadow-lg hocus:bg-red-600 hocus:text-gray-200`;

//const SecondaryLink = tw(Link)`text-gray-100 border-gray-500 hover:bg-gray-100 hover:text-primary-500 hover:border-primary-500`;

export default ({
  url = "https://webisora.com",
  heading = (
    <>
      Designed & Developed by <span tw="text-primary-500">Professionals.</span>
    </>
  ),
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  imageSrc = "",
  imageRounded = true,
  imageBorder = false,
  imageShadow = false,
  imageCss = null,
  textOnLeft = true,
  skeleton = false,
}) => {
  // The textOnLeft boolean prop can be used to display either the text on left or right side of the image.
  
  return (
    <Container>
      {skeleton ?
        <>
          <Skeleton height={"36px"} />
          <ImageColumn>
            <Skeleton height={"400px"} />
          </ImageColumn>
          <TextColumn textOnLeft={textOnLeft}>
            <TextContent>
              <Skeleton count={5} height="8px" />
            </TextContent>
          </TextColumn>
        </>
        :
        <>
          <Heading>{heading}</Heading>
          <ImageColumn>
            <Image css={imageCss} src={imageSrc} imageBorder={imageBorder} imageShadow={imageShadow} imageRounded={imageRounded}
            onError={({ currentTarget }) => {
              currentTarget.onerror = null; // prevents looping
              currentTarget.src = "/images/blog/default.jpg";
            }}
            />
          </ImageColumn>
          <TextColumn textOnLeft={textOnLeft}>
            <TextContent>
              <Description>{description}</Description>
              <PrimaryButton as="a" href={url + '?source=webisora.com'} target="_blank">Read the rest of this story on Medium.com</PrimaryButton>
            </TextContent>

            <hr />

            <TextContent>
              {/* <Description as="a" href="https://sagar-shrestha.medium.com/membership" style={{ border: "1px solid #e2e8f0", textAlign: "center", padding: "32px", maxWidth: "600px", margin: "0 auto"}}>
                <strong>Join Medium with my referral link</strong>
                <p style={{fontSize: "12px"}}>Think about becoming a $5/month Medium member to get unlimited stories. In addition, if you register through my link, I'll get a tiny commission (at no extra cost). Additionally, you'll be helping me and the other writers you read.</p>
              </Description> */}
            </TextContent>
            <a href='https://ko-fi.com/I3I8HGO8V' target='_blank'  rel="noreferrer">
              <img height='48' style={{ border: "0px", height: "48px", margin: '0 auto' }} src='https://storage.ko-fi.com/cdn/kofi3.png?v=3' border='0' alt='Buy Me a Coffee at ko-fi.com' />
            </a>
          </TextColumn>
        </>
      }
    </Container>
  );
};
