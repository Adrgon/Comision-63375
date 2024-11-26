import { useContext } from "react";
import { NotificationContext } from "../context/NotificationContext";

export const useNotifacation = () => {
  return useContext(NotificationContext);
};
