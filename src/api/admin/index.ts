import instance from "../../lib/axios/CustomAxios";
import { CommentReportType, FeedReportType, GraduateListType, UserReportType } from "../../models/admin";

export const getCommentReports = async (keyword: string, page: number): Promise<CommentReportType> => {
    const response = await instance.get(`/reports/comments?keyword=${keyword}&page=${page}`);
    return response.data;
}

export const getFeedReports = async (keyword: string, page: number): Promise<FeedReportType> => {
    const response = await instance.get(`/reports/feeds?keyword=${keyword}&page=${page}`);
    return response.data;
}

export const getUserReports = async (keyword: string, page: number): Promise<UserReportType> => {
    const response = await instance.get(`/reports/users?keyword=${keyword}&page=${page}`);
    return response.data;
}

export const getGraduateLists = async (status: string, keyword: string, page: number): Promise<GraduateListType> => {
    const response = await instance.get(`/admins/graduate/lists?status=${status}&keyword=${keyword}&page=${page}`);
    return response.data;
}