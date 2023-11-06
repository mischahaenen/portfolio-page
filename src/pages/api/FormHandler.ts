import sendGrid from "@sendgrid/mail";
import { POST } from "../api/recaptcha";
import { getLangFromUrl, useTranslations } from "../../i18n/utils";

sendGrid.setApiKey(import.meta.env.SENDGRID_API_KEY);

const getFormValue = (data: FormData, key: string): string => {
  return data.get(key)?.toString() || "";
};

export const handleFormSubmission = async (request: Request) => {
  const currentLang = getLangFromUrl(new URL(request.url));
  const t = useTranslations(currentLang); // Initialize translation function

  const errors = { name: "", email: "", subject: "", message: "" };
  let formSubmittedSuccessfully = false;
  if (request.method === "POST") {
    try {
      const data = await request.formData();
      const name = getFormValue(data, "name");
      const email = getFormValue(data, "email");
      const subject = getFormValue(data, "subject");
      const message = getFormValue(data, "message");
      const token = getFormValue(data, "g-recaptcha-response");
      const response = await POST({ token });

      // Use the t function to fetch translated strings
      if (!name) errors.name = t("form.error.name");
      if (!email) errors.email = t("form.error.email");
      if (!subject) errors.subject = t("form.error.subject");
      if (!message || message.length < 6)
        errors.message = t("form.error.messageShort");
      const res = await response.json();

      if (response.status !== 200 || res.score < 0.5) {
        errors.message += t("form.error.captcha");
      }

      if (Object.values(errors).every((error) => error === "")) {
        formSubmittedSuccessfully = true;
        const msg = {
          to: "mischahaenen@gmail.com",
          from: "hello@mischahaenen.ch",
          replyTo: { email, name },
          subject: `${t("form.label.subject")}: ${subject}`,
          text: `${subject}\n\n${message}\n\n${t(
            "form.success.message",
          )}\n${name}\n\n\nRecaptcha Score: ${res.score}`,
        };
        await sendGrid.send(msg).catch(console.error);
      }
    } catch (error) {
      console.error(error);
    }
  }

  return { errors, formSubmittedSuccessfully };
};
