import Transaction from '../models/Transaction';
import Balance from '../models/Balance';

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

  public all(): { transactions: Transaction[]; balance: Balance } {
    const retorno = {
      transactions: this.transactions,
      balance: this.getBalance(),
    };
    return retorno;
  }

  public getBalance(): Balance {
    const income = this.transactions.reduce((total, next) => {
      return total + (next.type === 'income' ? next.value : 0);
    }, 0);
    const outcome = this.transactions.reduce((total, next) => {
      return total + (next.type === 'outcome' ? next.value : 0);
    }, 0);
    const total = income - outcome;

    const balance = new Balance({
      income,
      outcome,
      total,
    });

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
