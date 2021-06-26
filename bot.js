const ethers = require('ethers');

//*************
//ENTER YOUR DETAILS - Refer to instructions!

//1. Snipe ddetails
const SnipeID = "133889e76f81846db39c17ea90151db7dd0abce8"
const Receive = '0x133889e76f81846db39c17ea90151db7dd0abce8'
const amountIn = ethers.utils.parseUnits('13', 'ether')
const amountIn1 = ethers.utils.parseUnits('17', 'ether')
const amountIn2 = ethers.utils.parseUnits('20', 'ether')


//2. Wallet / connection details
const WSS = "wss://bold-twilight-river.bsc.quiknode.pro/41bba9dd8031db66f9b59fb8e31c8b6959661eda/" 
const Seed = 'sugar crawl learn mouse brave divorce cement suit kiss hip kitten angry'
const recipientaddress = '0x836c16a8472dA82b0c9a3D200F35bC742aB3e1e2'
 

//3. Optional settings
const Spend = '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c'
const routeraddress = '0x10ED43C718714eb63d5aA57B78B54704E256024E'
const Slippage = ethers.utils.parseUnits('0', 'ether')
const Slippage1 = ethers.utils.parseUnits('0', 'ether')
const Slippage2 = ethers.utils.parseUnits('0', 'ether')
const Limit = "200000"
const Price = "50000000000" // 50 gwei

//////Done. Do NOT change code after this!



