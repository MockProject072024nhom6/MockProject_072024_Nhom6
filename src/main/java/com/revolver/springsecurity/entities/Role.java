package com.revolver.springsecurity.entities;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.authority.SimpleGrantedAuthority;

import java.util.Collections;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

import static com.revolver.springsecurity.entities.Permission.*;

@RequiredArgsConstructor
@Getter
public enum Role {
    USER(Collections.emptySet()),
    ADMIN(
        Set.of(
            ADMIN_READ,
            ADMIN_CREATE,
            ADMIN_UPDATE,
            ADMIN_DELETE,

            MANAGER_READ,
            MANAGER_CREATE,
            MANAGER_UPDATE,
            MANAGER_DELETE,

            STAFF_READ,
            STAFF_CREATE,
            STAFF_UPDATE,
            STAFF_DELETE,

            GUARD_READ,
            GUARD_CREATE,
            GUARD_UPDATE,
            GUARD_DELETE,

            CUSTOMER_READ,
            CUSTOMER_CREATE,
            CUSTOMER_UPDATE,
            CUSTOMER_DELETE
        )
    ),
    MANAGER(
        Set.of(
            MANAGER_READ,
            MANAGER_CREATE,
            MANAGER_UPDATE,
            MANAGER_DELETE
        )
    ),
    STAFF(
        Set.of(
            STAFF_READ,
            STAFF_CREATE,
            STAFF_UPDATE,
            STAFF_DELETE
        )
    ),
    GUARD(
        Set.of(
            GUARD_READ,
            GUARD_CREATE,
            GUARD_UPDATE,
            GUARD_DELETE
        )
    ),
    CUSTOMER(
        Set.of(
            CUSTOMER_READ,
            CUSTOMER_CREATE,
            CUSTOMER_UPDATE,
            CUSTOMER_DELETE
        )
    );

    private final Set<Permission> permissions;

    public List<SimpleGrantedAuthority> getGrantedAuthorities(){
        List<SimpleGrantedAuthority> authorities = permissions.stream()
                .map(permission -> new SimpleGrantedAuthority(permission.getPermission()))
                .collect(Collectors.toList());
        authorities.add(new SimpleGrantedAuthority("ROLE_" + this.name()));
        return authorities;
    }
}
