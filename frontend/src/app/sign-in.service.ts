import { Injectable } from '@angular/core';
import { ethers, hashMessage } from 'ethers';

@Injectable({
  providedIn: 'root'
})
export class SignInService {

  provider?:ethers.BrowserProvider;
signer?:ethers.Signer;
isSignedIn = false;

async connectToWallet(){
  if((window as any).ethereum){
    this.provider = new ethers.BrowserProvider((window as any).ethereum);
    this.signer = await this.provider.getSigner();
    console.log(this.signer);
  }
}

async validateCredentials(){
  if(this.signer){
    let address = await this.signer.getAddress();
    console.log(address);
    let now = new Date();
    let timestamp = "" +  now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds() + ":" + now.getMilliseconds()
    console.log(timestamp);
    let message = `I want to sign in with the address ${address} with a timestamp of ${timestamp}`;
    this.signer.signMessage(message)
    .then((result)=>{
      console.log(result);
      const verifiedAddress = ethers.recoverAddress(hashMessage(message), result);
      console.log(verifiedAddress);
      if(verifiedAddress == address){
        this.isSignedIn=true;
      }
    })
    .catch ((error)=> {
      console.log("Not signed in", error);
      
    })
  }
}
}
