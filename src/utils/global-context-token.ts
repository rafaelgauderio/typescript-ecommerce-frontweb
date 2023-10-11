import { createContext } from "react";
import { AccessTokenPayloadDTO } from "../models/authentication"

export type GlobalContextTokenType = {
    globalContextTokenPayload : AccessTokenPayloadDTO | undefined;
    setGlobalContextTokenPayload : (accesTokenPayload: AccessTokenPayloadDTO | undefined) => void;
};

export const GlobalContextToken = createContext<GlobalContextTokenType>({
    globalContextTokenPayload: undefined,
    setGlobalContextTokenPayload: () => {},
});

