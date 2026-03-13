"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Youtube, Star, Music } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* 背景星點 */}
      <div className="absolute inset-0 stars opacity-20"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 space-y-32">
        
        {/* Hero 區塊 */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center space-y-8"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-purple-400">
            Yami Night Mode 🌙
          </h1>

          <p className="text-gray-400 text-lg">
            吉娃娃型 VTuber Fan Website
          </p>

          <a
            href="https://www.youtube.com/@%E9%97%87Yami-ch"
            target="_blank"
            className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 px-6 py-3 rounded-xl transition"
          >
            <Youtube size={20} />
            前往 YouTube
          </a>
        </motion.section>

        {/* 角色介紹 */}
        <section className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* 圖片 */}
          <div className="flex justify-center">
            <Image
              src="/yami.png"
              alt="Yami Character"
              width={400}
              height={600}
              className="rounded-2xl shadow-2xl"
              priority
            />
          </div>

          {/* 文字 */}
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold text-purple-300">
              角色介紹
            </h2>
            <p className="text-gray-400 leading-relaxed">
              主打吵吵鬧鬧陪伴感，
              與觀眾建立情緒連結。
            </p>
          </div>
        </section>

        {/* 內容卡片 */}
        <section className="space-y-10">
          <h2 className="text-3xl font-semibold text-center text-purple-300">
            頻道內容
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {["遊戲實況", "雜談", "歌回"].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="rounded-2xl bg-gray-800 hover:scale-105 transition-transform p-8 space-y-4 shadow-xl">
                  <Star className="text-purple-400" />
                  <h3 className="text-xl font-semibold">{item}</h3>
                  <p className="text-gray-400 text-sm">
                    情緒價值為核心。
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center text-gray-500 text-sm pt-10 border-t border-gray-800 space-y-2">
          <div className="flex justify-center items-center gap-2 text-purple-400">
            <Music size={16} /> Night Mode Active
          </div>
          <div>© 2026 Yami Fan Website</div>
        </footer>
      </div>

      <style jsx>{`
        .stars {
          width: 100%;
          height: 100%;
          background-image: radial-gradient(white 1px, transparent 1px);
          background-size: 40px 40px;
        }
      `}</style>
    </div>
  );
}