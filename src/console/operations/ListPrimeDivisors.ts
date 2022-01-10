import ConsoleOperation from "../../interfaces/ConsoleOperation";
import { getDivisors, isPrime } from "../../math";
import { Readline } from "../../Abstract/Readline";
import OperationFeedback from "../../interfaces/OperationFeedback";

export default class ListPrimeDivisors extends Readline implements ConsoleOperation {
    name: string = "ListPrimeDivisors";
    description: string = "Lista os divisores primos de um número";

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
                this.rl.write(`Divisores Primos: ${primes}\n`)

                var feedback : OperationFeedback[] = [
                    {
                        input: answer,
                        operation: this.name,
                        result: primes
                    }
                ]

                this.rl.close()

                resolve(feedback)
            })
        })
    }
}