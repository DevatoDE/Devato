import { Button } from "@nextui-org/react";
import * as React from "react";
import { LinksFunction } from "remix";
import styles from "./ResumeButton.css";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: styles }];
};
const ResumeButton: React.FC = () => {
  return (
    <div className="resume-btn-wrapper mt-30 w-fit">
    <Button 
    color="gradient"
    size="xl"
    auto
    href="/#contact"
    rounded bordered>
        Mehr erfahren
      </Button>
      </div>
  
  );
};

export default ResumeButton;
