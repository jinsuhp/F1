function selectMap(trackId){
    const model = document.querySelector("#trackModel");
    const menu = document.querySelector('#menu');

    model.setAttribute('src', `#${trackId}`);
    
    if(trackId == "track"){
        model.setAttribute("scale", "6.07 6.07 6.07")
    }
    
    if(trackId == "track2"){
        model.setAttribute("scale", "150 150 250")
        model.setAttribute("rotation", "0 90 0")
        model.setAttribute("position","-70 2 80")
    }

    menu.style.display = 'none';

    loadTrack(trackId);
}