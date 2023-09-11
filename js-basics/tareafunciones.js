function cualEsMayor(N1,N2,N3){
    let num1 = N1;
    let num2 = N2;
    let num3 = N3; 

    if (num1 > num2 && num1 > num3){
        //La condición era verdadera. Se ejecutará el código de este bloque.
        console.log(`Numero1 = ${num1} es el mayor!`);
    }
    if (num2 > num1 && num2 > num3){
        //La condición era verdadera. Se ejecutará el código de este bloque.
        console.log(`Numero2 = ${num2} es el mayor!`);
    }
    else if(num3 > num1 && num3 > num2){
        console.log(`Numero3 = ${num3} es el mayor!`);
    }
}

console.log(cualEsMayor(5,4,3));