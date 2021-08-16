export interface SearchResults {
  kind: string;
  url: Url;
  queries: Queries;
  context: Context;
  searchInformation: SearchInformation;
  items?: ItemsEntity[] | null;
}
export interface Url {
  type: string;
  template: string;
}
export interface Queries {
  request?: RequestEntity[] | null;
}
export interface RequestEntity {
  title: string;
  totalResults: string;
  searchTerms: string;
  count: number;
  startIndex: number;
  inputEncoding: string;
  outputEncoding: string;
  safe: string;
  cx: string;
}
export interface Context {
  title: string;
}
export interface SearchInformation {
  searchTime: number;
  formattedSearchTime: string;
  totalResults: string;
  formattedTotalResults: string;
}
export interface ItemsEntity {
  kind: string;
  title: string;
  htmlTitle: string;
  link: string;
  displayLink: string;
  snippet: string;
  htmlSnippet: string;
  cacheId: string;
  formattedUrl: string;
  htmlFormattedUrl: string;
  pagemap: Pagemap;
}
export interface Pagemap {
  metatags?: MetatagsEntity[] | null;
  cse_image?: CseImageEntity[] | null;
  cse_thumbnail?: CseThumbnailEntity[] | null;
}
export interface SearchResults {
  kind: string;
  url: Url;
  queries: Queries;
  context: Context;
  searchInformation: SearchInformation;
  items?: ItemsEntity[] | null;
}
export interface Url {
  type: string;
  template: string;
}
export interface Queries {
  request?: RequestEntity[] | null;
}
export interface RequestEntity {
  title: string;
  totalResults: string;
  searchTerms: string;
  count: number;
  startIndex: number;
  inputEncoding: string;
  outputEncoding: string;
  safe: string;
  cx: string;
}
export interface Context {
  title: string;
}
export interface SearchInformation {
  searchTime: number;
  formattedSearchTime: string;
  totalResults: string;
  formattedTotalResults: string;
}
export interface ItemsEntity {
  kind: string;
  title: string;
  htmlTitle: string;
  link: string;
  displayLink: string;
  snippet: string;
  htmlSnippet: string;
  cacheId: string;
  formattedUrl: string;
  htmlFormattedUrl: string;
  pagemap: Pagemap;
}
export interface Pagemap {
  metatags?: MetatagsEntity[] | null;
  cse_image?: CseImageEntity[] | null;
  cse_thumbnail?: CseThumbnailEntity[] | null;
}
export interface MetatagsEntity {
  "og:image"?: string | null;
  "apple-itunes-app"?: string | null;
  "og:type"?: string | null;
  "twitter:card"?: string | null;
  "twitter:title"?: string | null;
  "og:site_name"?: string | null;
  "og:title"?: string | null;
  "music:creator"?: string | null;
  title?: string | null;
  "og:description"?: string | null;
  "twitter:creator"?: string | null;
  "article:author"?: string | null;
  "twitter:image"?: string | null;
  referrer?: string | null;
  viewport: string;
  "og:url"?: string | null;
  "msapplication-config"?: string | null;
  "twitter:url"?: string | null;
  "twitter:description"?: string | null;
  "og:locale"?: string | null;
  google?: string | null;
  "format-detection"?: string | null;
}
export interface CseImageEntity {
  src: string;
}
export interface CseThumbnailEntity {
  src: string;
  width: string;
  height: string;
}

export interface CseImageEntity {
  src: string;
}
export interface CseThumbnailEntity {
  src: string;
  width: string;
  height: string;
}
