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
import { X, Smartphone, Mail } from "lucide-react"

interface ConnectWalletModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export default function ConnectWalletModal({ open, onOpenChange }: ConnectWalletModalProps) {
  const [email, setEmail] = useState("")

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
          {/* Wallet Options */}
          <div className="space-y-3">
            <Button
              className="w-full h-12 bg-purple-100 hover:bg-purple-200 text-purple-700 font-medium rounded-lg border-0 flex items-center justify-center gap-3"
            >
              <Smartphone className="h-5 w-5" />
              PLAY ON YOUR SMARTPHONE
            </Button>

            <Button
              className="w-full h-12 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg flex items-center justify-center gap-3"
            >
              <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center">
                <span className="text-blue-500 text-xs font-bold">C</span>
              </div>
              WITH COINBASE WALLET
            </Button>

            <Button
              className="w-full h-12 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-lg flex items-center justify-center gap-3"
            >
              <div className="w-5 h-5 bg-orange-600 rounded flex items-center justify-center">
                <span className="text-white text-xs">🦊</span>
              </div>
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
