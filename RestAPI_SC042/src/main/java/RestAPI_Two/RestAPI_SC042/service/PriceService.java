package RestAPI_Two.RestAPI_SC042.service;

import RestAPI_Two.RestAPI_SC042.modul.Price;
import RestAPI_Two.RestAPI_SC042.repository.PriceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class PriceService {
    @Autowired
    private PriceRepository priceRepository;

    public Price addPrice(Price price) {
        return priceRepository.save(price);
    }

    public void deletePriceById(String id) {
        priceRepository.deleteById(id);
    }

    public Optional<Price> getPriceById(String id) {
        return priceRepository.findById(id);
    }

}
