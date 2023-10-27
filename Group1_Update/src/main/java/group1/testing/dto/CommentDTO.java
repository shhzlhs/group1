package group1.testing.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
import java.util.List;

@Data
@NoArgsConstructor
public class CommentDTO {

    private int id;

    private String postContent;

    private String userUsername;

    private String userAvatar;

    private String content;

    private List<ReportDTO> reports;

    private List<LikeDTO> likes;

    private int commentId;

    private String commentContent;


    private List<CommentDTO1> replies;

    @JsonFormat(pattern = "dd/MM/yyyy HH:mm:ss", timezone = "Asia/Bangkok")
    private Date createdAt;

    @Data
    @NoArgsConstructor
    static class CommentDTO1 {

        private int id;

        private String userUsername;

        private String userAvatar;

        private String content;

        @JsonFormat(pattern = "dd/MM/yyyy HH:mm:ss", timezone = "Asia/Bangkok")
        private Date createdAt;


    }

    @Data
    @NoArgsConstructor
    static class ReportDTO {

        private int id;

        private String reporterAvatar;

        private String reporterUsername;

        private String content;

        @JsonFormat(pattern = "dd/MM/yyyy HH:mm:ss", timezone = "Asia/Bangkok")
        private Date createdAt;

        private List<LikeDTO1> likes;

        @Data
        @NoArgsConstructor
        static class LikeDTO1 {

            private int id;

            private String userUsername;

            private String UserAvatar;

            @JsonFormat(pattern = "dd/MM/yyyy HH:mm:ss", timezone = "Asia/Bangkok")
            private Date createdAt;
        }
    }

    @Data
    @NoArgsConstructor
    static class LikeDTO {

        private int id;

        private String userUsername;

        private String UserAvatar;

        @JsonFormat(pattern = "dd/MM/yyyy HH:mm:ss", timezone = "Asia/Bangkok")
        private Date createdAt;
    }

}
