function Parent() {
    console.log("side effect!");
}

// Parent class method
Parent.prototype.method = function method() {};

// Child class constructor
function Child() {
    this.b = 3.14159
}

// Inherit from the parent class

Child.prototype = new Parent();

Child.prototype.constructor = Child;

// Child class method
Child.prototype.method = function method() {
    Parent.prototype.method.call(this);
};

// Instantiate
this.instance = new Child();


function myObjectCreate(parent) {
    function F(){}
    F.prototype = parent;
    return new F();
}
