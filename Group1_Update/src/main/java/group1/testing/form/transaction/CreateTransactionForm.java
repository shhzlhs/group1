package group1.testing.form.transaction;

import group1.testing.entity.CoinOrGold;
import group1.testing.entity.TranType;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.EnumType;
import javax.persistence.Enumerated;

@Data
@NoArgsConstructor
public class CreateTransactionForm {

    private int id;

    private int userId;

    @Enumerated(EnumType.STRING)
    private CoinOrGold coinOrGold;

    @Enumerated(EnumType.STRING)
    private TranType type;

    private String content;

    private int changedNumber;

    private int lastBalance;


}
