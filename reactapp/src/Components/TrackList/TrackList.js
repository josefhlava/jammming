import React from "react";
import './TrackList.css';
import Track from '../Track/Track'

class TrackList extends React.Component {
    render() {
        let songs = this.props.tracks;
        return (
            <div className="TrackList">
                {
                    songs.map(track => {
                        return <Track track={track}
                        key={track.id} 
                        onAdd={this.props.onAdd} />
                    })
                }
            </div>
        )
    }
}

export default TrackList;