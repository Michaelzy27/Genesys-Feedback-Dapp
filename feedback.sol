// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.24;


contract feedback {
    struct Feedback {
        address user;
        string feed;
    }

    Feedback[] public feedbackArray;

    function addFeedback(string memory feed) public {
        Feedback memory feedbackk = Feedback(msg.sender, feed);
        feedbackArray.push(feedbackk);

    }

    function getFeedback(uint i) public view returns(address, string[] memory) {
        Feedback memory fdbck = feedbackArray[i];
        return (fdbck.user, fdbck.feed);
    }
}