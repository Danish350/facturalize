//Facturialize:
function Facturialize(n){
    if(n === 0){
        return 1;
    }else{
        let factorial = 1;
        for(let i=1; i<=n; i++){
            factorial*=i;
        }
        return factorial;
    }
}
console.log(Facturialize(0));
console.log(Facturialize(10));
console.log(Facturialize(20));