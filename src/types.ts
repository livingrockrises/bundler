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

export type PaymasterServiceDataType = {
  tokenPaymasterData?: TokenPaymasterData;
  webhookData?: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any;
  };
  smartAccountData?: SmartAccountData;
};

export type SDKRequestType = {
  method: string;
  id: number;
  params: [];
  jsonrpc: string;
};

export type VerifyingUserOpMiddlewareDataType = {
  paymasterFundingKey?: string;
  paymasterAddress?: string;
  paymasterAbi?: ethers.ContractInterface;
  chainId?: number;
};

export type TokenPaymasterData = {
  feeTokenAddress: string;
};

export type VerifyingPaymasterData = {
  webhookData?: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any;
  };
};

export type SmartAccountData = {
  name: string;
  version: string;
};
