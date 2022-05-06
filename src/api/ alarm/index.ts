import instance from "../../lib/axios/CustomAxios";
import { INotification } from "../../interface/alarm/Alarm.type";

export const getNotifications = async (): Promise<INotification[]> => {
    return await instance.get("/notifications/lists")
}