export type Transaction = {
  id: string
  timestamp: string
  amount: string
  currency: Currency
}

export type TransactionKeyedByUser = Partial<Record<string, Transaction[]>>

export type TransactionsKeyedByCurrency = Partial<Record<Currency, Transaction[]>>

export type TransactionsKeyedByCurrencyAndUser = Record<string, Partial<Record<Currency, Transaction[]>>>

export type LastTransactions = {
  [key: string]: string
}

export type Result = Record<string, { GBP?: number; USD?: number; EUR?: number; lastActivity: string }>

export enum Currency {
  GBP = 'GBP',
  USD = 'USD',
  EUR = 'EUR',
}

export type Totals = {
  [key in Currency]?: number | 0
}
