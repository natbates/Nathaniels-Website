import { useState, useEffect } from "react";
import { fetchCurrentSong } from "../util/api"; 
import "../styles/spotify.css";
import { ReactComponent as SpotifyIcon } from '../svgs/spotify-color-svgrepo-com.svg'; 

const Spotify = () => {

    const [currentSongData, setCurrentSongData] = useState(null); 
    const [error, setError] = useState(null);

    const fetchSongData = async () => {
        try {
            setError(null);
            const songData = await fetchCurrentSong(); 
            setCurrentSongData(songData); 
            
        } catch (err) {
            setError(err.message);
            setCurrentSongData(null);
        }
    };

    useEffect(() => {

        fetchSongData(); 
        
    }, []); 


    return (
        <div id="spotify-holder">
            <div id="song-container">
                {error || (currentSongData == null) ? <p>Not listening to anything</p> :
                <>
                    <p>
                        <span><SpotifyIcon style={{ width: '18px', height: '18px', marginRight: '10px' }} /></span>
                        Listening to: 
                        <a href={currentSongData.item.external_urls.spotify} target="_blank" rel="noopener noreferrer">
                             {currentSongData.item.name}
                        </a>
                         By
                        <a href={currentSongData.item.artists[0].external_urls.spotify} target="_blank" rel="noopener noreferrer">
                             {currentSongData.item.artists[0].name}
                        </a>
                    </p>
                    <img id="album-img" alt="album-cover" src={currentSongData.item.album.images[0].url}></img>
                </>
                }
            </div>
        </div>
    );
};

export default Spotify;
