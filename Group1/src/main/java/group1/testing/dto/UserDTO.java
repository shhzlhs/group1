package group1.testing.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import group1.testing.entity.Gender;
import group1.testing.entity.Role;
import group1.testing.entity.Status;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import lombok.Data;
import lombok.NoArgsConstructor;

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

    @Enumerated(EnumType.STRING)

    private Role role;

    @Enumerated(EnumType.STRING)
    private Status status;

    private String avatar;

    @JsonFormat(pattern = "dd/MM/yyyy hh:mm:ss")
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

        private List<UserDTO2> follows;

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

        private String content;

        @JsonFormat(pattern = "dd/MM/yyyy hh:mm:ss")
        private Date createdAt;
    }
}
