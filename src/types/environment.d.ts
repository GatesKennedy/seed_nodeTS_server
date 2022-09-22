declare global {
    namespace NodeJS {
        interface ProcessEnv {
            NODE_ENV: string;
            PORT: string;
            DB_HOST: string;
            DB_USER: string;
            DB_NAME: string;
            DB_PASS: string;
            DB_PORT: string;
            DB_POOL_SIZE: string;
            DB_POOL_CLIENT_IDLE_TIMEOUT: string;
            DB_POOL_CLIENT_CONNECTION_TIMEOUT: string;
        }
    }
}

export {};