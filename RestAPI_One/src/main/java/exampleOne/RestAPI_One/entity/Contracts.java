package exampleOne.RestAPI_One.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "Contracts")
public class Contracts {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String contract_id;
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

//    public String getContract_id() {
//        return contract_id;
//    }
//
//    public void setContract_id(String contract_id) {
//        this.contract_id = contract_id;
//    }
//
//    public int getContract_number() {
//        return contract_number;
//    }
//
//    public void setContract_number(int contract_number) {
//        this.contract_number = contract_number;
//    }
//
//    public String getLocation() {
//        return location;
//    }
//
//    public void setLocation(String location) {
//        this.location = location;
//    }
//
//    public LocalDate getCreated_at() {
//        return created_at;
//    }
//
//    public void setCreated_at(LocalDate created_at) {
//        this.created_at = created_at;
//    }
//
//    public LocalDate getStart_date() {
//        return start_date;
//    }
//
//    public void setStart_date(LocalDate start_date) {
//        this.start_date = start_date;
//    }
//
//    public LocalDate getEnd_date() {
//        return end_date;
//    }
//
//    public void setEnd_date(LocalDate end_date) {
//        this.end_date = end_date;
//    }
//
//    public String getStatus() {
//        return status;
//    }
//
//    public void setStatus(String status) {
//        this.status = status;
//    }
//
//    public String getNote() {
//        return note;
//    }
//
//    public void setNote(String note) {
//        this.note = note;
//    }
//
//    public String getFile_contract() {
//        return file_contract;
//    }
//
//    public void setFile_contract(String file_contract) {
//        this.file_contract = file_contract;
//    }
//
//    public String getSupervisor_id() {
//        return supervisor_id;
//    }
//
//    public void setSupervisor_id(String supervisor_id) {
//        this.supervisor_id = supervisor_id;
//    }
//
//    public String getStaff_id() {
//        return staff_id;
//    }
//
//    public void setStaff_id(String staff_id) {
//        this.staff_id = staff_id;
//    }
//
//    public String getService_price_id() {
//        return service_price_id;
//    }
//
//    public void setService_price_id(String service_price_id) {
//        this.service_price_id = service_price_id;
//    }
//
//    public String getCustomer_id() {
//        return customer_id;
//    }
//
//    public void setCustomer_id(String customer_id) {
//        this.customer_id = customer_id;
//    }
//
//    public String getManager_id() {
//        return manager_id;
//    }
//
//    public void setManager_id(String manager_id) {
//        this.manager_id = manager_id;
//    }
//
//    public Boolean getIs_deleted() {
//        return is_deleted;
//    }
//
//    public void setIs_deleted(Boolean is_deleted) {
//        this.is_deleted = is_deleted;
//    }

}
