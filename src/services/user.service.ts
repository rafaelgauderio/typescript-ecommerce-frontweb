import { requestBackend } from "./request";

export function findUser() {
    return requestBackend({
        url: "/user/me"
    });
}