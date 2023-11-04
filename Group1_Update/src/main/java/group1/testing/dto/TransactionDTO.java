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

    private String content;

    private int userId;

    private String userUsername;

    @JsonFormat(pattern = "dd/MM/yyyy HH:mm:ss", timezone = "Asia/Bangkok")
    private Date createdAt;
}
