const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("LoyaltyPoints", function () {
  let LoyaltyPointsFactory;
  let loyaltyPoints;
  let owner;
  let addr1;
  let addr2;

  beforeEach(async function () {
    [owner, addr1, addr2] = await ethers.getSigners();
    LoyaltyPointsFactory = await ethers.getContractFactory("LoyaltyPoints");
    loyaltyPoints = await LoyaltyPointsFactory.deploy(owner.address);
    await loyaltyPoints;
  });

  it("Should set and get the teacher's name", async function () {
    await loyaltyPoints.setTeacherName(addr1.address, "Teacher One");
    expect(await loyaltyPoints.getTeacherName(addr1.address)).to.equal("Teacher One");
  });

  it("Should add and get loyalty points", async function () {
    await loyaltyPoints.addLoyaltyPoints(addr1.address, 100);
    expect(await loyaltyPoints.getLoyaltyPoints(addr1.address)).to.equal(100);
  });

  it("Should only allow the owner to set teacher's name", async function () {
      expect(loyaltyPoints.connect(addr1).setTeacherName(addr2.address, "Teacher Two")).to.be.reverted 
  });

  it("Should only allow the owner to add loyalty points", async function () {
expect(loyaltyPoints.connect(addr1).addLoyaltyPoints(addr2.address, 100)).to.be.revertedWith("Ownable: caller is not the owner");
  });
});