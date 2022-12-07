const Patientt = artifacts.require("client");
module.exports = function (deployer) {
  deployer.deploy(Patientt);
};
