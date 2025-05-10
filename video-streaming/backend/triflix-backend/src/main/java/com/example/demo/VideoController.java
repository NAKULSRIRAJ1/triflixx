package com.example.demo;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/videos")
public class VideoController {
    @Autowired private VideoRepository videoRepo;

    @PostMapping("/upload")
    public ResponseEntity<?> upload(@RequestBody Video video) {
        return ResponseEntity.ok(videoRepo.save(video));
    }

    @GetMapping
    public List<Video> allVideos() {
        return videoRepo.findAll();
    }
}
