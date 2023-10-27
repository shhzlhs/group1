package group1.testing.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@NoArgsConstructor
@Data
public class NotificationDTO {

    private int id;

    private String content;

    private int userId;

    private String creatorAvatar;

    private String creatorUsername;

    private String creatorFullName;

    private int postId;

    private int commentId;

    private String isRead;

    @JsonFormat(pattern = "dd/MM/yyyy HH:mm:ss", timezone = "Asia/Bangkok")
    private Date createdAt;
}
