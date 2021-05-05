<template>
  <div class="">
    <div class="container mx-auto px-8 sm:px-16 xl:px-48">
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
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-3">
          <div class="bg-white rounded-xl shadow-md overflow-hidden">
            <div class="md:flex-shrink-0">
              <img
                width="400"
                height="247"
                class="h-48 w-full object-cover"
                src="/image/news/2020−07−20−ito-eisuke/1.jpg"
                alt="2020-07-20 news thubmnail"
              />
            </div>
            <div class="p-4">
              <div class="tracking-wide text-sm font-semibold">
                2020-07-20 (月)
              </div>
              <a
                href="/"
                class="block truncate mt-1 text-lg leading-tight font-medium hover:underline"
                >メンバー自己紹介：伊東英祐</a
              >
              <p class="mt-2 text-gray-500">
                初めまして!!MOTTAIメンバー理事を務めさせて頂いてる慶應義塾大学環境情報学部の伊東英祐です。私と「自然、命の大切さ」の出会いの原点を遡ると、物心ついた頃かもしれません。私は物心つく前から家族に連れられ、夏には磯遊びをし、冬には雪山で雪遊びをするなど自然と触れ合いながら
              </p>
            </div>
          </div>
          <div class="bg-white rounded-xl shadow-md overflow-hidden">
            <div class="md:flex-shrink-0">
              <img
                width="400"
                height="247"
                class="h-48 w-full object-cover"
                src="/image/news/2020-07-19-sugata-yusuke/3.jpg"
                alt="2020-07-19 news thubmnail"
              />
            </div>
            <div class="p-4">
              <div class="tracking-wide text-sm font-semibold">
                2020-07-19 (日)
              </div>
              <a
                href="/"
                class="block truncate mt-1 text-lg leading-tight font-medium hover:underline"
                >メンバー自己紹介：菅田悠介</a
              >
              <p class="mt-2 text-gray-500">
                代表理事の菅田悠介です。慶應義塾大学環境情報学部を2019年の秋に卒業したのちに、小田原の古民家に移住し、都内のインフラ企業に往復4時間くらいかけて通いつつ、新米わな猟師をやりながら、NPOにて食について考えるきっかけ作りをしています。
              </p>
            </div>
          </div>
          <div class="bg-white rounded-xl shadow-md overflow-hidden">
            <div class="md:flex-shrink-0">
              <img
                width="400"
                height="247"
                class="h-48 w-full object-cover"
                src="/image/news/2020-07-18-npo-mottai-hp/ogp.png"
                alt="2020-07-18 news thubmnail"
              />
            </div>
            <div class="p-4">
              <div class="tracking-wide text-sm font-semibold">
                2020-07-18 (土)
              </div>
              <a
                href="/"
                class="block truncate mt-1 text-lg leading-tight font-medium hover:underline"
                >NPO法人MOTTAI ホームページ公開</a
              >
              <p class="mt-2 text-gray-500">
                NPO法人MOTTAIのHPを公開しました！今後、様々な活動の報告やイベントのお知らせ、その他NPO法人MOTTAIに関する最新のニュースなどを随時アップデートしていきます。ぜひご覧ください。
              </p>
            </div>
          </div>
        </div>
        <div class="text-center my-auto">
          <button
            class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          >
            <nuxt-link to="/news/">ニュース一覧</nuxt-link>
          </button>
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
    </div>
    <contact-form />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { ThisTypedComponentOptionsWithRecordProps } from 'vue/types/options'

interface DataType {
  isOpen: boolean
}

interface MethodType {
  toggle(): void
  fold(): void
}

interface ComputedType {
  showMainVisual(): boolean
  subTitle(): string
  selectedOption(): string
}

interface PropType {}

export default Vue.extend(
  {} as ThisTypedComponentOptionsWithRecordProps<
    Vue,
    DataType,
    MethodType,
    ComputedType,
    PropType
  >
)
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
