class car{
    name = "";
    model = 0;
    constructor(name,model)
    {
        this.name= name;
        this .model=model;
    }
    show()
    {
        console.log("Name:" + this.name);
        console.log("Model:" + this.model);
    }

    
}
let c = new car("bleno",2018);
c.show();