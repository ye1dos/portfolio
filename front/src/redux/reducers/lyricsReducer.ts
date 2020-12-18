import * as actions from "../actionTypes/actionTypes";


export interface State {
    lyrics: string;
}

const initialState : State = {
    lyrics: ""
};

const lyricsReducer = (state: State = initialState, action): State => {
    switch(action.type) {
        case actions.SET_LYRICS:
        case actions.GET_LYRICS_SUCCESS:
            return {
                lyrics: action.lyrics
            }
        default:
            return state
    }
}

export default lyricsReducer;