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

export default ({ headingText = "Terms And Condition" }) => {
  return (
    <AnimationRevealPage>
      <Header />
      <Container>
        <ContentWithPaddingXl>
          <HeadingRow>
            <Heading>{headingText}</Heading>
          </HeadingRow>
          <Text>


            <p>The following terms and conditions govern all use of the Webisora.com website and all
              content,
              services and products available at or through the website (taken together, the Website). The Website is owned
              and operated by Webisora ("Webisora"). The Website is
              offered subject to your acceptance without modification of all of the terms and conditions contained herein and
              all other operating rules, policies (including, without
              limitation, Webisora Privacy Policy) and procedures that may be
              published from time to time on this Site by Webisora (collectively, the "Agreement").</p>
            <p>Please read this Agreement carefully before accessing or using the Website. By accessing or using any part of the
              web site, you agree to become bound by the terms and conditions of this agreement. If you do not agree to all
              the terms and conditions of this agreement, then you may not access the Website or use any services. If these
              terms and conditions are considered an offer by Webisora, acceptance is expressly limited to
              these terms. The Website is available only to individuals who are at least 16 years
              old.</p>
            <ul>
              <li><strong>Your Webisora.com Account and Site.</strong> If you create a blog/site on the
                Website, you are responsible for maintaining the security of your account and blog, and you are fully
                responsible for all activities that occur under the account and any other actions taken in connection with
                the blog. You must not describe or assign keywords to your blog in a misleading or unlawful manner,
                including in a manner intended to trade on the name or reputation of others, and Webisora            may change or remove any description or keyword that it considers inappropriate or unlawful, or otherwise
                likely to cause Webisora liability. You must immediately
                notify Webisora of any unauthorized uses of your blog, your account or any other breaches
                of security. Webisora will not be liable for any acts or omissions by You, including any
                damages of any kind incurred as a result of such acts or omissions.
              </li>
              <li><strong>Responsibility of Contributors.</strong> If you operate a blog, comment on a blog, post material to
                the Website, post links on the Website, or otherwise make (or allow any third party to make) material
                available by means of the Website (any such material, "Content"), You are entirely responsible for
                the content of, and any harm resulting from, that Content. That is the case regardless of whether the
                Content in question constitutes text, graphics, an audio file, or computer software. By making Content
                available, you represent and warrant that:
                <ul>
                  <li>the downloading, copying and use of the Content will not infringe the proprietary rights, including
                    but not limited to the copyright, patent, trademark or trade secret rights, of any third party;
                  </li>
                  <li>if your employer has rights to intellectual property you create, you have either (i) received
                    permission from your employer to post or make available the Content, including but not limited to
                    any software, or (ii) secured from your employer a waiver as to all rights in or to the Content;
                  </li>
                  <li>you have fully complied with any third-party licenses relating to the Content, and have done all
                    things necessary to successfully pass through to end users any required terms;
                  </li>
                  <li>the Content does not contain or install any viruses, worms, malware, Trojan horses or other harmful
                    or destructive content;
                  </li>
                  <li class="important">the Content is not spam, is not machine- or randomly-generated, and does not
                    contain unethical or unwanted commercial content designed to drive traffic to third party sites or
                    boost the search engine rankings of third party sites, or to further unlawful acts (such as
                    phishing) or mislead recipients as to the source of the material (such as spoofing);
                  </li>
                  <li>the Content is not pornographic, does not contain threats or incite violence towards individuals or
                    entities, and does not violate the privacy or publicity rights of any third party;
                  </li>
                  <li>your blog is not getting advertised via unwanted electronic messages such as spam links on
                    newsgroups, email lists, other blogs and web sites, and similar unsolicited promotional methods;
                  </li>
                  <li>your blog is not named in a manner that misleads your readers into thinking that you are another
                    person or company. For example, your blog's URL or name is not the name of a person other than
                    yourself or company other than your own; and
                  </li>
                  <li>you have, in the case of Content that includes computer code, accurately categorized and/or
                    described the type, nature, uses and effects of the materials, whether requested to do so by
                    Webisora or otherwise.
                  </li>
                </ul>
                <p>By submitting Content to Webisora for inclusion on your Website, you
                  grant Webisora a world-wide, royalty-free, and non-exclusive license to reproduce,
                  modify, adapt and publish the Content solely for the purpose of displaying, distributing and promoting
                  your blog. If you delete Content, Webisora will use reasonable efforts to remove it
                  from the Website, but you acknowledge that caching or references to the Content may not be made
                  immediately unavailable.</p>
                <p>Without limiting any of those representations or warranties, Webisora has the right
                  (though not the obligation) to, in Webisora sole discretion (i) refuse or
                  remove any content that, in Webisora reasonable opinion, violates
                  any Webisora policy or is in any way harmful or objectionable, or (ii) terminate or
                  deny access to and use of the Website to any individual or entity for any reason,
                  in Webisora sole discretion. Webisora will have no
                  obligation to provide a refund of any amounts previously paid.</p></li>
              <li><strong>Payment and Renewal.</strong>
                <ul>
                  <li><strong>General Terms.</strong><br />
                    By selecting a product or service, you agree to pay Webisora the one-time and/or
                    monthly or
                    annual subscription fees indicated (additional payment terms may be included in other
                    communications). Subscription payments will be charged on a pre-pay basis on the day you sign up for
                    an Upgrade and will cover the use of that service for a monthly or annual subscription period as
                    indicated. Payments are not refundable.
                  </li>
                  <li><strong>Automatic Renewal. </strong><br />
                    Unless you notify Webisora before the end of the applicable subscription period
                    that you want
                    to cancel a subscription, your subscription will automatically renew and you authorize us to collect
                    the then-applicable annual or monthly subscription fee for such subscription (as well as any taxes)
                    using any credit card or other payment mechanism we have on record for you. Upgrades can be canceled
                    at any time by submitting your request to Webisora in writing.
                  </li>
                </ul>
              </li>
              <li><strong>Services.</strong>
                <ul>
                  <li><strong>Fees; Payment. </strong>By signing up for a Services account you agree to
                    pay Webisora                    the applicable setup fees and recurring fees. Applicable fees will be invoiced starting from the day
                    your services are established and in advance of using such services. Webisora                    reserves the
                    right to change the payment terms and fees
                    upon thirty (30) days                    prior written notice to you. Services can be canceled by you at anytime on
                    thirty (30) days written notice
                    to Webisora.
                  </li>
                  <li><strong>Support.</strong> If your service includes access to priority email support. "Email
                    support" means the ability to make requests for technical support assistance by email at any
                    time (with reasonable efforts by Webisora to respond within
                    sagarshth@gmail.com) concerning the use of the VIP Services.
                    "Priority"
                    means that support takes priority over support for users of the standard or
                    free Webisora.com                    services. All support will be provided in accordance
                    with Webisora standard services practices,
                    procedures and policies.
                  </li>
                </ul>
              </li><li><strong>Responsibility of Website Visitors.</strong> Webisora has not reviewed, and
                cannot review, all
                of the material, including computer software, posted to the Website, and cannot therefore be responsible for
                that material's content, use or effects. By operating the Website, Webisora does not
                represent or imply
                that it endorses the material there posted, or that it believes such material to be accurate, useful or
                non-harmful. You are responsible for taking precautions as necessary to protect yourself and your computer
                systems from viruses, worms, Trojan horses, and other harmful or destructive content. The Website may
                contain content that is offensive, indecent, or otherwise objectionable, as well as content containing
                technical inaccuracies, typographical mistakes, and other errors. The Website may also contain material that
                violates the privacy or publicity rights, or infringes the intellectual property and other proprietary
                rights, of third parties, or the downloading, copying or use of which is subject to additional terms and
                conditions, stated or unstated. Webisora disclaims any responsibility for any harm
                resulting from the
                use by visitors of the Website, or from any downloading by those visitors of content there posted.
              </li>
              <li><strong>Content Posted on Other Websites.</strong> We have not reviewed, and cannot review, all of the
                material, including computer software, made available through the websites and webpages to which
                Webisora.com links, and that link to Webisora.com.
                Webisora does not have any control over those non-Webisora websites
                and webpages, and is not responsible for their contents or their use. By linking to a
                non-Webisora website or webpage, Webisora does not represent or imply
                that it endorses such website or webpage. You are responsible for taking precautions as necessary to protect
                yourself and your computer systems from viruses, worms, Trojan horses, and other harmful or destructive
                content. Webisora disclaims any responsibility for any harm resulting from your use of
                non-Webisora websites and webpages.
              </li>
              <li><strong>Copyright Infringement and DMCA Policy.</strong> As Webisora asks others to
                respect its
                intellectual property rights, it respects the intellectual property rights of others. If you believe that
                material located on or linked to by Webisora.com violates your copyright, you are
                encouraged to notify Webisora in accordance with Webisora Digital Millennium Copyright Act ("DMCA") Policy.
                Webisora will respond to all such notices, including as required or appropriate by
                removing the infringing material or disabling all links to the infringing
                material. Webisora will terminate a visitor's access to and use of the Website if, under
                appropriate circumstances, the visitor is determined to be a repeat infringer of the copyrights or other
                intellectual property rights of Webisora or others. In the case of such
                termination, Webisora will have no obligation to provide a refund of any amounts
                previously paid to Webisora.
              </li>
              <li><strong>Intellectual Property.</strong> This Agreement does not transfer from Webisora            to you any Webisora or third party intellectual property, and all right, title and
                interest in and to such property will remain (as between the parties) solely
                with Webisora. Webisora, Webisora.com,
                the Webisora.com logo, and all other trademarks, service marks, graphics and logos used
                in connection with Webisora.com, or the Website are trademarks or registered trademarks
                of Webisora or Webisora licensors. Other trademarks, service
                marks, graphics and logos used in connection with the Website may be the trademarks of other third parties.
                Your use of the Website grants you no right or license to reproduce or otherwise use
                any Webisora or third-party trademarks.
              </li>
              <li><strong>Advertisements.</strong> Webisora reserves the right to display advertisements
                on your blog unless you have purchased an ad-free account.
              </li>
              <li><strong>Attribution.</strong> Webisora reserves the right to display attribution links
                such as 'Blog at Webisora.com,' theme author, and font attribution in your blog footer
                or toolbar.
              </li>
              <li><strong>Partner Products.</strong> By activating a partner product (e.g. theme) from one of our partners,
                you agree to that partner's terms of service. You can opt out of their terms of service at any time by
                de-activating the partner product.
              </li>
              <li><strong>Domain Names.</strong> If you are registering a domain name, using or transferring a previously
                registered domain name, you acknowledge and agree that use of the domain name is also subject to the
                policies of the Internet Corporation for Assigned Names and Numbers ("ICANN"), including their <a href="http://www.icann.org/en/registrars/registrant-rights-responsibilities-en.htm">Registration
                  Rights and Responsibilities</a>.
              </li>
              <li><strong>Changes. </strong>Webisora reserves the right, at its sole discretion, to modify
                or replace any
                part of this Agreement. It is your responsibility to check this Agreement periodically for changes. Your
                continued use of or access to the Website following the posting of any changes to this Agreement constitutes
                acceptance of those changes. Webisora may also, in the future, offer new services and/or
                features
                through the Website (including, the release of new tools and resources). Such new features and/or services
                shall be subject to the terms and conditions of this Agreement. <strong><br />
                </strong></li>
              <li><strong>Termination. </strong>Webisora may terminate your access to all or any part of
                the Website at
                any time, with or without cause, with or without notice, effective immediately. If you wish to terminate
                this Agreement or your Webisora.com account (if you have one), you may simply
                discontinue
                using the
                Website. Notwithstanding the foregoing, if you have a paid services account, such account can only be
                terminated by Webisora if you materially breach this Agreement and fail to cure such
                breach within
                thirty (30) days            from Webisora notice to you thereof;
                provided that, Webisora can terminate the Website immediately as part of a general shut
                down of our
                service. All provisions of this Agreement which by their nature should survive termination shall survive
                termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity and
                limitations of liability. <strong><br />
                </strong></li>
              <li class="important"><strong>Disclaimer of Warranties.</strong> The Website is provided "as is".
                Webisora and its suppliers and licensors hereby disclaim all warranties of any kind,
                express or
                implied, including, without limitation, the warranties of merchantability, fitness for a particular purpose
                and non-infringement. Neither Webisora nor its suppliers and licensors, makes any
                warranty that the
                Website will be error free or that access thereto will be continuous or uninterrupted. You understand that
                you download from, or otherwise obtain content or services through, the Website at your own discretion and
                risk.
              </li>
              <li class="important"><strong>Limitation of Liability.</strong> In no event will Webisora,
                or its suppliers
                or licensors, be liable with respect to any subject matter of this agreement under any contract, negligence,
                strict liability or other legal or equitable theory for: (i) any special, incidental or consequential
                damages; (ii) the cost of procurement for substitute products or services; (iii) for interruption of use or
                loss or corruption of data; or (iv) for any amounts that exceed the fees paid by you
                to Webisora under this agreement during
                the twelve (12) months period prior to the cause of
                action. Webisora shall have no liability for any failure or delay due to matters beyond
                their reasonable control. The foregoing shall not apply to the extent prohibited by applicable law.
              </li>
              <li><strong>General Representation and Warranty.</strong> You represent and warrant that (i) your use of the
                Website will be in strict accordance with
                the Webisora Privacy Policy, with this Agreement
                and with all applicable laws and regulations (including without limitation any local laws or regulations in
                your country, state, city, or other governmental area, regarding online conduct and acceptable content, and
                including all applicable laws regarding the transmission of technical data exported from the United States
                or the country in which you reside) and (ii) your use of the Website will not infringe or misappropriate the
                intellectual property rights of any third party.
              </li>
              <li><strong>Indemnification.</strong> You agree to indemnify and hold harmless Webisora, its
                contractors,
                and its licensors, and their respective directors, officers, employees and agents from and against any and
                all claims and expenses, including attorneys' fees, arising out of your use of the Website, including but
                not limited to your violation of this Agreement.
              </li>
              <li><strong>Miscellaneous.</strong> This Agreement constitutes the entire agreement
                between Webisora and
                you concerning the subject matter hereof, and they may only be modified by a written amendment signed by an
                authorized executive of Webisora, or by the posting by Webisora of a
                revised version. Except to
                the extent applicable law, if any, provides otherwise, this Agreement, any access to or use of the Website
                will be governed by the laws of the NSW, excluding its conflict of law provisions,
                and the proper
                venue for any disputes arising out of or relating to any of the same will be the state and federal courts
                located in NSW. Except for claims for injunctive or equitable relief or
                claims regarding
                intellectual property rights (which may be brought in any competent court without the posting of a bond),
                any dispute arising under this Agreement shall be finally settled in accordance with the Comprehensive
                Arbitration Rules of the Judicial Arbitration and Mediation Service, Inc. ("JAMS") by three
                arbitrators appointed in accordance with such Rules. The arbitration shall take place in
                NSW, in the English language and the arbitral decision may be
                enforced
                in any court.
                The prevailing party in any action or proceeding to enforce this Agreement shall be entitled to costs and
                attorneys' fees. If any part of this Agreement is held invalid or unenforceable, that part will be construed
                to reflect the parties' original intent, and the remaining portions will remain in full force and effect. A
                waiver by either party of any term or condition of this Agreement or any breach thereof, in any one
                instance, will not waive such term or condition or any subsequent breach thereof. You may assign your rights
                under this Agreement to any party that consents to, and agrees to be bound by, its terms and conditions;
                Webisora may assign its rights under this Agreement without condition. This Agreement
                will be binding
                upon and will inure to the benefit of the parties, their successors and permitted assigns.
              </li>
            </ul>

          </Text>
        </ContentWithPaddingXl>
      </Container>
      <Footer />
    </AnimationRevealPage>
  );
};
