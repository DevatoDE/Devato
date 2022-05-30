import * as React from "react";
import { Globe } from "~/components/Decoration";
import { Button } from '@nextui-org/react';

const MyStory: React.FC = ({}) => {
  return (
    <div className="my-story-wrapper flex flex-col items-baseline w-full text-textSmColor" >
      <span className="my-story-title reveal-text text-textLgColor leading-none margin-top:50 relative after:pointer-events-none py-4 font-extrabold whitespace-nowrap cursor-default after:absolute after:top-0 after:bottom-0 after:left-0 after:right-0 lg:text-6xl md:text-5xl sm:text-4xl xs:text-3xl xxs:text-2xl">
      Über Uns
      </span>
      <div className="fade-in-text my-story-content md:mt-2 flex flex-col sm:flex-row items-center">
        <p className="my-4 text-xl xs:mb-10 sm:w-4/5 leading-20 text-text-SmColor">
          Seit Jahren betreiben und entwickeln wir einzigartige Shopify Stores. Durch Design überzeugend und
          durch Analytics bestätigt: E-Commerce Development für höchste Ansprüche. </p>
        <Globe />
      </div>
      <div className="spacer-div mb-15 sm:mb-15"></div>
      <MyselfCard />
      <div className="spacer-div mb-10 sm:mb-5"></div>
      <MyselfCard2 />
      
    </div>
  );
};

export default MyStory;


const MyselfCard: React.FC = () => {


  return (
    <div className="myself-card px-8 pt-6 w-full overflow-visible relative custom2:w-4/6">
      <div className="my-hobbies">
        <h2 className="text-2xl font-medium mb-2">Neuen Shop entwickeln</h2>
        <p className=" text-base text-subText leading-7">
        Wir analysieren Ihre Bedürfnisse und erstellen in enger Absprache Ihren einzigarten Online Store.
        Auch bei der Migration von anderen Plattformen zu Shopify helfen wir unseren Kunden.
        </p>
        <div className="pb-6"></div>
        </div>
      <div className="divider">
        <div className="divider-line mt-10">
          <img src="/images/HelloBelloLogo.png" alt="myself-card" className="myself-card-img" 
            loading="lazy"
            title="HB Image"
          />
          <Button 
            color="gradient"
            rounded bordered>
          Projekt Ansehen
          </Button>
    
      </div>
    </div>
    
    </div>
    
  );
};




const MyselfCard2: React.FC = () => {


  return (
    <div className="myself-card px-8 pt-6 w-full overflow-visible relative custom2:w-4/6">
      <div className="my-hobbies">
        <h2 className="text-2xl font-medium mb-2">Bestehenden Store optimieren</h2>
        <p className=" text-base text-subText leading-7">
          Shopify Development liegt in unserer Natur. Sowohl komplexe Automation von Bestellprozessen
          als auch die Erstellung von Private Apps: Devato ist Ihr Ansprechpartner.
        </p>
        <div className="pb-6"></div>
      </div>
      <div className="divider">
        <div className="divider-line mt-10">
          <img src="/images/UnimalsLogo.png" alt="myself-card" className="myself-card-img" 
            loading="lazy"
            title="HB Image"
          />
          <Button 
            color="gradient"
            rounded bordered>
          Zur Case Study
          </Button>
    
      </div>
    </div>
    
    </div>
    
  );
};
