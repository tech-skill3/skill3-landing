"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { ArrowLeft, Eye, EyeOff, Users, BookOpen } from "lucide-react"

export default function LoginPage() {
  const router = useRouter()
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const [showRoleDialog, setShowRoleDialog] = useState(false)

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setLoading(true)

    // 模拟登录验证
    if (username === "admin" && password === "123") {
      // 登录成功，显示角色选择弹窗
      setLoading(false)
      setShowRoleDialog(true)
    } else {
      setError("用户名或密码错误")
      setLoading(false)
    }
  }

  const handleRoleSelect = (role: 'student' | 'creator') => {
    setShowRoleDialog(false)
    if (role === 'creator') {
      router.push("/creator")
    } else {
      router.push("/student-center")
    }
  }

  return (
    <div className="min-h-screen bg-white flex">
      {/* 左侧图片区域 */}
      <div className="hidden lg:flex lg:flex-1 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
        </div>
        <div className="relative z-10 flex flex-col justify-center items-center p-12 text-white">
          <div className="max-w-md text-center">
            <h2 className="text-4xl font-bold mb-6">欢迎回来</h2>
            <p className="text-blue-100 text-lg leading-relaxed">
              登录您的账户，开始高效的工作流程管理之旅。我们为您提供最专业的SaaS解决方案。
            </p>
          </div>
          <div className="mt-12 w-full max-w-sm h-64 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center">
            <div className="text-white/60 text-6xl">📊</div>
          </div>
        </div>
      </div>

      {/* 右侧登录表单区域 */}
      <div className="flex-1 lg:max-w-md xl:max-w-lg 2xl:max-w-xl flex flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-800 mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            返回首页
          </Link>
          
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="size-10 rounded-lg bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center text-white font-bold">
                S
              </div>
              <span className="text-2xl font-bold text-gray-900">SaaSify</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              登录您的账户
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              还没有账户？{' '}
              <Link href="#" className="font-medium text-blue-600 hover:text-blue-500">
                立即注册
              </Link>
            </p>
          </div>

          <Card className="border border-gray-200 shadow-lg bg-white">
            <CardContent className="p-8 bg-white">
              <form className="space-y-6" onSubmit={handleLogin}>
                <div>
                  <Label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                    用户名
                  </Label>
                  <div className="mt-2">
                    <Input
                      id="username"
                      name="username"
                      type="text"
                      required
                      value={username}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)}
                      className="block w-full rounded-md border-gray-300 bg-gray-50 py-3 px-4 text-gray-900 placeholder-gray-500 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20 focus:bg-white transition-all duration-200"
                      placeholder="请输入用户名"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                    密码
                  </Label>
                  <div className="mt-2 relative">
                    <Input
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      required
                      value={password}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                      className="block w-full rounded-md border-gray-300 bg-gray-50 py-3 px-4 pr-12 text-gray-900 placeholder-gray-500 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20 focus:bg-white transition-all duration-200"
                      placeholder="请输入密码"
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      className="h-4 w-4 rounded border-blue-300 text-blue-600 focus:ring-blue-600"
                    />
                    <label htmlFor="remember-me" className="ml-3 block text-sm leading-6 text-gray-900">
                      记住我
                    </label>
                  </div>

                  <div className="text-sm leading-6">
                    <Link href="#" className="font-medium text-blue-600 hover:text-blue-500">
                      忘记密码？
                    </Link>
                  </div>
                </div>

                {error && (
                  <div className="rounded-md bg-red-50 p-4">
                    <div className="text-sm text-red-700">{error}</div>
                  </div>
                )}

                <div>
                  <Button
                    type="submit"
                    disabled={loading}
                    className="flex w-full justify-center rounded-md bg-blue-600 px-3 py-3 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
                  >
                    {loading ? "登录中..." : "登录"}
                  </Button>
                </div>
              </form>

              <div className="mt-6 text-center">
                <p className="text-xs text-gray-500">
                  演示账户：admin / 123
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* 角色选择弹窗 */}
      <Dialog open={showRoleDialog} onOpenChange={setShowRoleDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-center text-xl font-bold">选择您的身份</DialogTitle>
            <DialogDescription className="text-center">
              请选择您要进入的系统
            </DialogDescription>
          </DialogHeader>
          <div className="grid grid-cols-2 gap-4 py-4">
            <Button
              onClick={() => handleRoleSelect('student')}
              variant="outline"
              className="flex flex-col items-center gap-3 h-24 border-2 hover:border-blue-500 hover:bg-blue-50"
            >
              <Users className="h-8 w-8 text-blue-600" />
              <span className="font-medium">学员</span>
            </Button>
            <Button
              onClick={() => handleRoleSelect('creator')}
              variant="outline"
              className="flex flex-col items-center gap-3 h-24 border-2 hover:border-blue-500 hover:bg-blue-50"
            >
              <BookOpen className="h-8 w-8 text-blue-600" />
              <span className="font-medium">创作者</span>
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}