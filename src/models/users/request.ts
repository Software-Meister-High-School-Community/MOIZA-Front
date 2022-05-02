import { BackGroundColorType } from "../../components/editProfile/constant";

export interface VerifyGraduateRequestProps {
    verifying_file_url: string;
}

export interface PatchUserRequestType {
    profile_image_url: string;
    profile_background_color: BackGroundColorType;
    introduce: string;
    introduce_link_url: string[];
}