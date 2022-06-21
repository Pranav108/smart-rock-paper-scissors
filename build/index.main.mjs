// Automatically generated with Reach 0.1.11 (2d125008)
/* eslint-disable */
export const _version = '0.1.11';
export const _versionHash = '0.1.11 (2d125008)';
export const _backendVersion = 17;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc1]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Alice(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Alice expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Alice expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  
  
  const v81 = stdlib.protect(ctc0, interact.wager, 'for Alice\'s interact field wager');
  
  const v84 = stdlib.protect(ctc0, await interact.getHand(), {
    at: './index.rsh:26:50:application',
    fs: ['at ./index.rsh:24:13:application call to [unknown function] (defined at: ./index.rsh:24:17:function exp)'],
    msg: 'getHand',
    who: 'Alice'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v81, v84],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:28:9:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0, ctc0],
    pay: [v81, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v86, v87], secs: v89, time: v88, didSend: v31, from: v85 } = txn1;
      
      sim_r.txns.push({
        amt: v86,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v86, v87], secs: v89, time: v88, didSend: v31, from: v85 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 1,
    out_tys: [ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v96], secs: v98, time: v97, didSend: v42, from: v95 } = txn2;
  ;
  const v101 = stdlib.add(stdlib.checkedBigNumberify('./index.rsh:37:20:decimal', stdlib.UInt_max, '4'), v87);
  const v102 = stdlib.sub(v101, v96);
  const v103 = stdlib.mod(v102, stdlib.checkedBigNumberify('./index.rsh:37:47:decimal', stdlib.UInt_max, '3'));
  const v104 = stdlib.eq(v103, stdlib.checkedBigNumberify('./index.rsh:40:16:decimal', stdlib.UInt_max, '2'));
  const v105 = stdlib.eq(v103, stdlib.checkedBigNumberify('./index.rsh:40:40:decimal', stdlib.UInt_max, '0'));
  const v106 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2')];
  const v107 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1')];
  const v108 = v105 ? v106 : v107;
  const v109 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
  const v110 = v104 ? v109 : v108;
  const v111 = v110[stdlib.checkedBigNumberify('./index.rsh:39:9:array', stdlib.UInt_max, '0')];
  const v112 = v110[stdlib.checkedBigNumberify('./index.rsh:39:9:array', stdlib.UInt_max, '1')];
  const v113 = stdlib.mul(v111, v86);
  ;
  const v118 = stdlib.mul(v112, v86);
  ;
  stdlib.protect(ctc1, await interact.seeOutcome(v103), {
    at: './index.rsh:48:24:application',
    fs: ['at ./index.rsh:47:7:application call to [unknown function] (defined at: ./index.rsh:47:25:function exp)'],
    msg: 'seeOutcome',
    who: 'Alice'
    });
  
  return;
  
  
  
  
  };
