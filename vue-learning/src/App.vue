<template>
  {{ msg }}
  <button :disabled="state">按钮</button>
  <button v-bind:disabled="state">按钮</button>
  <p v-html="baidu"></p>
  <VIfDemoComponent></VIfDemoComponent>
  <VForDemoComponent></VForDemoComponent>
  <VOnDemoComponent></VOnDemoComponent>
  <EventDemoComponent></EventDemoComponent>
  <ComputedDemo></ComputedDemo>
  <ClassDemo></ClassDemo>
  <StyleDemo></StyleDemo>
  <WatchDemo></WatchDemo>
  <VModelDemo></VModelDemo>
  <RefDemo> </RefDemo>

  <BaseUserComponent></BaseUserComponent>

  <Parent></Parent>
  <AComponent></AComponent>
  <AAComponent></AAComponent>
  <SlotParent></SlotParent>
  <IsComponent></IsComponent>
  <ProviderComponent></ProviderComponent>
</template>

<script >

import VIfDemoComponent from "./components/VIfDemoComponent.vue";
import VForDemoComponent from "./components/VForDemoComponent.vue";
import VOnDemoComponent from "./components/VOnDemoComponent.vue";
import EventDemoComponent from "./components/EventDemoComponent.vue";
import ComputedDemo from "./components/ComputedDemo.vue";
import ClassDemo from "./components/ClassDemo.vue";
import StyleDemo from "./components/StyleDemo.vue";
import WatchDemo from "./components/WatchDemo.vue";
import VModelDemo from "./components/VModelDemo.vue";
import RefDemo from "./components/RefDemo.vue";
import Parent from "./components/Parent.vue";
import AComponent from "./components/AComponent.vue";
import AAComponent from "./components/AAComponent.vue";
import SlotParent from "./components/SlotParent.vue";
import IsComponent from "./components/IsComponent.vue";
import ProviderComponent from "./components/ProvideComponent.vue";
export default {
  components: {
    ProviderComponent,
    IsComponent,
    SlotParent,
    AAComponent,
    AComponent,
    Parent,
    RefDemo,
    VModelDemo,
    WatchDemo,
    StyleDemo,
    ClassDemo, ComputedDemo, EventDemoComponent, VOnDemoComponent, VForDemoComponent, VIfDemoComponent},
  data() {
    return {
      msg: "模板",
      state: false,
      baidu: '<a href="http://www.baidu.com">baidu</a>'
    }
  }
}

</script>



