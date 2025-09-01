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
        setTimeout(() => {
          onOpen-Change(false)
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
      setShowMobileInstructions(true)
      return
    }
    
    handleMetaMaskConnect()
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      {/* ==================== 【核心修改在这里】 ==================== */}
      <DialogContent className="
        max-w-sm w-full  /* <-- 修改：使用 max-w-sm 和 w-full */
        bg-white border-0 p-0 overflow-hidden rounded-2xl shadow-xl
      ">
      {/* 
        解释:
        - `max-w-sm`: (max-width: 24rem / 384px) 设置一个优雅的最大宽度，适用于所有屏幕尺寸。
                      你可以根据需要换成 `max-w-xs` (更窄) 或 `max-w-md` (更宽)。
        - `w-full`: 确保在窄屏幕上，弹窗宽度会收缩以适应屏幕。
        - `shadcn/ui` 的 Dialog 会自动处理边距和居中，所以这样就足够了。
      */}
      {/* ========================================================== */}

        {/* Header (保持不变) */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 px-5 py-4 text-white relative">
          <button
            onClick={() => onOpenChange(false)}
            className="absolute right-3 top-3 text-white/80 hover:text-white transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 bg-white/20 rounded-lg flex items-center justify-center">
              <span className="text-sm font-bold">B</span>
            </div>
            <div>
              <h2 className="text-lg font-bold">CONNECT</h2>
              <p className="text-xs text-white/90">Join the Web3 revolution</p>
            </div>
          </div>
        </div>

        {/* Content (保持不变) */}
        <div className="px-5 py-4 space-y-4">
          {/* ... 你的所有内部逻辑和JSX都保持不变 ... */}
          {isConnected && account && (
            <div className="bg-green-50 border border-green-200 rounded-xl p-3">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-green-700 font-medium text-sm">Connected Successfully!</span>
              </div>
              <p className="text-xs text-green-600 mt-1">
                Account: {account.slice(0, 6)}...{account.slice(-4)}
              </p>
            </div>
          )}

          {error && (
            <div className="bg-red-50 border border-red-200 rounded-xl p-3">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <span className="text-red-700 font-medium text-sm">Connection Failed</span>
              </div>
              <p className="text-xs text-red-600 mt-1">{error}</p>
            </div>
          )}

          {showMobileInstructions && (
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-3">
              <div className="flex items-start gap-3">
                <AlertCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="text-blue-700 font-medium mb-2 text-sm">移动端连接说明</h4>
                  <div className="text-xs text-blue-600 space-y-1">
                    <p>1. 在手机上打开 MetaMask 应用</p>
                    <p>2. 点击底部的「浏览器」标签</p>
                    <p>3. 输入你的本地IP地址 (如: 192.168.1.100:3000)</p>
                    <p>4. 重新访问这个页面进行连接</p>
                  </div>
                  <Button 
                    onClick={() => setShowMobileInstructions(false)}
                    variant="outline"
                    size="sm"
                    className="mt-2 text-blue-600 border-blue-300 hover:bg-blue-100 h-7 px-3 text-xs"
                  >
                    我知道了
                  </Button>
                </div>
              </div>
            </div>
          )}

          <div className="space-y-2.5">
            <Button
              onClick={handleMobileConnect}
              disabled={isConnecting || isConnected}
              className="w-full h-11 bg-purple-100 hover:bg-purple-200 text-purple-700 font-medium rounded-xl border-0 flex items-center justify-center gap-2.5 disabled:opacity-50 text-sm"
            >
              {isConnecting ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <Smartphone className="h-4 w-4" />
              )}
              PLAY ON YOUR SMARTPHONE
            </Button>

            <Button
              disabled
              className="w-full h-11 bg-gray-200 text-gray-500 font-medium rounded-xl flex items-center justify-center gap-2.5 cursor-not-allowed text-sm"
            >
              <div className="w-4 h-4 bg-gray-400 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">C</span>
              </div>
              WITH COINBASE WALLET (Coming Soon)
            </Button>

            <Button
              onClick={handleMetaMaskConnect}
              disabled={isConnecting || isConnected}
              className="w-full h-11 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-xl flex items-center justify-center gap-2.5 disabled:opacity-50 text-sm"
            >
              {isConnecting ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <div className="w-4 h-4 bg-orange-600 rounded flex items-center justify-center">
                  <span className="text-white text-xs">🦊</span>
                </div>
              )}
              WITH METAMASK WALLET
            </Button>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex-1 h-px bg-gray-200"></div>
            <span className="text-xs text-gray-400 font-medium">OR</span>
            <div className="flex-1 h-px bg-gray-200"></div>
          </div>

          <div className="space-y-3">
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1.5">
                Email address
              </label>
              <Input
                type="email"
                placeholder="Enter email here"
                value={email}
                onChange={(e) => setEmail(e.targe-t.value)}
                className="w-full h-10 rounded-xl border-gray-200 focus:border-blue-400 focus:ring-1 focus:ring-blue-400 text-sm"
              />
            </div>

            <Button
              className="w-full h-11 bg-green-500 hover:bg-green-600 text-white font-medium rounded-xl text-sm"
            >
              CONTINUE WITH EMAIL
            </Button>
          </div>

          <p className="text-xs text-gray-400 text-center leading-relaxed px-2">
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