package group1.testing.dto;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class UserItemDTO {

    private int id;

    private String userUsername;

    private String itemName;
}
