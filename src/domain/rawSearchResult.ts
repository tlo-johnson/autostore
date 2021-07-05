export interface RawTag {
  Name: string;
}

export interface RawCategory {
  CategoryId: string;
  Name: string;
}

export interface RawImage {
  Filename: string;
}

export interface RawSearchResult {
  ProductId: string;
  Name: string;
  Description: string;
  Tags: RawTag[];
  Categories: RawCategory[];
  Image: RawImage;
}
