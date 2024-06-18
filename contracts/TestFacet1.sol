// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.19;

import "./TestLib.sol";
import "./TestBaseContract.sol";

contract TestFacet1 is TestBaseContract {
    event TestFacet1Event(address sender, string message);
    function hello1() external returns (string memory) {
        mainStorage.test = "Hello, from facet1!";
        emit TestFacet1Event(msg.sender, mainStorage.test);
        return mainStorage.test;
    }
}
