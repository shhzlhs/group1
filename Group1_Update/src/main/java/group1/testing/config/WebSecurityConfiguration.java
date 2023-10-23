//package group1.testing.config;
//
//
//import group1.testing.config.exception.AuthExceptionHandler;
//import group1.testing.service.user.IUserService;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
//import org.springframework.security.config.annotation.web.builders.HttpSecurity;
//import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
//import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
//import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
//import org.springframework.stereotype.Component;
//
//@Component
//@EnableWebSecurity
//public class WebSecurityConfiguration extends WebSecurityConfigurerAdapter {
//    @Autowired
//    private IUserService userService;
//
//    @Autowired
//    private AuthExceptionHandler authExceptionHandler;
//
//    @Override
//    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
//        auth.userDetailsService(userService).passwordEncoder(new BCryptPasswordEncoder());
//    }
//
//    @Override
//    protected void configure(HttpSecurity http) throws Exception {
//        http.cors()
//                .and()
//                .exceptionHandling()
//                .authenticationEntryPoint(authExceptionHandler)
//                .accessDeniedHandler(authExceptionHandler)
//                .and()
//                .authorizeRequests()
//                .antMatchers("/api/v1/users/**").permitAll()
//                .antMatchers("/api/v1/posts/**").permitAll()
//                .anyRequest().authenticated()
//                .and()
//                .httpBasic()
//                .and()
//                .csrf().disable();
//    }
//}
