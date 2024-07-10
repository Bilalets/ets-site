import SingleBlog from "@/components/Career/SingleBlog";
import blogData from "@/components/Career/blogData";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";
import { ToastContainer } from "react-toastify";

export const metadata: Metadata = {
  title: "Blog Page | Free Next.js Template for Startup and SaaS",
  description: "This is Blog Page for Startup Nextjs Template",
  // other metadata
};

const Blog = () => {
  return (
    <>
      <Breadcrumb
        pageName="Career"
        description=""
        titledes=""
      />
<ToastContainer/>
      <section className="pb-[120px] pt-[50px]">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center">
            {blogData.map((blog) => (
              <div key={blog.id} className="w-full px-4">
                <SingleBlog blog={blog} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
