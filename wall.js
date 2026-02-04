class Wall{
    constructor(x,y,z){
        this.x = x;
        this.y = y;
        this.z = z;

        this.obj = document.createElement("a-box");
        this.obj.setAttribute("position",{x:x,y:y,z:z});
        this.obj.setAttribute("color","white");
        this.obj.setAttribute("width", 8);
        this.obj.setAttribute("height", 3);
        this.obj.setAttribute("depth", 10);
        scene.append(this.obj);
    }
}