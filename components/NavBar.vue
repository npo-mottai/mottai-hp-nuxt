<template>
  <div>
    <!-- <window-size-indicator /> -->
    <nav class="lg:flex my-3">
      <div class="flex justify-between">
        <div class="flex-none mx-4 md:mx-6">
          <nuxt-link to="/" class="text-gray-600 hover:text-blue-700">
            <img
              width="161.45"
              height="48.91"
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
              class="text-gray-600 hover:text-blue-700 block px-8 py-2 lg:px-2"
              >私たちについて</nuxt-link
            >
          </li>
          <li @click="fold">
            <nuxt-link
              to="/activities/"
              class="text-gray-600 hover:text-blue-700 block px-8 py-2 lg:px-2"
              >MOTTAIの活動</nuxt-link
            >
          </li>
          <li @click="fold">
            <nuxt-link
              to="/about/#media"
              class="text-gray-600 hover:text-blue-700 block px-8 py-2 lg:px-2"
              >メディア掲載</nuxt-link
            >
          </li>
          <li @click="fold">
            <nuxt-link
              to="/news/"
              class="text-gray-600 hover:text-blue-700 block px-8 py-2 lg:px-2"
              >ニュース</nuxt-link
            >
          </li>
          <li @click="fold">
            <nuxt-link
              to="/support/"
              class="text-gray-600 hover:text-blue-700 block px-8 py-2 lg:px-2"
              >サポートする</nuxt-link
            >
          </li>
          <li @click="fold">
            <nuxt-link
              to="/contact/"
              class="text-gray-600 hover:text-blue-700 block px-8 py-2 lg:px-2"
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
