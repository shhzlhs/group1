package group1.testing.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
@NoArgsConstructor
@Data
public class LikeDTO {

    private int id;

    private String userAvatar;

    private String userUsername;

    private String postContent;

    private String commentContent;

    @JsonFormat(pattern = "dd/MM/yyyy HH:mm:ss", timezone = "Asia/Bangkok")
    private Date createdAt;
}
