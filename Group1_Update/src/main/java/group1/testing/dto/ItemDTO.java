package group1.testing.dto;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor

public class ItemDTO {

    private int id;

    private String name;

    private String image;

    private int coinCost;

    private int goldCost;

    private String type;

}
