package group1.testing.dto;

import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@Data
public class MessageDTO {

    private int id;

    private String content;

    private String senderAvatar;

    private String senderUsername;

    private String receiverAvatar;

    private String receiverUsername;
}
