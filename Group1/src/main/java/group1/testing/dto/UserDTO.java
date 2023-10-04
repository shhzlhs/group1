package group1.testing.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
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


    @Data
    @NoArgsConstructor
    static class ItemDTO {

        private int id;

        private String name;

        private String image;
    }

    @Data
    @NoArgsConstructor
    static class UserDTO1 {
        private int id;

        private String username;

        private String fullName;

        private String email;

    }
}
