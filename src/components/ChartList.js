import React from 'react';
import ListItem from './ListItem';
import './ListItem.css'

const ChartList = ({songs}) => {
    const songsItems = songs.map((song, index) => {
        return <ListItem song={song} key={index} />
    })

    return (
        <div>
            <ol>
            {songsItems}
            </ol>
        </div>
    )
}


export default ChartList;