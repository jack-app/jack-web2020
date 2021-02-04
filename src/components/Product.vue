<template>
<div class = "product">
  <div v-if = "icon!= null">
    <img class="productimage" :src="icon" :alt="name" />
  </div>
  <div v-else>
    <img class="productimage" src="@/assets/noimage.png" :alt = "name"/>
  </div>
  <ul>
    <li>
      <a v-if = "web!=null" v-bind:href = "web">
        <img class="iconimage" src="@/assets/website.png" />
      </a>
    </li>
    <li>
      <a v-if = "ios!=null" v-bind:href ="ios" >
        <img class="iconimage" src="@/assets/apple.png" />
      </a>
    </li>
    <li>
      <a v-if = "android!=null" v-bind:href = "android">
        <img class="iconimage" src="@/assets/android.png"/>
      </a>
    </li>
  </ul>
</div>
</template>

<script>
export default {
  props: ['icon','name','ios','android','web']
}
</script>

<style scoped>
.product{
  width: 189px;
  margin: 0;
}
.productimage{
  width: 189px;
}
.iconimage{
  width: 32px;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

</style>
