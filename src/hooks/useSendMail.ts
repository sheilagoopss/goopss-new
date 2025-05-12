import { endpoints } from "@/constant/endpoints";
import HttpHelper from "@/helper/HttpHelper";
import { useCallback, useState } from "react";

export interface IMail {
  to: string[];
  subject: string;
  text?: string;
  html?: string;
  attachments?: {
    content: string;
    filename: string;
    type: string;
  }[];
}

export const useMailSender = () => {
  const [isSendingMail, setIsSendingMail] = useState(false);

  const sendMail = useCallback(async (mail: IMail) => {
    setIsSendingMail(true);
    try {
      const response = await HttpHelper.post(endpoints.mailSender.sendMail, {
        data: mail,
      });
      return response?.data;
    } catch (error) {
      console.error("Error sending mail:", error);
    } finally {
      setIsSendingMail(false);
    }
  }, []);

  return { sendMail, isSendingMail };
};