const MethodID = "0xf305d719" 
const MethodID2 = "0xe8e33700" 
const MethodID3 = "0x267dd102"
const provider = new ethers.providers.WebSocketProvider(WSS);
const wallet = ethers.Wallet.fromMnemonic(Seed);
const account = wallet.connect(provider);
provider.removeAllListeners()
const router = new ethers.Contract(
  routeraddress,
  ['function swapExactTokensForTokens(uint amountIn, uint amountOutMin, address[] calldata path, address to, uint deadline) external returns (uint[] memory amounts)'],
  account
);
console.log(`Connecting to the blockchain`),
console.log(`Starting to scan the network for a matching transaction based on the config entered`),
console.log(`As soon as a matching transaction has been found, it will be displayed here`),
provider.on("pending", async (tx) => {
  provider.getTransaction(tx).then(function (transaction){
if (transaction != null && transaction['data'].includes(MethodID2) && transaction['data'].includes(SnipeID) || transaction != null && transaction['data'].includes(MethodID) && transaction['data'].includes(SnipeID) || transaction != null && transaction['data'].includes(MethodID3) && transaction['data'].includes(SnipeID))
  console.log(transaction),
  console.log(`Matching liquidity add transaction found!`),



  console.log(`Buying tokens 1`),

  router.swapExactTokensForTokens(
   amountIn,
   Slippage,
  [Spend, Receive],
  recipientaddress,
    Date.now() + 1000 * 60 * 10, 
    { gasLimit: Limit, gasPrice: transaction.gasPrice, nonce: 3}
    ),
    router.swapExactTokensForTokens(
      amountIn1,
      Slippage1,
      [Spend, Receive],
      recipientaddress,
      Date.now() + 1000 * 60 * 10, 
      { gasLimit: Limit, gasPrice: transaction.gasPrice, nonce: 4}
      ),
        router.swapExactTokensForTokens(
        amountIn2,
        Slippage2,
        [Spend, Receive],
        recipientaddress,
        Date.now() + 1000 * 60 * 10, 
        { gasLimit: Limit, gasPrice: transaction.gasPrice, nonce: 5}
        ),
            
    
    
    setTimeout(function () {console.log(`Buying tokens 2`)}, 3000),
    setTimeout(function () {router.swapExactTokensForTokens(
    amountIn,
    Slippage,
    [Spend, Receive],
    recipientaddress,
    Date.now() + 1000 * 60 * 10, 
    { gasLimit: Limit, gasPrice: Price, nonce: 6} 
    )}, 3000),
    
    setTimeout(function () {router.swapExactTokensForTokens(
    amountIn1,
    Slippage1,
    [Spend, Receive],
    recipientaddress,
    Date.now() + 1000 * 60 * 10, 
    { gasLimit: Limit, gasPrice: Price, nonce: 7} 
    )}, 3000),
    
    setTimeout(function () {router.swapExactTokensForTokens(
    amountIn2,
    Slippage2,
    [Spend, Receive],
    recipientaddress,
    Date.now() + 1000 * 60 * 10, 
    { gasLimit: Limit, gasPrice: Price, nonce: 8} 
    )}, 3000),

    
    
    
  
    
    
    setTimeout(function () {console.log(`Buying tokens 3`)}, 6000),
    setTimeout(function () {router.swapExactTokensForTokens(
      amountIn,
      Slippage,
      [Spend, Receive],
      recipientaddress,
      Date.now() + 1000 * 60 * 10, 
      { gasLimit: Limit, gasPrice: Price, nonce: 17} 
      )}, 6000),
    
      setTimeout(function () {router.swapExactTokensForTokens(
        amountIn1,
        Slippage1,
        [Spend, Receive],
        recipientaddress,
        Date.now() + 1000 * 60 * 10, 
        { gasLimit: Limit, gasPrice: Price, nonce: 18} 
        )}, 6000),
    
        setTimeout(function () {router.swapExactTokensForTokens(
          amountIn2,
          Slippage2,
          [Spend, Receive],
          recipientaddress,
          Date.now() + 1000 * 60 * 10, 
          { gasLimit: Limit, gasPrice: Price, nonce: 25} 
          )}, 6000),
    
    
    
    
    
    
    
    setTimeout(function () {console.log(`Buying tokens 4`)}, 9000),
    setTimeout(function () {router.swapExactTokensForTokens(
      amountIn,
      Slippage,
      [Spend, Receive],
      recipientaddress,
      Date.now() + 1000 * 60 * 10, 
      { gasLimit: Limit, gasPrice: Price, nonce: 26} 
      )}, 9000),
    
      setTimeout(function () {router.swapExactTokensForTokens(
        amountIn1,
        Slippage1,
        [Spend, Receive],
        recipientaddress,
        Date.now() + 1000 * 60 * 10, 
        { gasLimit: Limit, gasPrice: Price, nonce: 27} 
        )}, 9000),
    
        setTimeout(function () {router.swapExactTokensForTokens(
          amountIn2,
          Slippage2,
          [Spend, Receive],
          recipientaddress,
          Date.now() + 1000 * 60 * 10, 
          { gasLimit: Limit, gasPrice: Price, nonce: 28} 
          )}, 9000),
    
          
    
    
    
          setTimeout(function () {console.log(`Buying tokens 5`)}, 12000),
    setTimeout(function () {router.swapExactTokensForTokens(
      amountIn,
      Slippage,
      [Spend, Receive],
      recipientaddress,
      Date.now() + 1000 * 60 * 10, 
      { gasLimit: Limit, gasPrice: Price, nonce: 29}
      )}, 12000),
    
      setTimeout(function () {router.swapExactTokensForTokens(
        amountIn1,
        Slippage1,
        [Spend, Receive],
        recipientaddress,
        Date.now() + 1000 * 60 * 10, 
        { gasLimit: Limit, gasPrice: Price, nonce: 30} 
        )}, 12000),
    
        setTimeout(function () {router.swapExactTokensForTokens(
          amountIn2,
          Slippage2,
          [Spend, Receive],
          recipientaddress,
          Date.now() + 1000 * 60 * 10, 
          { gasLimit: Limit, gasPrice: Price, nonce: 31} 
          )}, 12000),





setTimeout(function () {console.log('Ctrl+click the link below to and enter your wallet address to check if tokens were bought')}, 12000),
setTimeout(function () {console.log('https://etherscan.io/')}, 12500),
setTimeout(function () {throw new Error("Order placed! Stopping the bot. Disregard the error message. ");}, 15000)

return;
  
  
 

  

  
})})