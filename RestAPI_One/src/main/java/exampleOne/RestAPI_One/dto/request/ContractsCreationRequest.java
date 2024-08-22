package exampleOne.RestAPI_One.dto.request;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ContractsCreationRequest {

    private int contract_number;
    private String location;
    private LocalDate created_at;
    private LocalDate start_date;
    private LocalDate end_date;
    private String status;
    private String note;
    private String file_contract;
    private String supervisor_id;
    private String staff_id;
    private String service_price_id;
    private String customer_id;
    private String manager_id;
    private Boolean is_deleted;

}
