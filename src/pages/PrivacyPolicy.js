import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts";
import tw from "twin.macro";
import styled from "styled-components";
import Header from "components/headers/light.js";
import Footer from "components/footers/MiniCenteredFooter";
import { SectionHeading } from "components/misc/Headings";

const HeadingRow = tw.div`flex`;
const Heading = tw(SectionHeading)`text-gray-900 mb-10`;
const Text = styled.div`
  ${tw`text-lg  text-gray-800`}
  p {
    ${tw`mt-2 leading-loose`}
  }
  h1 {
    ${tw`text-3xl font-bold mt-10`}
  }
  h2 {
    ${tw`text-2xl font-bold mt-8`}
  }
  h3 {
    ${tw`text-xl font-bold mt-6`}
  }
  ul {
    ${tw`list-disc list-inside`}
    li {
      ${tw`ml-2 mb-3`}
      p {
        ${tw`mt-0 inline leading-normal`}
      }
    }
  }
`;
export default ({ headingText = "Privacy Policy" }) => {
  return (
    <AnimationRevealPage>
      <Header />
      <Container>
        <ContentWithPaddingXl>
          <HeadingRow>
            <Heading>{headingText}</Heading>
          </HeadingRow>
          <Text>
            <p>Webisora ("<strong>Webisora</strong>")
              operates Webisora.com and may operate other websites. It
              is Webisora policy to respect your privacy regarding any information we may collect
              while operating our websites.</p>
            <h3>Website Visitors</h3>
            <p>Like most website operators, Webisora collects non-personally-identifying information of the
              sort that web browsers and servers typically make available, such as the browser type, language preference,
              referring site, and the date and time of each visitor request. Webisora purpose in
              collecting non-personally identifying information is to better understand
              how Webisora visitors use its website. From time to
              time, Webisora may release non-personally-identifying information in the aggregate, e.g., by
              publishing a report on trends in the usage of its website.</p>
            <p>Webisora also collects potentially personally-identifying information like Internet Protocol
              (IP) addresses for logged in users and for users leaving comments on Webisora.com        blogs/sites. Webisora only discloses logged in user and commenter IP addresses under the same
              circumstances that it uses and discloses personally-identifying information as described below, except that
              commenter IP addresses and email addresses are visible and disclosed to the administrators of the blog/site
              where the comment was left.</p>
            <h3>Gathering of Personally-Identifying Information</h3>
            <p>Certain visitors to Webisora websites choose to interact
              with Webisora in ways that require Webisora to gather
              personally-identifying information. The amount and type of information that Webisora gathers
              depends on the nature of the interaction. For example, we ask visitors who sign up at <a href="https://webisora.com">Webisora.com</a> to provide a
              username and email address. Those who engage in transactions with Webisora are asked to
              provide additional information, including as necessary the personal and financial information required to
              process those transactions. In each case, Webisora collects such information only insofar as
              is necessary or appropriate to fulfill the purpose of the visitor's interaction with
              Webisora. Webisora does not disclose personally-identifying information
              other than as described below. And visitors can always refuse to supply personally-identifying information, with
              the caveat that it may prevent them from engaging in certain website-related activities.</p>
            <h3>Aggregated Statistics</h3>
            <p>Webisora may collect statistics about the behavior of visitors to its
              websites. Webisora may display this information publicly or provide it to others.
              However, Webisora does not disclose personally-identifying information other than as
              described below.</p>
            <h3>Protection of Certain Personally-Identifying Information</h3>
            <p>Webisora discloses potentially personally-identifying and personally-identifying information
              only to those of its employees, contractors and affiliated organizations that (i) need to know that information
              in order to process it on Webisora behalf or to provide services available
              at Webisora websites, and (ii) that have agreed not to disclose it to others. Some
              of those employees, contractors and affiliated organizations may be located outside of your home country; by
              using Webisora websites, you consent to the transfer of such information to
              them. Webisora will not rent or sell potentially personally-identifying and
              personally-identifying information to anyone. Other than to its employees, contractors and affiliated
              organizations, as described above, Webisora discloses potentially personally-identifying and
              personally-identifying information only in response to a subpoena, court order or other governmental request, or
              when Webisora believes in good faith that disclosure is reasonably necessary to protect the
              property or rights of Webisora, third parties or the public at large. If you are a registered
              user of an Webisora website and have supplied your email address, Webisora        may occasionally send you an email to tell you about new features, solicit your feedback, or just keep you up to
              date with what's going on with Webisora and our products. If you send us a request (for
              example via email or via one of our feedback mechanisms), we reserve the right to publish it in order to help us
              clarify or respond to your request or to help us support other users. Webisora takes all
              measures reasonably necessary to protect against the unauthorized access, use, alteration or destruction of
              potentially personally-identifying and personally-identifying information.</p>
            <h3>Cookies</h3>
            <p>A cookie is a string of information that a website stores on a visitor's computer, and that the visitor's browser
              provides to the website each time the visitor returns. Webisora uses cookies to
              help Webisora identify and track visitors, their usage of Webisora        website, and their website access preferences. Webisora visitors who do not wish to have
              cookies placed on their computers should set their browsers to refuse cookies before
              using Webisora websites, with the drawback that certain features
              of Webisora websites may not function properly without the aid of cookies.</p>
            <h3>Business Transfers</h3>
            <p>If Webisora, or substantially all of its assets, were acquired, or in the unlikely event
              that Webisora goes out of business or enters bankruptcy, user information would be one of the
              assets that is transferred or acquired by a third party. You acknowledge that such transfers may occur, and that
              any acquirer of Webisora may continue to use your personal information as set forth in this
              policy.</p>
            <h3>Ads</h3>
            <p>Ads appearing on any of our websites may be delivered to users by advertising partners, who may set cookies.
              These cookies allow the ad server to recognize your computer each time they send you an online advertisement to
              compile information about you or others who use your computer. This information allows ad networks to, among
              other things, deliver targeted advertisements that they believe will be of most interest to you. This Privacy
              Policy covers the use of cookies by Webisora and does not cover the use of cookies by any
              advertisers.</p>
            <h3>Privacy Policy Changes</h3>
            <p>Although most changes are likely to be minor, Webisora may change
              its Privacy Policy from time to time, and in Webisora sole
              discretion. Webisora encourages visitors to frequently check this page for any changes to
              its Privacy Policy. If you have a Webisora.com account, you might also
              receive an alert informing you of these changes. Your continued use of this site after any change in
              this Privacy Policy will constitute your acceptance of such change.</p>
          </Text>
        </ContentWithPaddingXl>
      </Container>
      <Footer />
    </AnimationRevealPage >
  );
};
