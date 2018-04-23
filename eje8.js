/*Hacer una funcion que calcule el tiempo necesario para que un automóvil que se mueve 
con una velocidad de 73000 km/h recorra una distancia de 120 km. (TIEMPO = d/v)*/

var tiempo=(v,d)=>{
    var t=d/v
    hrs=t
    min=hrs/60
    seg=min/60
    console.log(`El tiempo para recorrer ${d}km con una velocidad de ${v}m/h es de: ${hrs.toFixed(2)}hrs  ${min.toFixed(2)}min  ${seg.toFixed(2)}seg`)
}

tiempo(73000,120)