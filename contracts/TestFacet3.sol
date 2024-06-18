// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.19;

import "./TestLib.sol";


contract TestFacet3 {
    event TestEvent(uint256 indexed num);
    function hello3() external returns (uint256 num) {
        TestLib.TestStorage storage test = TestLib.getTestStorage();
        test.a = 1;
        test.b = 2;
        emit TestEvent(test.a + test.b);
        return test.a + test.b;
    }

    function numbersOfFacets() external view returns (uint256 num) {
        return TestLib.getDiamondStorage().facetAddresses.length;
    }
}
