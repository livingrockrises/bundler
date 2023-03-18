import { ethers } from 'ethers';

export type UserOpType = {
  sender: string;
  nonce: number;
  initCode: string;
  callData: string;
  callGasLimit: number;
  verificationGasLimit: number;
  maxFeePerGas: number;
  maxPriorityFeePerGas: number;
  preVerificationGas: number;
  paymasterAndData: string;
  signature: string;
};

export type VerifyingUserOpMiddlewareDataType = {
  paymasterFundingKey?: string;
  paymasterAddress?: string;
  paymasterAbi?: ethers.ContractInterface;
  chainId?: number;
};
