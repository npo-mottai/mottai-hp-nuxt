<template>
  <div class="">
    <div class="container mx-auto px-8 sm:px-16 xl:px-48">
      <div class="">
        <h2
          class="h2--primary-orange text-3xl md:text-4xl mt-6 mb-3 pl-3 font-bold border-l-8"
        >
          ニュース一覧
        </h2>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-3">
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
    </div>
  </div>
</template>

<script lang="ts">
export default {
  async asyncData({ $content }: { $content: any }) {
    const query = await $content('news').sortBy('createdAt', 'desc').limit(15)
    const articles = await query.fetch()
    return { articles }
  },
}
</script>
