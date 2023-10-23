package group1.testing.config.exception;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.MessageSource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.validation.ObjectError;
import org.springframework.web.HttpMediaTypeNotSupportedException;
import org.springframework.web.HttpRequestMethodNotSupportedException;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.MissingServletRequestParameterException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.method.annotation.MethodArgumentTypeMismatchException;
import org.springframework.web.servlet.NoHandlerFoundException;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import javax.validation.ConstraintViolation;
import javax.validation.ConstraintViolationException;
import java.util.HashMap;
import java.util.Locale;
import java.util.Map;

@ControllerAdvice
public class RestExceptionHandler extends ResponseEntityExceptionHandler {
    @Autowired
    private MessageSource messageSource;

    public String getMessage(String key) {
        return messageSource.getMessage(
                key,
                null,
                "An error occur",
                new Locale("en", "EN")
        );
    }

    @ExceptionHandler({Exception.class})
    public ResponseEntity<Object> handleAll(Exception exception) {
        String message = getMessage("Exception.message");
        String detailMessage = exception.getLocalizedMessage();
        int code = 1;
        String moreInformation = "http://localhost:8080/api/v1/exception/" + code;
        ErrorResponse errorResponse = new ErrorResponse(message, detailMessage, null, code, moreInformation);
        return new ResponseEntity<>(errorResponse, HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @Override
    protected ResponseEntity<Object> handleNoHandlerFoundException(NoHandlerFoundException ex, HttpHeaders headers, HttpStatus status, WebRequest request) {
        String message = getMessage("NoHandlerFoundException.message") + ex.getHttpMethod() + " " + ex.getRequestURL();
        String detailMessage = ex.getLocalizedMessage();
        int code = 2;
        String moreInformation = "http://localhost:8080/api/v1/exception/" + code;
        ErrorResponse errorResponse = new ErrorResponse(message, detailMessage, null, code, moreInformation);
        return new ResponseEntity<>(errorResponse, status);
    }

    @Override
    protected ResponseEntity<Object> handleHttpRequestMethodNotSupported(HttpRequestMethodNotSupportedException ex, HttpHeaders headers, HttpStatus status, WebRequest request) {
        String message = getMessageHttpRequestMethodNotSupported(ex);
        String detailMessage = ex.getLocalizedMessage();
        int code = 3;
        String moreInformation = "http://localhost:8080/api/v1/exception/" + code;
        ErrorResponse errorResponse = new ErrorResponse(message, detailMessage, null, code, moreInformation);
        return new ResponseEntity<>(errorResponse, status);
    }

    private String getMessageHttpRequestMethodNotSupported(HttpRequestMethodNotSupportedException ex) {
        String message = ex.getMethod() + " " + getMessage("HttpRequestMethodNotSupportedException.message");
        for (String method : ex.getSupportedMethods()) {
            message += " " + method;
        }
        return message;
    }

    // Not support media type
    @Override
    protected ResponseEntity<Object> handleHttpMediaTypeNotSupported(HttpMediaTypeNotSupportedException exception,
                                                                     HttpHeaders headers, HttpStatus status, WebRequest request) {

        String message = getMessageFromHttpMediaTypeNotSupportedException(exception);
        String detailMessage = exception.getLocalizedMessage();
        int code = 4;
        String moreInformation = "http://localhost:8080/api/v1/exception/4";

        ErrorResponse response = new ErrorResponse(message, detailMessage, null, code, moreInformation);

        return new ResponseEntity<>(response, status);
    }

    private String getMessageFromHttpMediaTypeNotSupportedException(HttpMediaTypeNotSupportedException exception) {
        String message = exception.getContentType() + " " + getMessage("HttpMediaTypeNotSupportedException.message");
        for (MediaType method : exception.getSupportedMediaTypes()) {
            message += method + ", ";
        }
        return message.substring(0, message.length() - 2);
    }

    // BindException: This exception is thrown when fatal binding errors occur.
    // MethodArgumentNotValidException: This exception is thrown when argument
    // annotated with @Valid failed validation:
    @Override
    protected ResponseEntity<Object> handleMethodArgumentNotValid(MethodArgumentNotValidException exception,
                                                                  HttpHeaders headers, HttpStatus status, WebRequest request) {

        String message = getMessage("MethodArgumentNotValidException.message");
        String detailMessage = exception.getLocalizedMessage();
        // error
        Map<String, String> errors = new HashMap<>();
        for (ObjectError error : exception.getBindingResult().getAllErrors()) {
            String fieldName = ((FieldError) error).getField();
            String errorMessage = error.getDefaultMessage();
            errors.put(fieldName, errorMessage);
        }
        int code = 5;
        String moreInformation = "http://localhost:8080/api/v1/exception/5";

        ErrorResponse response = new ErrorResponse(message, detailMessage, errors, code, moreInformation);

        return new ResponseEntity<>(response, status);
    }

    // bean validation error
    @SuppressWarnings("rawtypes")
    @ExceptionHandler(ConstraintViolationException.class)
    public ResponseEntity<Object> handleConstraintViolationException(ConstraintViolationException exception) {

        String message = getMessage("ConstraintViolationException.message");
        String detailMessage = exception.getLocalizedMessage();
        // error
        Map<String, String> errors = new HashMap<>();
        for (ConstraintViolation violation : exception.getConstraintViolations()) {
            String fieldName = violation.getPropertyPath().toString();
            String errorMessage = violation.getMessage();
            errors.put(fieldName, errorMessage);
        }
        int code = 5;
        String moreInformation = "http://localhost:8080/api/v1/exception/5";

        ErrorResponse response = new ErrorResponse(message, detailMessage, errors, code, moreInformation);

        return new ResponseEntity<>(response, HttpStatus.BAD_REQUEST);
    }

    // MissingServletRequestPartException: This exception is thrown when when the part of a multipart request not found
    // MissingServletRequestParameterException: This exception is thrown when request missing parameter:
    @Override
    protected ResponseEntity<Object> handleMissingServletRequestParameter(
            MissingServletRequestParameterException exception, HttpHeaders headers, HttpStatus status,
            WebRequest request) {

        String message = exception.getParameterName() + " " + getMessage("MissingServletRequestParameterException.message");
        String detailMessage = exception.getLocalizedMessage();
        int code = 6;
        String moreInformation = "http://localhost:8080/api/v1/exception/6";

        ErrorResponse response = new ErrorResponse(message, detailMessage, null, code, moreInformation);

        return new ResponseEntity<>(response, status);
    }

    // TypeMismatchException: This exception is thrown when try to set bean property with wrong type.
    // MethodArgumentTypeMismatchException: This exception is thrown when method argument is not the expected type:
    @ExceptionHandler({MethodArgumentTypeMismatchException.class})
    public ResponseEntity<Object> handleMethodArgumentTypeMismatch(MethodArgumentTypeMismatchException exception) {

        String message = exception.getName() + " " + getMessage("MethodArgumentTypeMismatchException.message")
                + exception.getRequiredType().getName();
        String detailMessage = exception.getLocalizedMessage();
        int code = 7;
        String moreInformation = "http://localhost:8080/api/v1/exception/7";

        ErrorResponse response = new ErrorResponse(message, detailMessage, null, code, moreInformation);

        return new ResponseEntity<>(response, HttpStatus.BAD_REQUEST);
    }

}
