package group1.testing.controller;

import group1.testing.dto.PostDTO;
import group1.testing.dto.TransactionDTO;
import group1.testing.entity.TransactionHistory;
import group1.testing.form.transaction.CreateTransactionForm;
import group1.testing.service.transaction.ITransactionHistoryService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping(value = "/api/v1/trans")
public class TransactionHistoryController {

    @Autowired
    ModelMapper modelMapper;
    @Autowired
    ITransactionHistoryService transactionHistoryService;

    @GetMapping
    public List<TransactionDTO> getAllTrans() {
        List<TransactionHistory> transactionHistories = transactionHistoryService.getAllTransactions();
        List<TransactionDTO> transactionDTOS = modelMapper.map(transactionHistories, new TypeToken<List<TransactionDTO>>() {
        }.getType());
        return transactionDTOS;
    }

    @GetMapping(value = "user/{id}")
    public List<TransactionDTO> GetByUser(@PathVariable int id) {
        List<TransactionHistory> transactionHistories = transactionHistoryService.getByUserId(id);
        List<TransactionDTO> transactionDTOS = modelMapper.map(transactionHistories, new TypeToken<List<TransactionDTO>>() {
        }.getType());
        return transactionDTOS;
    }

    @PostMapping
    public void createTran(@RequestBody CreateTransactionForm form) {
        transactionHistoryService.createTransaction(form);
    }
}
