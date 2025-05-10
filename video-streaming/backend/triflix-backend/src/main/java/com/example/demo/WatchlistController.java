package com.example.demo;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/watchlist")
public class WatchlistController {
    @Autowired private WatchlistRepository repo;

    @PostMapping("/add")
    public ResponseEntity<?> add(@RequestBody Watchlist watchlist) {
        return ResponseEntity.ok(repo.save(watchlist));
    }

    @GetMapping("/{userId}")
    public List<Watchlist> getUserWatchlist(@PathVariable Long userId) {
        return repo.findByUserId(userId);
    }
}
