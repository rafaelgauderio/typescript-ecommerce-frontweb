import { TOKEN_KEY } from "../utils/system";

export function saveToken(tokenValue: string) : void {
    localStorage.setItem(TOKEN_KEY, tokenValue);
}

export function getToken() : string | null | undefined{
    return localStorage.getItem(TOKEN_KEY);
}

export function removeToken() : void{
    localStorage.removeItem(TOKEN_KEY);
}