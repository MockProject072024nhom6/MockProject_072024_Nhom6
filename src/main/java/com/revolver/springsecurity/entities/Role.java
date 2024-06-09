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
            MANAGER_DELETE
        )
    ),
    MANAGER(
        Set.of(
            MANAGER_READ,
            MANAGER_CREATE,
            MANAGER_UPDATE,
            MANAGER_DELETE
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
