import instance from "../../lib/axios/CustomAxios";
import { NoticeDetailsType, NoticeListType } from "../../models/notice";

export const getNoticeList = async (): Promise<NoticeListType> => {
    const response = await instance.get("/notices/lists");
    return response.data;
}
export const getNoticeDetails = async (id: number): Promise<NoticeDetailsType> => {
    const response = await instance.get(`/notices/${id}`);
    return response.data;
}