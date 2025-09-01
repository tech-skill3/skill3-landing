"use client"

import { useCallback, useState } from "react"
interface EthereumWindow extends Window {
  ethereum?: {
    isMetaMask?: boolean
    request: (args: { method: string; params?: any[] }) => Promise<any>
  }
}

interface MetaMaskState {
  isConnected: boolean
  account: string | null
  chainId: string | null
  error: string | null
}

export const useMetaMaskConnect = () => {
  const [state, setState] = useState<MetaMaskState>({
    isConnected: false,
    account: null,
    chainId: null,
    error: null,
  })

  const checkIfMobile = useCallback(() => {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
  }, [])

  const checkIfMetaMaskBrowser = useCallback(() => {
    return navigator.userAgent.includes("MetaMaskMobile")
  }, [])

  const checkConnection = useCallback(async () => {
    if (typeof window === "undefined") return false
    const { ethereum } = window as EthereumWindow
    if (ethereum && ethereum.isMetaMask) {
      try {
        const accounts = await ethereum.request({ method: "eth_accounts" })
        if (accounts && accounts.length > 0) {
          const chainId = await ethereum.request({ method: "eth_chainId" })
          setState({
            isConnected: true,
            account: accounts[0],
            chainId,
            error: null,
          })
          return true
        }
      } catch (error) {
        console.error("Error checking connection:", error)
      }
    }
    return false
  }, [])

  const connect = useCallback(async () => {
    try {
      if (typeof window === "undefined") return

      const { ethereum } = window as EthereumWindow
      const isMobile = checkIfMobile()
      const isMetaMaskBrowser = checkIfMetaMaskBrowser()

      // First, check if we're already connected
      const alreadyConnected = await checkConnection()
      if (alreadyConnected) return

      // If on mobile but not in MetaMask browser, handle mobile connection
      if (isMobile && !isMetaMaskBrowser) {
        // Check if we're in development (localhost)
        const isLocalhost = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'
        
        if (isLocalhost) {
          // For localhost, show instructions or try to open MetaMask app directly
          alert("Please open MetaMask app on your mobile device and navigate to Browser tab, then visit this page again.")
          // Try to open MetaMask app directly
          const metamaskAppLink = 'https://metamask.app.link/'
          window.open(metamaskAppLink, '_blank')
          return
        } else {
          // For production URLs, use the deep link
          const dappUrl = window.location.href
          const metamaskAppDeepLink = `https://metamask.app.link/dapp/${encodeURIComponent(dappUrl)}`
          console.log("Redirecting to MetaMask:", metamaskAppDeepLink)
          window.location.href = metamaskAppDeepLink
          return
        }
      }

      // Handle case where MetaMask is not available
      if (!ethereum) {
        window.open("https://metamask.io/download", "_blank")
        throw new Error("MetaMask not installed")
      }

      // Regular connection flow
      const accounts = await ethereum.request({ method: "eth_requestAccounts" })

      if (!accounts || accounts.length === 0) {
        throw new Error("No accounts found")
      }

      const chainId = await ethereum.request({ method: "eth_chainId" })

      setState({
        isConnected: true,
        account: accounts[0],
        chainId,
        error: null,
      })
    } catch (error) {
      console.error("Connection error:", error)
      setState((prev) => ({
        ...prev,
        error: error instanceof Error ? error.message : "Failed to connect",
        isConnected: false,
      }))
    }
  }, [checkIfMobile, checkIfMetaMaskBrowser, checkConnection])

  const disconnect = useCallback(() => {
    setState({
      isConnected: false,
      account: null,
      chainId: null,
      error: null,
    })
  }, [])

  return {
    ...state,
    connect,
    disconnect,
    checkConnection,
  }
}
