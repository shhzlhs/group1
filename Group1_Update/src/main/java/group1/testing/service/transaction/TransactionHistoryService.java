package group1.testing.service.transaction;

import group1.testing.entity.TransactionHistory;
import group1.testing.form.transaction.CreateTransactionForm;
import group1.testing.repository.ITransactionHistory;
import group1.testing.repository.IUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TransactionHistoryService implements ITransactionHistoryService {

    @Autowired
    ITransactionHistory transactionHistoryRepository;

    @Autowired
    IUserRepository userRepository;

    @Override
    public List<TransactionHistory> getAllTransactions() {
        return transactionHistoryRepository.findAll();
    }

    @Override
    public List<TransactionHistory> getByUserId(int userId) {
        return transactionHistoryRepository.findAllByUserId(userId);
    }

    @Override
    public void createTransaction(CreateTransactionForm form) {
        TransactionHistory transactionHistory = new TransactionHistory();
        transactionHistory.setUser(userRepository.findById(form.getUserId()));
        transactionHistory.setCoinOrGold(form.getCoinOrGold());
        transactionHistory.setType(form.getType());
        transactionHistory.setChangedNumber(form.getChangedNumber());
        transactionHistory.setLastBalance(form.getLastBalance());
        transactionHistory.setContent(form.getContent());
        transactionHistoryRepository.save(transactionHistory);

    }
}
