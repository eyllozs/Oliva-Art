import React from "react";

export default function Home() {
  return (
    <>
      <div className="container-slider">
        <div id="proparallax">
          <img
            alt="one"
            className="one"
            src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/6f70d3147257631.62bedfeed1c96.jpg"
          />
          <img
            alt="two"
            className="two"
            src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/b822ab147262039.62beef1130fea.jpg"
          />
          <img
            alt="three"
            className="three"
            src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/a6cf91147260227.62bee8f4d944d.jpg"
          />
        </div>
      </div>
      <div className="hometext">
        <p>
          Digital art offer a platform that pushes the boundaries of traditional
          art and offers new forms of expression. Artists express their
          imagination without limits, with the flexibility provided by digital
          tools and software. Here you will discover the wide range of digital
          paintings, from realism to abstraction, from portraits to landscapes.
        </p>
        <p>
          On our site, you will find an impressive gallery. Find the best of
          digital art and works by leading artists here. Follow emotional
          connections and experience how the artists tell their own stories as
          you watch the colors dance.
        </p>
      </div>
    </>
  );
}
