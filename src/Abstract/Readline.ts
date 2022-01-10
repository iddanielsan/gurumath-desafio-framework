import * as readline from 'readline';

export abstract class Readline {
    public rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    protected write(feedback: string){
        this.rl.write(feedback);
    }
}