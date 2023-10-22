package group1.testing.repository;

import group1.testing.entity.Comment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

public interface ICommentRepository extends JpaRepository<Comment, Integer>, JpaSpecificationExecutor<Comment> {
    Comment findById(int id);
}
