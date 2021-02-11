<template>
  <header class="header" style="top:0px">
    丸い画像を入れる予定
  </header>
  <div class="container">
    <div>
      <h2 class="title">団体理念</h2>
      <h3>やりたいことをやろう</h3>
      <p>がんばる</p>
    </div>
    <div>
      <h2 class="title">団体情報</h2>
    </div>
      <div>
        <table class="table table-2col">
          <tbody>
            <tr>
              <th>サークル・団体名</th>
              <td>jack</td>
            </tr>
            <tr>
              <th>設立年月日</th>
              <td>2015年11月3日</td>
            </tr>
            <tr>
              <th>人数</th>
              <td>?人</td>
            </tr>
            <tr>
              <th>活動場所</th>
              <td>名古屋大学</td>
            </tr>
            <tr>
              <th>活動内容</th>
              <td>
                <ul>
                  <li>Andloid・iOSアプリケーション製作</li>
                  <li>パソコン用ソフトウェア製作</li>
                  <li>サービス・ゲーム規格の構想及び運営</li>
                  <li>Webコンテンツ製作・提供</li>
                  <li>各種ハッカソン・ITイベントへの参加等</li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
    </div>
    <div class="products">
      <h2 class="products__title title">プロダクト一覧</h2>
      <div class="products__lists">
        <Products />
      </div>
    </div>
    <div>
      <h2 class="title">活動予定</h2>
      <p>活動予定表を入れる</p>
    </div>
    <div>
      <h2 class="title">よくある質問</h2>
       <div class="balloon_l">
  <div class="faceicon"><img src="@/assets/Worried-amico.png" alt="考える人" ></div>
  <p class="says">未経験でも大丈夫ですか？</p>
</div>
<div class="balloon_r">
  <div class="faceicon">
    <img src="" alt="答える人" >
  </div>
    <div class="says"><p>大丈夫です。</p><p>きっと。</p></div>
</div>
    </div>
    <div>
      <h2 class="title">お問い合わせ</h2>
      <p>お問い合わせを入れる</p>
    </div>
  </div>
</template>

<script>
import Products from './components/Products.vue'

export default {
  name: 'App',
  components: {
    Products
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #333333;
  margin-top: 3.5em;
  background-color: #fffaf0;
}

.container {
  width: 80vw;
  margin-right: auto;
  margin-left: auto;
}

.title {
  position: relative;
  padding: 1.5rem;
  text-align: center;
}

.title:before {
  position: absolute;
  bottom: -10px;
  left: calc(50% - 30px);
  width: 60px;
  height: 5px;
  content: '';
  border-radius: 3px;
  background: #F29F05;
}



/*ヘッダー*/
.header{
    background: rgba(255,255,255,0.5);
    display: flex;
    padding: 60px 20px;
    position: fixed;
    justify-content: space-between;
    transition: .5s;
    width: 100%;
}
.header.transform{
    background: rgba(255,255,255,0.9);
    padding: 20px;
}

/*表 */

ul {
  list-style: none;
}

table {
  border-collapse: collapse;
  border-spacing: 0.3em;
  margin: 0 auto;
  padding: 0;
  width: 37.5em;
  margin-left: auto;
  margin-right: auto;
}

table tr{
  border-bottom: solid 2px white;
}

table tr:last-child{
  border-bottom: none;
}

table th{
  position: relative;
  text-align: left;
  width: 20%;
  background-color: #FEC139;
  color: white;
  text-align: center;
  padding: 10px 0;
}

table th:after{
  display: block;
  content: "";
  width: 0px;
  height: 0px;
  position: absolute;
  top:calc(50% - 10px);
  right:-10px;
  border-left: 10px solid #FEC139;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
}

table td{
  text-align: left;
  width: 30%;
  text-align: center;
  background-color: #eee;
  padding: 10px 0;
}

/*プロダクト一覧*/

.list1{
  width: 240px;
  margin-right: auto;
  margin-left: auto;
  overflow: hidden;
}
.list1 li{
  float: left;
  width: 45px;
  list-style: none;
  background: #ddd;
  padding: 5px;
  margin-right: 5px;
}


/*吹き出し*/
.balloon_l,
.balloon_r{
  margin: 30px 0;
  display:flex;
  justify-content: flex-start;
  align-items: flex-start; /*縦位置を上揃え*/
/*   align-items: center; */ /*縦位置を真ん中揃え*/
}
.balloon_r{
  margin-right: 10px;
  position:relative;
  left:10px;
  justify-content:flex-end;
}
.faceicon img{
  width: 90px; /*任意のサイズ*/
  height: auto;
}
.balloon_r .faceicon{
  margin-left:25px;
}
.balloon_l .faceicon{
  margin-right:25px;
}
.balloon_r .faceicon{
  order:2 !important;
}
.says {
  max-width:500px; /*最大幅は任意*/
  display: flex;
  flex-wrap: wrap;
  position: relative;
  padding: 17px 13px 15px 18px;
  border-radius: 12px;
  background: #FEC139;
  box-sizing:border-box;
  margin:0 !important;
  line-height:1.5;
/*   align-items: center; */
}
.says p{
  margin:8px 0 0 !important;
}
.says p:first-child{
  margin-top:0 !important;
}
.says:after {
  content: "";
  position: absolute;
  border: 10px solid transparent;
/*   margin-top:-3px;  */
}
.balloon_l .says:after {
  left: -26px;
  border-right: 22px solid #FEC139;
}
.balloon_r .says:after {
  right: -26px;
  border-left: 22px solid #FEC139;
}
</style>
