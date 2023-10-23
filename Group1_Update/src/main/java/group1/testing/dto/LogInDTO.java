package group1.testing.dto;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class LogInDTO {

    private int id;

    private String username;

    private String avatar;

    private int coin;

    private int gold;
}
