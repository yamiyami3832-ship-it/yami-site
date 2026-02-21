"use client";

import { motion } from "framer-motion";
import { Star, Music, Youtube } from "lucide-react";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      
      {/* 星空背景 */}
      <div className="absolute inset-0 stars opacity-20" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 space-y-24">

        {/* Hero */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center space-y-6"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-purple-400">
            Yami Night Mode 🌙
          </h1>

          <p className="text-gray-400 max-w-2xl mx-auto">
            深夜沉浸系陪伴型 VTuber Fan Website
          </p>

          <div className="flex justify-center gap-4 pt-4">
            <a
              href="https://youtube.com"
              target="_blank"
              className="flex items-center gap-2 px-6 py-3 bg-red-600 rounded-lg hover:bg-red-700 transition"
            >
              <Youtube size={20} />
              前往 YouTube
            </a>
          </div>
        </motion.section>

        {/* 角色介紹 */}
        <section className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <div className="w-72 h-96 bg-gray-800 rounded-2xl shadow-2xl flex items-center justify-center text-gray-500 text-sm">
              角色立繪圖片
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl font-semibold text-purple-300">
              角色介紹
            </h2>
            <p className="text-gray-400 leading-relaxed">
              主打夜系沉浸氛圍與深夜陪伴感，
              在安靜的時刻與觀眾建立情緒連結。
            </p>
          </div>
        </section>

        {/* 內容卡片 */}
        <section className="space-y-10">
          <h2 className="text-3xl font-semibold text-center text-purple-300">
            頻道內容
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {["遊戲實況", "深夜雜談", "歌回"].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="rounded-2xl bg-gray-800 p-8 space-y-4 hover:scale-105 transition-transform"
              >
                <Star className="text-purple-400" />
                <h3 className="text-xl font-semibold">{item}</h3>
                <p className="text-gray-400 text-sm">
                  情緒價值與沉浸體驗為核心。
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 吉娃娃梗 */}
        <section className="bg-gray-900 rounded-2xl p-12 text-center shadow-2xl space-y-6">
          <h2 className="text-3xl font-semibold text-purple-300">
            🐶 吉娃娃傳說
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto leading-relaxed">
            粉絲之間流傳的可愛暱稱，
            代表社群的幽默與凝聚力。
          </p>
        </section>

        {/* Footer */}
        <footer className="text-center text-gray-500 text-sm pt-10 border-t border-gray-800 space-y-2">
          <div className="flex justify-center items-center gap-2 text-purple-400">
            <Music size={16} /> Night Mode Active
          </div>
          <div>© 2026 Yami Fan Website — Ultimate Edition</div>
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