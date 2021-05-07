<template>
  <div>
    <topic-path />
    <div class="div--topic-contanier">
      <h2
        class="h2--primary-orange text-3xl md:text-4xl mt-6 mb-3 pl-3 font-bold border-l-8"
      >
        MOTTAIの想い
      </h2>
      <p class="pb-3 md:text-lg">
        農家や漁師や猟師の人口が減っている一方で、東京一極集中が進んでいます。それに伴って、農家などの知り合いがいる都市部の人がどんどんいなくなっているのが現状です。そんな中、MOTTAIは一次体験を増やし、関係人口を増やし、食について考える機会を増やすべく活動しています。活動や理念に共感していただけるみなさんのサポート・寄付・支援などをお待ちしています。
      </p>

      <div class="div--topic-contanier">
        <h2
          class="h2--primary-orange text-3xl md:text-4xl mt-6 mb-3 pl-3 font-bold border-l-8"
        >
          MOTTAIをサポートする
        </h2>
        <p class="pb-3 md:text-lg">
          MOTTAIの活動や理念に共感してもらえる仲間を探しています。寄付による支援、プロボノやインターンや会員としての参加、講演依頼など様々な形でMOTTAIをサポートしてみませんか？
        </p>
        <div
          class="grid grid-cols-1 gap-3 pb-3 sm:mx-4 md:mx-12 lg:mx-40 xl:mx-44"
        >
          <div
            class="sm:mx-16 md:mx-24 lg:mx-0 border border-grey-200 rounded-xl p-4"
          >
            <h3
              class="text-lg md:text-xl mb-2 text-blue-500 font-bold border-b-2 border-blue-500"
            >
              寄付によるサポート
            </h3>
            <p class="pb-3">
              食に関する体験を様々な地域で行い、多くの人を巻き込みながら「当たり前の裏側にアクセスしやすい社会を創る」ことがNPO法人MOTTAIの目指すミッションです。そのような活動の運営費用・施設使用料などのために寄付をお願いしています。
            </p>
            <div class="text-center">
              <button
                class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
              >
                <nuxt-link to="/donation/">寄付でサポートする</nuxt-link>
              </button>
            </div>
          </div>
          <div
            class="sm:mx-16 md:mx-24 lg:mx-0 border border-grey-200 rounded-xl p-4"
          >
            <h3
              class="text-lg md:text-xl mb-2 text-blue-500 font-bold border-b-2 border-blue-500"
            >
              メンバーとしてサポート
            </h3>
            <p class="pb-3">
              プロジェクトの企画・広報・マネジメントなど、MOTTAIの活動を手伝ってみたいという方や、猟師・農家・漁師の方で何か教えてみたい人などを募集しています。プロボノやインターンとしての参画も受け付けおりますので、お気軽にお問い合わせください。
            </p>
            <div class="text-center">
              <button
                class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
              >
                <nuxt-link to="/pro-bono/"
                  >メンバーとしてサポートする</nuxt-link
                >
              </button>
            </div>
          </div>
          <div
            class="sm:mx-16 md:mx-24 lg:mx-0 border border-grey-200 rounded-xl p-4"
          >
            <h3
              class="text-lg md:text-xl mb-2 text-blue-500 font-bold border-b-2 border-blue-500"
            >
              講演依頼などでサポート
            </h3>
            <p class="pb-3">
              代表の菅田悠介をはじめとするNPO法人MOTTAIのメンバーによる講演依頼や取材依頼など、様々なご依頼を受け付けております。お問い合わせフォームよりお気軽にお問い合わせいただき、ご希望の内容をお知らせください。
            </p>
            <div class="text-center">
              <button
                class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
              >
                <nuxt-link to="/request/">講演依頼などを申し込む</nuxt-link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
