export const useSelectColor = () =>{
    const color = Math.floor(Math.random() * (6 - 1)) + 1;
    switch (color) {
      case 1:
        return "#5E88F0";
      case 2:
        return "#FFD776";
      case 3:
        return "#99B6FF";
      case 4:
        return "#FFE199";
      case 5:
        return "#7699F2";
      case 6:
        return "#FFCE58";
    }
}