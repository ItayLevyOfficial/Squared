export const launchContractAbi = [
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_WETH",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_treasury",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_maxTotalValue",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "claimer",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "token",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "assetsMoved",
          "type": "uint256"
        }
      ],
      "name": "AssetsFinalized",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "depositor",
          "type": "address"
        },
        {
          "components": [
            {
              "internalType": "address",
              "name": "token",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            }
          ],
          "indexed": false,
          "internalType": "struct IDefiRound.TokenData",
          "name": "tokenInfo",
          "type": "tuple"
        }
      ],
      "name": "Deposited",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "user",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amountTransferred",
          "type": "uint256"
        }
      ],
      "name": "GenesisTransfer",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "previousOwner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipTransferred",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "components": [
            {
              "internalType": "address",
              "name": "token",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "numerator",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "denominator",
              "type": "uint256"
            }
          ],
          "indexed": false,
          "internalType": "struct IDefiRound.RateData[]",
          "name": "ratesData",
          "type": "tuple[]"
        }
      ],
      "name": "RatesPublished",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "components": [
            {
              "internalType": "address",
              "name": "token",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "oracle",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "genesis",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "maxLimit",
              "type": "uint256"
            }
          ],
          "indexed": false,
          "internalType": "struct IDefiRound.SupportedTokenData[]",
          "name": "tokenData",
          "type": "tuple[]"
        }
      ],
      "name": "SupportedTokensAdded",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "components": [
            {
              "internalType": "address",
              "name": "token",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            }
          ],
          "indexed": false,
          "internalType": "struct IDefiRound.TokenData[]",
          "name": "tokens",
          "type": "tuple[]"
        }
      ],
      "name": "TreasuryTransfer",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "components": [
            {
              "internalType": "bool",
              "name": "enabled",
              "type": "bool"
            },
            {
              "internalType": "bytes32",
              "name": "root",
              "type": "bytes32"
            }
          ],
          "indexed": false,
          "internalType": "struct IDefiRound.WhitelistSettings",
          "name": "settings",
          "type": "tuple"
        }
      ],
      "name": "WhitelistConfigured",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "withdrawer",
          "type": "address"
        },
        {
          "components": [
            {
              "internalType": "address",
              "name": "token",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            }
          ],
          "indexed": false,
          "internalType": "struct IDefiRound.TokenData",
          "name": "tokenInfo",
          "type": "tuple"
        },
        {
          "indexed": false,
          "internalType": "bool",
          "name": "asETH",
          "type": "bool"
        }
      ],
      "name": "Withdrawn",
      "type": "event"
    },
    {
      "inputs": [],
      "name": "WETH",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "accountBalance",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "components": [
            {
              "internalType": "address",
              "name": "token",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "oracle",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "genesis",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "maxLimit",
              "type": "uint256"
            }
          ],
          "internalType": "struct IDefiRound.SupportedTokenData[]",
          "name": "tokensToSupport",
          "type": "tuple[]"
        }
      ],
      "name": "addSupportedTokens",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "components": [
            {
              "internalType": "bool",
              "name": "enabled",
              "type": "bool"
            },
            {
              "internalType": "bytes32",
              "name": "root",
              "type": "bytes32"
            }
          ],
          "internalType": "struct IDefiRound.WhitelistSettings",
          "name": "settings",
          "type": "tuple"
        }
      ],
      "name": "configureWhitelist",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "currentStage",
      "outputs": [
        {
          "internalType": "enum IDefiRound.STAGES",
          "name": "",
          "type": "uint8"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "components": [
            {
              "internalType": "address",
              "name": "token",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            }
          ],
          "internalType": "struct IDefiRound.TokenData",
          "name": "tokenInfo",
          "type": "tuple"
        },
        {
          "internalType": "bytes32[]",
          "name": "proof",
          "type": "bytes32[]"
        }
      ],
      "name": "deposit",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bool",
          "name": "depositToGenesis",
          "type": "bool"
        }
      ],
      "name": "finalizeAssets",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "getAccountData",
      "outputs": [
        {
          "components": [
            {
              "internalType": "address",
              "name": "token",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "initialDeposit",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "currentBalance",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "effectiveAmt",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "ineffectiveAmt",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "actualTokeReceived",
              "type": "uint256"
            }
          ],
          "internalType": "struct IDefiRound.AccountDataDetails[]",
          "name": "data",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address[]",
          "name": "tokens",
          "type": "address[]"
        }
      ],
      "name": "getGenesisPools",
      "outputs": [
        {
          "internalType": "address[]",
          "name": "genesisAddresses",
          "type": "address[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getMaxTotalValue",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "balance",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "token",
          "type": "address"
        }
      ],
      "name": "getRateAdjustedAmounts",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address[]",
          "name": "tokens",
          "type": "address[]"
        }
      ],
      "name": "getRates",
      "outputs": [
        {
          "components": [
            {
              "internalType": "address",
              "name": "token",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "numerator",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "denominator",
              "type": "uint256"
            }
          ],
          "internalType": "struct IDefiRound.RateData[]",
          "name": "rates",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getSupportedTokens",
      "outputs": [
        {
          "internalType": "address[]",
          "name": "tokens",
          "type": "address[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address[]",
          "name": "tokens",
          "type": "address[]"
        }
      ],
      "name": "getTokenOracles",
      "outputs": [
        {
          "internalType": "address[]",
          "name": "oracleAddresses",
          "type": "address[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "lastLookExpiration",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "overSubscriptionRate",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "overNumerator",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "overDenominator",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "components": [
            {
              "internalType": "address",
              "name": "token",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "numerator",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "denominator",
              "type": "uint256"
            }
          ],
          "internalType": "struct IDefiRound.RateData[]",
          "name": "ratesData",
          "type": "tuple[]"
        },
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "overNumerator",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "overDenominator",
              "type": "uint256"
            }
          ],
          "internalType": "struct IDefiRound.OversubscriptionRate",
          "name": "oversubRate",
          "type": "tuple"
        },
        {
          "internalType": "uint256",
          "name": "lastLookDuration",
          "type": "uint256"
        }
      ],
      "name": "publishRates",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "renounceOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "totalSupply",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "totalValue",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "transferToTreasury",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "treasury",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "whitelistSettings",
      "outputs": [
        {
          "internalType": "bool",
          "name": "enabled",
          "type": "bool"
        },
        {
          "internalType": "bytes32",
          "name": "root",
          "type": "bytes32"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "components": [
            {
              "internalType": "address",
              "name": "token",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            }
          ],
          "internalType": "struct IDefiRound.TokenData",
          "name": "tokenInfo",
          "type": "tuple"
        },
        {
          "internalType": "bool",
          "name": "asETH",
          "type": "bool"
        }
      ],
      "name": "withdraw",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "stateMutability": "payable",
      "type": "receive"
    }
  ]