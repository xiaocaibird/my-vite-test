import { useState } from 'react'
import Crypto from 'crypto-js';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    const [key, setKey] = useState('');
    const [oriText, setOriText] = useState('');
    const [resText, setResText] = useState('');

    return (
        <>
            <div>
                <a href="https://vitejs.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
                密钥: <input value={key} onChange={evt => setKey(evt.currentTarget.value.trim())} type='password' />
                <br /><br /><br />原文：<textarea style={{ width: '200px', height: '100px' }} placeholder='输入要编码或解码的原文' value={oriText} onChange={evt => setOriText(evt.target.value.trim())} />
                <br /><br /><br />译文：<textarea disabled style={{ width: '200px', height: '100px' }} value={resText} />
                <br /><br /><br />
                <button onClick={() => {
                    setResText('');
                    setResText(Crypto.AES.encrypt(oriText, key).toString());
                }}>编码</button>
                <button onClick={() => {
                    setResText('');
                    setResText(Crypto.AES.decrypt(oriText, key).toString(Crypto.enc.Utf8));
                }}>解码</button>
                <p>
                    Edit <code>src/App.tsx</code> and save to test HMR
                </p>
            </div >
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </>
    )
}

export default App
