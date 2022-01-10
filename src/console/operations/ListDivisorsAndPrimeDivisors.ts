import ConsoleOperation from "../../interfaces/ConsoleOperation";
import { getDivisors, isPrime } from "../../math";
import { Readline } from "../../Abstract/Readline";
import OperationFeedback from "../../interfaces/OperationFeedback";

export default class ListDivisorsAndPrimeDivisors extends Readline implements ConsoleOperation {
    name: string = "ListDivisorsAndPrimeDivisors";
    description: string = "Lista divisores e divisores primos";

    init(): Promise<OperationFeedback[]> {
        return new Promise<OperationFeedback[]>((resolve) => {
            this.rl.write(this.description + '\n\n')
            this.rl.question(`Insira o número: `, (answer) => {
                let primes: number[] = []
                var divisors = getDivisors(Number(answer))

                divisors.forEach(i => {
                    if(isPrime(i)) {
                        primes.push(i)
                    }
                });

                this.rl.write(`Número de Entrada: ${answer}\n`)

                this.rl.write(`Números Divisores: ${divisors.join(' ')}\n`)
                
                this.rl.write(`Divisores Primos: ${primes.join(' ')}\n`)

                var feedback : OperationFeedback[] = [
                    {
                        input: answer,
                        operation: 'ListDivisors',
                        result: divisors
                    },
                    {
                        input: answer,
                        operation: 'ListPrimeDivisors',
                        result: primes
                    }
                ]

                this.rl.close()

                resolve(feedback)
            })
        })
    }
}