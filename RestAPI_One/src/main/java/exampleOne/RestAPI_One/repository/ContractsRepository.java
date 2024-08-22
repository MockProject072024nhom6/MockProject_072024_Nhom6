package exampleOne.RestAPI_One.repository;

import exampleOne.RestAPI_One.entity.Contracts;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ContractsRepository extends JpaRepository<Contracts, String> {

}
