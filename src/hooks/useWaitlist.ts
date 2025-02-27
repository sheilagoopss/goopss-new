import FirebaseHelper from "@/helper/FirebaseHelper";
import { useCallback, useState } from "react";

const useWaitList = () => {
  const [isSavingEmail, setIsSavingEmail] = useState(false);

  const saveEmail = useCallback(async (email: string) => {
    setIsSavingEmail(true);
    try {
      const response = await FirebaseHelper.findWithFilter(
        "waitlistUsers",
        "email",
        email.toLowerCase(),
      );
      if (response.length > 0) {
        return {
          success: true,
          message:
            "You are already registered on our waitlist. Thank you for your interest!",
        };
      }

      await FirebaseHelper.create("waitlistUsers", {
        email: email.toLowerCase(),
      });

      return {
        success: true,
        message:
          "You have been added to our waitlist. Thank you for your interest!",
      };
    } catch (error) {
      console.error(error);
      return {
        success: false,
        message: "Something went wrong. Please try again later.",
      };
    } finally {
      setIsSavingEmail(false);
    }
  }, []);

  return { isSavingEmail, saveEmail };
};

export default useWaitList;
