<template>
  <div class="py-4">
    <span v-for="(item, index) in topicPaths" :key="index">
      <nuxt-link :to="item.path">{{ item.name }}</nuxt-link>
      /
    </span>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { ThisTypedComponentOptionsWithRecordProps } from 'vue/types/options'

interface DataType {}

interface MethodType {
  topicPathName(value: string): string
}

interface ComputedType {
  topicPaths(value: string): string
}

interface PropType {}

interface TopicPathObjectType {
  name: string
  path: string
}

export default {
  methods: {
    topicPathName(value: string): string {
      if (value === 'about') {
        return '私たちについて'
      } else if (value === 'activities') {
        return 'MOTTAIの活動'
      } else if (value === 'news') {
        return 'ニュース'
      } else if (value === 'support') {
        return 'MOTTAIをサポートする'
      } else if (value === 'donation') {
        return '寄付でサポートする'
      } else if (value === 'pro-bono') {
        return 'メンバーとしてサポートする'
      } else if (value === 'request') {
        return '講演依頼などでサポートする'
      } else if (value === 'contact') {
        return 'お問い合わせ'
      } else if (value === 'privacy') {
        return 'プライバシーポリシー'
      } else {
        return value
      }
    },
  },
  computed: {
    topicPaths(): TopicPathObjectType[] {
      const topicPaths: TopicPathObjectType[] = []
      const currentRoute: string = this.$nuxt.$route.path?.toString()!
      const result = currentRoute.replace(/\/$/, '').split('/')
      topicPaths.push({ name: 'ホーム', path: '/' })
      let previousPath = ''
      for (let i = 0; i < result.length - 1; i++) {
        const path = previousPath + '/' + result[i + 1]
        topicPaths.push({
          name: this.topicPathName(result[i + 1]),
          path,
        })
        previousPath = path
      }
      return topicPaths
    },
  },
} as ThisTypedComponentOptionsWithRecordProps<
  Vue,
  DataType,
  MethodType,
  ComputedType,
  PropType
>
</script>

<style lang="postcss" scoped>
::v-deep a {
  @apply text-blue-500 hover:underline;
}
</style>
