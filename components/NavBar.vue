<template>
  <div>
    <div
      class="fixed top-0 right-0 m-1 p-3 text-xs font-mono text-white h-6 w-6 rounded-full flex items-center justify-center bg-gray-700 sm:bg-pink-500 md:bg-orange-500 lg:bg-green-500 xl:bg-blue-500"
    >
      <div class="block sm:hidden md:hidden lg:hidden xl:hidden">al</div>
      <div class="hidden sm:block md:hidden lg:hidden xl:hidden">sm</div>
      <div class="hidden sm:hidden md:block lg:hidden xl:hidden">md</div>
      <div class="hidden sm:hidden md:hidden lg:block xl:hidden">lg</div>
      <div class="hidden sm:hidden md:hidden lg:hidden xl:block">xl</div>
    </div>
    <nav class="lg:flex my-3">
      <div class="flex justify-between">
        <div class="flex-none mx-6">
          <nuxt-link to="/" class="text-blue-500 hover:text-blue-800">
            <img
              class=""
              src="/image/mottai-logo.svg"
              alt="NPO法人 MOTTAI"
              @click="fold"
            />
          </nuxt-link>
        </div>
        <div class="my-auto">
          <button
            class="flex items-center mx-6 px-2 py-2 border rounded text-teal-lighter border-teal-light hover:text-white hover:border-white lg:hidden"
            @click="toggle"
          >
            <svg
              class="h-3 w-3"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path v-show="!isOpen" :d="menuIcon" />
              <path v-show="isOpen" :d="closeIcon" />
            </svg>
          </button>
        </div>
      </div>
      <div class="lg:my-auto lg:block" :class="isOpen ? 'block' : 'hidden'">
        <ul class="lg:flex">
          <li class="mt-4 lg:mt-0" @click="fold">
            <nuxt-link
              to="/about/"
              class="text-blue-500 hover:text-blue-800 block px-8 py-2 lg:px-2"
              >私たちについて</nuxt-link
            >
          </li>
          <li class="" @click="fold">
            <nuxt-link
              to="/activities/"
              class="text-blue-500 hover:text-blue-800 block px-8 py-2 lg:px-2"
              >MOTTAIの活動</nuxt-link
            >
          </li>
          <li class="" @click="fold">
            <nuxt-link
              to="/about/#media"
              class="text-blue-500 hover:text-blue-800 block px-8 py-2 lg:px-2"
              >メディア掲載</nuxt-link
            >
          </li>
          <li class="" @click="fold">
            <nuxt-link
              to="/news/"
              class="text-blue-500 hover:text-blue-800 block px-8 py-2 lg:px-2"
              >ニュース</nuxt-link
            >
          </li>
          <li class="" @click="fold">
            <nuxt-link
              to="/support/"
              class="text-blue-500 hover:text-blue-800 block px-8 py-2 lg:px-2"
              >サポートする</nuxt-link
            >
          </li>
          <li class="" @click="fold">
            <nuxt-link
              to="/contact/"
              class="text-blue-500 hover:text-blue-800 block px-8 py-2 lg:px-2"
              >お問い合わせ</nuxt-link
            >
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mdiMenu, mdiClose } from '@mdi/js'
import { ThisTypedComponentOptionsWithRecordProps } from 'vue/types/options'

interface DataType {
  isOpen: boolean
  menuIcon: string
  closeIcon: string
}

interface MethodType {
  toggle(): void
  fold(): void
}

interface ComputedType {}

interface PropType {}

export default {
  data() {
    return {
      isOpen: false,
      menuIcon: mdiMenu,
      closeIcon: mdiClose,
    }
  },
  methods: {
    toggle(): void {
      this.isOpen = !this.isOpen
    },
    fold(): void {
      this.isOpen = false
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
