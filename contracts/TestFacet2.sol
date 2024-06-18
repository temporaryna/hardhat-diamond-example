// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.19;

import "./TestLib.sol";


contract TestFacet2 {
    function hello2() external pure returns (string memory) {
        return TestLib.helloLib();
    }
}
