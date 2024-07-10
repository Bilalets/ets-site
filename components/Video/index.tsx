"use client";
import SectionTitle from "../Common/SectionTitle";

const Video = () => {
 

  return (
    <section className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Designed to help students realize their potential"
          paragraph="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
          center
          mb="80px"
        />

        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div
              className="wow fadeInUp mx-auto max-w-[770px] overflow-hidden rounded-md"
              data-wow-delay=".15s"
            >
              <div className="relative aspect-[77/40] items-center justify-center">
                <video width="800" height="800" autoPlay controls src="public/images/vedio.mp4">
                  <source src='public/images/vedio.mp4'  />
             
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Video;
