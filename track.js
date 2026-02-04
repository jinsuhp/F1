class Track{
    constructor(x,y,z){
        this.x = x;
        this.y = y;
        this.z = z;

        this.obj=  document.createElement("a-box");
        this.obj.setAttribute("position",{x:x,y:y,z:z});
        this.obj.setAttribute("src", "track.png");
        this.obj.setAttribute("width", 10);
        this.obj.setAttribute("height", 3);
        this.obj.setAttribute("depth", 10);
    }
}