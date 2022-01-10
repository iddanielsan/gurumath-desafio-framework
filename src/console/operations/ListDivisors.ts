import ConsoleOperation from "../../interfaces/ConsoleOperation";
import { getDivisors } from "../../math";
import { Readline } from "../../Abstract/Readline";
import OperationFeedback from "../../interfaces/OperationFeedback";

export default class ListDivisors extends Readline implements ConsoleOperation {
    name: string = "ListDivisors";
    description: string = "Lista os divisores de um número";

    init(): Promise<OperationFeedback[]> {
        return new Promise<OperationFeedback[]>((resolve) => {
            this.rl.write(this.description + '\n\n')
            this.rl.question(`Insira o número: `, (answer) => {
                var result = getDivisors(Number(answer)).join(' ')

                this.rl.write(`Divisores do número ${answer}: ${result}\n`)

                var feedback : OperationFeedback[] = [
                    {
                        input: answer,
                        operation: this.name,
                        result: result
                    }
                ]

                this.rl.close()

                resolve(feedback)
            })
        })
    }
}