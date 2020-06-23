export type UrlType = {
  clicks: number
  createdAt: string
  editedLongUrl: string
  isFile: boolean
  longUrl: string
  shortUrl: string
  state: UrlState
  updatedAt: string
  userId: number
}

export type UserState = {
  initialised: boolean
  isFetchingUrls: boolean
  urls: Array<UrlType>
  shortUrl: string
  longUrl: string
  createUrlModal: boolean
  tableConfig: UrlTableConfig
  isUploading: boolean
  urlCount: number
  createShortLinkError?: string | null
  uploadFileError?: string | null
  lastCreatedLink?: string
}

export type UrlTableConfig = {
  numberOfRows: number
  pageNumber: number
  sortDirection: SortDirection
  orderBy: string
  searchText: string
  filter: UrlTableFilterConfig
}

export type UrlTableFilterConfig = {
  isFile?: boolean
  state?: UrlState
}

export enum UrlState {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE',
}

export enum SortDirection {
  Descending = 'desc',
  Ascending = 'asc',
}