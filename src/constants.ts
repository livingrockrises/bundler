export const paymasterAddress = '0xfD951441c6cBF26BfF3808C7118462A60bdb364b';
export const oracleAggregatorAddress =
  '0x8c60889F1959C4736898845459740a144a432A30';
export const paymasterFundingKey = '0xD68fdc0B89010a9039C2C38f4a3E5c4Ed98f7bC1';
export const chainId = 80001;
export const ENTRY_POINT_ADDRESS = '0x5ff137d4b0fdcd49dca30c7cf57e578a026d2789';
export const PROVIDER_URL =
  'https://polygon-mumbai.g.alchemy.com/v2/6n3cfluk8d-pRdlVwCAJu6C-8lQRJKga';
export const paymasterAbi = [
  {
    inputs: [
      { internalType: 'address', name: '_owner', type: 'address' },
      {
        internalType: 'contract IEntryPoint',
        name: '_entryPoint',
        type: 'address',
      },
      { internalType: 'address', name: '_verifyingSigner', type: 'address' },
      { internalType: 'address', name: '_weth9', type: 'address' },
    ],
    stateMutability: 'payable',
    type: 'constructor',
  },
  { inputs: [], name: 'CanNotWithdrawToZeroAddress', type: 'error' },
  { inputs: [], name: 'CannotBeUnrealisticValue', type: 'error' },
  { inputs: [], name: 'DEXRouterCannotBeZero', type: 'error' },
  { inputs: [], name: 'DepositCanNotBeZero', type: 'error' },
  { inputs: [], name: 'EntryPointCannotBeZero', type: 'error' },
  { inputs: [], name: 'FeeReceiverCannotBeZero', type: 'error' },
  { inputs: [], name: 'NativeTokenBalanceZero', type: 'error' },
  { inputs: [], name: 'NativeTokensWithdrawalFailed', type: 'error' },
  { inputs: [], name: 'OwnerCannotBeZero', type: 'error' },
  { inputs: [], name: 'TokensAndAmountsLengthMismatch', type: 'error' },
  { inputs: [], name: 'VerifyingSignerCannotBeZero', type: 'error' },
  { inputs: [], name: 'WETH9CannotBeZero', type: 'error' },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint256',
        name: '_oldOverheadCost',
        type: 'uint256',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: '_newOverheadCost',
        type: 'uint256',
      },
      {
        indexed: true,
        internalType: 'address',
        name: '_actor',
        type: 'address',
      },
    ],
    name: 'EPGasOverheadChanged',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: '_oldfeeReceiver',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: '_newfeeReceiver',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: '_actor',
        type: 'address',
      },
    ],
    name: 'FeeReceiverChanged',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'previousOwner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'OwnershipTransferred',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'sender',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'token',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: 'totalCharge',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'oracleAggregator',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'premium',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'bytes32',
        name: 'userOpHash',
        type: 'bytes32',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'exchangeRate',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'enum BiconomyTokenPaymaster.ExchangeRateSource',
        name: 'priceSource',
        type: 'uint8',
      },
    ],
    name: 'TokenPaymasterOperation',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'token',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: 'charge',
        type: 'uint256',
      },
    ],
    name: 'TokenPaymentDue',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'dexRouterAddress',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'token',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'bytes',
        name: 'routerCalldata',
        type: 'bytes',
      },
      { indexed: false, internalType: 'bool', name: 'success', type: 'bool' },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'gasAmountDeposited',
        type: 'uint256',
      },
    ],
    name: 'TokenSwappedAndGasDeposited',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: '_oldSigner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: '_newSigner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: '_actor',
        type: 'address',
      },
    ],
    name: 'VerifyingSignerChanged',
    type: 'event',
  },
  {
    inputs: [],
    name: 'UNACCOUNTED_COST',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'uint32', name: 'unstakeDelaySec', type: 'uint32' },
    ],
    name: 'addStake',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: '_token', type: 'address' },
      { internalType: 'address', name: '_dexRouter', type: 'address' },
      { internalType: 'uint256', name: '_amount', type: 'uint256' },
    ],
    name: 'approveRouterPrior',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'deposit',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'entryPoint',
    outputs: [
      { internalType: 'contract IEntryPoint', name: '', type: 'address' },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'feeReceiver',
    outputs: [{ internalType: 'address', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getDeposit',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        components: [
          { internalType: 'address', name: 'sender', type: 'address' },
          { internalType: 'uint256', name: 'nonce', type: 'uint256' },
          { internalType: 'bytes', name: 'initCode', type: 'bytes' },
          { internalType: 'bytes', name: 'callData', type: 'bytes' },
          { internalType: 'uint256', name: 'callGasLimit', type: 'uint256' },
          {
            internalType: 'uint256',
            name: 'verificationGasLimit',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'preVerificationGas',
            type: 'uint256',
          },
          { internalType: 'uint256', name: 'maxFeePerGas', type: 'uint256' },
          {
            internalType: 'uint256',
            name: 'maxPriorityFeePerGas',
            type: 'uint256',
          },
          { internalType: 'bytes', name: 'paymasterAndData', type: 'bytes' },
          { internalType: 'bytes', name: 'signature', type: 'bytes' },
        ],
        internalType: 'struct UserOperation',
        name: 'userOp',
        type: 'tuple',
      },
      {
        internalType: 'enum BiconomyTokenPaymaster.ExchangeRateSource',
        name: 'priceSource',
        type: 'uint8',
      },
      { internalType: 'uint48', name: 'validUntil', type: 'uint48' },
      { internalType: 'uint48', name: 'validAfter', type: 'uint48' },
      { internalType: 'address', name: 'feeToken', type: 'address' },
      { internalType: 'address', name: 'oracleAggregator', type: 'address' },
      { internalType: 'uint256', name: 'exchangeRate', type: 'uint256' },
      { internalType: 'uint256', name: 'fee', type: 'uint256' },
    ],
    name: 'getHash',
    outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'owner',
    outputs: [{ internalType: 'address', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'bytes', name: 'paymasterAndData', type: 'bytes' },
    ],
    name: 'parsePaymasterAndData',
    outputs: [
      {
        internalType: 'enum BiconomyTokenPaymaster.ExchangeRateSource',
        name: 'priceSource',
        type: 'uint8',
      },
      { internalType: 'uint48', name: 'validUntil', type: 'uint48' },
      { internalType: 'uint48', name: 'validAfter', type: 'uint48' },
      { internalType: 'address', name: 'feeToken', type: 'address' },
      { internalType: 'address', name: 'oracleAggregator', type: 'address' },
      { internalType: 'uint256', name: 'exchangeRate', type: 'uint256' },
      { internalType: 'uint256', name: 'fee', type: 'uint256' },
      { internalType: 'bytes', name: 'signature', type: 'bytes' },
    ],
    stateMutability: 'pure',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'enum IPaymaster.PostOpMode',
        name: 'mode',
        type: 'uint8',
      },
      { internalType: 'bytes', name: 'context', type: 'bytes' },
      { internalType: 'uint256', name: 'actualGasCost', type: 'uint256' },
    ],
    name: 'postOp',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: '_newFeeReceiver', type: 'address' },
    ],
    name: 'setFeeReceiver',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'uint256', name: '_newOverheadCost', type: 'uint256' },
    ],
    name: 'setUnaccountedEPGasOverhead',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: '_newVerifyingSigner', type: 'address' },
    ],
    name: 'setVerifyingSigner',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: '_dexRouter', type: 'address' },
      { internalType: 'bytes', name: '_swapData', type: 'bytes' },
      { internalType: 'bool', name: '_approveRouter', type: 'bool' },
      { internalType: 'address', name: '_token', type: 'address' },
      { internalType: 'uint256', name: '_amount', type: 'uint256' },
      { internalType: 'uint256', name: '_maxDepositToEP', type: 'uint256' },
    ],
    name: 'swapTokenForNativeAndDeposit',
    outputs: [
      { internalType: 'bool', name: 'success', type: 'bool' },
      { internalType: 'uint256', name: 'depositAmount', type: 'uint256' },
    ],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'address', name: 'newOwner', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'unlockStake',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        components: [
          { internalType: 'address', name: 'sender', type: 'address' },
          { internalType: 'uint256', name: 'nonce', type: 'uint256' },
          { internalType: 'bytes', name: 'initCode', type: 'bytes' },
          { internalType: 'bytes', name: 'callData', type: 'bytes' },
          { internalType: 'uint256', name: 'callGasLimit', type: 'uint256' },
          {
            internalType: 'uint256',
            name: 'verificationGasLimit',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'preVerificationGas',
            type: 'uint256',
          },
          { internalType: 'uint256', name: 'maxFeePerGas', type: 'uint256' },
          {
            internalType: 'uint256',
            name: 'maxPriorityFeePerGas',
            type: 'uint256',
          },
          { internalType: 'bytes', name: 'paymasterAndData', type: 'bytes' },
          { internalType: 'bytes', name: 'signature', type: 'bytes' },
        ],
        internalType: 'struct UserOperation',
        name: 'userOp',
        type: 'tuple',
      },
      { internalType: 'bytes32', name: 'userOpHash', type: 'bytes32' },
      { internalType: 'uint256', name: 'maxCost', type: 'uint256' },
    ],
    name: 'validatePaymasterUserOp',
    outputs: [
      { internalType: 'bytes', name: 'context', type: 'bytes' },
      { internalType: 'uint256', name: 'validationData', type: 'uint256' },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'verifyingSigner',
    outputs: [{ internalType: 'address', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'address', name: 'dest', type: 'address' }],
    name: 'withdrawAllNative',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'contract IERC20', name: 'token', type: 'address' },
      { internalType: 'address', name: 'target', type: 'address' },
      { internalType: 'uint256', name: 'amount', type: 'uint256' },
    ],
    name: 'withdrawERC20',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'contract IERC20', name: 'token', type: 'address' },
      { internalType: 'address', name: 'target', type: 'address' },
    ],
    name: 'withdrawERC20Full',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'contract IERC20[]', name: 'token', type: 'address[]' },
      { internalType: 'address', name: 'target', type: 'address' },
      { internalType: 'uint256[]', name: 'amount', type: 'uint256[]' },
    ],
    name: 'withdrawMultipleERC20',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'contract IERC20[]', name: 'token', type: 'address[]' },
      { internalType: 'address', name: 'target', type: 'address' },
    ],
    name: 'withdrawMultipleERC20Full',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address payable',
        name: 'withdrawAddress',
        type: 'address',
      },
    ],
    name: 'withdrawStake',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address payable',
        name: 'withdrawAddress',
        type: 'address',
      },
      { internalType: 'uint256', name: 'amount', type: 'uint256' },
    ],
    name: 'withdrawTo',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  { stateMutability: 'payable', type: 'receive' },
];
export const ENTRY_POINT_ABI = [
  {
    inputs: [
      { internalType: 'uint256', name: 'preOpGas', type: 'uint256' },
      { internalType: 'uint256', name: 'paid', type: 'uint256' },
      { internalType: 'uint48', name: 'validAfter', type: 'uint48' },
      { internalType: 'uint48', name: 'validUntil', type: 'uint48' },
      { internalType: 'bool', name: 'targetSuccess', type: 'bool' },
      { internalType: 'bytes', name: 'targetResult', type: 'bytes' },
    ],
    name: 'ExecutionResult',
    type: 'error',
  },
  {
    inputs: [
      { internalType: 'uint256', name: 'opIndex', type: 'uint256' },
      { internalType: 'string', name: 'reason', type: 'string' },
    ],
    name: 'FailedOp',
    type: 'error',
  },
  {
    inputs: [{ internalType: 'address', name: 'sender', type: 'address' }],
    name: 'SenderAddressResult',
    type: 'error',
  },
  {
    inputs: [{ internalType: 'address', name: 'aggregator', type: 'address' }],
    name: 'SignatureValidationFailed',
    type: 'error',
  },
  {
    inputs: [
      {
        components: [
          { internalType: 'uint256', name: 'preOpGas', type: 'uint256' },
          { internalType: 'uint256', name: 'prefund', type: 'uint256' },
          { internalType: 'bool', name: 'sigFailed', type: 'bool' },
          { internalType: 'uint48', name: 'validAfter', type: 'uint48' },
          { internalType: 'uint48', name: 'validUntil', type: 'uint48' },
          { internalType: 'bytes', name: 'paymasterContext', type: 'bytes' },
        ],
        internalType: 'struct IEntryPoint.ReturnInfo',
        name: 'returnInfo',
        type: 'tuple',
      },
      {
        components: [
          { internalType: 'uint256', name: 'stake', type: 'uint256' },
          { internalType: 'uint256', name: 'unstakeDelaySec', type: 'uint256' },
        ],
        internalType: 'struct IStakeManager.StakeInfo',
        name: 'senderInfo',
        type: 'tuple',
      },
      {
        components: [
          { internalType: 'uint256', name: 'stake', type: 'uint256' },
          { internalType: 'uint256', name: 'unstakeDelaySec', type: 'uint256' },
        ],
        internalType: 'struct IStakeManager.StakeInfo',
        name: 'factoryInfo',
        type: 'tuple',
      },
      {
        components: [
          { internalType: 'uint256', name: 'stake', type: 'uint256' },
          { internalType: 'uint256', name: 'unstakeDelaySec', type: 'uint256' },
        ],
        internalType: 'struct IStakeManager.StakeInfo',
        name: 'paymasterInfo',
        type: 'tuple',
      },
    ],
    name: 'ValidationResult',
    type: 'error',
  },
  {
    inputs: [
      {
        components: [
          { internalType: 'uint256', name: 'preOpGas', type: 'uint256' },
          { internalType: 'uint256', name: 'prefund', type: 'uint256' },
          { internalType: 'bool', name: 'sigFailed', type: 'bool' },
          { internalType: 'uint48', name: 'validAfter', type: 'uint48' },
          { internalType: 'uint48', name: 'validUntil', type: 'uint48' },
          { internalType: 'bytes', name: 'paymasterContext', type: 'bytes' },
        ],
        internalType: 'struct IEntryPoint.ReturnInfo',
        name: 'returnInfo',
        type: 'tuple',
      },
      {
        components: [
          { internalType: 'uint256', name: 'stake', type: 'uint256' },
          { internalType: 'uint256', name: 'unstakeDelaySec', type: 'uint256' },
        ],
        internalType: 'struct IStakeManager.StakeInfo',
        name: 'senderInfo',
        type: 'tuple',
      },
      {
        components: [
          { internalType: 'uint256', name: 'stake', type: 'uint256' },
          { internalType: 'uint256', name: 'unstakeDelaySec', type: 'uint256' },
        ],
        internalType: 'struct IStakeManager.StakeInfo',
        name: 'factoryInfo',
        type: 'tuple',
      },
      {
        components: [
          { internalType: 'uint256', name: 'stake', type: 'uint256' },
          { internalType: 'uint256', name: 'unstakeDelaySec', type: 'uint256' },
        ],
        internalType: 'struct IStakeManager.StakeInfo',
        name: 'paymasterInfo',
        type: 'tuple',
      },
      {
        components: [
          { internalType: 'address', name: 'aggregator', type: 'address' },
          {
            components: [
              { internalType: 'uint256', name: 'stake', type: 'uint256' },
              {
                internalType: 'uint256',
                name: 'unstakeDelaySec',
                type: 'uint256',
              },
            ],
            internalType: 'struct IStakeManager.StakeInfo',
            name: 'stakeInfo',
            type: 'tuple',
          },
        ],
        internalType: 'struct IEntryPoint.AggregatorStakeInfo',
        name: 'aggregatorInfo',
        type: 'tuple',
      },
    ],
    name: 'ValidationResultWithAggregation',
    type: 'error',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'userOpHash',
        type: 'bytes32',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'sender',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'factory',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'paymaster',
        type: 'address',
      },
    ],
    name: 'AccountDeployed',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'totalDeposit',
        type: 'uint256',
      },
    ],
    name: 'Deposited',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'aggregator',
        type: 'address',
      },
    ],
    name: 'SignatureAggregatorChanged',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'totalStaked',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'unstakeDelaySec',
        type: 'uint256',
      },
    ],
    name: 'StakeLocked',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'withdrawTime',
        type: 'uint256',
      },
    ],
    name: 'StakeUnlocked',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'withdrawAddress',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'StakeWithdrawn',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'userOpHash',
        type: 'bytes32',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'sender',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'paymaster',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'nonce',
        type: 'uint256',
      },
      { indexed: false, internalType: 'bool', name: 'success', type: 'bool' },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'actualGasCost',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'actualGasUsed',
        type: 'uint256',
      },
    ],
    name: 'UserOperationEvent',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'userOpHash',
        type: 'bytes32',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'sender',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'nonce',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'bytes',
        name: 'revertReason',
        type: 'bytes',
      },
    ],
    name: 'UserOperationRevertReason',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'withdrawAddress',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'Withdrawn',
    type: 'event',
  },
  {
    inputs: [],
    name: 'SIG_VALIDATION_FAILED',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'bytes', name: 'initCode', type: 'bytes' },
      { internalType: 'address', name: 'sender', type: 'address' },
      { internalType: 'bytes', name: 'paymasterAndData', type: 'bytes' },
    ],
    name: '_validateSenderAndPaymaster',
    outputs: [],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'uint32', name: 'unstakeDelaySec', type: 'uint32' },
    ],
    name: 'addStake',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'address', name: 'account', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'address', name: 'account', type: 'address' }],
    name: 'depositTo',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'address', name: '', type: 'address' }],
    name: 'deposits',
    outputs: [
      { internalType: 'uint112', name: 'deposit', type: 'uint112' },
      { internalType: 'bool', name: 'staked', type: 'bool' },
      { internalType: 'uint112', name: 'stake', type: 'uint112' },
      { internalType: 'uint32', name: 'unstakeDelaySec', type: 'uint32' },
      { internalType: 'uint48', name: 'withdrawTime', type: 'uint48' },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'address', name: 'account', type: 'address' }],
    name: 'getDepositInfo',
    outputs: [
      {
        components: [
          { internalType: 'uint112', name: 'deposit', type: 'uint112' },
          { internalType: 'bool', name: 'staked', type: 'bool' },
          { internalType: 'uint112', name: 'stake', type: 'uint112' },
          { internalType: 'uint32', name: 'unstakeDelaySec', type: 'uint32' },
          { internalType: 'uint48', name: 'withdrawTime', type: 'uint48' },
        ],
        internalType: 'struct IStakeManager.DepositInfo',
        name: 'info',
        type: 'tuple',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'bytes', name: 'initCode', type: 'bytes' }],
    name: 'getSenderAddress',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        components: [
          { internalType: 'address', name: 'sender', type: 'address' },
          { internalType: 'uint256', name: 'nonce', type: 'uint256' },
          { internalType: 'bytes', name: 'initCode', type: 'bytes' },
          { internalType: 'bytes', name: 'callData', type: 'bytes' },
          { internalType: 'uint256', name: 'callGasLimit', type: 'uint256' },
          {
            internalType: 'uint256',
            name: 'verificationGasLimit',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'preVerificationGas',
            type: 'uint256',
          },
          { internalType: 'uint256', name: 'maxFeePerGas', type: 'uint256' },
          {
            internalType: 'uint256',
            name: 'maxPriorityFeePerGas',
            type: 'uint256',
          },
          { internalType: 'bytes', name: 'paymasterAndData', type: 'bytes' },
          { internalType: 'bytes', name: 'signature', type: 'bytes' },
        ],
        internalType: 'struct UserOperation',
        name: 'userOp',
        type: 'tuple',
      },
    ],
    name: 'getUserOpHash',
    outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        components: [
          {
            components: [
              { internalType: 'address', name: 'sender', type: 'address' },
              { internalType: 'uint256', name: 'nonce', type: 'uint256' },
              { internalType: 'bytes', name: 'initCode', type: 'bytes' },
              { internalType: 'bytes', name: 'callData', type: 'bytes' },
              {
                internalType: 'uint256',
                name: 'callGasLimit',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'verificationGasLimit',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'preVerificationGas',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'maxFeePerGas',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'maxPriorityFeePerGas',
                type: 'uint256',
              },
              {
                internalType: 'bytes',
                name: 'paymasterAndData',
                type: 'bytes',
              },
              { internalType: 'bytes', name: 'signature', type: 'bytes' },
            ],
            internalType: 'struct UserOperation[]',
            name: 'userOps',
            type: 'tuple[]',
          },
          {
            internalType: 'contract IAggregator',
            name: 'aggregator',
            type: 'address',
          },
          { internalType: 'bytes', name: 'signature', type: 'bytes' },
        ],
        internalType: 'struct IEntryPoint.UserOpsPerAggregator[]',
        name: 'opsPerAggregator',
        type: 'tuple[]',
      },
      { internalType: 'address payable', name: 'beneficiary', type: 'address' },
    ],
    name: 'handleAggregatedOps',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        components: [
          { internalType: 'address', name: 'sender', type: 'address' },
          { internalType: 'uint256', name: 'nonce', type: 'uint256' },
          { internalType: 'bytes', name: 'initCode', type: 'bytes' },
          { internalType: 'bytes', name: 'callData', type: 'bytes' },
          { internalType: 'uint256', name: 'callGasLimit', type: 'uint256' },
          {
            internalType: 'uint256',
            name: 'verificationGasLimit',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'preVerificationGas',
            type: 'uint256',
          },
          { internalType: 'uint256', name: 'maxFeePerGas', type: 'uint256' },
          {
            internalType: 'uint256',
            name: 'maxPriorityFeePerGas',
            type: 'uint256',
          },
          { internalType: 'bytes', name: 'paymasterAndData', type: 'bytes' },
          { internalType: 'bytes', name: 'signature', type: 'bytes' },
        ],
        internalType: 'struct UserOperation[]',
        name: 'ops',
        type: 'tuple[]',
      },
      { internalType: 'address payable', name: 'beneficiary', type: 'address' },
    ],
    name: 'handleOps',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'bytes', name: 'callData', type: 'bytes' },
      {
        components: [
          {
            components: [
              { internalType: 'address', name: 'sender', type: 'address' },
              { internalType: 'uint256', name: 'nonce', type: 'uint256' },
              {
                internalType: 'uint256',
                name: 'callGasLimit',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'verificationGasLimit',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'preVerificationGas',
                type: 'uint256',
              },
              { internalType: 'address', name: 'paymaster', type: 'address' },
              {
                internalType: 'uint256',
                name: 'maxFeePerGas',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'maxPriorityFeePerGas',
                type: 'uint256',
              },
            ],
            internalType: 'struct EntryPoint.MemoryUserOp',
            name: 'mUserOp',
            type: 'tuple',
          },
          { internalType: 'bytes32', name: 'userOpHash', type: 'bytes32' },
          { internalType: 'uint256', name: 'prefund', type: 'uint256' },
          { internalType: 'uint256', name: 'contextOffset', type: 'uint256' },
          { internalType: 'uint256', name: 'preOpGas', type: 'uint256' },
        ],
        internalType: 'struct EntryPoint.UserOpInfo',
        name: 'opInfo',
        type: 'tuple',
      },
      { internalType: 'bytes', name: 'context', type: 'bytes' },
    ],
    name: 'innerHandleOp',
    outputs: [
      { internalType: 'uint256', name: 'actualGasCost', type: 'uint256' },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        components: [
          { internalType: 'address', name: 'sender', type: 'address' },
          { internalType: 'uint256', name: 'nonce', type: 'uint256' },
          { internalType: 'bytes', name: 'initCode', type: 'bytes' },
          { internalType: 'bytes', name: 'callData', type: 'bytes' },
          { internalType: 'uint256', name: 'callGasLimit', type: 'uint256' },
          {
            internalType: 'uint256',
            name: 'verificationGasLimit',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'preVerificationGas',
            type: 'uint256',
          },
          { internalType: 'uint256', name: 'maxFeePerGas', type: 'uint256' },
          {
            internalType: 'uint256',
            name: 'maxPriorityFeePerGas',
            type: 'uint256',
          },
          { internalType: 'bytes', name: 'paymasterAndData', type: 'bytes' },
          { internalType: 'bytes', name: 'signature', type: 'bytes' },
        ],
        internalType: 'struct UserOperation',
        name: 'op',
        type: 'tuple',
      },
      { internalType: 'address', name: 'target', type: 'address' },
      { internalType: 'bytes', name: 'targetCallData', type: 'bytes' },
    ],
    name: 'simulateHandleOp',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        components: [
          { internalType: 'address', name: 'sender', type: 'address' },
          { internalType: 'uint256', name: 'nonce', type: 'uint256' },
          { internalType: 'bytes', name: 'initCode', type: 'bytes' },
          { internalType: 'bytes', name: 'callData', type: 'bytes' },
          { internalType: 'uint256', name: 'callGasLimit', type: 'uint256' },
          {
            internalType: 'uint256',
            name: 'verificationGasLimit',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'preVerificationGas',
            type: 'uint256',
          },
          { internalType: 'uint256', name: 'maxFeePerGas', type: 'uint256' },
          {
            internalType: 'uint256',
            name: 'maxPriorityFeePerGas',
            type: 'uint256',
          },
          { internalType: 'bytes', name: 'paymasterAndData', type: 'bytes' },
          { internalType: 'bytes', name: 'signature', type: 'bytes' },
        ],
        internalType: 'struct UserOperation',
        name: 'userOp',
        type: 'tuple',
      },
    ],
    name: 'simulateValidation',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'unlockStake',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address payable',
        name: 'withdrawAddress',
        type: 'address',
      },
    ],
    name: 'withdrawStake',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address payable',
        name: 'withdrawAddress',
        type: 'address',
      },
      { internalType: 'uint256', name: 'withdrawAmount', type: 'uint256' },
    ],
    name: 'withdrawTo',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  { stateMutability: 'payable', type: 'receive' },
];
