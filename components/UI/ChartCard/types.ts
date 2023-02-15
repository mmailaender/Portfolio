type RelatedLogos = {
  id: number | string;
  logo: string;
  category: string;
  title: string;
  description: string;
};

type HoverDetailsItems = {
  id: number | string;
  logo: string;
  title: string;
  ranking: number | string;
  description: string;
};

export type ChartCardPropsType = {
  data: {
    logo: string;
    toolType: string;
    toolName: string;
    relatedLogos: [RelatedLogos];
    hoverDetails: {
      title: string;
      items: [HoverDetailsItems];
    };
  };
};
