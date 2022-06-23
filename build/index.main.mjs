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
  const ctc2 = stdlib.T_Digest;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc2, ctc1, ctc1],
      3: [ctc0, ctc1, ctc2, ctc0, ctc1, ctc1, ctc1]
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
  const ctc1 = stdlib.T_Tuple([ctc0, ctc0]);
  const ctc2 = stdlib.T_Digest;
  const ctc3 = stdlib.T_Null;
  const ctc4 = stdlib.T_Address;
  
  
  const v204 = stdlib.protect(ctc0, interact.deadline, 'for Alice\'s interact field deadline');
  const v205 = stdlib.protect(ctc0, interact.wager, 'for Alice\'s interact field wager');
  
  const v208 = stdlib.protect(ctc0, await interact.getHand(), {
    at: './index.rsh:47:40:application',
    fs: ['at ./index.rsh:44:13:application call to [unknown function] (defined at: ./index.rsh:44:17:function exp)'],
    msg: 'getHand',
    who: 'Alice'
    });
  const v209 = stdlib.protect(ctc0, await interact.random(), {
    at: 'reach standard library:53:31:application',
    fs: ['at ./index.rsh:48:54:application call to "makeCommitment" (defined at: reach standard library:52:8:function exp)', 'at ./index.rsh:44:13:application call to [unknown function] (defined at: ./index.rsh:44:17:function exp)'],
    msg: 'random',
    who: 'Alice'
    });
  const v210 = stdlib.digest(ctc1, [v209, v208]);
  
  const txn1 = await (ctc.sendrecv({
    args: [v205, v210, v204],
    evt_cnt: 3,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:51:9:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0, ctc2, ctc0],
    pay: [v205, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v213, v214, v215], secs: v217, time: v216, didSend: v62, from: v212 } = txn1;
      
      sim_r.txns.push({
        amt: v213,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v226 = stdlib.add(v216, v215);
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc2, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v213, v214, v215], secs: v217, time: v216, didSend: v62, from: v212 } = txn1;
  ;
  const v226 = stdlib.add(v216, v215);
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 1,
    out_tys: [ctc0],
    timeoutAt: ['time', v226],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v212, v213, v214, v215, v226],
      evt_cnt: 0,
      funcNum: 2,
      lct: v216,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v301, time: v300, didSend: v166, from: v299 } = txn3;
        
        ;
        sim_r.txns.push({
          kind: 'from',
          to: v212,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined /* mto */,
      tys: [ctc4, ctc0, ctc2, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v301, time: v300, didSend: v166, from: v299 } = txn3;
    ;
    ;
    stdlib.protect(ctc3, await interact.informTimeout(), {
      at: './index.rsh:39:52:application',
      fs: ['at ./index.rsh:39:9:application call to [unknown function] (defined at: ./index.rsh:39:27:function exp)', 'at reach standard library:192:8:application call to "after" (defined at: ./index.rsh:38:28:function exp)', 'at ./index.rsh:63:51:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
      msg: 'informTimeout',
      who: 'Alice'
      });
    
    return;
    
    }
  else {
    const {data: [v232], secs: v234, time: v233, didSend: v73, from: v231 } = txn2;
    const v236 = stdlib.add(v213, v213);
    ;
    const v243 = stdlib.add(v233, v215);
    const txn3 = await (ctc.sendrecv({
      args: [v212, v213, v214, v231, v232, v236, v243, v209, v208],
      evt_cnt: 2,
      funcNum: 3,
      lct: v233,
      onlyIf: true,
      out_tys: [ctc0, ctc0],
      pay: [stdlib.checkedBigNumberify('./index.rsh:70:9:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [v248, v249], secs: v251, time: v250, didSend: v83, from: v247 } = txn3;
        
        ;
        const v255 = stdlib.add(stdlib.checkedBigNumberify('./index.rsh:8:35:decimal', stdlib.UInt_max, '4'), v249);
        const v256 = stdlib.sub(v255, v232);
        const v257 = stdlib.mod(v256, stdlib.checkedBigNumberify('./index.rsh:8:56:decimal', stdlib.UInt_max, '3'));
        const v258 = stdlib.eq(v257, stdlib.checkedBigNumberify('./index.rsh:78:16:decimal', stdlib.UInt_max, '2'));
        const v259 = stdlib.eq(v257, stdlib.checkedBigNumberify('./index.rsh:78:40:decimal', stdlib.UInt_max, '0'));
        const v260 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2')];
        const v261 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1')];
        const v262 = v259 ? v260 : v261;
        const v263 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
        const v264 = v258 ? v263 : v262;
        const v265 = v264[stdlib.checkedBigNumberify('./index.rsh:77:9:array', stdlib.UInt_max, '0')];
        const v266 = v264[stdlib.checkedBigNumberify('./index.rsh:77:9:array', stdlib.UInt_max, '1')];
        const v267 = stdlib.mul(v265, v213);
        sim_r.txns.push({
          kind: 'from',
          to: v212,
          tok: undefined /* Nothing */
          });
        const v272 = stdlib.mul(v266, v213);
        sim_r.txns.push({
          kind: 'from',
          to: v231,
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
      timeoutAt: ['time', v243],
      tys: [ctc4, ctc0, ctc2, ctc4, ctc0, ctc0, ctc0, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    if (txn3.didTimeout) {
      const txn4 = await (ctc.sendrecv({
        args: [v212, v213, v214, v231, v232, v236, v243],
        evt_cnt: 0,
        funcNum: 4,
        lct: v233,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn4) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [], secs: v285, time: v284, didSend: v135, from: v283 } = txn4;
          
          ;
          sim_r.txns.push({
            kind: 'from',
            to: v231,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          
          return sim_r;
          }),
        soloSend: false,
        timeoutAt: undefined /* mto */,
        tys: [ctc4, ctc0, ctc2, ctc4, ctc0, ctc0, ctc0],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v285, time: v284, didSend: v135, from: v283 } = txn4;
      ;
      const v286 = stdlib.addressEq(v212, v283);
      const v287 = stdlib.addressEq(v231, v283);
      const v288 = v286 ? true : v287;
      stdlib.assert(v288, {
        at: 'reach standard library:189:11:dot',
        fs: ['at ./index.rsh:71:12:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
        msg: 'sender correct',
        who: 'Alice'
        });
      ;
      stdlib.protect(ctc3, await interact.informTimeout(), {
        at: './index.rsh:39:52:application',
        fs: ['at ./index.rsh:39:9:application call to [unknown function] (defined at: ./index.rsh:39:27:function exp)', 'at reach standard library:192:8:application call to "after" (defined at: ./index.rsh:38:28:function exp)', 'at ./index.rsh:71:12:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
        msg: 'informTimeout',
        who: 'Alice'
        });
      
      return;
      
      }
    else {
      const {data: [v248, v249], secs: v251, time: v250, didSend: v83, from: v247 } = txn3;
      ;
      const v252 = stdlib.addressEq(v212, v247);
      stdlib.assert(v252, {
        at: './index.rsh:70:9:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Alice'
        });
      const v253 = stdlib.digest(ctc1, [v248, v249]);
      const v254 = stdlib.digestEq(v214, v253);
      stdlib.assert(v254, {
        at: 'reach standard library:58:17:application',
        fs: ['at ./index.rsh:74:18:application call to "checkCommitment" (defined at: reach standard library:57:8:function exp)'],
        msg: null,
        who: 'Alice'
        });
      const v255 = stdlib.add(stdlib.checkedBigNumberify('./index.rsh:8:35:decimal', stdlib.UInt_max, '4'), v249);
      const v256 = stdlib.sub(v255, v232);
      const v257 = stdlib.mod(v256, stdlib.checkedBigNumberify('./index.rsh:8:56:decimal', stdlib.UInt_max, '3'));
      const v258 = stdlib.eq(v257, stdlib.checkedBigNumberify('./index.rsh:78:16:decimal', stdlib.UInt_max, '2'));
      const v259 = stdlib.eq(v257, stdlib.checkedBigNumberify('./index.rsh:78:40:decimal', stdlib.UInt_max, '0'));
      const v260 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2')];
      const v261 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1')];
      const v262 = v259 ? v260 : v261;
      const v263 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
      const v264 = v258 ? v263 : v262;
      const v265 = v264[stdlib.checkedBigNumberify('./index.rsh:77:9:array', stdlib.UInt_max, '0')];
      const v266 = v264[stdlib.checkedBigNumberify('./index.rsh:77:9:array', stdlib.UInt_max, '1')];
      const v267 = stdlib.mul(v265, v213);
      ;
      const v272 = stdlib.mul(v266, v213);
      ;
      stdlib.protect(ctc3, await interact.seeOutcome(v257), {
        at: './index.rsh:85:24:application',
        fs: ['at ./index.rsh:84:7:application call to [unknown function] (defined at: ./index.rsh:84:25:function exp)'],
        msg: 'seeOutcome',
        who: 'Alice'
        });
      
      return;
      }
    
    }
  
  
  
  };
export async function Bob(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bob expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bob expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Digest;
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_Tuple([ctc0, ctc0]);
  const ctc4 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 3,
    funcNum: 0,
    out_tys: [ctc0, ctc1, ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v213, v214, v215], secs: v217, time: v216, didSend: v62, from: v212 } = txn1;
  ;
  const v226 = stdlib.add(v216, v215);
  stdlib.protect(ctc2, await interact.acceptWager(v213), {
    at: './index.rsh:58:25:application',
    fs: ['at ./index.rsh:57:11:application call to [unknown function] (defined at: ./index.rsh:57:15:function exp)'],
    msg: 'acceptWager',
    who: 'Bob'
    });
  const v230 = stdlib.protect(ctc0, await interact.getHand(), {
    at: './index.rsh:59:48:application',
    fs: ['at ./index.rsh:57:11:application call to [unknown function] (defined at: ./index.rsh:57:15:function exp)'],
    msg: 'getHand',
    who: 'Bob'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v212, v213, v214, v215, v226, v230],
    evt_cnt: 1,
    funcNum: 1,
    lct: v216,
    onlyIf: true,
    out_tys: [ctc0],
    pay: [v213, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v232], secs: v234, time: v233, didSend: v73, from: v231 } = txn2;
      
      const v236 = stdlib.add(v213, v213);
      sim_r.txns.push({
        amt: v213,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v243 = stdlib.add(v233, v215);
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: ['time', v226],
    tys: [ctc4, ctc0, ctc1, ctc0, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v212, v213, v214, v215, v226],
      evt_cnt: 0,
      funcNum: 2,
      lct: v216,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v301, time: v300, didSend: v166, from: v299 } = txn3;
        
        ;
        sim_r.txns.push({
          kind: 'from',
          to: v212,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined /* mto */,
      tys: [ctc4, ctc0, ctc1, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v301, time: v300, didSend: v166, from: v299 } = txn3;
    ;
    ;
    stdlib.protect(ctc2, await interact.informTimeout(), {
      at: './index.rsh:39:52:application',
      fs: ['at ./index.rsh:39:9:application call to [unknown function] (defined at: ./index.rsh:39:27:function exp)', 'at reach standard library:192:8:application call to "after" (defined at: ./index.rsh:38:28:function exp)', 'at ./index.rsh:63:51:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
      msg: 'informTimeout',
      who: 'Bob'
      });
    
    return;
    
    }
  else {
    const {data: [v232], secs: v234, time: v233, didSend: v73, from: v231 } = txn2;
    const v236 = stdlib.add(v213, v213);
    ;
    const v243 = stdlib.add(v233, v215);
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 2,
      funcNum: 3,
      out_tys: [ctc0, ctc0],
      timeoutAt: ['time', v243],
      waitIfNotPresent: false
      }));
    if (txn3.didTimeout) {
      const txn4 = await (ctc.sendrecv({
        args: [v212, v213, v214, v231, v232, v236, v243],
        evt_cnt: 0,
        funcNum: 4,
        lct: v233,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn4) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [], secs: v285, time: v284, didSend: v135, from: v283 } = txn4;
          
          ;
          sim_r.txns.push({
            kind: 'from',
            to: v231,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          
          return sim_r;
          }),
        soloSend: false,
        timeoutAt: undefined /* mto */,
        tys: [ctc4, ctc0, ctc1, ctc4, ctc0, ctc0, ctc0],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v285, time: v284, didSend: v135, from: v283 } = txn4;
      ;
      const v286 = stdlib.addressEq(v212, v283);
      const v287 = stdlib.addressEq(v231, v283);
      const v288 = v286 ? true : v287;
      stdlib.assert(v288, {
        at: 'reach standard library:189:11:dot',
        fs: ['at ./index.rsh:71:12:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
        msg: 'sender correct',
        who: 'Bob'
        });
      ;
      stdlib.protect(ctc2, await interact.informTimeout(), {
        at: './index.rsh:39:52:application',
        fs: ['at ./index.rsh:39:9:application call to [unknown function] (defined at: ./index.rsh:39:27:function exp)', 'at reach standard library:192:8:application call to "after" (defined at: ./index.rsh:38:28:function exp)', 'at ./index.rsh:71:12:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
        msg: 'informTimeout',
        who: 'Bob'
        });
      
      return;
      
      }
    else {
      const {data: [v248, v249], secs: v251, time: v250, didSend: v83, from: v247 } = txn3;
      ;
      const v252 = stdlib.addressEq(v212, v247);
      stdlib.assert(v252, {
        at: './index.rsh:70:9:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Bob'
        });
      const v253 = stdlib.digest(ctc3, [v248, v249]);
      const v254 = stdlib.digestEq(v214, v253);
      stdlib.assert(v254, {
        at: 'reach standard library:58:17:application',
        fs: ['at ./index.rsh:74:18:application call to "checkCommitment" (defined at: reach standard library:57:8:function exp)'],
        msg: null,
        who: 'Bob'
        });
      const v255 = stdlib.add(stdlib.checkedBigNumberify('./index.rsh:8:35:decimal', stdlib.UInt_max, '4'), v249);
      const v256 = stdlib.sub(v255, v232);
      const v257 = stdlib.mod(v256, stdlib.checkedBigNumberify('./index.rsh:8:56:decimal', stdlib.UInt_max, '3'));
      const v258 = stdlib.eq(v257, stdlib.checkedBigNumberify('./index.rsh:78:16:decimal', stdlib.UInt_max, '2'));
      const v259 = stdlib.eq(v257, stdlib.checkedBigNumberify('./index.rsh:78:40:decimal', stdlib.UInt_max, '0'));
      const v260 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2')];
      const v261 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1')];
      const v262 = v259 ? v260 : v261;
      const v263 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
      const v264 = v258 ? v263 : v262;
      const v265 = v264[stdlib.checkedBigNumberify('./index.rsh:77:9:array', stdlib.UInt_max, '0')];
      const v266 = v264[stdlib.checkedBigNumberify('./index.rsh:77:9:array', stdlib.UInt_max, '1')];
      const v267 = stdlib.mul(v265, v213);
      ;
      const v272 = stdlib.mul(v266, v213);
      ;
      stdlib.protect(ctc2, await interact.seeOutcome(v257), {
        at: './index.rsh:85:24:application',
        fs: ['at ./index.rsh:84:7:application call to [unknown function] (defined at: ./index.rsh:84:25:function exp)'],
        msg: 'seeOutcome',
        who: 'Bob'
        });
      
      return;
      }
    
    }
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `BiAJAAEDCAQgAnhQJgMBAAEBACI1ADEYQQL3KmRJIls1ASVbNQI2GgAXSUEAByI1BCM1BgA2GgIXNQQ2GgM2GgEXSSEGDEABgEkkDEABPEkhBAxAAFYhBBJEJDQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDV0ggNf+ABJEnNPOwMgY0AyEHWw9ENANXACAxABI0/zEAEhFEsSKyATQDgXBbsggjshA0/7IHs0ICFkgkNAESRDQESSISTDQCEhFEKGQpZFBJNQNJVwAgNf8hBVs1/kk1BUkiWzX9JVs1/IAEpKXwiDT9FlA0/BZQsDIGNAMhB1sMRDT/MQASRDQDVyggNP0WNPwWUAESRCEENPwINAOBaFsJJBg1+4AQAAAAAAAAAAEAAAAAAAAAAYAQAAAAAAAAAAAAAAAAAAAAAjT7IhJNgBAAAAAAAAAAAgAAAAAAAAAANPshBhJNNfqxIrIBNPoiWzT+C7III7IQNP+yB7OxIrIBNPolWzT+C7III7IQNANXSCCyB7NCATdIIzQBEkQ0BEkiEkw0AhIRRChkNQOABEGxQE2wMgY0AyEIWw9EsSKyATQDIQVbsggjshA0A1cAILIHs0IA+UkjDEAAh0gjNAESRDQESSISTDQCEhFEKGRJNQNJSVcAIDX/IQVbNf5XKCA1/Uk1BRc1/IAE1RUZFDT8FlCwMgY0AyEIWwxENP5JCDX7NP6IARQyBjQDgUhbCDX6NP80/hZQNP1QMQBQNPwWUDT7FlA0+hZQKEsBVwB/ZylLAVd/AWdIJDUBMgY1AkIAiEiBoI0GiADRIjQBEkQ0BEkiEkw0AhIRREk1BUlJIls1/1cIIDX+gShbNf2ABJRdYRY0/xZQNP5QNP0WULA0/4gAlzIGNP0INfwxADT/FlA0/lA0/RZQNPwWUChLAVcAWGdIIzUBMgY1AkIAHDEZgQUSRLEisgEisggjshAyCbIJMgqyB7NCAAUxGSISRCo0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEQv/fIjE0EkQkMTUSRCIxNhJEIjE3EkQiNQEiNQJC/680AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk=`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 2,
  stateSize: 128,
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
                "name": "v213",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v214",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v215",
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
                "name": "v213",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v214",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v215",
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
                "name": "v232",
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
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
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
                "name": "v248",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v249",
                "type": "uint256"
              }
            ],
            "internalType": "struct T9",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T10",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e3",
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
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e4",
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
                "name": "v232",
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
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m2",
    "outputs": [],
    "stateMutability": "payable",
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
                "name": "v248",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v249",
                "type": "uint256"
              }
            ],
            "internalType": "struct T9",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T10",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m3",
    "outputs": [],
    "stateMutability": "payable",
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
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m4",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x60806040526040516200128a3803806200128a83398101604081905262000026916200026c565b600080805543600355604080516020808201835292815281513381528451818501528484015180518285015293840151606082015292909101516080830152907fe875e0d974175d3036d72bf8b57156a0f70f8e5f5279acd8e22aae589e0748e69060a00160405180910390a1602082015151620000a8903414600762000165565b602082015160400151620000bd904362000303565b81526040805160a08082018352600060208084018281528486018381526060808701858152608080890187815233808b528d8801805151885280518901518752518c015184528c518252600198899055439098558a51808801989098529451878b0152925191860191909152519084015251828401528451808303909301835260c0909101909352805191926200015b92600292909101906200018f565b5050505062000367565b816200018b5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b8280546200019d906200032a565b90600052602060002090601f016020900481019282620001c157600085556200020c565b82601f10620001dc57805160ff19168380011785556200020c565b828001600101855582156200020c579182015b828111156200020c578251825591602001919060010190620001ef565b506200021a9291506200021e565b5090565b5b808211156200021a57600081556001016200021f565b604051606081016001600160401b03811182821017156200026657634e487b7160e01b600052604160045260246000fd5b60405290565b600081830360808112156200028057600080fd5b604080519081016001600160401b0381118282101715620002b157634e487b7160e01b600052604160045260246000fd5b604052835181526060601f1983011215620002cb57600080fd5b620002d562000235565b9150602084015182526040840151602083015260608401516040830152816020820152809250505092915050565b600082198211156200032557634e487b7160e01b600052601160045260246000fd5b500190565b600181811c908216806200033f57607f821691505b602082108114156200036157634e487b7160e01b600052602260045260246000fd5b50919050565b610f1380620003776000396000f3fe60806040526004361061006e5760003560e01c8063873779a11161004b578063873779a1146100c3578063a7661d54146100d6578063ab53f2c6146100e9578063ad2d91d11461010c57005b80631e93b0f1146100775780637eea518c1461009b57806383230757146100ae57005b3661007557005b005b34801561008357600080fd5b506003545b6040519081526020015b60405180910390f35b6100756100a9366004610c16565b61011f565b3480156100ba57600080fd5b50600154610088565b6100756100d1366004610c16565b61029d565b6100756100e4366004610c16565b61053f565b3480156100f557600080fd5b506100fe6106da565b604051610092929190610c39565b61007561011a366004610c96565b610777565b61012f600160005414600d610a69565b6101498135158061014257506001548235145b600e610a69565b60008080556002805461015b90610ca8565b80601f016020809104026020016040519081016040528092919081815260200182805461018790610ca8565b80156101d45780601f106101a9576101008083540402835291602001916101d4565b820191906000526020600020905b8154815290600101906020018083116101b757829003601f168201915b50505050508060200190518101906101ec9190610cf9565b90506102008160800151431015600f610a69565b7f919263be6d51bec670ce110fb6a7df03fe323e3de4dade5355bccc6a4b06d9503383604051610231929190610d7c565b60405180910390a16102453415600c610a69565b805160208201516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015610282573d6000803e3d6000fd5b506000808055600181905561029990600290610a8e565b5050565b6102ad6001600054146009610a69565b6102c7813515806102c057506001548235145b600a610a69565b6000808055600280546102d990610ca8565b80601f016020809104026020016040519081016040528092919081815260200182805461030590610ca8565b80156103525780601f1061032757610100808354040283529160200191610352565b820191906000526020600020905b81548152906001019060200180831161033557829003601f168201915b505050505080602001905181019061036a9190610cf9565b9050610389604051806040016040528060008152602001600081525090565b61039a82608001514310600b610a69565b6040805133815284356020808301919091528501358183015290517f3957da95a08a7316b724c4fe20ec058158ff5f626860362a6b6aafcb999f72259181900360600190a160208201516103ee9080610dcf565b815260208201516104029034146008610a69565b60608201516104119043610dcf565b81602001818152505061046c6040518060e0016040528060006001600160a01b03168152602001600081526020016000815260200160006001600160a01b031681526020016000815260200160008152602001600081525090565b82516001600160a01b031681526020808401518183015260408085015181840152336060840152858201356080840152835160a08401528382015160c0840152600360005543600155516105149183910181516001600160a01b0390811682526020808401519083015260408084015190830152606080840151909116908201526080808301519082015260a0828101519082015260c0918201519181019190915260e00190565b60405160208183030381529060405260029080519060200190610538929190610acb565b5050505050565b61054f6003600054146018610a69565b6105698135158061056257506001548235145b6019610a69565b60008080556002805461057b90610ca8565b80601f01602080910402602001604051908101604052809291908181526020018280546105a790610ca8565b80156105f45780601f106105c9576101008083540402835291602001916105f4565b820191906000526020600020905b8154815290600101906020018083116105d757829003601f168201915b505050505080602001905181019061060c9190610de7565b90506106208160c00151431015601a610a69565b7faa99e317c364fb804a6b7e67b51beee98735c62eb3df9d8182015e63bb1907223383604051610651929190610d7c565b60405180910390a161066534156016610a69565b8051610699906001600160a01b0316331461068f5760608201516001600160a01b03163314610692565b60015b6017610a69565b80606001516001600160a01b03166108fc8260a001519081150290604051600060405180830381858888f19350505050158015610282573d6000803e3d6000fd5b6000606060005460028080546106ef90610ca8565b80601f016020809104026020016040519081016040528092919081815260200182805461071b90610ca8565b80156107685780601f1061073d57610100808354040283529160200191610768565b820191906000526020600020905b81548152906001019060200180831161074b57829003601f168201915b50505050509050915091509091565b6107876003600054146013610a69565b6107a18135158061079a57506001548235145b6014610a69565b6000808055600280546107b390610ca8565b80601f01602080910402602001604051908101604052809291908181526020018280546107df90610ca8565b801561082c5780601f106108015761010080835404028352916020019161082c565b820191906000526020600020905b81548152906001019060200180831161080f57829003601f168201915b50505050508060200190518101906108449190610de7565b905061084e610b4f565b61085f8260c0015143106015610a69565b604080513381528435602080830191909152850135818301529084013560608201527f85f73e284b1b1aeb266b14c389a29537c9fdd9a589649702abee8564ab4d16349060800160405180910390a16108ba34156010610a69565b81516108d2906001600160a01b031633146011610a69565b6040805161091e916108f891602080880135928801359101918252602082015260400190565b6040516020818303038152906040528051906020012060001c8360400151146012610a69565b608082015160039061093560408601356004610dcf565b61093f9190610e85565b6109499190610e9c565b81526020808201805160009081905290516002908301819052604084018051600190819052905184015260608401805182905251909201528151146109a3578051156109995780604001516109a9565b80602001516109a9565b80606001515b608082018190528251602084015191516001600160a01b03909116916108fc916109d39190610ebe565b6040518115909202916000818181858888f193505050501580156109fb573d6000803e3d6000fd5b5081606001516001600160a01b03166108fc8360200151836080015160200151610a259190610ebe565b6040518115909202916000818181858888f19350505050158015610a4d573d6000803e3d6000fd5b5060008080556001819055610a6490600290610a8e565b505050565b816102995760405163100960cb60e01b81526004810182905260240160405180910390fd5b508054610a9a90610ca8565b6000825580601f10610aaa575050565b601f016020900490600052602060002090810190610ac89190610be9565b50565b828054610ad790610ca8565b90600052602060002090601f016020900481019282610af95760008555610b3f565b82601f10610b1257805160ff1916838001178555610b3f565b82800160010185558215610b3f579182015b82811115610b3f578251825591602001919060010190610b24565b50610b4b929150610be9565b5090565b6040518060a0016040528060008152602001610b7e604051806040016040528060008152602001600081525090565b8152602001610ba0604051806040016040528060008152602001600081525090565b8152602001610bc2604051806040016040528060008152602001600081525090565b8152602001610be4604051806040016040528060008152602001600081525090565b905290565b5b80821115610b4b5760008155600101610bea565b600060408284031215610c1057600080fd5b50919050565b600060408284031215610c2857600080fd5b610c328383610bfe565b9392505050565b82815260006020604081840152835180604085015260005b81811015610c6d57858101830151858201606001528201610c51565b81811115610c7f576000606083870101525b50601f01601f191692909201606001949350505050565b600060608284031215610c1057600080fd5b600181811c90821680610cbc57607f821691505b60208210811415610c1057634e487b7160e01b600052602260045260246000fd5b80516001600160a01b0381168114610cf457600080fd5b919050565b600060a08284031215610d0b57600080fd5b60405160a0810181811067ffffffffffffffff82111715610d3c57634e487b7160e01b600052604160045260246000fd5b604052610d4883610cdd565b8152602083015160208201526040830151604082015260608301516060820152608083015160808201528091505092915050565b6001600160a01b038316815281356020808301919091526060820190830135801515808214610daa57600080fd5b80604085015250509392505050565b634e487b7160e01b600052601160045260246000fd5b60008219821115610de257610de2610db9565b500190565b600060e08284031215610df957600080fd5b60405160e0810181811067ffffffffffffffff82111715610e2a57634e487b7160e01b600052604160045260246000fd5b604052610e3683610cdd565b81526020830151602082015260408301516040820152610e5860608401610cdd565b60608201526080830151608082015260a083015160a082015260c083015160c08201528091505092915050565b600082821015610e9757610e97610db9565b500390565b600082610eb957634e487b7160e01b600052601260045260246000fd5b500690565b6000816000190483118215151615610ed857610ed8610db9565b50029056fea26469706673582212206a006934919564bb5582957f07d459ccdbc16049ebacdd93987d5209dcbe32fb64736f6c634300080c0033`,
  BytecodeLen: 4746,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:53:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: 'reach standard library:191:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:63:51:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:64:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: 'reach standard library:191:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:71:12:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:82:11:after expr stmt semicolon',
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
