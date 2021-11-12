import { useAragonApi } from "@aragon/api-react";
import { useEffect, useState } from "react";
import connect from "@aragon/connect";
import connectTokens from "@aragon/connect-tokens";

export function useDaoTokenInfo() {
    const [isLoadingTokenInfo, setIsLoadingTokenInfo] = useState(true);
    const [tokenInfo, setTokenInfo] = useState(null);
    const aragonApi = useAragonApi();

    const { currentApp, network } = aragonApi;
    useEffect(() => {
        async function fetchTokens() {
            if (currentApp) {
                try {
                    const org = await connect(currentApp.appAddress, "thegraph", {
                        network: network.id,
                    });
                    const tokenApp = await connectTokens(org.app("token-manager"));
                    const token = await tokenApp.token();
                    setTokenInfo(token);
                    setIsLoadingTokenInfo(false);
                } catch (e) {
                    console.log(e);
                    setIsLoadingTokenInfo(false);
                }
            }
        }

        fetchTokens();
    }, [currentApp?.appAddress]);

    return {
        tokenInfo,
        isLoadingTokenInfo,
    };
}
