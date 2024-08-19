export interface ArtistAlbumResponseModel {
  album: Album[]
  '@attr': Attr
}

export interface Attr {
  artist: ArtistEnum
  page: string
  perPage: string
  totalPages: string
  total: string
}

export enum ArtistEnum {
  BoneyM = 'Boney M.',
}

export interface Album {
  name: string
  playcount: number
  mbid?: string
  url: string
  artist: ArtistClass
  image: Image[]
}

export interface ArtistClass {
  name: ArtistEnum
  mbid: string
  url: string
}

export interface Image {
  '#text': string
  size: Size
}

export enum Size {
  Extralarge = 'extralarge',
  Large = 'large',
  Medium = 'medium',
  Small = 'small',
}
