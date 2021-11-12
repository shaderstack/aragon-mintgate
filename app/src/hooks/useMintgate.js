import { useState } from "react";
import { useAragonApi } from "@aragon/api-react";

export function useMintgate() {
    const [isLoading, setIsLoading] = useState(false);
    const [linkInfo, setLinkInfo] = useState(null);

    const aragonApi = useAragonApi();
    let { network } = aragonApi;

    const generateLink = async ({ link, title, tokenAddress, balance, jwtToken }) => {
        try {
            setIsLoading(true);
            setLinkInfo(null);
            const body = JSON.stringify({
                url: link,
                title,
                tokens: [
                    {
                        token: tokenAddress,
                        ttype: "20",
                        balance,
                        network: network.id,
                    },
                ],
                jwt: jwtToken,
            });
            const result = await fetch("https://mgate.io/api/v2/links/create" + `?jwt=${jwtToken}`, {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                },
                body,
            }).then((res) => res.json());
            setLinkInfo(result);
        } catch (e) {
            console.log(e);
        } finally {
            setIsLoading(false);
        }
    };

    return {
        isLoading,
        generateLink,
        linkInfo,
    };
}
