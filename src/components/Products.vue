<template>
<div class="productContainer">
  <div class="product" v-for = "project in projects" :key = "project.name">
  <img class="productimage" src ="@/assets/logo.png"/>
    <ul>
      <li>
        <a v-if = "project.web!=undefined" v-bind:href = "project.web">
          <img class="iconimage" src="@/assets/website.png" />
        </a>
      </li>
      <li>
        <a v-if = "project.ios!=undefined" v-bind:href ="project.ios" >
          <img class="iconimage" src="@/assets/apple.png" />
        </a>
      </li>
      <li>
        <a v-if = "project.android!=undefined" v-bind:href = "project.android">
          <img class="iconimage" src="@/assets/android.png"/>
        </a>
      </li>
    </ul>
  </div>
</div>
</template>

<script>
import firebase from 'firebase'
export default {
  data: ()=> ({
    projects:[
    /*{
        name:"Qroon",
        ios:"https://apps.apple.com/us/app/qroon/id1354363903?l=ja",
        android:"https://play.google.com/store/apps/details?id=tmy.jack.Qroon",
        web:"https://jack-web.herokuapp.com/products"
      }*/
    ]
  }),
  created (){
    let ls = firebase.database().ref('products');
    let self = this;
    ls.once('value',snapshot => snapshot.forEach(function(children){
      self.projects.push(children.val());
    }))
  }
}
</script>

<style scoped>
.product{
  padding: 0 20px;
  display: inline-block;
}
.productContainer{
  text-align: center;
}
.productimage{
  width: 189px
}
.iconimage{
  width: 32px
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
