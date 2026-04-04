package com.example.CTube.controller;

import java.io.IOException;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.FileSystemResource;
import org.springframework.core.io.Resource;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import org.springframework.web.multipart.MultipartFile;

import com.example.CTube.model.Video;
import com.example.CTube.service.VideoService;


@RestController
@RequestMapping("/api/ctube")
public class VideoController {

    @Autowired
    private VideoService service;
    

    
    @PostMapping("/upload")
    public ResponseEntity<?> videoUpload(
            @RequestParam("file") MultipartFile videofile,
            @RequestParam("thumbnail") MultipartFile thumbnailfile,
            @RequestParam("title") String title) {

        try {
            service.uploadVideo(videofile, thumbnailfile, title);
            return ResponseEntity.ok("File Uploaded Successfully");

        } catch (IOException e) {
            return ResponseEntity.internalServerError().body("Upload failed");
        }
    }

    
    @GetMapping("/{id}/thumbnail")
    public ResponseEntity<Resource> getThumbnail(@PathVariable Long id) {

        Video video = service.getVideo(id);

        Path path = Paths.get(video.getThumbnailPath());
        Resource resource = new FileSystemResource(path);

        return ResponseEntity.ok()
                .contentType(MediaType.parseMediaType(video.getThumbnailContentType()))
                .body(resource);
    }
    
    @GetMapping
    public List<Video> getAllVideos() {
        return service.getAllVideos();
    }
    
    
    @GetMapping("/{id}")
    public ResponseEntity<Resource> streamVideo(@PathVariable Long id) {

        Video video = service.getVideo(id);

        Path path = Paths.get(video.getFilePath());
        Resource resource = new FileSystemResource(path);

        return ResponseEntity.ok()
                .contentType(MediaType.parseMediaType(video.getContentType()))
                .body(resource);
    }
}