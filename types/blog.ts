import { ReactNode } from "react";

type Author = {
  name: string;
  image?: string;
  icon?: ReactNode; // Adding icon property
  designation: string;
};

export type Blog = {
  id: number;
  title: string;
  paragraph: string;
  image: string;
  author: Author;
  tags: string[];
  publishDate: string;
};