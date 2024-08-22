package exampleOne.RestAPI_One.service;

import exampleOne.RestAPI_One.dto.request.ContractsCreationRequest;
import exampleOne.RestAPI_One.entity.Contracts;
import exampleOne.RestAPI_One.repository.ContractsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ContractsService {
    @Autowired
    private ContractsRepository contractsRepository;

    public Contracts createContracts(ContractsCreationRequest request){
        Contracts contracts = new Contracts();

        contracts.setContract_number(request.getContract_number());
        contracts.setLocation(request.getLocation());
        contracts.setCreated_at(request.getCreated_at());
        contracts.setStart_date(request.getStart_date());
        contracts.setEnd_date(request.getEnd_date());
        contracts.setStatus(request.getStatus());
        contracts.setNote(request.getNote());
        contracts.setFile_contract(request.getFile_contract());
        contracts.setSupervisor_id(request.getSupervisor_id());
        contracts.setStaff_id(request.getStaff_id());
        contracts.setService_price_id(request.getService_price_id());
        contracts.setCustomer_id(request.getCustomer_id());
        contracts.setManager_id(request.getManager_id());
        contracts.setIs_deleted(request.getIs_deleted());

        return contractsRepository.save(contracts);
    }
}
