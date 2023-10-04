package group1.testing.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@NoArgsConstructor
public class CommentDTO {

    private int id;

    private String postContent;

    private String userUsername;

    private String userAvatar;

    private String content;

    @JsonFormat(pattern = "dd/MM/yyyy hh:mm:ss")
    private Date createdAt;

}
