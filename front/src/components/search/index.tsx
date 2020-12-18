import React from 'react';
import {connect} from 'react-redux'
import {AppState} from '../../redux/reducers/rootReducer'
const mapStateToProps = (state: AppState) => {
    return {lyrics: state.lyrics.lyrics}
}
const Search = (props) => {
    const {lyrics} = props
    return (
        <div>
            {lyrics}
        </div>
    )
}

export default connect(mapStateToProps, null)(Search);