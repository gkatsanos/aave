import { calculateTransactionTotals } from '../services/calculateTransactionTotals.ts'
import { INPUT, OUTPUT } from './mocks.js'
import { assertEquals } from 'https://deno.land/std@0.158.0/testing/asserts.ts'

Deno.test('is the expected result returned when data is valid', () => {
  assertEquals(calculateTransactionTotals(INPUT), OUTPUT)
})
