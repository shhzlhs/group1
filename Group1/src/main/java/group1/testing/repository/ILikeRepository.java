package group1.testing.repository;

import group1.testing.entity.Like;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

public interface ILikeRepository extends JpaRepository<Like, Integer>, JpaSpecificationExecutor<Like> {
}
