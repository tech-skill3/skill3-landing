"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { StudentHeader } from "@/app/student-center/components/student-header"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Copy, Check, Users, Trophy } from "lucide-react"

export default function InvitePage() {
  const [copied, setCopied] = useState(false)
  const router = useRouter()
  // Placeholder referral code; replace with real data when available
  const referralCode = "GICyJr43Nj1NJOJhtsRhq1coBhrdgcmjX08LEiw86s="
  const referralUrl = `https://skill3.app/r/${referralCode}`

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(referralUrl)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } catch {
      setCopied(false)
    }
  }

  return (
    <div className="min-h-screen bg-white text-black dark:text-white dark:bg-neutral-900">
      {/* Unified student header */}
      <StudentHeader />

      <div className="container px-4 md:px-6 py-8 md:py-12">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="size-8 rounded-full bg-gradient-to-br from-purple-500 to-indigo-500" />
          <div className="text-sm text-neutral-600 dark:text-neutral-300">jimmy1231223</div>
        </div>

        <h1 className="text-2xl md:text-3xl font-semibold mb-2">Invite Friends to Earn Galxe Gold</h1>
        <p className="text-neutral-600 dark:text-neutral-300 mb-6">
          Invite new users to join Galxe and complete the specified 10 Quests, and you will receive
          <span className="mx-1">🟡</span>80.
        </p>

        {/* Referral Link */}
        <div className="mb-8">
          <div className="text-sm font-medium mb-2">My Referral Link</div>
          <div className="flex items-center gap-2">
            <Input readOnly value={referralUrl} className="bg-white border-neutral-200" />
            <Button onClick={handleCopy} variant="outline" className="rounded-md">
              {copied ? <Check className="size-4" /> : <Copy className="size-4" />}
            </Button>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Left: Overview */}
          <Card className="lg:col-span-2 border-neutral-200">
            <CardContent className="p-6">
              <h2 className="text-lg font-semibold mb-6">Overview</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                <div>
                  <div className="text-sm text-neutral-600 mb-2">Total GG Earn:</div>
                  <div className="flex items-center gap-2 text-2xl font-bold">
                    <span>🟡</span>
                    <span>0</span>
                  </div>
                </div>
                <div>
                  <div className="text-sm text-neutral-600 mb-2">Total Referrals:</div>
                  <div className="text-2xl font-bold">0</div>
                </div>
                <div>
                  <div className="text-sm text-neutral-600 mb-2">Completed Referrals:</div>
                  <div className="text-2xl font-bold">0</div>
                </div>
                <div>
                  <div className="text-sm text-neutral-600 mb-2">Incomplete Referrals:</div>
                  <div className="text-2xl font-bold">0</div>
                </div>
              </div>

              <div>
                <h3 className="text-base font-medium mb-4">My Referees</h3>
                <div className="border border-dashed border-neutral-200 rounded-md p-10 text-center text-neutral-500">
                  No records now
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Right: Promo Card */}
          <Card className="border-neutral-200">
            <CardContent className="p-6">
              <div className="rounded-xl bg-gradient-to-br from-[#5B6CFF] to-[#925CFF] p-6 text-white shadow-lg">
                <div className="text-right text-sm opacity-90">Earn up to</div>
                <div className="flex items-center justify-center my-6">
                  <div className="size-20 rounded-full bg-white/20 backdrop-blur flex items-center justify-center text-3xl font-bold">
                    🟡80
                  </div>
                </div>
                <div className="text-center font-medium">Invite a new user</div>
              </div>

              <div className="mt-6 space-y-3 text-sm text-neutral-600">
                <div className="flex items-center gap-2"><Users className="size-4" /> Invite friends with your link</div>
                <div className="flex items-center gap-2"><Trophy className="size-4" /> They complete 10 quests</div>
                <div className="flex items-center gap-2"><span>🟡</span> You receive GG rewards</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}


