package group1.testing.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@NoArgsConstructor
@Data
public class TransactionDTO {

    private int id;

    private String coinOrGold;

    private String type;

    private int changedNumber;

    private int lastBalance;

    private int userid;

    private String userUsername;

    @JsonFormat(pattern = "dd/MM/yyyy hh:mm:ss")
    private Date createdAt;
}
