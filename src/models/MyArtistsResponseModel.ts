export interface MyArtistsResponseModel {
  topartists: Topartists
}

export interface Topartists {
  artist: Artist[]
  '@attr': TopartistsAttr
}

export interface TopartistsAttr {
  tag: string
  page: string
  perPage: string
  totalPages: string
  total: string
}

export interface Artist {
  name: string
  mbid?: string
  url: string
  streamable: string
  image: Image[]
  '@attr': ArtistAttr
}

export interface ArtistAttr {
  rank: string
}

export interface Image {
  '#text': string
  size: Size
}

export enum Size {
  Extralarge = 'extralarge',
  Large = 'large',
  Medium = 'medium',
  Mega = 'mega',
  Small = 'small',
}
