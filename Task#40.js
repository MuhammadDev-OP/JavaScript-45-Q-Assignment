
function make_album(artist, album, track = 0) {
    track++; // By this we will get idea that how much time its been called

    console.log("Artist: " + artist.charAt(0).toUpperCase.slice(1)+"\nAlbum: " + album.charAt(0).toUpperCase + album.slice(1) + "\nTrack No.: " + track);
}
make_album("james A", "sunrise");