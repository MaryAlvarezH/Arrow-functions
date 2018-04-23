//Pasar de decimal a binario

var cambio=(n)=>{
    var res
    do{
        div=n/2
        res=(n%2)
        n=div
        console.log(res)

        
    }
    while(res>0)
}

cambio(4)