import React, {useState, useEffect} from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Header from "components/headers/light.js";
import Footer from "components/footers/MiniCenteredFooter";
import BlogPost from "components/features/ForBlogPost";
import { useParams } from "react-router-dom";
import { getPosts } from "helpers/FunctionBlogPosts";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts";

export default () => {

  

  const [post, setPost] = useState();

  let { id } = useParams();
 
  useEffect(() => {
    async function fetchData() {
      
      setPost(await getPosts(id))
    }
    fetchData();
  }, [id]);
  
  return (
    <AnimationRevealPage>
      <Header />
      <Container>
        <ContentWithPaddingXl>
          {post ?
              <BlogPost
                subheading=""
                heading={post.title}
                buttonRounded={true}
                url={post.url}
                description={post.description}
                imageSrc={post.imageSrc}
              />
              : <BlogPost skeleton={true} />}
        </ContentWithPaddingXl>
      </Container>

      <Footer />
    </AnimationRevealPage>
  );
};
