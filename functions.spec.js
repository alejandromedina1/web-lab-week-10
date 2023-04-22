import { expect, expectTypeOf, test } from "vitest";
import {add, substract, divide, multiply, operate, updateAttribute} from "./functions"

test('sum two numbers', () => {
    expect(add(4, 4)).toBe(8)
})

test('substract two numbers', () => {
    expect(substract(5, 4)).toBe(1)
})

test('divide two numbers', () => {
    expect(divide(20, 4)).toBe(5)
})

test('multiply two numbers', () => {
    expect(multiply(5, 4)).toBe(20)
})

test('operate', () => {
    expect(operate('+', 5, 4)).toBe(9)
})


