// SPDX-License-Identifier: MIT
pragma solidity >=0.7.0 <0.9.0;

contract Properties {
    address payable owner;

    constructor() {
        owner = payable(msg.sender);
    }

    struct Owner {
        string name;
        string mobile;
        string email;
        string governmentID;
        string about;
        string image;
        string propertyAddress;
        string city;
        string state;
    }

    Owner[] data;

    function AddProperty(
        string memory name,
        string memory mobile,
        string memory email,
        string memory governmentID,
        string memory about,
        string memory image,
        string memory propertyAddress,
        string memory city,
        string memory state
    ) external payable {
        require(msg.value > 1, "Please pay more than 11 ether");
        owner.transfer(msg.value);
        data.push(
            Owner(
                name,
                mobile,
                email,
                governmentID,
                about,
                image,
                propertyAddress,
                city,
                state
            )
        );
    }

    function getData() public view returns (Owner[] memory) {
        return data;
    }
}
