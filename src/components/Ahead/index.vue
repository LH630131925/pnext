<template>
  <div>
    <van-row>
      <van-col span="6">
        <img src="../../assets/logo.png" alt="" />
      </van-col>
      <van-col span="4" offset="10">
        <van-grid clickable :column-num="2">
          <van-grid-item icon="search" text="搜索" color="bule" />
        </van-grid>
      </van-col>
      <van-col span="4">
        <van-grid clickable :column-num="2" >
          <van-grid-item icon="wap-nav" text="我的" color="#0000CD" @click="fn1"/>
        </van-grid>
      </van-col>
    </van-row>
        <van-row v-if="isShow">
            <van-col span="6" class="bar">
                <van-icon name="chat-o" />
                <p>首页</p>
            </van-col>
            <van-col span="6" class="bar">
                <van-icon name="chat-o" />
                <p>收藏</p>
            </van-col>
            <van-col span="6" class="bar">
                <van-icon name="chat-o" />
                <p>关注</p>
            </van-col>
            <van-col span="6" class="bar">
                <van-icon name="chat-o" />
                <p>反馈</p>
            </van-col>
            <van-col span="6" class="bar">
                <van-icon name="chat-o" />
                <p>qq群</p>
            </van-col>
            <van-col span="6" class="bar">
                <van-icon name="chat-o" />
                <p>追番列表</p>
            </van-col>
            <van-col span="6" class="bar">
                <van-icon name="chat-o" />
                <p>打赏站长</p>
            </van-col>
            <van-col span="10" class="login" offset="6">
                登录/注册
            </van-col>
        </van-row>
  </div>
</template>

<script>
import { Col, Row, Grid, GridItem, Icon } from "vant";
export default {
  name: "Ahead",
  data(){
      return {
          isShow:false
      }
  },
  components: {
    vanRow: Row,
    vanCol: Col,
    vanGridItem: GridItem,
    vanGrid: Grid,
    vanIcon:Icon
  },
  methods:{
      fn1(){
          if(this.isShow == false){
              this.isShow = true
          }else{
              this.isShow = false
          }
      }
  }
};
</script>
<style lang="scss" scoped>
.van-col img {
  width: 88px;
  height: 20px;
  margin-left: 12px;
}
.bar{
    text-align: center;
    p{
        font-size: 8px;
    }
}
.login{
    height: 30px;
    line-height: 30px;
    text-align: center;
    font-size: 12px;
    margin-top:10px;
    border: 1px solid #cccccc;
    border-radius: 20px;
}
</style>

<style>
.van-grid-item__content {
  padding: 0;
  margin-left: 26px;
}
.van-grid-item__icon + .van-grid-item__text {
  margin-top: 0;
}
</style>
