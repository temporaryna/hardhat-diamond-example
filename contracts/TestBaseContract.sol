// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.19;

contract TestBaseContract {
    struct MainStorage {
        string test;
    }

    MainStorage internal mainStorage;

    function helloFromBase() internal pure returns (string memory) {
        return "Hello, from base!";
    }
}
