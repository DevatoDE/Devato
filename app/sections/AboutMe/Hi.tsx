import * as React from "react";
import { useTypewriter } from "use-typewriter-hook";

// $TODO: Fix element unmount on scrolling up
const Hi: React.FC = () => {
  const targetText = "Shopify🛍️ Partner";

  const { textValue: typedText, wrapperClassName } = useTypewriter({
    targetText: targetText,
    autoStartDelay: 400,
    typingDelayMillis: 70
  });

  const stringToSearch = "Shopify";

  const startIndex = targetText.indexOf(stringToSearch);
  const endIndex = startIndex + stringToSearch.length;

  const fragments = splitTargetText(typedText, startIndex, endIndex);
  return (
    <span
      className="font-semibold lg:text-7xl custom:text-6xl md:text-5xl sm:text-4xl xs:text-5xl xxs:text-4xl text-aboutMe-aboutMeText"
      aria-live="polite"
      aria-label="Wir sind Devato"
    >
      <span className="welcome inline-flex whitespace-pre leading-none text-center justify-center items-center after:inline-flex after:items-center">
        <span className="">Hi, wir sind Dein</span>
        <meta name="Devato Shopify Agentur Deutschland Greeting" content="Wir sind Devato und sagen Hallo an alle Shopify Kunden in Deutschland und ACH" />
      </span>
      <span className="welcome inline-flex whitespace-pre leading-none text-center justify-center items-center after:inline-flex after:items-center"></span>
      <span className="inline-flex whitespace-pre leading-none text-center justify-center items-center after:inline-flex after:items-center"><span className={`${wrapperClassName}`}>{fragments}</span>
      </span>
    </span>
  );
};

export default Hi;

const splitTargetText = (
  str: string,
  startIndex: number,
  endIndex: number
): JSX.Element => {
  const customStyle = {
    color: "var(--alissa)"
  };
  return (
    <>
      <span className="inline-block">{str.slice(0, startIndex)}</span>
      <span className="inline-block">
        <span className={"custom-typewriter-text"} style={customStyle}>
          {str.slice(startIndex, endIndex)}
        </span>
      </span>
      <span className="inline-block">{str.slice(endIndex, str.length)}</span>
    </>
  );
};
