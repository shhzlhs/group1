package group1.testing.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@NoArgsConstructor
@Data
public class FollowDTO {

    private int id;

    private String followerUsername;

    private String followingUsername;

    @JsonFormat(pattern = "dd/MM/yyyy hh:mm:ss")
    private Date createdAt;
}
