import { encode, sign } from './index';
import { encodePost, encodeFollowings } from './v1';
import axios from 'axios';
import base32 from 'base32.js';
import { API_server } from './../../config'
const secret_key = sessionStorage.getItem('secret_key')
export function sentCreateAccountTransaction(account, sequence, cb) {
    try {
        const trans = {
            version: 1,
            sequence: parseInt(sequence) + 1,
            memo: Buffer.alloc(0),
            operation: 'create_account',
            params: {
                address: account
            }
        }
        sign(trans, secret_key);
        const _tx = encode(trans).toString('hex')
        const _api_commit_tx = 'https://komodo.forest.network/broadcast_tx_commit?tx=0x' + _tx;
        axios.get(_api_commit_tx).then(rs => {
            console.log(rs.data)
            if (rs.data.result.height !== '0') {
                cb(rs.data.result)
                // {   jsonrpc: '2.0',
                //     id: '',
                //     result:
                //     {   check_tx: {},
                //         deliver_tx: { tags: [Array] },
                //         hash: 'A34FA71A80F425EB9234D15AC452F8FC7F69B39A0FEE427A8511F195C388E0B6',
                //         height: '25280' } }
            }
            else {
                cb(rs.data.result)
                // { jsonrpc: '2.0',
                //     id: '',
                //     error:
                //     { code: -32603,
                //         message: 'Internal error',
                //         data: 'Error on broadcastTxCommit: Tx already exists in cache' } }

                // { jsonrpc: '2.0',
                //     id: '',
                //     result:
                //     { check_tx: { code: 1, log: 'Error: Sequence mismatch' },
                //         deliver_tx: {},
                //         hash: '11C177AAE4EBA168FAD8AA8202DFADF4551F2BE2821E1F8C5755AF070B0EFCA2',
                //         height: '0' } }
            }
        })
    } catch (e) {
        cb({
            check_tx: { log: 'Error: Cannot create transaction', },
            height: '0'
        })
    }
}

export function sentUpdateNameTransaction(name, sequence, cb) {
    try {
        const trans = {
            version: 1,
            sequence: parseInt(sequence) + 1,
            memo: Buffer.alloc(0),
            operation: 'update_account',
            params: {
                key: 'name',
                value: Buffer.from(name)
            }
        }
        sign(trans, secret_key);
        const _tx = encode(trans).toString('hex')
        const _api_commit_tx = 'https://komodo.forest.network/broadcast_tx_commit?tx=0x' + _tx;
        axios.get(_api_commit_tx).then(rs => {
            console.log(rs.data)
            if (rs.data.result.height !== '0') {
                cb(rs.data.result)
            }
            else {
                cb(rs.data.result)
            }
        })
    } catch (e) {
        cb({
            check_tx: { log: 'Error: Cannot create transaction', },
            height: '0'
        })
    }
}

export function sentUpdatePictureTransaction(data, sequence, cb) {
    try {
        //data is a buffer
        const trans = {
            version: 1,
            sequence: parseInt(sequence) + 1,
            memo: Buffer.alloc(0),
            operation: 'update_account',
            params: {
                key: 'picture',
                value: Buffer.from(data, 'binary')
            }
        }
        sign(trans, secret_key);
        const _tx = encode(trans).toString('base64')
        axios.post('https://dragonfly.forest.network/', {
            "method": "broadcast_tx_commit",
            "jsonrpc": "2.0",
            "params": [_tx],
            "id": "dontcare"
        }).then(rs => {
            if (rs.data.result.height !== '0') {
                console.log(rs.data)
                cb(rs.data.result)
            }
            else {
                cb(rs.data.result)
            }
        })
    } catch (e) {
        cb({
            check_tx: { log: 'Error: Cannot create transaction', },
            height: '0'
        })
    }
}

export function sentUpdateFollowingsTransaction(addresses, sequence, cb) {
    try {
        //addresses is a array base32.decode if public_key
        const trans = {
            version: 1,
            sequence: parseInt(sequence) + 1,
            memo: Buffer.alloc(0),
            operation: 'update_account',
            params: {
                key: 'followings',
                value: encodeFollowings({
                    addresses: addresses
                })
            }
        }
        sign(trans, secret_key);
        const _tx = encode(trans).toString('hex')
        const _api_commit_tx = 'https://komodo.forest.network/broadcast_tx_commit?tx=0x' + _tx;
        axios.get(_api_commit_tx).then(rs => {
            if (rs.data.result.height !== '0') {
                console.log(rs.data)
                cb(rs.data.result)
            }
            else {
                cb(rs.data.result)
            }
        })
    } catch (e) {
        cb({
            check_tx: { log: 'Error: Cannot create transaction', },
            height: '0'
        })
    }
}

export function sentPostTransaction(text, sequence, cb) {
    try {
        //text is content of post
        const trans = {
            version: 1,
            sequence: parseInt(sequence) + 1,
            memo: Buffer.alloc(0),
            operation: 'post',
            params: {
                keys: [],
                content: encodePost({
                    type: 1,
                    text: text
                })
            }
        }
        sign(trans, secret_key);
        const _tx = encode(trans).toString('hex')
        const _api_commit_tx = 'https://komodo.forest.network/broadcast_tx_commit?tx=0x' + _tx;
        axios.get(_api_commit_tx).then(rs => {
            console.log(rs.data)
            if (rs.data.result.height !== '0') {
                cb(rs.data.result)
            }
            else {
                cb(rs.data.result)
            }
        })
    } catch (e) {
        cb({
            check_tx: { log: 'Error: Cannot create transaction', },
            height: '0'
        })
    }
}

export function sendPaymentTransaction(accountToSent, amount, sequence, cb) {
    try {
        const trans = {
            version: 1,
            sequence: parseInt(sequence) + 1,
            memo: Buffer.alloc(0),
            operation: 'payment',
            params: {
                address: accountToSent,
                amount: parseInt(amount)
            }
        }
        sign(trans, secret_key);
        const _tx = encode(trans).toString('hex')
        const _api_commit_tx = 'https://komodo.forest.network/broadcast_tx_commit?tx=0x' + _tx;
        axios.get(_api_commit_tx).then(rs => {
            console.log(rs.data)
            if (rs.data.result.height !== '0') {
                cb(rs.data.result)
            }
            else {
                cb(rs.data.result)
            }
        })
    } catch (e) {
        cb({
            check_tx: { log: 'Error: Cannot create transaction', },
            height: '0'
        })
    }
}