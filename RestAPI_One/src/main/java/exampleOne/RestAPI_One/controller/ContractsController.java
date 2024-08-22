package exampleOne.RestAPI_One.controller;

import exampleOne.RestAPI_One.dto.request.ContractsCreationRequest;
import exampleOne.RestAPI_One.entity.Contracts;
import exampleOne.RestAPI_One.repository.ContractsRepository;
import exampleOne.RestAPI_One.service.ContractsService;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@Data
@AllArgsConstructor
@NoArgsConstructor
public class ContractsController {
    @Autowired
    private ContractsService contractsService;

    @PostMapping("/contracts")
    public Contracts createContracts(@RequestBody ContractsCreationRequest request){
        System.out.println(request);
        return contractsService.createContracts(request);

    }

//    @GetMapping("/contractsService")
//    public List<Contracts> getAll(){
//        return contractsService;
//    }

//    @PutMapping("/contracts")
//
//    public void update(@RequestBody Contracts contracts) {
//        for(int i = 0; i < contracts.size(); i++){
//            if (contracts.get(i).getId() == contracts.getId()) {
//                contracts.set(i, contracts);
//                break;
//            }
//        }
//    }

//    @PutMapping("/contracts")
//    public void update(@RequestBody Contracts contracts) {
//        for (int i = 0; i < contracts.size(); i++) {
//            if (contracts.get(i).getcontract_id() == contracts.getContract_id()) {
//                contracts.set(i, contracts);
//                break;
//            }
//        }
//    }

    @PutMapping("/contracts")
    public void update(@RequestBody Contracts updatedContract) {
        // Tìm contract cũ trong danh sách các contracts bằng id của contract
        Contracts existingContract = findContractById(updatedContract.getContract_id());

        if (existingContract != null) {
            existingContract.setContract_number(updatedContract.getContract_number());
            existingContract.setLocation(updatedContract.getLocation());
            existingContract.setCreated_at(updatedContract.getCreated_at());
            existingContract.setStart_date(updatedContract.getStart_date());
            existingContract.setEnd_date(updatedContract.getEnd_date());
            existingContract.setStatus(updatedContract.getStatus());
            existingContract.setNote(updatedContract.getNote());
            existingContract.setFile_contract(updatedContract.getFile_contract());
            existingContract.setSupervisor_id(updatedContract.getSupervisor_id());
            existingContract.setStaff_id(updatedContract.getStaff_id());
            existingContract.setService_price_id(updatedContract.getService_price_id());
            existingContract.setCustomer_id(updatedContract.getCustomer_id());
            existingContract.setManager_id(updatedContract.getManager_id());
            existingContract.setIs_deleted(updatedContract.getIs_deleted());
        }
    }

    private Contracts findContractById(String Contracts_id) {
        // Logic để tìm contract theo id, ví dụ:
        return ContractsRepository.findById(Contracts_id).orElse(null);
        return null; // Giả sử bạn có phương thức để tìm kiếm hợp đồng theo ID
    }

}