export async function Bob(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bob expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bob expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 0,
    out_tys: [ctc0, ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v86, v87], secs: v89, time: v88, didSend: v31, from: v85 } = txn1;
  ;
  stdlib.protect(ctc1, await interact.acceptWager(v86), {
    at: './index.rsh:32:25:application',
    fs: ['at ./index.rsh:31:11:application call to [unknown function] (defined at: ./index.rsh:31:15:function exp)'],
    msg: 'acceptWager',
    who: 'Bob'
    });
  const v94 = stdlib.protect(ctc0, await interact.getHand(), {
    at: './index.rsh:33:48:application',
    fs: ['at ./index.rsh:31:11:application call to [unknown function] (defined at: ./index.rsh:31:15:function exp)'],
    msg: 'getHand',
    who: 'Bob'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v85, v86, v87, v94],
    evt_cnt: 1,
    funcNum: 1,
    lct: v88,
    onlyIf: true,
    out_tys: [ctc0],
    pay: [v86, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v96], secs: v98, time: v97, didSend: v42, from: v95 } = txn2;
      
      sim_r.txns.push({
        amt: v86,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v101 = stdlib.add(stdlib.checkedBigNumberify('./index.rsh:37:20:decimal', stdlib.UInt_max, '4'), v87);
      const v102 = stdlib.sub(v101, v96);
      const v103 = stdlib.mod(v102, stdlib.checkedBigNumberify('./index.rsh:37:47:decimal', stdlib.UInt_max, '3'));
      const v104 = stdlib.eq(v103, stdlib.checkedBigNumberify('./index.rsh:40:16:decimal', stdlib.UInt_max, '2'));
      const v105 = stdlib.eq(v103, stdlib.checkedBigNumberify('./index.rsh:40:40:decimal', stdlib.UInt_max, '0'));
      const v106 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2')];
      const v107 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1')];
      const v108 = v105 ? v106 : v107;
      const v109 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
      const v110 = v104 ? v109 : v108;
      const v111 = v110[stdlib.checkedBigNumberify('./index.rsh:39:9:array', stdlib.UInt_max, '0')];
      const v112 = v110[stdlib.checkedBigNumberify('./index.rsh:39:9:array', stdlib.UInt_max, '1')];
      const v113 = stdlib.mul(v111, v86);
      sim_r.txns.push({
        kind: 'from',
        to: v85,
        tok: undefined /* Nothing */
        });
      const v118 = stdlib.mul(v112, v86);
      sim_r.txns.push({
        kind: 'from',
        to: v95,
        tok: undefined /* Nothing */
        });
      sim_r.txns.push({
        kind: 'halt',
        tok: undefined /* Nothing */
        })
      sim_r.isHalt = true;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc0, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v96], secs: v98, time: v97, didSend: v42, from: v95 } = txn2;
  ;
  const v101 = stdlib.add(stdlib.checkedBigNumberify('./index.rsh:37:20:decimal', stdlib.UInt_max, '4'), v87);
  const v102 = stdlib.sub(v101, v96);
  const v103 = stdlib.mod(v102, stdlib.checkedBigNumberify('./index.rsh:37:47:decimal', stdlib.UInt_max, '3'));
  const v104 = stdlib.eq(v103, stdlib.checkedBigNumberify('./index.rsh:40:16:decimal', stdlib.UInt_max, '2'));
  const v105 = stdlib.eq(v103, stdlib.checkedBigNumberify('./index.rsh:40:40:decimal', stdlib.UInt_max, '0'));
  const v106 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2')];
  const v107 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1')];
  const v108 = v105 ? v106 : v107;
  const v109 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
  const v110 = v104 ? v109 : v108;
  const v111 = v110[stdlib.checkedBigNumberify('./index.rsh:39:9:array', stdlib.UInt_max, '0')];
  const v112 = v110[stdlib.checkedBigNumberify('./index.rsh:39:9:array', stdlib.UInt_max, '1')];
  const v113 = stdlib.mul(v111, v86);
  ;
  const v118 = stdlib.mul(v112, v86);
  ;
  stdlib.protect(ctc1, await interact.seeOutcome(v103), {
    at: './index.rsh:48:24:application',
    fs: ['at ./index.rsh:47:7:application call to [unknown function] (defined at: ./index.rsh:47:25:function exp)'],
    msg: 'seeOutcome',
    who: 'Bob'
    });
  
  return;
  
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `BiAEAAEIAiYCAAEAIjUAMRhBAYYoZEkiWzUBJFs1AjYaABdJQQAHIjUEIzUGADYaAhc1BDYaAzYaARdJIwxAALUjEkQjNAESRDQESSISTDQCEhFEKWRJNQOBIFs1/0k1BRc1/oAE1RUZFDT+FlCwNP+IAUOBBDQDgShbCDT+CYEDGDX9gBAAAAAAAAAAAQAAAAAAAAABgBAAAAAAAAAAAAAAAAAAAAACNP0iEk2AEAAAAAAAAAACAAAAAAAAAAA0/SUSTTX8sSKyATT8Ils0/wuyCCOyEDQDVwAgsgezsSKyATT8JFs0/wuyCCOyEDEAsgezQgBUSIGgjQaIALkiNAESRDQESSISTDQCEhFESTUFSSJbNf8kWzX+gASs0R/DNP8WUDT+FlCwNP+IAIkxADT/FlA0/hZQKUsBVwAwZ0gjNQEyBjUCQgAcMRmBBRJEsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEKDQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iMTQSRCUxNRJEIjE2EkQiMTcSRCI1ASI1AkL/rzQASUojCDUAOAcyChJEOBAjEkQ4CBJEiQ==`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 1,
  stateSize: 48,
  unsupported: [],
  version: 10,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v86",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v87",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v86",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v87",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v96",
                "type": "uint256"
              }
            ],
            "internalType": "struct T4",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v96",
                "type": "uint256"
              }
            ],
            "internalType": "struct T4",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x60806040526040516109863803806109868339810160408190526100229161021c565b6000805543600355604080513381528251602080830191909152808401518051838501520151606082015290517fa736757a943474ef5983bb0422ab3a1e64bcd39e99635f4430c7765118231f959181900360800190a160208101515161008c9034146007610124565b6100b9604051806060016040528060006001600160a01b0316815260200160008152602001600081525090565b3380825260208381018051518285019081529051820151604080860191825260016000819055439055805180850195909552915184830152516060808501919091528151808503909101815260809093019052815161011c92600292019061014d565b5050506102b1565b816101495760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b82805461015990610276565b90600052602060002090601f01602090048101928261017b57600085556101c1565b82601f1061019457805160ff19168380011785556101c1565b828001600101855582156101c1579182015b828111156101c15782518255916020019190600101906101a6565b506101cd9291506101d1565b5090565b5b808211156101cd57600081556001016101d2565b604080519081016001600160401b038111828210171561021657634e487b7160e01b600052604160045260246000fd5b60405290565b6000818303606081121561022f57600080fd5b6102376101e6565b835181526040601f198301121561024d57600080fd5b6102556101e6565b60208581015182526040909501518582015293810193909352509092915050565b600181811c9082168061028a57607f821691505b602082108114156102ab57634e487b7160e01b600052602260045260246000fd5b50919050565b6106c6806102c06000396000f3fe6080604052600436106100405760003560e01c80631e93b0f114610049578063832307571461006d578063873779a114610082578063ab53f2c61461009557005b3661004757005b005b34801561005557600080fd5b506003545b6040519081526020015b60405180910390f35b34801561007957600080fd5b5060015461005a565b6100476100903660046104e4565b6100b8565b3480156100a157600080fd5b506100aa61032e565b6040516100649291906104fc565b6100c860016000541460096103cb565b6100e2813515806100db57506001548235145b600a6103cb565b6000808055600280546100f490610559565b80601f016020809104026020016040519081016040528092919081815260200182805461012090610559565b801561016d5780601f106101425761010080835404028352916020019161016d565b820191906000526020600020905b81548152906001019060200180831161015057829003601f168201915b5050505050806020019051810190610185919061058e565b905061018f6103f4565b6040805133815284356020808301919091528501358183015290517f3957da95a08a7316b724c4fe20ec058158ff5f626860362a6b6aafcb999f72259181900360600190a16101e58260200151341460086103cb565b60408201516003906020850135906101fe906004610620565b6102089190610638565b610212919061064f565b815260208082018051600090819052905160029083018190526040840180516001908190529051840152606084018051829052519092015281511461026c57805115610262578060400151610272565b8060200151610272565b80606001515b608082018190528251602084015191516001600160a01b03909116916108fc9161029c9190610671565b6040518115909202916000818181858888f193505050501580156102c4573d6000803e3d6000fd5b50336001600160a01b03166108fc83602001518360800151602001516102ea9190610671565b6040518115909202916000818181858888f19350505050158015610312573d6000803e3d6000fd5b50600080805560018190556103299060029061048e565b505050565b60006060600054600280805461034390610559565b80601f016020809104026020016040519081016040528092919081815260200182805461036f90610559565b80156103bc5780601f10610391576101008083540402835291602001916103bc565b820191906000526020600020905b81548152906001019060200180831161039f57829003601f168201915b50505050509050915091509091565b816103f05760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b6040518060a0016040528060008152602001610423604051806040016040528060008152602001600081525090565b8152602001610445604051806040016040528060008152602001600081525090565b8152602001610467604051806040016040528060008152602001600081525090565b8152602001610489604051806040016040528060008152602001600081525090565b905290565b50805461049a90610559565b6000825580601f106104aa575050565b601f0160209004906000526020600020908101906104c891906104cb565b50565b5b808211156104e057600081556001016104cc565b5090565b6000604082840312156104f657600080fd5b50919050565b82815260006020604081840152835180604085015260005b8181101561053057858101830151858201606001528201610514565b81811115610542576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c9082168061056d57607f821691505b602082108114156104f657634e487b7160e01b600052602260045260246000fd5b6000606082840312156105a057600080fd5b6040516060810181811067ffffffffffffffff821117156105d157634e487b7160e01b600052604160045260246000fd5b60405282516001600160a01b03811681146105eb57600080fd5b8152602083810151908201526040928301519281019290925250919050565b634e487b7160e01b600052601160045260246000fd5b600082198211156106335761063361060a565b500190565b60008282101561064a5761064a61060a565b500390565b60008261066c57634e487b7160e01b600052601260045260246000fd5b500690565b600081600019048311821515161561068b5761068b61060a565b50029056fea26469706673582212201c00ee9c24d0bf7d5ea1c4a3964966e0c2dba41a6d461f06c59560a49c6ab55d64736f6c634300080c0033`,
  BytecodeLen: 2438,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:29:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './index.rsh:45:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Alice": Alice,
  "Bob": Bob
  };
export const _APIs = {
  };
