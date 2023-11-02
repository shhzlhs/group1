package group1.testing.repository;

import group1.testing.entity.TransactionHistory;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ITransactionHistory extends JpaRepository<TransactionHistory,Integer> {

    List<TransactionHistory> findAllByUserId(int userId);
}
