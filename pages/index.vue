<template>
  <div class="">
    <div class="">
      <h2
        class="h2--primary-orange text-3xl md:text-4xl mt-6 mb-3 pl-3 font-bold border-l-8"
      >
        MOTTAIとは
      </h2>
      <p class="pb-3 md:text-lg">
        農家や漁師や猟師の人口が著しく減っています。昭和50年から平成30年頃にかけて、農家500万→170万人、漁師50万→15万人、猟師50万→5万人。そして大半が65歳以上という状態です。
      </p>
      <p class="pb-3 md:text-lg">
        一方で東京一極集中が進み、農家や漁師や猟師の知り合いがいる都市部の人がどんどんいなくなっています。このような状況の中で、一次体験を増やし、関係人口を増やし、食について考える機会を増やすため、2020年にNPO法人MOTTAIが創設されました。
      </p>
      <div class="text-center my-auto">
        <button
          class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        >
          <nuxt-link to="/about/">NPO法人MOTTAIの詳細</nuxt-link>
        </button>
      </div>
    </div>

    <div class="">
      <h2
        class="h2--primary-orange text-3xl md:text-4xl mt-6 mb-3 pl-3 font-bold border-l-8"
      >
        MOTTAIの活動
      </h2>
      <p class="pb-3 md:text-lg">
        MOTTAIでは、次のような活動に取り組んでいます。
      </p>
      <div class="md:flex pb-3">
        <div class="md:flex-shrink-0">
          <img
            width="400"
            height="300"
            class="rounded-lg md:w-72"
            src="/image/activity-1-trap-owner.jpg"
            alt="罠オーナー制度"
          />
        </div>
        <div class="mb-6 md:mb-0 mt-2 md:mt-0 md:ml-6">
          <div class="tracking-wide font-bold text-xl">罠オーナー制度</div>
          <p class="mt-2">
            市民オーナーが罠の狩猟にかかる資金などを提供し、見返りとして狩猟や農業体験などをオーナーに提供するという仕組みです。獣害対策、関係人口増加、環境教育の機会増加、猟師の負担軽減などが見込まれます。
          </p>
        </div>
      </div>
      <div class="md:flex pb-3">
        <div class="md:flex-shrink-0">
          <img
            width="400"
            height="300"
            class="rounded-lg md:w-72"
            src="/image/activity-2-mottai-night.jpg"
            alt="モッタイNight"
          />
        </div>
        <div class="mb-6 md:mb-0 mt-2 md:mt-0 md:ml-6">
          <div class="tracking-wide font-bold text-xl">モッタイNight</div>
          <p class="mt-2">
            廃棄になりそうな食材を持ち寄って、カレーや鍋などを作る料理会です。元は代表菅田の友人が始めた「地球にちょこっと恩返し」をコンセプトに行われる活動でしたが、名前をのれん分けしてもらうことで様々な場所で行われるようになりました。
          </p>
        </div>
      </div>
      <div class="md:flex pb-3">
        <div class="md:flex-shrink-0">
          <img
            width="400"
            height="300"
            class="rounded-lg md:w-72"
            src="/image/activity-3-other.jpg"
            alt="体験事業"
          />
        </div>
        <div class="mt-2 md:mt-0 md:ml-6">
          <div class="tracking-wide font-bold text-xl">体験事業</div>
          <p class="mt-2">
            上記プロジェクト以外にも、禅から学ぶ食体験、古民家改装、農業体験、漁業体験、DIYなど様々な体験を随時企画していきます。
          </p>
        </div>
      </div>
      <div class="text-center my-auto">
        <button
          class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        >
          <nuxt-link to="/activities/">MOTTAIの活動の詳細</nuxt-link>
        </button>
      </div>
    </div>

    <div class="">
      <h2
        class="h2--primary-orange text-3xl md:text-4xl mt-6 mb-3 pl-3 font-bold border-l-8"
      >
        メディア掲載
      </h2>
      <p class="pb-3 md:text-lg">
        今までに次のようなメディアに掲載して頂きました。
      </p>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 pb-3">
        <div>
          <h3 class="pt-4 pb-2 truncate">TEDx Keio USFC 登壇</h3>
          <div class="md:flex-shrink-0">
            <a
              href="https://www.youtube.com/watch?v=nAWJgywLsAw&ab_channel=TEDxTalks"
              target="_blank"
            >
              <img
                width="400"
                height="300"
                class="rounded-lg"
                src="/image/youtube-1-tedx.png"
                alt="YouTube TedxKeioUSFC"
              />
            </a>
          </div>
        </div>
        <div>
          <h3 class="pt-4 pb-2 truncate">食べるを考える</h3>
          <div class="md:flex-shrink-0">
            <a
              href="https://www.youtube.com/watch?v=KiLChQ3Mwkg&feature=youtu.be&ab_channel=NANAME"
              target="_blank"
            >
              <img
                width="400"
                height="300"
                class="rounded-lg"
                src="/image/youtube-2-taberu-wo-kangaeru.png"
                alt="YouTube 食べるを考える"
              />
            </a>
          </div>
        </div>
        <div>
          <h3 class="pt-4 pb-2 truncate">
            ANN News "食"のウラ側にある命の重さを考える
          </h3>
          <div class="md:flex-shrink-0">
            <a
              href="https://www.youtube.com/watch?v=mK2iOG8F-wk&ab_channel=ANNnewsCH"
              target="_blank"
            >
              <img
                width="400"
                height="300"
                class="rounded-lg"
                src="/image/youtube-3-sdgs.png"
                alt="YouTube 食のウラ側にある命の重さを考える"
              />
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class="">
      <h2
        class="h2--primary-orange text-3xl md:text-4xl mt-6 mb-3 pl-3 font-bold border-l-8"
      >
        ニュース
      </h2>
      <p class="pb-3 md:text-lg">
        MOTTAIの最新の活動やニュースは次の通りです。
      </p>
      <div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
          <NewsCard
            v-for="(article, index) in articles"
            :key="index"
            :title="article.title"
            :description="article.description"
            :created-at="article.createdAt"
            :slug="article.slug"
            :image="article.image"
          />
        </div>
        <div class="text-center my-auto">
          <button
            class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          >
            <nuxt-link to="/news/">ニュース一覧</nuxt-link>
          </button>
        </div>
      </div>
    </div>

    <div class="">
      <h2
        class="h2--primary-orange text-3xl md:text-4xl mt-6 mb-3 pl-3 font-bold border-l-8"
      >
        MOTTAIをサポートする
      </h2>
      <p class="pb-3 md:text-lg">
        MOTTAIの活動や理念に共感してもらえる仲間を探しています。プロボノやインターンや会員としての参加、寄付支援、講演依頼など様々な形でMOTTAIをサポートしてみませんか？
      </p>
      <div class="text-center my-auto">
        <button
          class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        >
          <nuxt-link to="/support/">MOTTAIをサポートする</nuxt-link>
        </button>
      </div>
    </div>

    <div class="">
      <h2
        class="h2--primary-orange text-3xl md:text-4xl mt-6 mb-3 pl-3 font-bold border-l-8"
      >
        お問い合わせ
      </h2>
      <p class="pb-3 md:text-lg">
        活動内容についてのご不明点、モッタイナイト・罠オーナー制度・体験事業・各種サポートについてのお問い合わせ、講演依頼、取材の依頼などは、こちらのフォームよりご連絡下さい。
      </p>
    </div>
    <contact-form />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  async asyncData({ $content }: { $content: any }) {
    const query = await $content('news').sortBy('createdAt', 'desc').limit(4)
    const articles = await query.fetch()
    return { articles }
  },
})
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
* {
  color: #222222;
}

.container {
  margin: 0 auto;
  /* min-height: 100vh; */
  /* display: flex; */
  /* justify-content: center; */
  /* align-items: center; */
  /* text-align: center; */
}
</style>
