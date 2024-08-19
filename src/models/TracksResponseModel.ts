export interface TracksResponseModel {
  album: Album
}

export interface Album {
  artist: ArtistEnum
  mbid: string
  tags: Tags
  playcount: string
  image: Image[]
  tracks: TracksClass
  url: string
  name: string
  listeners: string
  wiki: Wiki
}

export enum ArtistEnum {
  Cher = 'Cher',
}

export interface Image {
  size: string
  '#text': string
}

export interface Tags {
  tag: Tag[]
}

export interface Tag {
  url: string
  name: string
}

export interface TracksClass {
  track: Track[]
}

export interface Track {
  streamable: Streamable
  duration: number
  url: string
  name: string
  '@attr': Attr
  artist: ArtistClass
}

export interface Attr {
  rank: number
}

export interface ArtistClass {
  url: string
  name: ArtistEnum
  mbid: string
}

export interface Streamable {
  fulltrack: string
  '#text': string
}

export interface Wiki {
  published: string
  summary: string
  content: string
}
