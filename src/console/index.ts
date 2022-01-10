import { findSourceMap } from 'module';
import { Readline } from '../Abstract/Readline';
import ConsoleOperation from '../interfaces/ConsoleOperation';
import OperationConfig from '../interfaces/OperationConfig';
import OperationFeedback from '../interfaces/OperationFeedback';
import { operations } from "./config";

export default class extends Readline {
    public async init(): Promise<OperationFeedback[]> {
        var selected = await this.toList()
        var operation = new selected.class()
        return operation.init()
    }

    private toList(): Promise<OperationConfig> {
        return new Promise<OperationConfig>((resolve) => {
            let operationsString: string = ''

            operations.forEach(i => {
                operationsString += `[${i.key}] - [${i.name}]\n`
            })

            this.write(`Selecione uma das operações abaixo\n\n${operationsString}\n`)

            this.rl.question('Selecione a operação: ', (answer) => {
                let findOperation = operations.find(x => x.key == Number(answer))
                
                if(!findOperation){
                    this.write('Operação não encontrada! \n')
                    this.rl.close()
                } else {
                    this.rl.close()
                    resolve(findOperation)
                }
            })
        })
    }
}