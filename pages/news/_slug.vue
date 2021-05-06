<template>
  <article class="max-w-screen-sm my-8 px-6">
    <topic-path />
    <h1 class="font-bold">
      {{ article.title || '' }}
    </h1>
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
