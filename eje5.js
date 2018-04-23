//Leer un array de enteros y sacar su media
var media=(arreglo)=>{
    var sum=0
    for(var i=0; i<=arreglo.length-1; i++){
        sum=sum+arreglo[i]
        console.log(sum)
    }
    console.log(`la media de la siguiente lista de numeros ${arreglo} es: ${sum/arreglo.length}`)
}

//var arreglo2=new Array(6,7,9)
var arreglo=[6,7,9]
media(arreglo)