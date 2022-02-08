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
        return <img width={width} height="100%" src={imgs[0]} alt="img" />;

      case 2:
        return (
          <ImgSplitRowBox gap={gap}>
            <img
              width={width / 2 - gap / 2}
              height="100%"
              src={imgs[0]}
              alt="img"
            />
            <img
              width={width / 2 - gap / 2}
              height="100%"
              src={imgs[1]}
              alt="img"
            />
          </ImgSplitRowBox>
        );

      case 3:
        return (
          <ImgSplitRowBox gap={gap}>
            <img
              width={width / 2 - gap / 2}
              height="100%"
              src={imgs[0]}
              alt="img"
            />
            <ImgSplitColumnBox gap={gap}>
              <img
                width={width / 2 - gap / 2}
                height="50%"
                src={imgs[1]}
                alt="img"
              />
              <img
                width={width / 2 - gap / 2}
                height="50%"
                src={imgs[2]}
                alt="img"
              />
            </ImgSplitColumnBox>
          </ImgSplitRowBox>
        );

      case 4:
        return (
          <ImgSplitColumnBox gap={gap}>
            <ImgSplitRowBox gap={gap}>
              <img
                width={width / 2 - gap / 2}
                height="100%"
                src={imgs[0]}
                alt="img"
              />
              <img
                width={width / 2 - gap / 2}
                height="100%"
                src={imgs[1]}
                alt="img"
              />
            </ImgSplitRowBox>
            <ImgSplitRowBox gap={gap}>
              <img
                width={width / 2 - gap / 2}
                height="100%"
                src={imgs[2]}
                alt="img"
              />
              <img
                width={width / 2 - gap / 2}
                height="100%"
                src={imgs[3]}
                alt="img"
              />
            </ImgSplitRowBox>
          </ImgSplitColumnBox>
        );

      default:
        return <img width={width} height="100%" alt="img" />;
    }
  };

  return (
    <ImgSplitBox width={width} gap={gap}>
      {imgHandleFunc(imgs.length)}
    </ImgSplitBox>
  );
};

export default ImgSplit;
