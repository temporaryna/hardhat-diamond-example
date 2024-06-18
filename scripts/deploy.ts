import { deployments, ethers } from 'hardhat';
import { TestDiamondContract } from "../types"


const deployTestDiamondContract = async (): Promise<void> => {
  const [owner] = await ethers.getSigners();

  const deployResult = await deployments.diamond.deploy('TestDiamondContract', {
    from: owner.address,
    owner: owner.address,
    facets: ['TestFacet1', 'TestFacet2', 'TestFacet3'],
  });

  console.log(
    `TestDiamondContract deployed at: ${deployResult.address} with ${deployResult.receipt?.gasUsed} gas`,
  );
  console.log();

  const testDiamondContract =
    await ethers.getContract<TestDiamondContract>('TestDiamondContract');

  const test = await testDiamondContract.hello1();
  const receipt = await test.wait();
  console.log(
    'HELLO1:',
    receipt?.logs.map((log) => log?.args),
  );

  const test2 = await testDiamondContract.hello2();
  console.log('HELLO2:', test2);

  const test3 = await testDiamondContract.hello3();
  const receipt3 = await test3.wait();
  console.log('HELLO3:', receipt3?.logs.map((log) => log?.args));

  const numberOfFacets = await testDiamondContract.numbersOfFacets();
  console.log('NUMBER OF FACETS:', numberOfFacets.toString());

  console.log();
};

deployTestDiamondContract().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
