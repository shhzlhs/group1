package group1.testing.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@NoArgsConstructor
public class ConversationDTO {

    private int id;

    private int user1Id;

    private String user1Username;

    private String user1FullName;

    private int user2Id;

    private String user2Username;

    private String user2FullName;

    private String user1Avatar;

    private String user2Avatar;

    @JsonFormat(pattern = "dd/MM/yyyy HH:mm:ss", timezone = "Asia/Bangkok")
    private Date createdAt;

    private String del1;

    private String del2;

}
