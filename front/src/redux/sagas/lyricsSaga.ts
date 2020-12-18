import { put, call, takeEvery, all, fork } from "redux-saga/effects";
import axios from 'axios';
import * as actionCreators from "../actionCreators/actionCreators";
import * as actionTypes from "../actionTypes/actionTypes";
interface lyricsResponse {
    lyrics: string;
  }
  
  export async function fetchLyrics(
    artist: string,
    song: string
  ): Promise<lyricsResponse> {
    return await axios.get(`https://api.lyrics.ovh/v1/${artist}/${song}`);
  }
  function* onLoadLyrics({ artist, song }: any) {
    try {
      yield put(actionCreators.getLyricsRequest()); 
      const { data } = yield call(fetchLyrics, artist, song);
      yield put(actionCreators.getLyricsSuccess(data.lyrics));
    } catch (error) {
      yield put(actionCreators.getLyricsFailure(error.response.data.error));
    }
  }
  
  // get lyrics ta ne oryndalad
  function* watchOnLoadLyrics() {
    yield takeEvery(actionTypes.GET_LYRICS, onLoadLyrics);
  }
  
  export default function* lyricsSaga() {
    yield all([fork(watchOnLoadLyrics)]);
  }
