import { Blog } from "@/types/blog";
import { BriefcaseBusiness } from "lucide-react";
import { ReactNode } from "react";

const blogData: Blog[] = [
  {
    id: 1,
    title: "Digital Marketer",
    paragraph: "ETS is hiring Digital Marketer",
    image: "/images/blog/blog-01.jpg",
    author: {
      name: "Samuyl Joshi",
      icon: <BriefcaseBusiness />,
      designation: "Graphic Designer",
    },
    tags: ["creative"],
    publishDate: "",
  },
  {
    id: 2,
    title: "Data Entry Processor",
    paragraph: "ETS is hiring Data Entry Processor",
    image: "/images/blog/blog-02.jpg",
    author: {
      name: "Musharof Chy",
      icon: <BriefcaseBusiness />,
      designation: "Content Writer",
    },
    tags: ["computer"],
    publishDate: "",
  },
  // {
  //   id: 3,
  //   title: "Web-Developer Intern.",
  //   paragraph: "Build Websites and Portals.",
  //   image: "/images/blog/blog-03.jpg",
  //   author: {
  //     name: "Lethium Deo",
  //     icon: <BriefcaseBusiness />,
  //     designation: "Graphic Designer",
  //   },
  //   tags: ["design"],
  //   publishDate: "",
  // },
];
export default blogData;
