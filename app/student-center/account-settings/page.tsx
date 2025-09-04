"use client"

import { useRef, useState } from "react"
import { StudentHeader } from "@/app/student-center/components/student-header"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function AccountSettingsPage() {
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [avatarUrl, setAvatarUrl] = useState<string | null>(null)

  const onSelectAvatar: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const file = e.target.files?.[0]
    if (!file) return
    if (file.size > 5 * 1024 * 1024) {
      alert("Image must be <= 5MB")
      return
    }
    const url = URL.createObjectURL(file)
    setAvatarUrl(url)
  }
  return (
    <div className="min-h-screen bg-white text-black dark:text-white dark:bg-neutral-900">
      <StudentHeader />
      <div className="container px-4 md:px-6 py-8 md:py-12">
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-semibold">Edit Profile</h1>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Left nav */}
          <Card className="lg:col-span-1 border-neutral-200">
            <CardContent className="p-0">
              <nav className="py-4">
                {[
                  "Profile Setting",
                  "Wallet Address",
                  "Social Account",
                ].map((item, i) => (
                  <div key={i} className="px-4 py-3 text-sm font-medium text-neutral-700 hover:bg-neutral-50 cursor-pointer">
                    {item}
                  </div>
                ))}
              </nav>
            </CardContent>
          </Card>

          {/* Right content */}
          <Card className="lg:col-span-3 border-neutral-200">
            <CardContent className="p-6">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Profile image uploader */}
                <div className="flex items-start gap-6">
                  <div className="relative">
                    <div className="size-44 rounded-full ring-1 ring-neutral-200 overflow-hidden bg-gradient-to-br from-pink-400 via-orange-300 to-yellow-300">
                      {avatarUrl && (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img src={avatarUrl} alt="Avatar preview" className="w-full h-full object-cover" />
                      )}
                    </div>
                    <div className="mt-3">
                      <Button size="sm" className="rounded-full h-8 px-4" onClick={() => fileInputRef.current?.click()}>
                        Upload
                      </Button>
                      <input
                        ref={fileInputRef}
                        type="file"
                        accept="image/png,image/jpeg,image/gif"
                        className="hidden"
                        onChange={onSelectAvatar}
                      />
                    </div>
                  </div>
                  <div className="text-sm text-neutral-600">
                    <div className="font-medium text-neutral-900 mb-2">Profile Image</div>
                    <p>We recommend an image of at least 300x300. GIFs work too. Max 5mb.</p>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Username</label>
                  <Input defaultValue="jimmy1231223" className="bg-white border-neutral-200" />
                  <p className="mt-2 text-xs text-neutral-500">
                    Changes allowed every 6 months; must be 4+ characters with letters, numbers, or underscores, and not taken
                  </p>
                </div>
              </div>

              <div className="mt-10">
                <Button className="rounded-full h-12 px-8 text-base bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg text-white">Save</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}


