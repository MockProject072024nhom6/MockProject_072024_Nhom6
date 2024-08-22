package RestAPI_Two.RestAPI_SC042.controller;

import RestAPI_Two.RestAPI_SC042.modul.Price;
import RestAPI_Two.RestAPI_SC042.repository.PriceRepository;
import RestAPI_Two.RestAPI_SC042.service.PriceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import java.util.Optional;

@RestController
@RequestMapping("/api/prices")
public class PriceController {

    @Autowired
    private PriceService priceService;

    @PostMapping
    public ResponseEntity<Price> addPrice(@RequestBody Price price) {
        Price newPrice = priceService.addPrice(price);
        return ResponseEntity.ok(newPrice);
    }

    @DeleteMapping("/id")
    public ResponseEntity<Void> deletePrice(@PathVariable String id) {
        Optional<Price> price = priceService.getPriceById(id);
        if (price.isPresent()) {
            priceService.deletePriceById(id);
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
