import { Button, TextInput, Field } from "@aragon/ui";
import React, { Fragment, useState } from "react";

export function MintgateDataInput({ tokenAddress, onClickGenerateLink, isLinkLoading }) {
    const [link, setLink] = useState("");
    const [title, setTitle] = useState("");
    const [jwtToken, setJwtToken] = useState("");
    const [tAddr, setTokenAddress] = useState(tokenAddress);
    const [minTokensNeeded, setMinTokenNeeded] = useState(1);

    const isInputValid = () => {
        if (link.length && jwtToken.length && tAddr.length && minTokensNeeded) return true;
        return false;
    };

    return (
        <Fragment>
            <div>
                <Field label="DAO TOKEN ADDRESS:">
                    <TextInput
                        value={tAddr}
                        onChange={(event) => setTokenAddress(event.target.value)}
                        placeholder="DAO Token Address"
                        wide
                    />
                </Field>
            </div>
            <div>
                <Field label="MINIMUM TOKENS NEEDED:">
                    <TextInput.Number
                        value={minTokensNeeded}
                        onChange={(event) => setMinTokenNeeded(event.target.value)}
                        placeholder="DAO Token Address"
                    />
                </Field>
            </div>
            <div>
                <Field label="LINK:">
                    <TextInput value={link} onChange={(event) => setLink(event.target.value)} placeholder="Link" />
                </Field>
            </div>
            <div>
                <Field label="TITLE:">
                    <TextInput value={title} onChange={(event) => setTitle(event.target.value)} placeholder="Title" />
                </Field>
            </div>
            <div>
                <Field label="JWT TOKEN:">
                    <TextInput
                        value={jwtToken}
                        onChange={(event) => setJwtToken(event.target.value)}
                        placeholder="JWT Token"
                    />
                </Field>
            </div>
            <div>
                <Button
                    label="Generate link"
                    mode="strong"
                    disabled={isLinkLoading || !isInputValid()}
                    onClick={() => {
                        onClickGenerateLink({
                            link,
                            title,
                            tokenAddress: tAddr,
                            balance: minTokensNeeded,
                            jwtToken,
                        });
                    }}
                />
            </div>
        </Fragment>
    );
}
