import { ArtistAlbumResponseModel } from './models/ArtistAlbumResponseModel'
import { ArtistInfoResponseModel } from './models/ArtistInfoResponseModel'
import { MyArtistsResponseModel } from './models/MyArtistsResponseModel'
import { TracksResponseModel } from './models/TracksResponseModel'

//Це потрібно було б перенести в .env, але в даному випадку апі кей доступний, тож вирішив не перенесити
const BASE_URL = 'https://ws.audioscrobbler.com/2.0'
const API_KEY = '5ba86e526d4d19e7351682f743dcde1a'

export async function fetchArtists(): Promise<MyArtistsResponseModel> {
  return fetch(
    `${BASE_URL}/?method=tag.gettopartists&tag=disco&api_key=${API_KEY}&format=json`,
    {
      method: 'GET',
    },
  )
    .then(function (response) {
      return response.json()
    })
    .then(function (json) {
      return json
    })
    .catch(function (error) {
      console.error(
        'There has been a problem with your fetch operation: ' + error.message,
      )
      return null
    })
}

export async function getArtistAlbums(
  id: string,
): Promise<ArtistAlbumResponseModel> {
  return fetch(
    `${BASE_URL}/?method=artist.gettopalbums&api_key=${API_KEY}&mbid=${id}&format=json`,
    {
      method: 'GET',
    },
  )
    .then(function (response) {
      return response.json()
    })
    .then(function (json) {
      return json
    })
    .catch(function (error) {
      console.error(
        'There has been a problem with your fetch operation: ' + error.message,
      )
      return null
    })
}

export async function getArtistInfo(
  id: string,
): Promise<ArtistInfoResponseModel> {
  return fetch(
    `${BASE_URL}/?method=artist.getinfo&api_key=${API_KEY}&mbid=${id}&format=json`,
    {
      method: 'GET',
    },
  )
    .then(function (response) {
      return response.json()
    })
    .then(function (json) {
      return json
    })
    .catch(function (error) {
      console.error(
        'There has been a problem with your fetch operation: ' + error.message,
      )
      return null
    })
}

export async function getAlbumTracks(
  artistNaem: string,
  albumName: string,
): Promise<TracksResponseModel> {
  return fetch(
    `${BASE_URL}/?method=album.getinfo&api_key=${API_KEY}&artist=${artistNaem}&album=${albumName}&format=json`,
    {
      method: 'GET',
    },
  )
    .then(function (response) {
      return response.json()
    })
    .then(function (json) {
      return json
    })
    .catch(function () {
      return null
    })
}

//https://ws.audioscrobbler.com/2.0/
