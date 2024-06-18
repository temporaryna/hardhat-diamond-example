// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.19;

import "hardhat-deploy/solc_0.8/diamond/libraries/LibDiamond.sol";

library TestLib {
    struct TestStorage {
        uint256 a;
        uint256 b;
    }

    bytes32 constant TEST_STORAGE_POSITION = keccak256("test.storage");

    function getTestStorage() internal pure returns (TestStorage storage ts) {
        bytes32 position = TEST_STORAGE_POSITION;
        assembly {
            ts.slot := position
        }
    }

    function getDiamondStorage() internal pure returns (LibDiamond.DiamondStorage storage ds) {
        return LibDiamond.diamondStorage();
    }

    function helloLib() internal pure returns (string memory) {
        return "Hello, LIBRARY!";
    }
}
