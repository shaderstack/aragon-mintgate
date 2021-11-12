import React from "react";
import { TextCopy, Info, GU } from "@aragon/ui";

export function GeneratedLink({ url }) {
    return (
        <div
            css={`
                margin-top: ${5 * GU}px;
            `}
        >
            <Info title="Generated Link">
                <TextCopy value={url} />
            </Info>
        </div>
    );
}
