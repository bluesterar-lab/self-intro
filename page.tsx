import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Yin Xiangkun - Digital Marketing Portfolio',
  description: '尹相坤的个人简历与作品集 | 数字营销管培生 / 品牌数字化运营',
}

export default function Page() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold mb-4">欢迎来到我的个人主页</h1>
      <p className="text-muted-foreground">
        页面基础框架已修复完毕，您可以开始在这里添加您的具体组件了。
      </p>
    </main>
  )
}
