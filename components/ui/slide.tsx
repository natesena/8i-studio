import React from "react";
type SlideProps = {
  src: string;
  title: string;
  description?: string;
  type?: "image" | "video";
  bg?: string;
  textColor?: string;
};

const Slide = ({ src, title, description, type = "image", bg, textColor }: SlideProps) => {
  const mediaStyles = "w-full h-full object-cover absolute inset-0";
  const containerStyles =
    `slide ${bg || "bg-neutral-500/10"} group relative overflow-hidden transition-all duration-500 ease-out hover:flex-[4]`;
  const titleStyles =
    `slide-title text-xl uppercase tracking-wider font-[900] absolute inset-0 flex items-center justify-center group-hover:opacity-0 transition-opacity duration-300 ${textColor || "text-white"}`;
  const isVideo = type === "video";

  React.useEffect(() => {
    if (isVideo) {
      const videoElements = document.querySelectorAll("video");
      videoElements.forEach((video) => {
        video.play().catch((error) => {
          console.log("Auto-play was prevented:", error);
        });
      });
    }
  }, [isVideo]);

  return (
    <div className={containerStyles}>
      {/* Media element that only shows on hover */}
      {isVideo ? (
        <video
          src={src}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className={mediaStyles}
        />
      ) : (
        <img src={src} className={mediaStyles} alt={title} />
      )}

      {/* Vertical title that shows by default */}
      <h2 className={titleStyles}>{title}</h2>

      {/* Content that fades in on hover */}
      <div className="slide-content">
        <h2 className="text-5xl font-bold mb-6 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
          {title}
        </h2>
        <p className="text-lg leading-relaxed opacity-0 transform translate-y-4 group-hover:opacity-90 group-hover:translate-y-0 transition-all duration-500 delay-200 mb-8">
          {description}
        </p>
      </div>
    </div>
  );
};


export {
    Slide
}