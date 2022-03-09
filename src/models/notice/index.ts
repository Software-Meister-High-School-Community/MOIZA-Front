export interface NoticeListType {
    notice_list: Array<{
        id: number;
        title: string;
        created_at: Date;
        is_pinned: boolean;
    }>
}
export interface NoticeDetailsType {
    title: string;
    content: string;
    created_at: Date;
    is_updated: boolean;
    attachment_file_urls: string[] | string;
}