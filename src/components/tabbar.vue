<template>
  <van-tabbar route>
    <van-tabbar-item
     v-for="item in tabbarItems"
     replace
     :icon="item.icon" 
     :badge="item.badge"
     :to="item.path"
    >
      {{item.name}}
    </van-tabbar-item>
  </van-tabbar>

</template>

<script setup lang="ts">
import { ref } from 'vue';

const tabbarItems = [
  {
    name: '主页',
    icon: 'home-o',
    path: '/home',
    dot: false,
    badge: ''
  },
  {
    name: '学习',
    icon: 'records',
    path: '/study',
    dot: true,
    badge: 2
  },
  {
    name: '随记',
    icon: 'edit',
    path: '/essay',
    dot: false,
    badge: 5
  },
  {
    name: '留言',
    icon: 'chat-o',
    path: '/message',
    dot: false,
    badge: 20
  }
];

const active = ref('home');

</script>

<style scoped>
</style>
