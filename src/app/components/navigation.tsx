'use client'

import Link from 'next/link'
import Image from 'next/image'

// ナビゲーション
const Navigation = () => {
  return (
    <header className="border-b border-gray-200 py-5">
      <div className="container max-w-screen-xl mx-auto relative flex justify-center items-center">
        <Link href="/" className="font-bold text-xl cursor-pointer text-white">
          ようこそ、Career Buddyへ
        </Link>
      </div>
      <div className="flex justify-center">
        <p className="text-xl text-gray">
          Career Buddyは、生成AIと音声AIを活用して、アバターにカジュアルにキャリア相談ができるサービスです
        </p>
        
      </div>
      <div className="flex justify-center">
        <p className="text-xl text-gray">
          以下のテキストフォームか音声認識から、相談することができます
        </p>
      </div>
      <div className="flex justify-center items-center py-5">
        <Image
          src="/career_consul.jpg"
          alt="/next.svg"
          width="550"
          height="550"
        />
      </div>
    </header>
  )
}

export default Navigation