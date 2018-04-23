//Leer el nombre y sueldo de 8 empleados y mostrar el nombre y sueldo del empleado que más gana.

var emp1={nombre:"Fany", sueldo:9000}
var emp2={nombre:"Andrea", sueldo:5000}
var emp3={nombre:"Raul", sueldo:98000}
var emp4={nombre:"Myke", sueldo:12000}
var emp5={nombre:"Eduardo", sueldo:35000}
var emp6={nombre:"Raquel", sueldo:98000}
var emp7={nombre:"Nubia", sueldo:22000}
var emp8={nombre:"Sandra", sueldo:5000}

var list=[]

list.push(emp1,emp2,emp3,emp4,emp5,emp6,emp7,emp8)

var mayor=(list)=>{
    var mayor

    /*if ((list[0].sueldo>list[1].sueldo) && (list[0].sueldo>list[2].sueldo) && (list[0].sueldo>list[3].sueldo) && (list[0].sueldo>list[4].sueldo)&& (list[0].sueldo>list[5].sueldo)&& (list[0].sueldo>list[6].sueldo)&& (list[0].sueldo>list[7].sueldo)){
        mayor=list[0].sueldo
       
    }
    else if ((list[1].sueldo>list[0].sueldo) && (list[1].sueldo>list[2].sueldo) && (list[1].sueldo>list[3].sueldo) && (list[1].sueldo>list[4].sueldo)&& (list[1].sueldo>list[5].sueldo)&& (list[1].sueldo>list[6].sueldo)&& (list[1].sueldo>list[7].sueldo)){
        mayor=list[1].sueldo
    } 
*/
    var list2=[]
    var empleado
    for(var i=0; i<=list.length-1; i++){
        list2.push(list[i].sueldo)
    }
    list2.sort(function(a, b) { return b - a } )
    console.log(list2)
    console.log(`El mayor es: ${list2[0]}`)
    console.log (`Para el(los) empleado(s)`)
    for(var j=0; j<=list.length-1; j++){
        if(list2[0]==list[j].sueldo){
            empleado=list[j].nombre
            console.log(empleado)
           
        }
    }

}

mayor(list)