import * as actions from "../actionTypes/actionTypes";

// Get
interface getLyricsAction {
    type: typeof actions.GET_LYRICS,
    artist: string,
    song: string
}
const getLyrics = (artist: string, song: string) : getLyricsAction => {
    return {
        type: actions.GET_LYRICS,
        artist: artist,
        song: song
    }
}
// Set
interface setLyricsAction {
    lyrics: string,
    type: typeof actions.SET_LYRICS
}
const setLyrics = (lyrics: string): setLyricsAction => {
    return {
        type: actions.SET_LYRICS,
        lyrics: lyrics
    }
}

// Get Reguest
interface getLyricsRequestAction {
    type: typeof actions.GET_LYRICS_REQUEST
}
const getLyricsRequest = (): getLyricsRequestAction => {
  return {
    type: actions.GET_LYRICS_REQUEST
  }
}

// Success
interface getLyricsSuccessAction {
    type: typeof actions.GET_LYRICS_SUCCESS
    lyrics: string
}
function getLyricsSuccess(lyrics: string): getLyricsSuccessAction {
    return {
        type: actions.GET_LYRICS_SUCCESS,
        lyrics: lyrics
    }
}

// Failure
interface getLyricsFailureAction {
    type: typeof actions.GET_LYRICS_FAILURE
    error: Error | string
}
const getLyricsFailure = (error: Error | string) => {
    return {
        type: actions.GET_LYRICS_FAILURE,
        error: error
    }
}

export {getLyrics,setLyrics ,getLyricsRequest ,getLyricsSuccess ,getLyricsFailure}

