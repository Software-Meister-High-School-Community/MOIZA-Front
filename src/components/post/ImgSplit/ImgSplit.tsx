import {
  ImgSplitBox,
  ImgSplitColumnBox,
  ImgSplitRowBox,
} from "./ImgSplit.style";

interface IImgSplit {
  width: number;
  imgs: any[];
  gap: number;
}

const ImgSplit: React.FC<IImgSplit> = ({ width, imgs, gap }) => {
  const imgHandleFunc = (imgLength: number) => {
    switch (imgLength) {
      case 1:
        return <img width={width} height="100%" src={imgs[0]} />;

      case 2:
        return (
          <ImgSplitRowBox gap={gap}>
            <img width={width / 2 - gap / 2} height="100%" src={imgs[0]} />
            <img width={width / 2 - gap / 2} height="100%" src={imgs[1]} />
          </ImgSplitRowBox>
        );

      case 3:
        return (
          <ImgSplitRowBox gap={gap}>
            <img width={width / 2 - gap / 2} height="100%" src={imgs[0]} />
            <ImgSplitColumnBox gap={gap}>
              <img width={width / 2 - gap / 2} height="50%" src={imgs[1]} />
              <img width={width / 2 - gap / 2} height="50%" src={imgs[2]} />
            </ImgSplitColumnBox>
          </ImgSplitRowBox>
        );

      case 4:
        return (
          <ImgSplitColumnBox gap={gap}>
            <ImgSplitRowBox gap={gap}>
              <img width={width / 2 - gap / 2} height="100%" src={imgs[0]} />
              <img width={width / 2 - gap / 2} height="100%" src={imgs[1]} />
            </ImgSplitRowBox>
            <ImgSplitRowBox gap={gap}>
              <img width={width / 2 - gap / 2} height="100%" src={imgs[2]} />
              <img width={width / 2 - gap / 2} height="100%" src={imgs[3]} />
            </ImgSplitRowBox>
          </ImgSplitColumnBox>
        );

      default:
        return <img width={width} height="100%" />;
    }
  };

  return (
    <ImgSplitBox width={width} gap={gap}>
      {imgHandleFunc(imgs.length)}
    </ImgSplitBox>
  );
};

export default ImgSplit;
