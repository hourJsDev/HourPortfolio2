import React from "react";

const SocialLink = () => {
  return (
    <ul className="flex gap-3 sm:mt-64  dark:text-white">
      <li>
        <a target="_blank" href="https://www.facebook.com/pich.lyhour.75?mibextid=9R9pXO" className=" underline-offset-4 underline">Facebook</a>
      </li>
      <span>/</span>
      <li>
        <a className=" underline-offset-4 underline" href="https://t.me/mentiontverey" target="_blank">Telegram</a>
      </li>
      <span>/</span>
      <li>
        <a className=" underline-offset-4 underline" href="https://github.com/hourJsDev" target="_blank">Github</a>
      </li>
    </ul>
  );
};

export default SocialLink;
