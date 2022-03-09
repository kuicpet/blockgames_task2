const hre = require('hardhat')

const main = async () => {
  // contract to deploy
  const HelloWorld = await hre.ethers.getContractFactory('HelloWorld')
  const helloworld = await HelloWorld.deploy('Hello, World!')

  await helloworld.deployed()

  console.log('Contract deployed to:', helloworld.address)
}

const runMain = async () => {
  try {
    await main()
    process.exit(0)
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
}

runMain()
