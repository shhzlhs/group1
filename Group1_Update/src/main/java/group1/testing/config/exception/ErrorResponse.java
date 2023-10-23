package group1.testing.config.exception;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ErrorResponse {

    private String message;

    private String detailMessage;

    private Object error;

    private Integer code;

    private String moreInformation;
}
