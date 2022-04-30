import instance from "../../lib/axios/CustomAxios";
import { CommentReporResponsetType, FeedReportResponseType, GraduateListResponseType, UserReportResponseType } from "../../models/admin/response";

export const getCommentReports = async (keyword: string, page: number): Promise<CommentReporResponsetType> => {
    try {
        const response = await instance.get(`/reports/comments?keyword=${keyword}&page=${page}`);
        return response.data;
    } catch (err) {
        throw (err)
    }
}

export const getFeedReports = async (keyword: string, page: number): Promise<FeedReportResponseType> => {
    try {
        const response = await instance.get(`/reports/feeds?keyword=${keyword}&page=${page}`);
        return response.data;
    } catch (err) {
        throw (err)
    }
}

export const getUserReports = async (keyword: string, page: number): Promise<GraduateListResponseType> => {
    try {
        const response = await instance.get(`/reports/users?keyword=${keyword}&page=${page}`);
        return response.data;
    } catch (err) {
        throw (err)
    }
}

export const getGraduateLists = async (status: string, keyword: string, page: number): Promise<UserReportResponseType> => {
    try {
        const response = await instance.get(`/admins/graduate/lists?status=${status}&keyword=${keyword}&page=${page}`);
        return response.data;
    } catch (err) {
        throw (err)
    }
}

export const userSuspension = async (userId: number) => {
    try {
        return await instance.post(`/admins/${userId}/suspensions`);
    } catch (err) {
        throw (err)
    }
}

export const userSecession = async (userId: number) => {
    try {
        return await instance.post(`/admins/${userId}`);
    } catch (err) {
        throw (err)
    }
}

export const acceptGraduate = async (userId: number) => {
    try {
        instance.post(`/graduate/${userId}/acceptances`)
    } catch (err) {
        throw (err)
    }
}

export const rejectGraduate = async (userId: number) => {
    try {
        instance.post(`/admins/graduate/${userId}/rejections`)
    } catch (err) {
        throw (err)
    }
}