const addFeedbackButton = document.getElementById("add");
addFeedbackButton.addEventListener("click", () => {addFeedback();});  //when submit button in html is clicked

function addFeedback() {
    const newFeedback = document.getElementById("thefeedback").value;      //gets the feedback from the text field
    //helloContract.addFeedback(newFeedback);
    document.getElementById("thefeedback").value = "";
}

const connectWalletButton = document.getElementById("connect");
  connectWalletButton.addEventListener("click", () => {
    connectWallet();
  });


function connectWallet() {
    if (typeof window.ethereum !== 'undefined') {
        const web3 = new Web3(window.ethereum);
        try {
          await window.ethereum.request({ method: "eth_requestAccounts" });
          const accounts = await web3.eth.getAccounts();
          const walletAddress = accounts[0];
        } catch (error) {
          console.error(error);
        }
      } else {
        console.error('No web3 provider detected. Please install MetaMask.');   //unabe to complete due to country network outage
      }
}