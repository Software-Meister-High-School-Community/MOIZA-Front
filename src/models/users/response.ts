import { BackGroundColorType } from "../../components/editProfile/constant";
import { SchoolType, UserType } from "../../interface/Common/user";

export interface UserSearchHistoryResponseType {
    keywords: Array<{
        history_id: number;
        keyword: string;
    }>
}

export interface UserSearchResponseType {
    user_list: Array<{
        user_id: number;
        name: string;
        profile_image_url: string;
        user_scope: UserType;
        school: SchoolType;
    }>
}

export interface UserProfileResponseType {
    id?: number;
    name: string;
    school: SchoolType;
    user_scope: UserType;
    profile_image_url: string;
    profile_background_color: BackGroundColorType;
    introduce?: string;
    link_url?: string[];
    feed_count: number;
    follower_count: number;
    following_count: number;
}