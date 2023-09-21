import React from "react";

const SocialLink = () => {
  return (
    <ul className="flex gap-3 sm:mt-64 ">
      <li>
        <a href="#" className=" underline-offset-4 underline">Facebook</a>
      </li>
      <span>/</span>
      <li>
        <a className=" underline-offset-4 underline" href="#">Github</a>
      </li>
      <span>/</span>
      <li>
        <a className=" underline-offset-4 underline" href="#">Telegram</a>
      </li>
    </ul>
  );
};

export default SocialLink;
