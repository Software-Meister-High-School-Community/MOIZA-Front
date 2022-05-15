import instance from "../../lib/axios/CustomAxios";
import { INotification, topicType } from "../../interface/alarm/Alarm.type";

export const getNotifications = async (): Promise<INotification[]> => {
    return await instance.get("/notifications/lists")
}

export const settingAlarm = async (topic: topicType): Promise<void> => {
    await instance.patch("/notifications/subscribing", {
        topic
    })
}

