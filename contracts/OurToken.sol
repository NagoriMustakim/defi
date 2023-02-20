// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract MyDefi {
    IERC20 dai;

    constructor(address _daiAddress) public {
        dai = IERC20(_daiAddress);
    }

    function foo() external {
        dai.transfer(msg.sender, 100 * 10**18);
    }
}
