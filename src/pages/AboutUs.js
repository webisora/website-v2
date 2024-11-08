import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Header from "components/headers/light.js";
import Footer from "components/footers/MiniCenteredFooter";
import MainFeature1 from "components/features/TwoColWithButton.js";

export default () => {
  return (
    <AnimationRevealPage>
      <Header />
      <MainFeature1
        subheading=""
        heading="Sharing my skills and knowledge"
        buttonRounded={false}
        primaryButtonText=""
        description="There’s always someone who knows more than you. But there’s always someone who knows less than you, too. Share your knowledge. It is a way to achieve immortality."
        imageSrc="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80"
      />
     
      <Footer />
    </AnimationRevealPage>
  );
};
