<script setup>
import { computed, defineProps } from 'vue'
import PopUp from '@/components/layout/popUp'
import VueIcon from '@/components/output/vueIcon';
import { awaitIcon,errorIcon,warningIcon, successIcon, loadingIcon } from '@/assets/icon/icon';

const props = defineProps(['later', 'title', 'percent', 'desc', 'type', 'action', 'buttons', 'innerHTML'])
const pops = computed(() => props?.later)

const html = computed(() => props?.innerHTML)
const status = computed(() => props?.type ? props?.type : 'loading')
const btnClass = (e) => {
  switch (e) {
    case 'success':
      return 'text-[14px] bg-zahrat border-zahrat border-2 py-[10px]  rounded-[8px] px-[16px] text-white active:scale-95 hover:bg-zahrat-hover'
    case 'await':
      return 'text-[14px] bg-zahrat-rose border-zahrat-rose stroke-zahrat hover:stroke-zahrat-bone border-2 py-[10px]  rounded-[8px] px-[16px] text-zahrat active:scale-95 hover:bg-zahrat hover:border-zahrat hover:text-white'
    case 'default':
      return 'p-1 px-3 cursor-pointer active:scale-95 rounded-md text-white text-lg bg-blue-500'
    case 'error':
      return 'text-[14px] border-zahrat border-2 py-[10px] rounded-[8px] px-[16px] text-zahrat active:scale-95 hover:bg-zahrat hover:border-zahrat hover:text-white'
    case 'empty':
      return ' active:scale-95'
    case 'failed':
      return 'text-[14px] bg-zahrat-rose border-zahrat-rose border-2 py-[10px]  rounded-[8px] px-[16px] text-white active:scale-95 hover:bg-zahrat hover:border-zahrat hover:text-white'
    case 'disabled':
      return 'text-[14px] bg-zahrat-gray border-zahrat-gray border-2 py-[10px]  rounded-[8px] px-[16px] text-zahrat-lightgray cursor-default'
    default:
      return 'text-[14px] bg-zahrat border-zahrat border-2 py-[10px] px-[16px] text-white active:scale-95 hover:bg-zahrat-hover'
  }
}
</script>
<template>
  <pop-up class="relative flex flex-row items-center w-fit justify-center w-full z-20 mt-[45vh] h-fit  mx-auto" :disable="pops" :close="action">
    <div class="relative flex flex-row items-center justify-center w-full z-50  h-fit"
         :class="(true)?'rtl text-right':'ltr text-left'"
    >
      <!-- Modal content -->
      <div class="relative flex flex-col items-center justify-center bg-white  dark:bg-slate-800 rounded-[12px] shadow w-[600px]">
        <!-- Modal header -->
        <div class="flex flex-row-reverse justify-center  items-center gap-[12px] p-4 rounded-t ">
          <h3 class="text-[22px] text-zahrat font-semibold">
            {{ title }}
          </h3>
          <span class="flex flex-row items-center gap-1 justify-center">
            <h1 v-if="percent">
              {{ Math.floor(parseInt(percent)) }} %
            </h1>
            <vue-icon v-if="status === 'await'" :path="awaitIcon" class="bg-zahrat-rose rounded-full" width="88"
                      height="88" viewBox="0 0 88 88"/>
            <vue-icon v-if="status === 'loading'" :path="loadingIcon"
                      class="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                      viewBox="0 0 100 101"/>
            <vue-icon v-if="status === 'success'" :path="successIcon"
                      class="w-8 h-8 mr-2 text-gray-200  dark:text-gray-600 fill-green-600"
                      viewBox="0 0 52 52" style="enable-background:new 0 0 52 52;"/>
            <vue-icon v-if="status === 'error'" :path="errorIcon"
                      width="24px" height="24px"
                      class="w-8 h-8 mr-2 text-gray-200  dark:text-gray-600 fill-red-600"
                      viewBox="0 0 24 24"/>
            <vue-icon v-if="status === 'warning'" :path="warningIcon"
                      class="w-8 h-8 mr-2 text-gray-200  dark:text-gray-600 fill-yellow-400"
                      viewBox="0 0 511.999 511.999" style="enable-background:new 0 0 511.999 511.999;" />

          </span>
        </div>
        <!-- Modal body -->
        <div class="pb-6 text-center" :class="(false)?'rtl text-right':'ltr text-left'">
          <p class="text-base text-[13px] text-center leading-relaxed text-gray-500">
            {{ desc }}
          </p>
          <div v-if="html" v-html="html"></div>
        </div>
        <div v-if="buttons?.length !== undefined" class="p-6 pt-5 flex flex-row gap-2 h-fit"
             :class="(true)?'rtl text-right':'ltr text-left'">
          <button v-for="(button, i) in buttons" :key="i" @click="button?.action()" :style="button?.style"
                  :class="`${button?.class}  ${btnClass(button?.type)}`">{{ button?.title }}
          </button>
        </div>
      </div>
    </div>
  </pop-up>
</template>
<style scoped>

</style>
