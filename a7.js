function identidad(){
    var p =parseFloat(document.getElementById("a").value);
    var xi=p
    var aux=1000000
    var er=0
    var xin=0
    while(er<aux){
        xin=xi*((xi**3+2*p)/(2*xi**3+p))
        xi=xin
        er=er+1
    }
    document.getElementById("identidad").innerHTML= (xi)//parseFloat(Math.round(p*10000000)/10000000).toFixed(5)
}