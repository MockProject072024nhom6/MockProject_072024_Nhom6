package RestAPI_Two.RestAPI_SC042.repository;


import RestAPI_Two.RestAPI_SC042.modul.Price;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PriceRepository extends JpaRepository<Price, String> {
}
