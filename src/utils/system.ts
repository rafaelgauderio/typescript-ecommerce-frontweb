export const BASE_URL = import.meta.env.VITE_BACKEND_URL ?? "http://localhost:8080";

export const CART_KEY = "com.rafaeldeluca.ecommerce/cart";
export const TOKEN_KEY = "com.rafaeldeluca.ecommerce/token";

export const CLIENT_ID = import.meta.env.VITE_CLIEND_ID ?? "myclientid";

export const CLIENT_SECRET = import.meta.env.VITE_CLIENT_SECRET ?? "myclientsecret";

// se as variáveis de ambiente não entiverem definidas, então o sistema pega
// , por padrão, o valor que estiver a direita do OPERADOR DE COALESCÊNCIA NULA (??)