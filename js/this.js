function named(){
    var a = 3;
    let b = 4;
    console.log(">",this);
}
named()

console.log('------------------')

function named= (){
    var a = 3;
    let b = 4;
    function name_inside(){
      console.log(">>", this);
    }
    console.log(this);
    console.log("Now calling named_inisde");
    named_inside();
}
named2();

let unnamed_arrow = () => {
    var a = 3;
    let b = 4;
    console.log(this);
};
unnamed_arrow();

console.log('------------------')

function surroundingone() {
    function internal () {
       console.log(this);
    }
    internal()
}

surroundingone()

console.log('------------------')

function surroundingtwo() {
    let internal  = () => console.log(this);
    internal()
}

surroundingtwo()

console.log('------------------')

let anobject = {
    name: "rahul",
    print_name: function () {
        console.log(this.name);
    }
};

console.log(">",anobject.print_name());

let anotherobject = {
    name: "rahul",
    print_name: () => console.log(this.name)
};

console.log(">",anotherobject.print_name());
