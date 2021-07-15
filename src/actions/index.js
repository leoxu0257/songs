// Action creator
const selectSong =(song)=>{
//Return an ction
    return{
        type:'SONG_SELECTED',
        payload: song
    };
};


