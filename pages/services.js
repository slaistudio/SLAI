import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function Services() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10 text-gray-800">
      <h1 className="text-4xl font-bold text-center text-[#5b3a1d] mb-12">服務項目</h1>
      <div className="flex flex-col md:flex-row md:justify-center md:space-x-12 space-y-8 md:space-y-0">
        {/* 核心業務區塊 */}
        <div className="w-full md:w-1/2 max-w-md mx-auto border-2 border-[#c4a484] p-6 rounded-xl shadow-md bg-white bg-opacity-90">
          <h2 className="text-2xl font-semibold text-[#7e441f] mb-4 text-center">核心業務</h2>
          <ul className="list-disc list-inside text-left space-y-2">
            <li>語音與文字資料收集</li>
            <li>客製化語料庫建構與分類</li>
            <li>對話紀錄標註與語意標記服務</li>
            <li>大規模語言模型微調訓練</li>
            <li>語意理解與自動問答系統建構</li>
            <li>多語言模型跨語訓練與應用</li>
          </ul>
        </div>

        {/* 延伸應用區塊 */}
        <div className="w-full md:w-1/2 max-w-md mx-auto border-2 border-[#c4a484] p-6 rounded-xl shadow-md bg-white bg-opacity-90">
          <h2 className="text-2xl font-semibold text-[#7e441f] mb-4 text-center">延伸應用領域</h2>
          <ul className="list-disc list-inside text-left space-y-2">
            <li>教育平台智慧助教語言引擎</li>
            <li>電商商品描述生成與翻譯優化</li>
            <li>社群媒體自動回應與輿情分析</li>
            <li>車用媒體對答訓練模組</li>
            <li>政府與非營利組織語意訓練資料處理</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}
