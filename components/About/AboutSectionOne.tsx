"use client";
import { useEffect } from "react";
import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";
import AOS from "aos"; // Import AOS
import "aos/dist/aos.css";

interface ListProps {
  text: string;
}

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const List: React.FC<ListProps> = ({ text }) => (
  <p
    className="mb-5 flex items-center text-lg font-medium text-body-color"
    data-aos="fade-right"
  >
    <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
      {checkIcon}
    </span>
    {text}
  </p>
);

const AboutSectionOne: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  return (
    <section id="about" className="bg-white py-16 dark:bg-gray-900">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="mb-12 flex flex-col lg:flex-row lg:items-center lg:space-x-6">
          <div className="lg:w-1/2">
            <SectionTitle
              title="Revolutionizing Education and Career Assessments"
              paragraph="Comprehensive Online Assessments for Educational Institutions and Career Development Eagle Testing Service (ETS) is a leading provider of online assessments tailored for schools, colleges, and universities, adhering to the standards of various education boards such as the Federal Board, KPK Board, and Punjab Board of Pakistan. ETS excels in delivering precise and effective evaluation tools that ensure students' academic performance is accurately measured."
              data-aos="fade-up"
            />
          </div>
          <div className="w-full px-4 lg:w-2/4">
            {" "}
            <div
              className="wow fadeInUp relative mx-auto aspect-[25/18] max-w-[700px] lg:mr-0"
              data-wow-delay=".2s"
              style={{ paddingBottom: "56.25%" }} // Adjusted paddingBottom to maintain the aspect ratio
            >
              <Image
               src="/images/about/men.png"
                alt="about-image"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                className="mx-auto max-w-full transform rounded-lg drop-shadow-2xl transition-transform hover:scale-105 dark:hidden dark:drop-shadow-none lg:mr-0"
              />
              <Image
                src="/images/about/men.png"
                alt="about-image"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                className="mx-auto hidden max-w-full transform rounded-lg drop-shadow-2xl transition-transform hover:scale-105 dark:block dark:drop-shadow-none lg:mr-0"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            <h2
              className="text-4xl font-extrabold text-gray-800 dark:text-white"
              data-aos="fade-up"
            >
              The Best Learning Experience
            </h2>
            <p
              className="text-justify text-lg leading-relaxed text-gray-700 dark:text-gray-300"
              data-aos="fade-up"
              data-aos-delay="70"
            >
              Established in 2021, Eagle Testing Service (ETS) streamlines
              testing and training for public and private organizations.
              Offering cutting-edge solutions in assessments, training, and data
              management, ETS aims to improve reliability, manpower, and
              educational outcomes. They specialize in pre-employment testing,
              providing comprehensive solutions nationwide through a secure
              network of test centers. Emphasizing security and timely results,
              ETS has become a leader in private sector testing.
            </p>
            <List text="Screening, assessments, and training programs." />
            <List text="Enterprise software solutions." />
            <List text="Pre-employment and recruitment tests." />
            <List text="Consulting services and technical assistance." />
          </div>
          <div
            className="transform overflow-hidden rounded-lg shadow-lg transition-transform hover:scale-105"
            data-aos="fade-left"
          >
            <div className="relative h-0" style={{ paddingBottom: "76%" }}>
              <Image
               src="/images/about/web.png" // Replace with your image path
                alt="Educational Image"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;