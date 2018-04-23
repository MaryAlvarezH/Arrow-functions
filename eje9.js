//Hacer los primeros 10 dígitost de serie Fibbonacci

var fibo=()=>{
    var x=1
    var y=1
    var z=x+y
    console.log(x)
    console.log(y)
    console.log(z)
    for(var i=0; i<=6; i++){
    x=y
    y=z
    z=x+y
    console.log(z)
    }
}

fibo()