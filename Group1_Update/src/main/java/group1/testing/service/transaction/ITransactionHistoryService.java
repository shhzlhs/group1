package group1.testing.service.transaction;

import group1.testing.entity.TransactionHistory;
import group1.testing.form.transaction.CreateTransactionForm;

import java.util.List;

public interface ITransactionHistoryService {

    List<TransactionHistory> getAllTransactions();

    List<TransactionHistory> getByUserId(int userId);

    void createTransaction(CreateTransactionForm form);
}
