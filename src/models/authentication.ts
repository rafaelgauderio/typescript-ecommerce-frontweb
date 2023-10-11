export type CredentialsDTO = {
    username: string;
    password: string;
}

export type AccessTokenPayloadDTO = {
    exp: number,
    user_name: string,
    scope? : string [],
    authorities: RoleEnum [];
}

export type RoleEnum = 'ROLE_CLIENT' | 'ROLE_ADMIN';