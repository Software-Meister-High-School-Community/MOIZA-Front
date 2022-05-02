import * as S from "./styles";
import Type from "../../../../../assets/img/common/questionPostIcon.svg";
import UseReplaceKeyword from '../../../../Common/search/replaceKeyword/index'
import { removePost } from "../../../../../api/feeds";
import { useState } from "react";
import { FeedReportResponseType } from "../../../../../models/admin/response";


const ReportOfPost: React.FC = () => {
  const [postReports, setPostReports] = useState<FeedReportResponseType>()
  const onClickRemovePost = () => {
    removePost(1)
  }
  return (
    <>
      {postReports?.post_list.map(
        (i, index) => (


          <S.Wrapper>
            <section className="summary">
              <S.Title>
                <img src={Type} />
                <h1>
                  <UseReplaceKeyword
                    keyword={""}
                    string={i.title}
                    fontColor="#0048FF"
                  />
                </h1>
              </S.Title>
              <S.Info>
                <S.Name>
                  <UseReplaceKeyword
                    keyword={""}
                    string={i.author.name}
                    fontColor="#0048FF"
                  />
                </S.Name>
                <S.Name>{i.author.name}</S.Name>
                <S.UserType>{i.author.type}</S.UserType>
              </S.Info>
            </section>
            <S.Details>
              <S.Top>
                <p>{i.created_at}</p>
                <S.Button>본문 확인</S.Button>
              </S.Top>
              <S.Bottom>
                <div>
                  신고<p>{i.reported_count}회</p>
                </div>
                <S.Button onClick={onClickRemovePost}>게시물 삭제</S.Button>
              </S.Bottom>
            </S.Details>
          </S.Wrapper>
        )
      )}
    </>
  );
};
export default ReportOfPost;
