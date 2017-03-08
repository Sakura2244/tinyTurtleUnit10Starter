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
function triangle(q){
forward(q);
right(90);
forward(q);
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
function shape(type,size)
{
if (type==="triangle")
{
    triangle(size);
    
}
else if (type==="square")
{
    square(size);
}
else if (type==="octagon")
{
    octagon(size);
}
}
// Type your function call below

shape("square",70);
shape("triangle",50);
shape("octagon",50);

stamp();
