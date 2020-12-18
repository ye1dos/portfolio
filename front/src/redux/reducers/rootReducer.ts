import {combineReducers} from 'redux'
import lyricsReducer from './lyricsReducer'
const rootReducer = combineReducers({
 lyrics: lyricsReducer
})

export type AppState = ReturnType<typeof rootReducer>

export default rootReducer