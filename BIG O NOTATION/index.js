// Also called time complexity 

//Which one has a better implementation?

let sumUpTo = n =>{
    let total = 0
    for(let i = 0; i<=n; i++){
        total += 1
    }
    return total
}
sumUpTo(3)

//or
const sumUp =n=>{
    return(n * (n + 1))
}