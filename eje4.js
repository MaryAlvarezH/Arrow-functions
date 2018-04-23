//Función que pida N parametros y devuelva cuantos parametros se le pasaron

var funcion=(p1,p2,...res)=>{
    var list=[]
    list.push(p1,p2,...res)
    console.log(list)
    console.log(`Se pasaron ${list.length} parametros`)
}
funcion(3,5,6,7,1,2,4,5,10,15)