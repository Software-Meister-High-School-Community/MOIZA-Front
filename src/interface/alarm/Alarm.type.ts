export interface INotification {
    id: number,
    title: string,
    content: string,
    topic: string,
    data: number,
    is_read: boolean,
    created_at: string
}

export type topicType = "NOTICE" | "COMMENT" | "LIKE" | "FOLLOW" | "GRADUATE"