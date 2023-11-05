package group1.testing.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import group1.testing.entity.Role;
import group1.testing.entity.Status;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import java.util.Date;
import java.util.List;

@Data
@NoArgsConstructor
public class UserDTO {

    private int id;

    private String username;

    private String fullName;

    private String email;

    private String gender;

    private int coin;

    private int gold;

    private String password;

    @Enumerated(EnumType.STRING)

    private Role role;

    @Enumerated(EnumType.STRING)
    private Status status;

    private String avatar;

    @JsonFormat(pattern = "dd/MM/yyyy HH:mm:ss", timezone = "Asia/Bangkok")
    private Date createdAt;

    private List<ItemDTO> items;

    private List<UserDTO1> follows;

    private List<UserDTO1> followings;

    private List<ReportDTO> reports;

    private List<ReportDTO> beReports;

    private List<PostDTO> posts;

    @Data
    @NoArgsConstructor
    static class PostDTO {

        private int id;

        private String image;

        @JsonFormat(pattern = "dd/MM/yyyy HH:mm:ss")
        private Date createdAt;
    }


    @Data
    @NoArgsConstructor
    static class ItemDTO {

        private int id;

        private String name;

        private String image;

        private String type;
    }

    @Data
    @NoArgsConstructor
    static class UserDTO1 {
        private int id;

        private String username;

        private String fullName;

        private String email;

        private String gender;

        private String avatar;
        
        private List<ItemDTO1> items;

        private List<UserDTO2> followings;

        @Data
        @NoArgsConstructor
        static class ItemDTO1 {

            private int id;

            private String name;

            private String image;

            private String type;
        }

        @Data
        @NoArgsConstructor
        static class UserDTO2 {

            private int id;

            private String username;

            private String avatar;
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
