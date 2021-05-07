<template>
  <div class="div--topic-contanier">
    <div class="pb-4">
      <h2
        class="h2--primary-orange text-3xl md:text-4xl mt-6 mb-3 pl-3 font-bold border-l-8"
      >
        ニュース一覧
      </h2>
    </div>
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
