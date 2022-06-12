import React from "react";
import NotFoundGif from "../assets/gifs/notfound.gif";

const NotFound = () => {
  return (
    <div className="bg-gradient-to-br from-[#684ca0] via-[#6d28f6]  to-[#164596] min-h-screen flex items-center text-white ">
      <div className="container mx-auto p-4 flex flex-wrap items-center">
        <div className="w-full md:w-5/12 text-center p-4">
          {/* <img
            // src="https://themichailov.com/img/not-found.svg"
            src={NotFoundGif}
            alt="Not Found"
          /> */}
          <iframe
            src="https://giphy.com/embed/JY5dig6xQ9S7u"
            width="480"
            height="466"
            frameBorder="0"
            className="giphy-embed"
            allowFullScreen
          ></iframe>
          <p>
            <a href="https://giphy.com/stickers/confused-JY5dig6xQ9S7u">--</a>
          </p>
        </div>
        <div className="w-full md:w-7/12 text-center md:text-left p-4">
          <div className="text-6xl font-medium">404</div>
          <div className="text-xl md:text-3xl font-medium mb-4">
            Oops. This page has gone missing.
          </div>
          <div className="text-lg mb-8">
            You may have mistyped the address or the page may have moved.
          </div>
          {/* TODO: Link this page */}
          <a href="#" className="border border-white rounded p-4">
            Go Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
