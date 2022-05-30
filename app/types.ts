export type Tech = {
  name: string;
  icon: string;
};
export enum AlertType {
  ERROR = "error",
  SUCCESS = "success",
  CONFIRMED = "confirmed"
}

export enum SupportedTheme {
  DARK = "dark",
  LIGHT = "light"
}

export enum ContactFormFields {
  email = "Email",
  name = "Name",
  subject = "Betreff / Projekt",
  message = "Nachricht"
}

export type Message = {
  name: string;
  subject: string;
  message: string;
  email: string;
};


