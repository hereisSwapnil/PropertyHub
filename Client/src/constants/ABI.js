const ABI = [
    {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "name",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "mobile",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "email",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "governmentID",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "about",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "image",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "propertyAddress",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "city",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "state",
                "type": "string"
            }
        ],
        "name": "AddProperty",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getData",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "string",
                        "name": "name",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "mobile",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "email",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "governmentID",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "about",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "image",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "propertyAddress",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "city",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "state",
                        "type": "string"
                    }
                ],
                "internalType": "struct Properties.Owner[]",
                "name": "",
                "type": "tuple[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }
];

export default ABI;