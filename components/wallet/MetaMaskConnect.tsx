"use client"

import { useState, useEffect } from "react"
import { ethers } from "ethers"
import { Button } from "@/components/ui/button"

interface EthereumWindow extends Window {
  ethereum?: any
}

export default function WalletConnect() {
  const [isConnected, setIsConnected] = useState(false)
  const [signer, setSigner] = useState<ethers.Signer | null>(null)
  const [address, setAddress] = useState<string | null>(null)

  useEffect(() => {
    checkConnection()
  }, [])

  async function checkConnection() {
    const windowEth = (window as EthereumWindow).ethereum
    if (typeof windowEth !== "undefined") {
      try {
        const provider = new ethers.BrowserProvider(windowEth)
        const accounts = await provider.listAccounts()
        if (accounts.length > 0) {
          const signer = await provider.getSigner()
          setIsConnected(true)
          setSigner(signer)
          setAddress(await signer.getAddress())
        }
      } catch (error) {
        console.error("Failed to check connection:", error)
      }
    }
  }

  async function connectWallet() {
    const windowEth = (window as EthereumWindow).ethereum
    if (typeof windowEth !== "undefined") {
      try {
        await windowEth.request({ method: "eth_requestAccounts" })
        const provider = new ethers.BrowserProvider(windowEth)
        const signer = await provider.getSigner()
        setIsConnected(true)
        setSigner(signer)
        setAddress(await signer.getAddress())
      } catch (error) {
        console.error("Failed to connect wallet:", error)
      }
    } else {
      window.open("https://metamask.io/download/", "_blank")
    }
  }

  async function disconnectWallet() {
    setIsConnected(false)
    setSigner(null)
    setAddress(null)
  }

  return (
    <div className="flex flex-col items-center space-y-4">
      {!isConnected ? (
        <Button onClick={connectWallet}>Connect MetaMask</Button>
      ) : (
        <>
          <p className="text-green-500">Connected: {address}</p>
          <Button onClick={disconnectWallet} variant="destructive">
            Disconnect Wallet
          </Button>
        </>
      )}
    </div>
  )
}
