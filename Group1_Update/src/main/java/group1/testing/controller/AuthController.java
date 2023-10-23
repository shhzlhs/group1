package group1.testing.controller;

import group1.testing.dto.LogInDTO;
import group1.testing.entity.User;
import group1.testing.service.user.IUserService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;

@CrossOrigin("*")
@RestController
@RequestMapping(value = "/api/v1/auth")
public class AuthController {
    @Autowired
    IUserService userService;

    @Autowired
    ModelMapper modelMapper;

    @GetMapping("/login")
    public LogInDTO login(Principal principal) {
        String username = principal.getName();
        User user = userService.getUserByUsername(username);
        return modelMapper.map(user, LogInDTO.class);
    }
}
