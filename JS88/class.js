class fruit{
    constructor(name){
        this.name = name;
    }

    fol(){
        console.log(this.name+ ' wenak poll ')
    }

    static jackfruit(){
        console.log( ' pokok e iku ws ')
    }
}

let add = new fruit('pencit');
add.fol();

fruit.jackfruit();