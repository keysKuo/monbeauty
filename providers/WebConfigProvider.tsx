
'use client';

import { API_URL } from '@/constants';
import { createContext, useContext, useEffect, useState } from 'react';
export type WebConfig = {
    logo: string,
    slogan: string,
    address: string,
    email: string,
    phone: string,
    zalo_url: string,
    messenger_url: string,
    tiktok_url: string,
    working_hours: string
}

const defaultConfig: WebConfig = {
    logo: "",
    slogan: "",
    address: "",
    email: "",
    phone: "",
    zalo_url: "",
    messenger_url: "",
    tiktok_url: "",
    working_hours: ""
};

export const WebConfigContext = createContext<WebConfig>(defaultConfig);

export const useWebConfigContext = () => {
    return useContext(WebConfigContext);
}


export const WebConfigProvider = ({ children }: { children: React.ReactNode }) => {
    const [config, setConfig] = useState<WebConfig>(defaultConfig);

    useEffect(() => {
        const fetchWebConfig = async () => {
            const webConfigs = await fetch(API_URL + "/api/web-configs", { cache: 'no-store'})
                .then(response => response.json())
                .then(result => result.data)

            setConfig(webConfigs.length !== 0 ? webConfigs[0] : defaultConfig);
        }

        fetchWebConfig();
    }, []);

    return (
        <WebConfigContext.Provider value={ config }>
            {children}
        </WebConfigContext.Provider>
    );
};
