import instance from "../../lib/axios/CustomAxios"
import { PatchUserRequestType, VerifyGraduateRequestProps } from "../../models/users/request";

export const signup = async () => {
    await instance.post("/users");
}

export const getMypage = async () => {
    try {
        const response = await instance.get("/users");
        return response.data;
    } catch (err) {
        throw err;
    }
}

export const signout = async () => {
    try {
        await instance.delete("/users");
    } catch (err) {
        throw err
    }
}

export const userReport = async (userId: number) => {
    try {
        await instance.post(`/users/${userId}/reports`);
    } catch (err) {
        throw err
    }
}

export const deleteSearchHistory = async (historyId: number) => {
    try {
        await instance.delete(`/users/searching/history/${historyId}`);
    } catch (err) {
        throw err
    }
}

export const getUserSearchHistory = async () => {
    try {
        await instance.get("/users/searching/history");
    } catch (err) {
        throw err
    }
}

export const searchUser = async (name: string, page: number) => {
    try {
        await instance.get(`/users/searching/name=${name}&page=${page}`);
    } catch (err) {
        throw err
    }
}

export const verifyGraduate = async (body: VerifyGraduateRequestProps) => {
    try {
        await instance.post("/users/graduate-verifications", body);
    } catch (err) {
        throw err;
    }
}



export const patchUser = async (body: PatchUserRequestType) => {
    try {
        await instance.patch("/users", body);
    } catch (err) {
        throw err;
    }
}

export const getUserProfile = async (userId: number) => {
    try {
        const response = await instance.get(`/users/${userId}`);
        return response.data;
    } catch (err) {
        throw err;
    }
}