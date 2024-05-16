// SPDX-License-Identifier: MIT
// Compatible with OpenZeppelin Contracts ^5.0.0
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/access/Ownable.sol";

contract LoyaltyPoints is Ownable {
    constructor(address initialOwner) Ownable(initialOwner) {}

    struct Teacher {
        string name;
        uint loyaltyPoints;
    }

    // Mapping from teacher address to Teacher
    mapping(address => Teacher) private teachers;

    // Function to add or update a teacher's name, only callable by the owner
    function setTeacherName(address _teacherAddress, string memory _name) public onlyOwner {
        teachers[_teacherAddress].name = _name;
    }

    // Function to get a teacher's name
    function getTeacherName(address _teacherAddress) public view returns (string memory) {
        return teachers[_teacherAddress].name;
    }

    // Function to add loyalty points to a teacher, only callable by the owner
    function addLoyaltyPoints(address _teacherAddress, uint _points) public onlyOwner {
        teachers[_teacherAddress].loyaltyPoints += _points;
    }

    // Function to get the loyalty points of a teacher
    function getLoyaltyPoints(address _teacherAddress) public view returns (uint) {
        return teachers[_teacherAddress].loyaltyPoints;
    }
}