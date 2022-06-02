import * as React from "react";
import styles from "./AboutMe.css";
import { LinksFunction } from "remix";
import FunFacts from "./FunFacts";
import MyStory from "./MyStory";
import Titles from "./Titles";
import Hi from "./Hi";
import { useTheme } from "~/providers/ThemeProvider";
import ResumeButton from "~/components/ResumeButton/ResumeButton";
import Facts from "./Facts";
import Testimonials from "./Testimonials";
import { Button } from "@nextui-org/react";
import Services from "./Services";
import { getSeo, getSeoMeta, getSeoLinks } from "~/seo";

let [seoMeta, seoLinks] = getSeo({
	title: "About us",
	description: "We are great!",
});


export const links: LinksFunction = () => [
  {
    rel: "stylesheet",
    href: styles
  }
];
const AboutMe: React.FC = (props) => {
  const { theme } = useTheme();

  return (
    <section id="AboutMe" className="AboutMe__Wrapper">
      <article className="aboutme-wrapper flex flex-col justify-center">
        <div className="Introduction__Wrapper" id="introductionWrapper">
          <div className="flex flex-col sm:grid sm:grid-cols-5 sm:gap-5 mb-5">
            <div className="flex flex-col col-span-3">
              <Hi />
              <div className="bio-description md:text-lg leading-10 lg:text-lg ">

                <div className="my-10 text-lg">

                  <p className="text-aboutMe-aboutMeText my-10">
                    Devato ist Ihr zuverlässiger Dienstleister rund um
                    Shopify E-Commerce. Von der Erstellung neuer Shops bis hin zu komplexen
                    Backend Entwicklungen: Wir unterstützen Sie in allen Themen rund um Shopify.
                  </p>

                  {/* <p className="mb-1 xs:mb-1 text-aboutMe-aboutMeText">
                    - Store Optimierung & Einrichtung 
                  </p>

                  <p className="mb-1 xs:mb-1 text-aboutMe-aboutMeText">
                  - App Development & Implementierung
                  </p>
                  
                  <p className="mb-5 xs:mb-10 text-aboutMe-aboutMeText">
                  - Analytics & Artificial Intelligence
                  </p> */}
                
                  <div className="spacer-div mt-10 sm:mt-10"></div>
                  
                  <Titles />
                  <div className="spacer-div mt-10 sm:mt-20"></div>
                  <div className="mt-0 xs:mt-30"></div>

                  <div className="resume-btn-wrapper mt-30 w-fit">


                    <a href="/#projects">
                  <Button 
                  color="gradient"
                  size="xl"
                  auto
                  href="sectionStory"
                  rounded bordered>
                      Projekte ansehen
                    </Button>
                  </a>


                    </div>
                  <div className="spacer-div mt-100 sm:mt-100"></div>
                </div>
                
              </div>
            </div>



            <div className="spacer-div mt-20 md:mt-24 lg:mt-56"></div>
          </div>
          
          <MyStory />
          
        </div>
        
        <div className="story-wrapper" id="sectionStory"></div>
        <Testimonials />

        <div className="spacer-div mt-20 md:mt-5 lg:mt-5"></div>

        {/* <FunFacts /> */}
        <Services />
        <Facts />

      </article>
    </section>
  );
};

export default AboutMe;
