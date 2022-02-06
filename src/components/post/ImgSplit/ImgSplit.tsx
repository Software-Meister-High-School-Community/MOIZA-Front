import { ImgSplitBox } from "./ImgSplit.style";

interface IImgSplit {
  width: number;
  imgs: any[];
}

const ImgSplit: React.FC<IImgSplit> = ({ width, imgs }) => {
  return (
    <>
      <ImgSplitBox width={width}>
        {imgs?.map((img, idx) => {
          return <img key={idx} />;
        })}
      </ImgSplitBox>
    </>
  );
};

export default ImgSplit;
