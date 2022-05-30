import * as React from "react";
import { ArrowRightIcon } from "@heroicons/react/solid";
import { useTheme } from "~/providers/ThemeProvider";
import { SupportedTheme } from "~/types";

interface Props {}

const AuthorSection: React.FC<Props> = ({}) => {
  const { theme } = useTheme();
  const borderColor =
    theme === SupportedTheme.LIGHT ? "border-gray-400" : "border-gray-200";
  return (
    <div
      className={`BlogPost__AuthorSection__Container border-t-2 ${borderColor} flex m-auto flex-col items-center justify-center sm:grid-cols-4 sm:gap-10 py-10`}
    >
      <img
        src="/images/author.jpg"
        alt="Florian Stanglmeier Portrait"
        className="BlogPost__AuthorSection__AuthorAvatar rounded-full mb-7 sm:mb-0 w-56"
        title="My portrait picture"
      />
      <div className="BlogPost__AuthorSection__Biography flex flex-col items-start justify-start sm:col-span-3">
        <p className="font-medium text-2xl mb-4 xs:mb-2 text-post-bodyTextLg">
          Verfasst von Florian Stanglmeier
        </p>
        <a
          href="https://www.linkedin.com/in/florianstanglmeier/"
          className="twitter-follow-button"
          data-size="large"
          aria-label="Folg uns auf LinkedIn"
          data-show-screen-name="false"
          data-show-count="false"
        >
          Follow
        </a>
        <p className="text-lg mt-7">
          Florian Stanglmeier ist IT Stratege und AI Experte. Er ist zuständig
          für die Entwicklung und das Management von Projekten.
        </p>
        <a
          href="/"
          className="mt-7 inline-flex items-center justify-start text-post-bodyTextLg"
        >
          <p className="text-xl mr-5">Mehr erfahren</p>
          <ArrowRightIcon className="h-10 mr-4 rounded-full border-2 p-2 hover:border-gray-700 transition-all duration-120" />
        </a>
      </div>
    </div>
  );
};

export default AuthorSection;
