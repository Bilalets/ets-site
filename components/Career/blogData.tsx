import { Blog } from "@/types/blog";
import { BriefcaseBusiness } from "lucide-react";
import { ReactNode } from "react";

const blogData: Blog[] = [
  {
    id: 1,
    title: "Software Engineering",
    paragraph:
      "Eagle Testing Services.",
    image: "/images/blog/blog-01.jpg",
    author: {
      name: "Samuyl Joshi",
      icon: <BriefcaseBusiness />, 
      designation: "Graphic Designer",
    },
    tags: ["creative"],
    publishDate: "28/06/2024",
  },
  {
    id: 2,
    title: "Data Analyst",
    paragraph:
      "Enter the data.",
    image: "/images/adds/add.png",
    author: {
      name: "Musharof Chy",
      icon: <BriefcaseBusiness />, 
      designation: "Content Writer",
    },
    tags: ["computer"],
    publishDate: "29/06/2024",
  },
  {
    id: 3,
    title: "Web-Developer Intern.",
    paragraph:
      "Build Websites and Portals.",
    image: "/images/blog/blog-03.jpg",
    author: {
      name: "Lethium Deo",
      icon: <BriefcaseBusiness />, 
      designation: "Graphic Designer",
    },
    tags: ["design"],
    publishDate: "30/06/2024",
  },
];
export default blogData;