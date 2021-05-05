<template>
  <div
    class="bg-cover py-20 md:py-40 opacity-90"
    style="background-image: url(/image/header-background.jpg)"
  >
    <div class="">
      <h1 class="mb-2 text-center text-white text-3xl md:text-6xl font-bold">
        NPO 法人 MOTTAI
      </h1>
      <p class="px-4 text-center text-white sm:text-lg md:text-3xl font-bold">
        {{ subTitle }}
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { ThisTypedComponentOptionsWithRecordProps } from 'vue/types/options'

interface DataType {}

interface MethodType {}

interface ComputedType {
  subTitle(): string
}

interface PropType {}

export default {
  computed: {
    subTitle(): string {
      const currentRouteName: string = this.$nuxt.$route.name?.toString()!
      if (currentRouteName === 'index') {
        return '当たり前の裏側にアクセスしやすい社会を創る'
      } else if (currentRouteName === 'about') {
        return '私たちについて'
      } else if (currentRouteName === 'activities') {
        return 'MOTTAIの活動'
      } else if (currentRouteName === 'news') {
        return 'ニュース'
      } else if (currentRouteName === 'support') {
        return 'MOTTAIをサポートする'
      } else if (currentRouteName === 'contact') {
        return 'お問い合わせ'
      } else if (currentRouteName === 'donation') {
        return '寄付によるサポート'
      } else if (currentRouteName === 'pro-bono') {
        return 'メンバーとしてサポート'
      } else if (currentRouteName === 'request') {
        return '講演依頼などでサポート'
      } else {
        return ''
      }
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
