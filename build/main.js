var a;
// a = "hello" ERROR
// a = false ERROR
// a = "200" ERROR
a = 200;
var b;
b = 200;
b = "true";
b = new Date();
// b = false ERROR
var c;
c = true;
c = "hello";
c = 145;
c = new Date();
// not commonly used
var f;
f = "hello";
f = 250;
// identified var is any by default
function func(age, name) {
    console.log(name + " is " + age + " years old");
}
func(26, "zohar");
