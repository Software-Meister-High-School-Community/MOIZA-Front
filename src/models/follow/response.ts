import { SchoolType, UserType } from "../../interface/Common/user";

export interface getFollowListResponse {

    is_mine: boolean;
    user_list: Array<{
        user_id: number;
        name: string;
        profile_image_url: string;
        user_scope: UserType;
        school: SchoolType;
        is_follow: boolean;
    }>
}