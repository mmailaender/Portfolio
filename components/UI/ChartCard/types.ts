export type ChartCardPropsType = {
  data: {
    logo: string;
    toolType: string;
    toolName: string;
    relatedLogos: { logo: string; title: string, description: string }[];
    hoverDetails: {
      title: string;
      items: {
        logo: string;
        title: string;
        ranking: number | string;
        description: string;
      }[];
    };
  };
};
