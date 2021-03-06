import Transaction from '../models/Transaction';

interface Balance {
  income: number;
  outcome: number;
  total: number;
}

interface CreateTransactionDTO {
  title: string;
  value: number;
  type: 'income' | 'outcome';
}

class TransactionsRepository {
  private transactions: Transaction[];

  constructor() {
    this.transactions = [];
  }

  public all(): Transaction[] {
    return this.transactions;
  }

  public getBalance(): Balance {
    const balance = this.transactions.reduce(
      (element: Balance, transaction: Transaction) => {
        if (transaction.type === 'income') {
          element.income += transaction.value;
          element.total += transaction.value;
        } else if (transaction.type === 'outcome') {
          element.outcome += transaction.value;
          element.total -= transaction.value;
        }

        return element;
      },
      {
        income: 0,
        outcome: 0,
        total: 0,
      },
    );

    return balance;
  }

  public create({ title, value, type }: CreateTransactionDTO): Transaction {
    const transaction = new Transaction({ title, value, type });

    const { total } = this.getBalance();

    if (type === 'outcome' && total - value < 0) {
      throw Error('Transaction without a valid balance!');
    }

    this.transactions.push(transaction);

    return transaction;
  }
}

export default TransactionsRepository;
