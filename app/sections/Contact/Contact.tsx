import { Transition } from "@remix-run/react/transition";
import * as React from "react";
import { Form, LinksFunction } from "remix";
import Alert from "~/components/Alert";
import SocialMedia from "~/components/SocialMedia/SocialMedia";
import { contactFormHtmlId } from "~/constants";
import { useWasInViewAtLeastOnce } from "~/hooks/useWasInViewAtLeastOnce";
import { AlertType, ContactFormFields } from "~/types";
import { ContactFormFieldErrors } from "~/utils/functions";
import styles from "./Contact.css";

interface Props {
  fieldErrors: Partial<ContactFormFieldErrors> | undefined;
  transition: Transition;
}

export const links: LinksFunction = () => [
  {
    rel: "stylesheet",
    href: styles
  }
];

const ContactTitle = () => {
  const { setRef, wasInViewAtLeastOnce } = useWasInViewAtLeastOnce();
  const contactTitleClassname = wasInViewAtLeastOnce
    ? "contact-title"
    : undefined;

  return (
    <svg
      viewBox="0 0 500 110"
      className={`${contactTitleClassname} contact-title`}
      ref={setRef}
    >
      <text textAnchor="middle" x="50%" y="90%" className="text-2xl">
        Jetzt unverbindlich anfragen!
      </text>
    </svg>
  );
};
const ContactMeSection: React.FC<Props> = (props) => {
  const { fieldErrors, transition } = props;

  const hasError = fieldErrors && Object.keys(fieldErrors).length > 0;
  const hasSuccess = fieldErrors && Object.keys(fieldErrors).length === 0;

  const buttonText =
    transition.state === "submitting"
      ? "Sendet..."
      : transition.state === "loading"
      ? "Gesendet!"
      : "Anfrage Senden";

  return (
    <div className="contact-wrapper flex flex-col items-center justify-center translate-y-[-1rem] xs:translate-y-0 xl:translate-y-[-1rem]">
      <ContactTitle />
     
      <div className="contact-form-wrapper w-full custom2:w-[90%] sm:w-4/5 md:w-2/3 lg:w-1/2 pb-20">

        <Form
          id={contactFormHtmlId}
          method="post"
          action="/?index"
          className="contact-form flex flex-col text-contact-label w-full"
        >
          {hasError ? (
            <Alert
              message={"Leider ist etwas schief gelaufen. Bitte nochmal versuchen!"}
              type={AlertType.ERROR}
            />
          ) : hasSuccess ? (
            <Alert
              message={"Wir haben Ihre Anfrage erhalten!"}
              type={AlertType.CONFIRMED}
            />
          ) : (
            <Alert message={"Wir antworten meist innerhalb von 2 Werktagen."} type={AlertType.CONFIRMED} />
          )}

          <label
            htmlFor={ContactFormFields.name}
            className="text-base pt-2 pb-1"
          >
            Ihr (Unternehmens-) Name
          </label>
          <input
            id={ContactFormFields.name}
            name={ContactFormFields.name}
            type="text"
            required
            className="appearance-none rounded-lg relative block w-full px-3 py-1"
          />
          <div className="error">
            <p>{fieldErrors?.name && fieldErrors?.name}</p>
          </div>
          <label
            htmlFor={ContactFormFields.email}
            className="text-base pt-2 pb-1"
          >
            Email Adresse
          </label>
          <input
            id={ContactFormFields.email}
            name={ContactFormFields.email}
            type="email"
            required
            className="appearance-none rounded-lg relative block w-full px-3 py-1"
          />
          <div className="error">
            <p>{fieldErrors?.email && fieldErrors?.email}</p>
          </div>
          <label
            htmlFor={ContactFormFields.subject}
            className="text-textLgcolor text-base pt-2 pb-1"
          >
            Betreff oder Projektidee
          </label>
          <input
            id={ContactFormFields.subject}
            name={ContactFormFields.subject}
            type="text"
            required
            className="appearance-none rounded-lg relative block w-full px-3 py-2"
          />
          <div className="error">
            <p>{fieldErrors?.subject && fieldErrors?.subject}</p>
          </div>
          <label
            htmlFor={ContactFormFields.message}
            className="text-textLgcolor text-base pt-2 pb-1"
          >
            Ihre Nachricht
          </label>
          <textarea
            id={ContactFormFields.message}
            name={ContactFormFields.message}
            required
            className="appearance-none rounded-lg relative block w-full px-3 py-1"
          />
          <div className="error text-sm font-medium italic text-teal-300">
            <p>{fieldErrors?.message && fieldErrors?.message}</p>
          </div>
          <button
            type="submit"
            name="Senden"
            className="contact-btn bg-contact-send hover:bg-contact-sendHover focus:bg-contact-sendHover rounded-lg text-base mt-7 text-white py-3 w-full"
          >
            {buttonText}
          </button>
        </Form>


      </div>
      <div className="text-textLgColor flex justify-center mb-100 mt-6">
        <SocialMedia />
      </div>
      <div className="spacer-div mt-10 mb-20"></div>

    </div>
  );
};

export default ContactMeSection;
