import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page | Free Next.js Template for Startup and SaaS",
  description: "This is Contact Page for Startup Nextjs Template",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Page"
        description="Have questions about our programs?"
        titledes = "Have a question, comment, or just want to say hello? We’d love to hear from you! Feel free to reach out to us using any of the methods"
      />

      <Contact />
    </>
  );
};

export default ContactPage;
