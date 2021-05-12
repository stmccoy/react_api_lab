import React, {useState, useEffect} from 'react';
import ChartList from '../components/ChartList';

const ChartContainer = () =>  {
    const [songs, setSongs] = useState([]);

    useEffect(() =>  {
        getSongs();
    }, []);

    const getSongs = function() {
        fetch('https://itunes.apple.com/gb/rss/topsongs/limit=20/json')
        .then(res => res.json())
        .then(songs => setSongs(songs))
    };
    //songs.feed.entry[0]["im:name"].label

    return (
        <div>
            <ChartList songs={songs} />
        </div>
    )


}

export default ChartContainer;