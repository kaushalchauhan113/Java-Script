var Num=100;
var Str="Kaushal";
var BooleanVar=true;


document.write("<br/>",Num);
document.write("<br/>",Str);
document.write("<br/>",BooleanVar);


document.write("<br/>",typeof(BooleanVar));



var obj = new Object();
document.write("<br/>"+typeof(obj));
document.write("<br/>"+obj.FirstName+" "+obj.LastName);


var car = {
    modal: "BMW X3",
    color: "white",
    doors: 5
}
document.write("<br/>"+car.modal+" "+car.color+" "+car.doors);


var cars = ["BMW", "Mercedes-Benz", "Volkswagen"];
document.write("<br/>"+cars[0]);
document.write("<br/>"+cars[1]);
document.write("<br/>"+cars[2]);



var Demo = function(){ 
    return "Hello World!"; 
}
document.write("<br/>"+typeof(Demo));
document.write("<br/>"+Demo())