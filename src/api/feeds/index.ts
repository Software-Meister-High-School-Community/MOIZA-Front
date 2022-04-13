import instance from "../../lib/axios/CustomAxios"

export const removePost = async (feedId: number) => {
    return await instance.post(`/feeds/${feedId}`)
}