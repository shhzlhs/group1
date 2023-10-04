package group1.testing.specification;

import group1.testing.entity.User;
import group1.testing.form.user.UserFilterForm;
import jakarta.persistence.criteria.CriteriaBuilder;
import jakarta.persistence.criteria.CriteriaQuery;
import jakarta.persistence.criteria.Predicate;
import jakarta.persistence.criteria.Root;
import lombok.AllArgsConstructor;
import org.springframework.data.jpa.domain.Specification;

public class UserSpecification {
    private static final String USERNAME = "username";
    private static final String FULL_NAME = "fullName";
    public static Specification<User> buildWhere(UserFilterForm form){
        if(form == null){
            return null;
        }
        Specification<User> whereUsername = new CustomSpecification(USERNAME, form.getSearch());
        Specification<User> whereFullName = new CustomSpecification(FULL_NAME, form.getSearch());
        return Specification.where(whereUsername.or(whereFullName));
    }
    @AllArgsConstructor
    static class CustomSpecification implements Specification<User>{
        private String key;
        private Object value;
        @Override
        public Predicate toPredicate(Root<User> root, CriteriaQuery<?> query, CriteriaBuilder criteriaBuilder) {
            if(value == null){
                return null;
            }
            switch (key){
                case USERNAME:
                    return criteriaBuilder.like(root.get("username"), "%" + value + "%");
                case FULL_NAME:
                    return criteriaBuilder.like(root.get("fullName"), "%" + value + "%");
                    default:
                    return null;
            }
        }
    }
}
