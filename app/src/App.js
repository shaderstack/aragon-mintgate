import React from "react";
import { Box, GU, Header, Main, textStyle, LoadingRing } from "@aragon/ui";
import { useDaoTokenInfo } from "./hooks/useDaoTokenInfo";
import { MintgateDataInput } from "./components/MintgateDataInput";
import { useMintgate } from "./hooks/useMintgate";
import { GeneratedLink } from "./components/GeneratedLink";

function App() {
    const { tokenInfo, isLoadingTokenInfo } = useDaoTokenInfo();
    const { isLoading: isMintgateLinkLoading, linkInfo, generateLink } = useMintgate();
    return (
        <Main>
            <Header primary="Create Gated Links" />
            <Box
                css={`
                    display: flex;
                    min-height: ${80 * GU}px;
                    ${textStyle("title3")};
                `}
            >
                {isLoadingTokenInfo && <LoadingRing />}
                {!isLoadingTokenInfo && (
                    <MintgateDataInput
                        tokenAddress={tokenInfo?.address}
                        onClickGenerateLink={generateLink}
                        isLinkLoading={isMintgateLinkLoading}
                    />
                )}
                {!isMintgateLinkLoading && linkInfo && linkInfo.url && <GeneratedLink url={linkInfo.url} />}
            </Box>
        </Main>
    );
}

export default App;
