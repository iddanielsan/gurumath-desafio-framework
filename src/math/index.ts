/**
 * Return if the passed number is prime
 * @param num 
 * @returns boolean
 */
 export function isPrime(num: number): boolean {
    for(let i = 2; i < num; i++)
        if(num % i === 0) return false
    return true
}

/**
 * Return the divisors of a number
 * @param num 
 * @returns 
 */
export function getDivisors(num: number): number[] {
    let divisors: number[] = []

    for(let i = 2; i<num; i++) {
        if(num % i === 0) {
            divisors.push(i)
        }
    }
    
    divisors.push(1, num)

    return divisors.sort((a,b)=>a-b)
}

// export async function init(){
//     let rl = readline.createInterface({
//         input: process.stdin,
//         output: process.stdout
//     });

//     rl.write('MATHGURU 0.0.1\nPara continuar selecione uma das operações abaixo.\n[1] Listar divisores\n[2] Listar primos\n\n\n\n')

//     rl.question('Selecione a operação: ', (answer) => {
//         if()
//     })
// }