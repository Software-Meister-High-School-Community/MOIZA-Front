import instance from "../../lib/axios/CustomAxios"

export const removeComment = async (commentId: number) => {
    return await instance.post(`/comments/${commentId}`)
}