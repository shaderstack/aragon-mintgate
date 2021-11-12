# Aragon <> Mintgate Integration

An aragon app that brings content gating using Mintgate to Aragon DAOs. The DAO token is automatically detected and prefilled. Mintgate's API is used to generate a gated link.

## Demo

A small demo showcasing how it works - https://youtu.be/MkAAS-_dLaU

## Code details

1. Bootstrapped via `create-aragon-app` following the guid at https://hack.aragon.org/docs/tutorial
2. Hooks -
    1. `useMintgate`
        1. Takes care of interaction with mintgate the api
        2. Reads the corresponding network(mainnet/rinkeby etc) from the aragon api hook
        3. Sets the generated link in state
    2. `useDaoTokenInfo`
        1. This uses the aragon api hook to get the current app address and network
        2. Uses `@aragon/connect` and `@aragon/connect-tokens` to get the details of DAOs token
3. Components
    1. `App.js`
        1. Main component that renders everything else
        2. DAO token details is fetched first and prefilled
    2. `MintgateDataInput.js`
        1. Handles the input needed for link generation
        2. The DAO Token is prefilled, it could be changed as well if the user wants
    3. `GeneratedLink.js`
        1. A small component that displays the generated link

## Form Input
1. Dao Token Address - The contract address of dao token, the app tries to fetch this automatically.
2. Minimum tokens needed - The minimum tokens the user must possess to be able to access gated link.
3. Link - The link that needs to be gatedd
4. Title - Optional title given to the link page
5. JWT Token - The jwt token needs to be generated from Mintgate's settings page.


### Notes
1. The contract isn't really needed for this app as it is kind of "read-only".