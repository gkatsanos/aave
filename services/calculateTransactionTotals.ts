import groupby from 'https://esm.sh/lodash.groupby'
import sumby from 'https://esm.sh/lodash.sumby'
import moment from 'https://esm.sh/moment'
import {
  Transaction,
  TransactionKeyedByUser,
  TransactionsKeyedByCurrency,
  TransactionsKeyedByCurrencyAndUser,
  LastTransactions,
  Currency,
  Totals,
  Result,
} from '../types.ts'

const calculateTotalAmountsPerCurrency = (transactions: TransactionsKeyedByCurrency): Totals => {
  const result: Totals = {} as Totals

  Object.keys(transactions).forEach((currency) => {
    result[currency as Currency] = +(
      sumby(transactions[currency], (o: { amount: string }) => {
        return parseFloat(o.amount) * 100
      }) / 100
    ).toFixed(2)
  })
  return result
}

const groupTransactionsByUser = (content: Transaction[]): TransactionKeyedByUser => {
  return groupby(content, 'user_id')
}

const getLastTransactions = (transactionsGroupedByUser: TransactionKeyedByUser): LastTransactions => {
  const lastTransactions: LastTransactions = {}
  for (const [userId, transactions] of Object.entries(transactionsGroupedByUser)) {
    lastTransactions[userId] = transactions!.reduce((accumulator, current) => {
      if (moment(accumulator).isBefore(current.timestamp)) {
        return current.timestamp
      }
      return accumulator
    }, transactions![0].timestamp)
  }
  return lastTransactions
}

const groupTransactionsByUserAndCurrency = (content: Transaction[]) => {
  const transactionsGroupedByUserIdAndCurrency: TransactionsKeyedByCurrencyAndUser = {} as TransactionsKeyedByCurrencyAndUser

  for (const [userId, transactions] of Object.entries(groupTransactionsByUser(content))) {
    transactionsGroupedByUserIdAndCurrency[userId] = groupby(transactions, 'currency')
  }
  return transactionsGroupedByUserIdAndCurrency
}

const prepareData = (
  transactionsGroupedByUserIdAndCurrency: TransactionsKeyedByCurrencyAndUser,
  lastTransactions: LastTransactions,
): Result => {
  const result: Result = {} as Result
  for (const [userId, transactions] of Object.entries(transactionsGroupedByUserIdAndCurrency)) {
    result[userId] = {
      ...calculateTotalAmountsPerCurrency(transactions as TransactionsKeyedByCurrency),
      lastActivity: moment(lastTransactions[userId]).format('YYYY-MM-DD'),
    }
  }
  return result
}

const printTable = (result: Result): void => {
  console.table(result, ['GBP', 'EUR', 'USD', 'lastActivity'])
}

export function calculateTransactionTotals(content: Transaction[]) {
  const transactionsGroupedByUser = groupTransactionsByUser(content)
  const transactionsByUserAndCurrency = groupTransactionsByUserAndCurrency(content as Transaction[])
  const lastTransactions = getLastTransactions(transactionsGroupedByUser)
  const aggregatedTransactionsByUserAndCurrency = prepareData(transactionsByUserAndCurrency, lastTransactions)

  printTable(aggregatedTransactionsByUserAndCurrency)
  return aggregatedTransactionsByUserAndCurrency
}
