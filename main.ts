import { validateInput, readInputFile } from './services/validateInput.js'
import { calculateTransactionTotals } from './services/calculateTransactionTotals.ts'

validateInput()

const content = await readInputFile()

calculateTransactionTotals(content)
