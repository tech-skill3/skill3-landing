"use client"

import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { X, Smartphone, Mail, Loader2, AlertCircle } from "lucide-react"
import { useMetaMaskConnect } from "@/hooks/useMetaMaskConnect"

interface ConnectWalletModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export default function ConnectWalletModal({ open, onOpenChange }: ConnectWalletModalProps) {
  const [email, setEmail] = useState("")
  const [isConnecting, setIsConnecting] = useState(false)
  const [showMobileInstructions, setShowMobileInstructions] = useState(false)
  const { isConnected, account, error, connect } = useMetaMaskConnect()

  const handleMetaMaskConnect = async () => {
    setIsConnecting(true)
    try {
      await connect()
      if (!error) {
        // 连接成功，关闭弹窗
        setTimeout(() => {
          onOpenChange(false)
        }, 1000)
      }
    } finally {
      setIsConnecting(false)
    }
  }

  const handleMobileConnect = () => {
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    const isLocalhost = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'
    
    if (isMobile && isLocalhost) {
      // 在本地开发环境下，显示移动端说明
      setShowMobileInstructions(true)
      return
    }
    
    handleMetaMaskConnect() // 使用MetaMask连接逻辑
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[450px] bg-white border border-gray-200 p-0 overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-6 text-white relative">
          <button
            onClick={() => onOpenChange(false)}
            className="absolute right-4 top-4 text-white/80 hover:text-white transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
              <span className="text-lg font-bold">B</span>
            </div>
            <div>
              <h2 className="text-xl font-bold">CONNECT</h2>
              <p className="text-sm text-white/90">Join the Web3 revolution</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Connection Status */}
          {isConnected && account && (
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-green-700 font-medium">Connected Successfully!</span>
              </div>
              <p className="text-sm text-green-600 mt-1">
                Account: {account.slice(0, 6)}...{account.slice(-4)}
              </p>
            </div>
          )}

          {/* Error Message */}
          {error && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <span className="text-red-700 font-medium">Connection Failed</span>
              </div>
              <p className="text-sm text-red-600 mt-1">{error}</p>
            </div>
          )}

          {/* Mobile Instructions */}
          {showMobileInstructions && (
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <AlertCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="text-blue-700 font-medium mb-2">移动端连接说明</h4>
                  <div className="text-sm text-blue-600 space-y-1">
                    <p>1. 在手机上打开 MetaMask 应用</p>
                    <p>2. 点击底部的「浏览器」标签</p>
                    <p>3. 输入你的本地IP地址 (如: 192.168.1.100:3000)</p>
                    <p>4. 重新访问这个页面进行连接</p>
                  </div>
                  <Button 
                    onClick={() => setShowMobileInstructions(false)}
                    variant="outline"
                    size="sm"
                    className="mt-3 text-blue-600 border-blue-300 hover:bg-blue-100"
                  >
                    我知道了
                  </Button>
                </div>
              </div>
            </div>
          )}
          {/* Wallet Options */}
          <div className="space-y-3">
            <Button
              onClick={handleMobileConnect}
              disabled={isConnecting || isConnected}
              className="w-full h-12 bg-purple-100 hover:bg-purple-200 text-purple-700 font-medium rounded-lg border-0 flex items-center justify-center gap-3 disabled:opacity-50"
            >
              {isConnecting ? (
                <Loader2 className="h-5 w-5 animate-spin" />
              ) : (
                <Smartphone className="h-5 w-5" />
              )}
              PLAY ON YOUR SMARTPHONE
            </Button>

            <Button
              disabled
              className="w-full h-12 bg-gray-300 text-gray-500 font-medium rounded-lg flex items-center justify-center gap-3 cursor-not-allowed"
            >
              <div className="w-5 h-5 bg-gray-400 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">C</span>
              </div>
              WITH COINBASE WALLET (Coming Soon)
            </Button>

            <Button
              onClick={handleMetaMaskConnect}
              disabled={isConnecting || isConnected}
              className="w-full h-12 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-lg flex items-center justify-center gap-3 disabled:opacity-50"
            >
              {isConnecting ? (
                <Loader2 className="h-5 w-5 animate-spin" />
              ) : (
                <div className="w-5 h-5 bg-orange-600 rounded flex items-center justify-center">
                  <span className="text-white text-xs">🦊</span>
                </div>
              )}
              WITH METAMASK WALLET
            </Button>
          </div>

          {/* Divider */}
          <div className="flex items-center gap-4">
            <div className="flex-1 h-px bg-gray-200"></div>
            <span className="text-sm text-gray-500 font-medium">OR</span>
            <div className="flex-1 h-px bg-gray-200"></div>
          </div>

          {/* Email Section */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email address
              </label>
              <Input
                type="email"
                placeholder="Enter email here"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full h-12 rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <Button
              className="w-full h-12 bg-green-500 hover:bg-green-600 text-white font-medium rounded-lg"
            >
              CONTINUE WITH EMAIL
            </Button>
          </div>

          {/* Terms */}
          <p className="text-xs text-gray-500 text-center leading-relaxed">
            By continuing, you agree to the{" "}
            <a href="#" className="text-blue-500 hover:underline">
              Terms of Service
            </a>{" "}
            &{" "}
            <a href="#" className="text-blue-500 hover:underline">
              Privacy Policy
            </a>
          </p>
        </div>
      </DialogContent>
    </Dialog>
  )
}
