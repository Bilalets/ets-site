import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";
import { ToastContainer } from "react-toastify";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "",
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
<ToastContainer/>
      <Contact />
    </>
  );
};

export default ContactPage;
