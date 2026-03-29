package repository;

import org.springframework.data.jpa.repository.JpaRepository;

import model.Video;

public interface VideoRepository extends JpaRepository<Video, Long>{

}
