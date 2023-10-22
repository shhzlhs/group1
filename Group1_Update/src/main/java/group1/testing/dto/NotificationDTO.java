package group1.testing.dto;

import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@Data
public class NotificationDTO {

    private int id;

    private String content;

    private int userId;

    private String creatorAvatar;

    private String creatorUsername;

    private String creatorFullName;

    private boolean isRead;
}
