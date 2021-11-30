/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { RouterFactory, RouterFactoryInterface } from "../RouterFactory";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "router",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "routerSigner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "transactionManager",
        type: "address",
      },
    ],
    name: "RouterCreated",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "routerSigner",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
    ],
    name: "createRouter",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "routerSigner",
        type: "address",
      },
    ],
    name: "getRouterAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_transactionManager",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_chainId",
        type: "uint256",
      },
    ],
    name: "init",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "routerAddresses",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_transactionManager",
        type: "address",
      },
    ],
    name: "setTransactionManager",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "transactionManager",
    outputs: [
      {
        internalType: "contract ITransactionManager",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5060405161283038038061283083398101604081905261002f91610167565b61003833610047565b61004181610097565b50610195565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6000546001600160a01b031633146100f65760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064015b60405180910390fd5b6001600160a01b03811661015b5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084016100ed565b61016481610047565b50565b600060208284031215610178578081fd5b81516001600160a01b038116811461018e578182fd5b9392505050565b61268c806101a46000396000f3fe608060405234801561001057600080fd5b50600436106100935760003560e01c8063463a617611610066578063463a617614610118578063715018a61461012b5780637f629efc146101335780638da5cb5b14610146578063f2fde38b1461015757600080fd5b80630b1fa61c146100985780631f16a046146100ad578063399ae724146100f25780633b71645214610105575b600080fd5b6100ab6100a63660046106b5565b61016a565b005b6100d66100bb3660046106b5565b6003602052600090815260409020546001600160a01b031681565b6040516001600160a01b03909116815260200160405180910390f35b6100ab610100366004610701565b6101bf565b6002546100d6906001600160a01b031681565b6100d66101263660046106b5565b61020f565b6100ab610237565b6100d66101413660046106cf565b61026d565b6000546001600160a01b03166100d6565b6100ab6101653660046106b5565b610391565b6000546001600160a01b0316331461019d5760405162461bcd60e51b815260040161019490610778565b60405180910390fd5b600280546001600160a01b0319166001600160a01b0392909216919091179055565b6000546001600160a01b031633146101e95760405162461bcd60e51b815260040161019490610778565b600280546001600160a01b0319166001600160a01b039390931692909217909155600155565b600061023161021d8361042c565b61022561046b565b805190602001206104d3565b92915050565b6000546001600160a01b031633146102615760405162461bcd60e51b815260040161019490610778565b61026b6000610532565b565b60008061028b600061027e8661042c565b61028661046b565b610582565b6002546001546040516344bd376560e01b81526001600160a01b0392831660048201526024810191909152868216604482015285821660648201523360848201529192508216906344bd37659060a401600060405180830381600087803b1580156102f557600080fd5b505af1158015610309573d6000803e3d6000fd5b505050506001600160a01b0384811660008181526003602090815260409182902080548686166001600160a01b0319909116811790915560025483519182529181019390935286841683830152909216606082015290517fe8e811674d167b407a67a22f592a226ade5e34b608e7d56721f82422f3b981979181900360800190a19392505050565b6000546001600160a01b031633146103bb5760405162461bcd60e51b815260040161019490610778565b6001600160a01b0381166104205760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610194565b61042981610532565b50565b6040516bffffffffffffffffffffffff19606083901b166020820152600090603401604051602081830303815290604052805190602001209050919050565b606060006040518060200161047f9061068c565b601f1982820381018352601f90910116604081815230602083015291925082910160408051601f19818403018152908290526104be9291602001610763565b60405160208183030381529060405291505090565b604080516001600160f81b03196020808301919091526bffffffffffffffffffffffff193060601b16602183015260358201859052605580830185905283518084039091018152607590920190925280519101206000905b9392505050565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b600080844710156105d55760405162461bcd60e51b815260206004820152601d60248201527f437265617465323a20696e73756666696369656e742062616c616e63650000006044820152606401610194565b82516106235760405162461bcd60e51b815260206004820181905260248201527f437265617465323a2062797465636f6465206c656e677468206973207a65726f6044820152606401610194565b8383516020850187f590506001600160a01b0381166106845760405162461bcd60e51b815260206004820152601960248201527f437265617465323a204661696c6564206f6e206465706c6f79000000000000006044820152606401610194565b949350505050565b611ea9806107ae83390190565b80356001600160a01b03811681146106b057600080fd5b919050565b6000602082840312156106c6578081fd5b61052b82610699565b600080604083850312156106e1578081fd5b6106ea83610699565b91506106f860208401610699565b90509250929050565b60008060408385031215610713578182fd5b61071c83610699565b946020939093013593505050565b60008151815b8181101561074a5760208185018101518683015201610730565b818111156107585782828601525b509290920192915050565b6000610684610772838661072a565b8461072a565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260408201526060019056fe60a06040523480156200001157600080fd5b5060405162001ea938038062001ea98339810160408190526200003491620000a5565b6200003f3362000055565b60601b6001600160601b031916608052620000d5565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b600060208284031215620000b7578081fd5b81516001600160a01b0381168114620000ce578182fd5b9392505050565b60805160601c611dae620000fb600039600081816101a901526103710152611dae6000f3fe6080604052600436106100f35760003560e01c80636e2054a91161008a578063d4132a0b11610059578063d4132a0b1461029e578063d42030ed146102be578063f2fde38b146102de578063fc6bee13146102fe57600080fd5b80636e2054a91461022b578063715018a6146102585780638da5cb5b1461026d578063ce9765391461028b57600080fd5b80634ba51437116100c65780634ba51437146101975780634f64cfc5146101cb57806366d003ac146101eb5780636c19e7831461020b57600080fd5b80633411dbdc146100f85780633b716452146101355780633bbed4a01461015557806344bd376514610177575b600080fd5b34801561010457600080fd5b50600454610118906001600160a01b031681565b6040516001600160a01b0390911681526020015b60405180910390f35b34801561014157600080fd5b50600154610118906001600160a01b031681565b34801561016157600080fd5b50610175610170366004611354565b610311565b005b34801561018357600080fd5b50610175610192366004611370565b610366565b3480156101a357600080fd5b506101187f000000000000000000000000000000000000000000000000000000000000000081565b3480156101d757600080fd5b506101756101e636600461160d565b610423565b3480156101f757600080fd5b50600354610118906001600160a01b031681565b34801561021757600080fd5b50610175610226366004611354565b6104f1565b34801561023757600080fd5b5061024b610246366004611485565b61053d565b60405161012c9190611b83565b34801561026457600080fd5b50610175610653565b34801561027957600080fd5b506000546001600160a01b0316610118565b61024b6102993660046114c7565b610689565b3480156102aa57600080fd5b506101756102b936600461163c565b6107aa565b3480156102ca57600080fd5b5061024b6102d93660046113f7565b6108cf565b3480156102ea57600080fd5b506101756102f9366004611354565b610972565b61017561030c36600461160d565b610a0d565b6000546001600160a01b031633146103445760405162461bcd60e51b815260040161033b9061187e565b60405180910390fd5b600380546001600160a01b0319166001600160a01b0392909216919091179055565b306001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146103d15760405162461bcd60e51b815260206004820152601060248201526f4f4e4c595f5649415f464143544f525960801b604482015260640161033b565b600180546001600160a01b038088166001600160a01b031992831617909255600286905560048054868416908316179055600380549285169290911691909117905561041c81610972565b5050505050565b6000546001600160a01b0316331461044d5760405162461bcd60e51b815260040161033b9061187e565b600082116104885760405162461bcd60e51b815260206004820152600860248201526711a929231d18181960c11b604482015260640161033b565b6003546104a09082906001600160a01b031684610b23565b604080516001600160a01b03831681526020810184905233918101919091527f5d760a2d1cc0892ddaea1748093916f51d345b37724db0f69b41574a92adc06f906060015b60405180910390a15050565b6000546001600160a01b0316331461051b5760405162461bcd60e51b815260040161033b9061187e565b600480546001600160a01b0319166001600160a01b0392909216919091179055565b61054561126e565b6004546001600160a01b031633146105c65760006105838760405160200161056d9190611916565b6040516020818303038152906040528585610b4c565b6004549091506001600160a01b038083169116146105b35760405162461bcd60e51b815260040161033b90611847565b84156105c4576105c4863387610b23565b505b6001546040516301362a3560e71b81526001600160a01b0390911690639b151a80906105f6908990600401611916565b61020060405180830381600087803b15801561061157600080fd5b505af1158015610625573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106499190611509565b9695505050505050565b6000546001600160a01b0316331461067d5760405162461bcd60e51b815260040161033b9061187e565b6106876000610bf5565b565b61069161126e565b6004546001600160a01b031633146106fc5760006106b98760405160200161056d91906119b2565b6004549091506001600160a01b038083169116146106e95760405162461bcd60e51b815260040161033b90611847565b84156106fa576106fa863387610b23565b505b6001546001600160a01b031663d945937261072d61072060a08a0160808b01611354565b6001600160a01b03161590565b61073857600061073a565b345b886040518363ffffffff1660e01b815260040161075791906119b2565b610200604051808303818588803b15801561077157600080fd5b505af1158015610785573d6000803e3d6000fd5b50505050506040513d601f19601f820116820180604052508101906106499190611509565b6004546001600160a01b031633146108585760408051608080820183528682526001600160a01b0386811660208085019182526002548587019081526004548416606080880191825288519384018d90529351851697830197909752519181019190915293511690830152906000906108259060a00161056d565b6004549091506001600160a01b038083169116146108555760405162461bcd60e51b815260040161033b90611847565b50505b600154600354604051633cc6af3160e21b8152600481018790526001600160a01b038681166024830152918216604482015291169063f31abcc490606401600060405180830381600087803b1580156108b057600080fd5b505af11580156108c4573d6000803e3d6000fd5b505050505b50505050565b6108d761126e565b6004546001600160a01b031633146109425760006108ff8760405160200161056d91906118b3565b6004549091506001600160a01b0380831691161461092f5760405162461bcd60e51b815260040161033b90611847565b841561094057610940863387610b23565b505b600154604051635f48d15d60e11b81526001600160a01b039091169063be91a2ba906105f69089906004016118b3565b6000546001600160a01b0316331461099c5760405162461bcd60e51b815260040161033b9061187e565b6001600160a01b038116610a015760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b606482015260840161033b565b610a0a81610bf5565b50565b60008211610a485760405162461bcd60e51b815260206004820152600860248201526711a0a9231d18181960c11b604482015260640161033b565b6001600160a01b038116610a9557813414610a905760405162461bcd60e51b8152602060048201526008602482015267234152463a30303560c01b604482015260640161033b565b610ada565b3415610ace5760405162461bcd60e51b815260206004820152600860248201526711a0a9231d18181b60c11b604482015260640161033b565b610ada81333085610c45565b604080516001600160a01b03831681526020810184905233918101919091527f1104e763408245681528382e9b9fcd4d8f1b4bce2e83f5ce2be8d1a5ec8323a0906060016104e5565b6001600160a01b03831615610b4257610b3d838383610c51565b505050565b610b3d8282610c5c565b6000610beb610baf85805190602001206040517f19457468657265756d205369676e6564204d6573736167653a0a3332000000006020820152603c8101829052600090605c01604051602081830303815290604052805190602001209050919050565b84848080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250610c6a92505050565b90505b9392505050565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6108c984848484610d14565b610b3d838383610d7f565b610c668282610daf565b5050565b6000815160411415610c9e5760208201516040830151606084015160001a610c9486828585610ec8565b9350505050610d0e565b815160401415610cc65760208201516040830151610cbd858383611071565b92505050610d0e565b60405162461bcd60e51b815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e67746800604482015260640161033b565b92915050565b6040516001600160a01b03808516602483015283166044820152606481018290526108c99085906323b872dd60e01b906084015b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b031990931692909217909152611091565b6040516001600160a01b038316602482015260448101829052610b3d90849063a9059cbb60e01b90606401610d48565b80471015610dff5760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a20696e73756666696369656e742062616c616e6365000000604482015260640161033b565b6000826001600160a01b03168260405160006040518083038185875af1925050503d8060008114610e4c576040519150601f19603f3d011682016040523d82523d6000602084013e610e51565b606091505b5050905080610b3d5760405162461bcd60e51b815260206004820152603a60248201527f416464726573733a20756e61626c6520746f2073656e642076616c75652c207260448201527f6563697069656e74206d61792068617665207265766572746564000000000000606482015260840161033b565b60007f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0821115610f455760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c604482015261756560f01b606482015260840161033b565b8360ff16601b1480610f5a57508360ff16601c145b610fb15760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202776272076616c604482015261756560f01b606482015260840161033b565b6040805160008082526020820180845288905260ff871692820192909252606081018590526080810184905260019060a0016020604051602081039080840390855afa158015611005573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b0381166110685760405162461bcd60e51b815260206004820152601860248201527f45434453413a20696e76616c6964207369676e61747572650000000000000000604482015260640161033b565b95945050505050565b60006001600160ff1b03821660ff83901c601b0161064986828785610ec8565b60006110e6826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166111639092919063ffffffff16565b805190915015610b3d578080602001905181019061110491906113d7565b610b3d5760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b606482015260840161033b565b6060610beb848460008585843b6111bc5760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015260640161033b565b600080866001600160a01b031685876040516111d891906117f8565b60006040518083038185875af1925050503d8060008114611215576040519150601f19603f3d011682016040523d82523d6000602084013e61121a565b606091505b509150915061122a828286611235565b979650505050505050565b60608315611244575081610bee565b8251156112545782518084602001fd5b8160405162461bcd60e51b815260040161033b9190611814565b6040805161020081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e08101829052610100810182905261012081018290526101408101829052610160810182905261018081018290526101a081018290526101c081018290526101e081019190915290565b80356112fd81611d63565b919050565b80516112fd81611d63565b60008083601f84011261131e578182fd5b50813567ffffffffffffffff811115611335578182fd5b60208301915083602082850101111561134d57600080fd5b9250929050565b600060208284031215611365578081fd5b8135610bee81611d63565b600080600080600060a08688031215611387578081fd5b853561139281611d63565b94506020860135935060408601356113a981611d63565b925060608601356113b981611d63565b915060808601356113c981611d63565b809150509295509295909350565b6000602082840312156113e8578081fd5b81518015158114610bee578182fd5b60008060008060006080868803121561140e578081fd5b853567ffffffffffffffff80821115611425578283fd5b90870190610240828a031215611439578283fd5b90955060208701359061144b82611d63565b9094506040870135935060608701359080821115611467578283fd5b506114748882890161130d565b969995985093965092949392505050565b60008060008060006080868803121561149c578081fd5b853567ffffffffffffffff808211156114b3578283fd5b90870190610280828a031215611439578283fd5b6000806000806000608086880312156114de578081fd5b853567ffffffffffffffff808211156114f5578283fd5b90870190610260828a031215611439578283fd5b6000610200828403121561151b578081fd5b611523611cba565b61152c83611302565b815261153a60208401611302565b602082015261154b60408401611302565b604082015261155c60608401611302565b606082015261156d60808401611302565b608082015261157e60a08401611302565b60a082015261158f60c08401611302565b60c08201526115a060e08401611302565b60e08201526101006115b3818501611302565b9082015261012083810151908201526101408084015190820152610160808401519082015261018080840151908201526101a080840151908201526101c080840151908201526101e0928301519281019290925250919050565b6000806040838503121561161f578182fd5b82359150602083013561163181611d63565b809150509250929050565b60008060008060608587031215611651578182fd5b84359350602085013561166381611d63565b9250604085013567ffffffffffffffff81111561167e578283fd5b61168a8782880161130d565b95989497509550505050565b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b6116d9826116cc836112f2565b6001600160a01b03169052565b6116e5602082016112f2565b6001600160a01b031660208301526116ff604082016112f2565b6001600160a01b03166040830152611719606082016112f2565b6001600160a01b03166060830152611733608082016112f2565b6001600160a01b0316608083015261174d60a082016112f2565b6001600160a01b031660a083015261176760c082016112f2565b6001600160a01b031660c083015261178160e082016112f2565b6001600160a01b031660e083015261010061179d8282016112f2565b6001600160a01b03169083015261012081810135908301526101408082013590830152610160808201359083015261018080820135908301526101a080820135908301526101c080820135908301526101e090810135910152565b6000825161180a818460208701611d37565b9190910192915050565b6020815260008251806020840152611833816040850160208701611d37565b601f01601f19169190910160400192915050565b6020808252601d908201527f526f75746572207369676e6174757265206973206e6f742076616c6964000000604082015260600190565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b602081526118c460208201836116bf565b60006118d4610200840184611cf2565b61024061022081818701526118ee61026087018486611696565b93506118fc81880188611cf2565b878603601f1901848901529350905061122a848483611696565b6020815261192760208201836116bf565b60006102206102008401358184015261194281850185611cf2565b9150610280610240818187015261195e6102a087018585611696565b935061196c81880188611cf2565b93509050601f1961026081888703018189015261198a868685611696565b9550611998818a018a611cf2565b95509250508087860301838801525061122a848483611696565b602081526119c6602082016116cc846112f2565b60006119d4602084016112f2565b6001600160a01b0381166040840152506119f0604084016112f2565b6001600160a01b038116606084015250611a0c606084016112f2565b6001600160a01b038116608084015250611a28608084016112f2565b6001600160a01b03811660a084015250611a4460a084016112f2565b6001600160a01b03811660c084015250611a6060c084016112f2565b6001600160a01b03811660e084015250611a7c60e084016112f2565b610100611a93818501836001600160a01b03169052565b611a9e8186016112f2565b915050610120611ab8818501836001600160a01b03169052565b6101409150808501358285015250610160818501358185015261018091508085013582850152506101a081850135818501526101c091508085013582850152506101e08185013581850152611b0f81860186611cf2565b925090506102606102008181870152611b2d61028087018585611696565b9350611b3b81880188611cf2565b93509050601f19610220818887030181890152611b59868685611696565b9550611b67818a018a611cf2565b955092505061024081888703018189015261198a868685611696565b81516001600160a01b0316815261020081016020830151611baf60208401826001600160a01b03169052565b506040830151611bca60408401826001600160a01b03169052565b506060830151611be560608401826001600160a01b03169052565b506080830151611c0060808401826001600160a01b03169052565b5060a0830151611c1b60a08401826001600160a01b03169052565b5060c0830151611c3660c08401826001600160a01b03169052565b5060e0830151611c5160e08401826001600160a01b03169052565b50610100838101516001600160a01b03169083015261012080840151908301526101408084015190830152610160808401519083015261018080840151908301526101a080840151908301526101c080840151908301526101e092830151929091019190915290565b604051610200810167ffffffffffffffff81118282101715611cec57634e487b7160e01b600052604160045260246000fd5b60405290565b6000808335601e19843603018112611d08578283fd5b830160208101925035905067ffffffffffffffff811115611d2857600080fd5b80360383131561134d57600080fd5b60005b83811015611d52578181015183820152602001611d3a565b838111156108c95750506000910152565b6001600160a01b0381168114610a0a57600080fdfea2646970667358221220d93e25c3b26bb5824a142722f12df273cce19facf7130db602f549f432c36ec764736f6c63430008040033a26469706673582212203508bc5261cf69c2f416d810e6e41bdd0e2923550d30b4ff46cd2c889145092e64736f6c63430008040033";

export class RouterFactory__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _owner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<RouterFactory> {
    return super.deploy(_owner, overrides || {}) as Promise<RouterFactory>;
  }
  getDeployTransaction(
    _owner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_owner, overrides || {});
  }
  attach(address: string): RouterFactory {
    return super.attach(address) as RouterFactory;
  }
  connect(signer: Signer): RouterFactory__factory {
    return super.connect(signer) as RouterFactory__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): RouterFactoryInterface {
    return new utils.Interface(_abi) as RouterFactoryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): RouterFactory {
    return new Contract(address, _abi, signerOrProvider) as RouterFactory;
  }
}
