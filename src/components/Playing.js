import React, { useContext } from 'react';
import AudioPlayer from 'react-h5-audio-player'
import 'react-h5-audio-player/lib/styles.css'
import { Songs } from "../Context"
export default function Playing() {
    const { song, handleSetsong } = useContext(Songs)
    const handleClickNext = () => {
        handleSetsong(song.id + 1)
    }
    const handleClickPre = () => {
        handleSetsong(song.id - 1)
    }
    return (
        <div>
            <AudioPlayer
                className='player-music'
                src={song.url}
                layout="stacked-reverse"
                showSkipControls={true}
                showJumpControls={false}
                onClickNext={handleClickNext}
                onClickPrevious={handleClickPre}
            />
        </div>
    )
}