import { FeedType, SchoolType, UserType } from "../../interface/Common/user";

export interface GraduateListResponseType {
    total_count: number;
    user_list: Array<{
        user_id: number;
        name: string;
        school: SchoolType;
        type: UserType;
        verifying_image_url: string;
    }>
}
export interface CommentReporResponsetType {
    total_count: number;
    comment_list: Array<{
        feed_id: number;
        author: {
            id: number;
            name: string;
            school: SchoolType;
            type: UserType;
        },
        reported_count: number;
        content: string;
        created_at: Date;
    }>
}
export interface FeedReportResponseType {
    total_count: number;
    post_list: Array<{
        id: number;
        author: {
            id: number;
            name: string;
            school: SchoolType;
            type: UserType
        },
        reported_count: number;
        title: string;
        type: FeedType;
        created_at: Date;
    }>
}
export interface UserReportResponseType {
    total_count: number;
    user_list: Array<{
        user_id: number;
        name: string;
        school: SchoolType;
        type: UserType;
        suspension_created_at: Date;
        suspension_expired_at: Date;
        user_reported_count: number;
        feed_reported_count: number;
        comment_reported_count: number;
    }>
}