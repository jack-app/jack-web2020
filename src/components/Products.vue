<template>
<div class="productContainer">
  <div class="product" v-for = "product in products" :key = "product.name">
    <div v-if = "product.icon!= null">
      <img class="productimage" :src="product.icon" :alt="product.name" />
    </div>
    <div v-else>
      <img class="productimage" src="@/assets/noimage.png" :alt = "product.name"/>
    </div>
    <ul>
      <li>
        <a v-if = "product.web!=null" v-bind:href = "product.web">
          <img class="iconimage" src="@/assets/website.png" />
        </a>
      </li>
      <li>
        <a v-if = "product.ios!=null" v-bind:href ="product.ios" >
          <img class="iconimage" src="@/assets/apple.png" />
        </a>
      </li>
      <li>
        <a v-if = "product.android!=null" v-bind:href = "product.android">
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
    products:[
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
    let prearray = [];
    //let storage = firebase.storage()
    ls.once('value',snapshot => {
      snapshot.forEach(function(children){
        prearray.push(children.val());
      })
      for(let i=0;i<5;i++){
        let rand = Math.floor(Math.random()*prearray.length);
        rand = 0;
        self.products.push(prearray[rand]);
        prearray.splice(rand,1);
      }
    })
  }
}
</script>

<style scoped>
.product {
  padding: 0 20px;
  display: inline-block;
}
.productContainer div{
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
