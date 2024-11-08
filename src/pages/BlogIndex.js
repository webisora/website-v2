import React, { useState, useEffect } from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro";
import Header from "components/headers/light.js";
import Footer from "components/footers/MiniCenteredFooter";
import { PrimaryButton } from "components/misc/Buttons";
import { getPostLink, getPosts } from "helpers/FunctionBlogPosts";

import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'


const Posts = tw.div`mt-6 sm:-mr-8 flex flex-wrap`;
const PostContainer = styled.div`
  ${tw`mt-10 w-full sm:w-1/2 lg:w-1/3 sm:pr-8`}
  ${props =>
    props.featured &&
    css`
      ${tw`w-full!`}
      ${Post} {
        ${tw`sm:flex-row! h-full sm:pr-4`}
      }
      ${Image} {
        ${tw`sm:h-96 sm:min-h-full sm:w-1/2 lg:w-2/3 sm:rounded-t-none sm:rounded-l-lg`}
      }
      ${Info} {
        ${tw`sm:-mr-4 sm:pl-8 sm:flex-1 sm:rounded-none sm:rounded-r-lg sm:border-t-2 sm:border-l-0`}
      }
      ${Description} {
        ${tw`text-sm mt-3 leading-loose text-gray-600 font-medium`}
      }
    `}
`;
const Post = tw.div`cursor-pointer flex flex-col bg-gray-100 rounded-lg`;
const Image = styled.div`
  ${props => css`background-image: url("${props.imageSrc}");`}
  ${tw`h-64 w-full bg-cover bg-center rounded-t-lg`}
`;
const Info = tw.div`p-8 border-2 border-t-0 rounded-lg rounded-t-none`;
const Category = tw.div`uppercase text-primary-500 text-xs font-bold tracking-widest leading-loose after:content after:block after:border-b-2 after:border-primary-500 after:w-8`;
const CreationDate = tw.div`mt-4 uppercase text-gray-600 italic font-semibold text-xs`;
const Title = tw.div`mt-1 font-black text-2xl text-gray-900 group-hover:text-primary-500 transition duration-300`;
const Description = tw.div`text-sm mt-3 leading-loose text-gray-600 font-medium h-48	overflow-hidden	`;

const ButtonContainer = tw.div`flex justify-center`;
const LoadMoreButton = tw(PrimaryButton)`mt-16 mx-auto`;



export default () => {

  const [visible, setVisible] = useState(10);
  const [posts, setPosts] = useState();

  const ske = [1, 2, 3, 4, 5, 6, 7]

  useEffect(() => {
    async function fetchData() {
      setPosts(await getPosts())
    }
    fetchData();
  }, []);

  const onLoadMoreClick = () => {
    setVisible(v => v + 6);
  };

  return (
    <AnimationRevealPage>
      <Header />
      <Container>
        <ContentWithPaddingXl>
          {posts ?
            <>
              <Posts>
                {posts.slice(0, visible).map((post, index) => (
                  <PostContainer key={index} featured={index === 0}>
                    <Post className="group" as="a" href={getPostLink(post.title)}>
                      <Image imageSrc={post.imageSrc || '/images/blog/default.jpg'} />
                      <Info>
                        <Category>{post.category}</Category>
                        <CreationDate>{post.date}</CreationDate>
                        <Title>{post.title}</Title>
                        {post.description && <Description>{post.description.substring(0, 300) + "..."}</Description>}
                      </Info>
                    </Post>
                  </PostContainer>
                ))}
              </Posts>
              {visible < posts.length && (
                <ButtonContainer>
                  <LoadMoreButton onClick={onLoadMoreClick}>Load More</LoadMoreButton>
                </ButtonContainer>
              )}
            </>
            :
            <Posts>
              {ske.slice(0, visible).map((post, index) => (
                <PostContainer key={index} featured={index === 0}>
                  <Post className="group">
                    <Skeleton height="384px" containerClassName="wi-full" />
                    <div style={{ padding: "32px", width: index === 0 ? "50%" : "100%" }}>
                      <Skeleton width="120px" height="10px" />
                      <Skeleton width="80px" height="8px" />
                      <Skeleton width="200px" />
                      <Skeleton count={index === 0 ? 10 : 5} height="8px" />
                    </div>
                  </Post>
                </PostContainer>
              ))}
            </Posts>
          }
        </ContentWithPaddingXl>
      </Container>


      <Footer />
    </AnimationRevealPage>
  );
};


