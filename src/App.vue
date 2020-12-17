<template>
  <body>
    <header class="header" style="top:0px">
      
    </header>
    <div>
      <h1>えもえもメッセージ</h1>
    </div>
    <div>
      <h2>団体理念</h2>
        <p>やりたいことをやろう</p>
        <p>がんばる</p>
    </div>
    <div>
      <h2>団体情報</h2>
    </div>
      <div>
        <table border=1 class="table table-2col">
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
                  <li>パソコン用ソフトウェア再作</li>
                  <li>サービス・ゲーム規格の構想及び運営</li>
                  <li>Webコンテンツ製作・提供</li>
                  <li>各種ハッカソン・ITイベントへの参加等</li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
    </div>
    <div>
      <h2>プロダクト一覧</h2>
    </div>
    <div>
      <h2>活動予定</h2>
    </div>
    <div>
      <h2>よくある質問</h2>
        <p>未経験でも大丈夫ですか？</p>
        <p>大丈夫です。きっと</p>
        <p>パソコンが家にないけど大丈夫ですか？</p>
        <p>大丈夫です。きっと</p>
    </div>
    <div>
      <h2>お問い合わせ</h2>
    </div>
  </body>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

ul {
  list-style: none;
}

table{
  width: 50em;
  margin-left: auto;
  margin-right: auto;
  border-collapse: collapse;
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
  width: 30%;
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
  width: 70%;
  text-align: center;
  background-color: #eee;
  padding: 10px 0;
}
</style>
