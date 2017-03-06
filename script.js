TinyTurtle.apply(window, [undefined, 400, 400]);

function square(x){
forward(x);
right(90);
forward(x);
right(90);
forward(x);
right(90);
forward(x);
right(90);
forward(x);
right(45);
}
function triangle(){
forward(50);
right(90);
forward(50);
right(135);
forward(70);
}
function octagon(y){
forward(y);
right(45);
forward(y);
right(45);
forward(y);
right(45);
forward(y);
right(45);
forward(y);
right(45);
forward(y);
right(45);
forward(y);
right(45);
forward(y);
left(135);
forward(70);
}
// Type your function call below
square(70);
triangle();
octagon(50);
stamp();
