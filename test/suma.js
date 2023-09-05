let testPasados = 0
let testTotales = 4

// const suma = (num1,num2) =>{
//     // validación test 2
//     if(!num1 || !num2) return 0
//     // validación test 1
//     if(typeof num1 !=="number" || typeof num2 !=="number") return null
//     // validación test 3
//     const result = num1+num2
//     return result
// }

// para analizar el test 4 tengo que hacer cambios en la funcion
// const suma = (...nums) =>{
//     // validación test 2
//     if(nums.length===0) return 0
//     let validInput = true;
//     // validación test 1
//     for (let i=0; i<nums.length&&validInput;i++){
//         if (typeof nums[i] !=="number"){
//             validInput=false
//         }
//     }
//     if(!validInput) return null;
//     // validación test 3 y 4
//     let result = 0
//     for (let i=0; i<nums.length;i++){
//         result += nums[i]
//     }
//     return result
// }

// funcion suma refactorizada en codigo: 
const suma = (...nums) =>{
    // validación test 2
    if(nums.length===0) return 0
    
    // validación test 1
    if(!nums.every(num=>typeof num==="number")) return null;
    // validación test 3 y 4
    return nums.reduce((prev,current)=>prev+current)
}
 console.log("Test 1: la funcion suma debera devolver null si algun parametro no es numerico")
let resultTest1 =  suma("3",4)
if(resultTest1 === null){
    console.log("Test pasado");
    testPasados++
}else{
    console.log("Test 1 no ha pasado")
}

console.log("Test 2: la funcion suma debera devolver 0 si no le pasamos ningun parametro")
let resultTest2 =  suma()
if(resultTest2 === 0){
    console.log("Test pasado");
    testPasados++
}else{
    console.log("Test 2 no ha pasado")
}

console.log("Test 3: la funcion suma debera resolver la suma correctamente")
let resultTest3 =  suma(2,3)
if(resultTest3 === 5){
    console.log("Test pasado");
    testPasados++
}else{
    console.log("Test 3 no ha pasado")
}

console.log("Test 4: la funcion suma debera resolver la suma con cualquier cantidad de numeros")
let resultTest4 =  suma(2,3,5,6)
if(resultTest4 === 16){
    console.log("Test pasado");
    testPasados++
}else{
    console.log("Test 4 no ha pasado")
}

if(testTotales == testPasados){
    console.log("todos los test pasaron con exito")
}else console.log(`pasaron ${testPasados} de un total de ${testTotales}`)