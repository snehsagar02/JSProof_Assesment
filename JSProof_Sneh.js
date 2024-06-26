/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
const NFTs=[]

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (_characterName, _height, _weapon, _ability, _healthPoints) {
   const NFT={
      "name" : _characterName,
      "height" : _height,
      "weapon" : _weapon,
      "ability" : _ability,
      "healthPoints" : _healthPoints
   }

   NFTs.push(NFT);
   console.log("Minted: "+ _characterName);

}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
   for(let i=0; i<NFTs.length; i++){
      console.log("\nID: \t "+(i+1));
      console.log("Name:\t "+NFTs[i].name);
      console.log("Height:\t "+NFTs[i].height);
      console.log("Weapon:\t "+NFTs[i].weapon);
      console.log("Ability: "+NFTs[i].ability);
      console.log("Health:\t "+NFTs[i].healthPoints);

   }

}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
   console.log("Total Supply:" ,NFTs.length);

}

// call your functions below this line
mintNFT("Sensei","5\'8\"","Katana","Samurai Splash","2000");
mintNFT("Thor","6\'2\"","Mjonir","Thunder Strike","5000");
mintNFT("Batman","6\'4\"","Batarang","Flying","3000");
mintNFT("Goku","5\'5\"","Power Pole","Spirit Weapon","2000");
mintNFT("Cheema","5\'8\"","Sword","Super Spin","1500");
listNFTs();
getTotalSupply();



