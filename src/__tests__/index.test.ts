import { isPrime, getDivisors } from '../index';

it('checks if the isprime method returns true when receiving a prime number', () => {
  const primeNumber: number[] = [
    3, 5, 7, 11, 829, 853, 859
  ]

  let result: boolean[] = []
  
  primeNumber.forEach(i => {
    result.push(isPrime(i))
  })
  
  expect(result).toEqual(Array(7).fill(true))
});


it('checks if the getDivisors method correctly returns the divisors of number 42 ', () => {
  expect(getDivisors(42)).toEqual([
    1,  2,  3,  6,
    7, 14, 21, 42
  ])
});

