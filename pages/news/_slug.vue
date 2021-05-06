<template>
  <article class="max-w-screen-sm my-8 px-6">
    <topic-path />
    <h1 class="font-bold">
      {{ article.title || '' }}
    </h1>
    <span
      >投稿日：{{ formatDate(article.createdAt) || '' }} ({{
        day(article.createdAt) || ''
      }})</span
    >
    <div class="news-content">
      <nuxt-content :document="article" />
    </div>
  </article>
</template>

<script lang="ts">
export default {
  async asyncData({ $content, params }: { $content: any; params: any }) {
    const query = $content('news', params.slug)
    const article = await query.fetch()
    return { article }
  },
  methods: {
    formatDate(date: Date): string {
      const options: any = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('ja', options)
    },
    day(date: Date): string {
      const dayOfWeek = ['日', '月', '火', '水', '木', '金', '土']
      const obj = new Date(date)
      return dayOfWeek[obj.getDay()]
    },
    artichlePath(slug: string): string {
      return '/news/' + slug
    },
  },
}
</script>

<style lang="postcss" scoped>
::v-deep h2 {
  color: var(--primary-orange);
  border-color: var(--primary-orange);
  @apply text-xl md:text-2xl mt-6 mb-3 pl-3 font-bold border-l-8;
}

::v-deep a {
  @apply text-blue-500 hover:underline;
}

::v-deep p {
  @apply pb-3;
}

::v-deep ul {
  @apply pl-6 pb-2;
}

::v-deep li {
  @apply list-disc;
}

::v-deep hr {
  @apply pb-3;
}
</style>
