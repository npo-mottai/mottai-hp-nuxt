<template>
  <article class="bg-white rounded-xl shadow-md overflow-hidden">
    <div class="md:flex-shrink-0">
      <img
        width="400"
        height="247"
        class="h-48 w-full object-cover"
        :src="image"
        alt="title"
      />
    </div>
    <div class="p-4">
      <div class="tracking-wide text-sm font-semibold">
        {{ formatDate(createdAt) }} ({{ day(createdAt) }})
      </div>
      <nuxt-link
        :to="artichlePath(slug)"
        class="block truncate mt-1 text-lg leading-tight font-medium hover:underline"
        >{{ title }}</nuxt-link
      >
      <p class="mt-2 text-gray-500">
        {{ description }}
      </p>
      <div class="pt-2">
        <button
          class="py-1 px-2 bg-transparent hover:bg-gray-500 hover:text-white border rounded"
        >
          <nuxt-link :to="artichlePath(slug)">記事を読む</nuxt-link>
        </button>
      </div>
    </div>
  </article>
</template>

<script lang="ts">
import Vue from 'vue'
import { ThisTypedComponentOptionsWithRecordProps } from 'vue/types/options'

interface DataType {}

interface MethodType {
  formatDate(date: Date): string
  day(date: Date): string
}

interface ComputedType {}

interface PropType {
  title: string
  description: string
  slug: string
  createdAt: string
  image: string
}

export default {
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
  props: {
    title: '',
    description: '',
    createdAt: '',
    slug: '',
    image: '',
  },
} as ThisTypedComponentOptionsWithRecordProps<
  Vue,
  DataType,
  MethodType,
  ComputedType,
  PropType
>
</script>
