import React from 'react';
import './ListItem.css'

const ListItem = ({song}) =>  {

    return (<li>{song["im:name"].label} by {song["im:artist"].label} 
    <img src={song["im:image"][0].label} alt={song["im:name"].label} />
    </li>)

}

export default ListItem;