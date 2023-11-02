package group1.testing.dto;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;

@Data
@NoArgsConstructor
public class GameDTO {

    private int id;

    private String name;

    private String logo;

    private int slotCoinPrice;

    private int slotGoldPrice;

}
