import OperationConfig from "../interfaces/OperationConfig";
import ListDivisors from "./operations/ListDivisors";
import ListDivisorsAndPrimeDivisors from "./operations/ListDivisorsAndPrimeDivisors";
import ListPrimeDivisors from "./operations/ListPrimeDivisors";

export const operations: OperationConfig[] = [
    {
        key: 1,
        name: 'List Divisors', 
        class: ListDivisors
    },
    {
        key: 2,
        name: 'List Prime Divisors', 
        class: ListPrimeDivisors
    },
    {
        key: 3,
        name: 'List Divisors and Prime Divisors', 
        class: ListDivisorsAndPrimeDivisors
    }
]