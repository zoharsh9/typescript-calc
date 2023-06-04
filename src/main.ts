let a:number;
// a = "hello" ERROR
// a = false ERROR
// a = "200" ERROR
a = 200;


let b: number | string | Date;
b = 200;
b = "true";
b = new Date();
// b = false ERROR


let c: any;
c = true;
c = "hello";
c = 145;
c = new Date();
// not commonly used

let f;
f = "hello";
f = 250;
// identified var is any by default

function func(age: number, name: string){
    console.log(name+" is " + age + " years old");   
}

func(26, "zohar")