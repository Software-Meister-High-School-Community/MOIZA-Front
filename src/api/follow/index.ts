import instance from "../../lib/axios/CustomAxios"
import { getFollowListResponse } from "../../models/follow/response";

export const deleteFollower = async (user_id: number) => {
    try {
        await instance.delete(`/${user_id}/follow`);
    } catch (err) {
        throw err;
    }
}

export const getFollowList = async (user_id: number): Promise<getFollowListResponse> => {
    try {
        const response = await instance.get(`/follow/${user_id}`);
        return response.data;
    } catch (err) {
        throw err;
    }
}

export const following = async (user_id: number) => {
    try {
        await instance.post(`/follow/${user_id}`);
    } catch (err) {
        throw err;
    }
}

export const deleteFollowing = async (user_id: number) => {
    try {
        await instance.delete(`/follow/${user_id}`);
    } catch (err) {
        throw err;
    }
}