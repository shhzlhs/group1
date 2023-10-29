package group1.testing.dto;

import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@Data
public class NotReadDTO {

    private int conversationId;

    private int numberOfNotRead;
}
