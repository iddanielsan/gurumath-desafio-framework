import OperationFeedback from "./OperationFeedback";

export default interface ConsoleOperation {
    name: string;
    description: string;

    init(): Promise<OperationFeedback[]>;
}