package group1.testing.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
import java.util.List;

@Data
@NoArgsConstructor
public class PostDTO {

    private int id;

    private String userUsername;

    private String userAvatar;

    private String content;

    private String image;

    @JsonFormat(pattern = "dd/MM/yyyy HH:mm:ss", timezone = "Asia/Bangkok")
    private Date createdAt;

    private List<LikeDTO> likes;

    private List<CommentDTO> comments;

    private List<ReportDTO> reports;

    @NoArgsConstructor
    @Data
    static class LikeDTO {

        private int id;

        private String userUsername;

        private String userAvatar;

        @JsonFormat(pattern = "dd/MM/yyyy HH:mm:ss", timezone = "Asia/Bangkok")
        private Date createdAt;
    }

    @Data
    @NoArgsConstructor
    static class CommentDTO {

        private int id;

        private String userUsername;

        private String userAvatar;

        private String content;

        @JsonFormat(pattern = "dd/MM/yyyy HH:mm:ss", timezone = "Asia/Bangkok")
        private Date createdAt;

        private List<LikeDTO2> likes;

        private List<CommentDTO2> replies;

        @Data
        @NoArgsConstructor
        static class LikeDTO2 {

            private int id;

            private String userUsername;

            private String userAvatar;

            @JsonFormat(pattern = "dd/MM/yyyy HH:mm:ss", timezone = "Asia/Bangkok")
            private Date createdAt;
        }

        @Data
        @NoArgsConstructor
        static class CommentDTO2 {

            private int id;

            private String userAvatar;

            private String userUsername;

            private String content;

            private List<LikeDTO> likes;

            @JsonFormat(pattern = "dd/MM/yyyy HH:mm:ss", timezone = "Asia/Bangkok")
            private Date createdAt;

            @Data
            @NoArgsConstructor
            static class LikeDTO {
                private int id;

                private String userUsername;

                private String userAvatar;

                @JsonFormat(pattern = "dd/MM/yyyy HH:mm:ss", timezone = "Asia/Bangkok")
                private Date createdAt;
            }
        }
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
    }
}
