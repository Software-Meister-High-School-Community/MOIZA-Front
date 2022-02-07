export interface IPostReplyDataProps {
  id: number;
  title: string;
  writer: string;
  school: string;
  prifileImg: string;
  studentState: string;
  createDate: string;
  lastModifyDate: string;
  text: string;
  picture: any[];
  likes: number;
  views: string;
  comment: ICommnet[];
}

export interface ICommnet {
  id: number;
  name: string;
  studentState: string;
  profileImg: string;
  school: string;
  createDate: string;
  text: string;
  picture: any[];
  commentOfComment?: ICommnet[];
}

export interface IMakeComment {
  text: string;
  picture: any[];
}
