package group1.testing.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@NoArgsConstructor
@Data
public class MessageDTO {

    private int id;

    private String content;

    private int senderId;

    private String senderAvatar;

    private String senderUsername;

    private String isRead;

    @JsonFormat(pattern = "dd/MM/yyyy HH:mm:ss", timezone = "Asia/Bangkok")
    private Date createdAt;

    private String conversationUser1Username;

    private String conversationUser2Username;

    private String del1;

    private String del2;

    private int conversationId;
}
