import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    color:{
      main_blue_color: string;
      main_yellow_color: string;

      secondary_yellow_color: string,
      secondary_blue_color: string,

      theme_color:string,

      gray_color1:string,
      gray_color2:string,
      gray_color3:string,
      gray_color4:string,
      gray_color5:string,
      gray_color6:string,

    };
    
    fontSize:{
      head_large: string;
      head_small: string;
      body_large: string;
      body_medium:string;
      body_small: string;
      button_large: string;
      button_medium: string;
      button_small: string;

    }
  }
}
