<template>
  <div>
    <div class="top-Nav" :style="{ width: screenWidth + 'px' }">
      <el-image alt="网抑云" style="width: 177px; height: 66px" :src="url"></el-image>
      <!-- 导航栏 -->
      <el-menu :router="true" :default-active="activePath" mode="horizontal" background-color="#242424" text-color="#C2C2C2" active-text-color="#F9F9F9">
        <el-menu-item :index="item.path" v-for="item in menulist" :key="item.id" @click="saveNavState(item.path)">
          {{ item.authName }}
          <sub :class="{ triangle: item.isDisplay }"></sub>
        </el-menu-item>
        <!-- 商城 -->
        <el-menu-item>
          <a href="https://music.163.com/store/product" target="_blank" style="text-decoration: none;">商城</a>
        </el-menu-item>
        <!-- 音乐人 -->
        <el-menu-item index="5">音乐人</el-menu-item>
        <!-- 下载客户端 -->
        <el-menu-item index="6">
          <el-badge value="Hot" class="sup-Hot">
            下载客户端
          </el-badge>
        </el-menu-item>
      </el-menu>
      <!-- 搜索栏 -->
      <el-input size="small" :style="inputStyle" class="search-input" placeholder="音乐/视频/电台/用户">
        <i slot="prefix" class="el-input__icon el-icon-search"></i>
      </el-input>
      <!-- 创作者中心 -->
      <el-button round size="small" class="creator-btn top-link">创作者中心</el-button>
      <!-- 登录 -->
      <el-link class="login-text top-link" @click="displayTriangle()">登录</el-link>
    </div>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      url: require('../assets/logo.jpg'),
      inputStyle: 'width:160px;height:32px',
      screenWidth: window.screen.width,
      /// isDisplay: false,
      activePath: '/',
      menulist: [
        {
          id: '0',
          authName: '发现音乐',
          path: '/',
          isDisplay: false
        },
        {
          id: '1',
          authName: '我的音乐',
          path: '/my',
          isDisplay: false
        },
        {
          id: '2',
          authName: '朋友',
          path: '/friends',
          isDisplay: false
        }
        /* {
          id:'4',
          authName:'商城',
          path:'/store/product'
        } */
      ]
    }
  },
  created() {
    if (window.sessionStorage.getItem('navState') === null) {
      this.activePath = '/'
      this.menulist[0].isDisplay = true
    } else {
      this.activePath = window.sessionStorage.getItem('navState')
      this.displayTriangle()
    }
  },
  methods: {
    // 保存导航当前激活状态
    saveNavState(path) {
      window.sessionStorage.setItem('navState', path)
      this.resetSetItem('subPath', '/discover')
      this.activePath = path
      this.displayTriangle()
    },
    displayTriangle() {
      var path = window.sessionStorage.getItem('navState')
      // console.log(path)
      switch (path) {
        case '/':
          this.menulist[1].isDisplay = false
          this.menulist[2].isDisplay = false
          this.menulist[0].isDisplay = true
          break
        case '/my':
          this.menulist[0].isDisplay = false
          this.menulist[2].isDisplay = false
          this.menulist[1].isDisplay = true
          break
        case '/friends':
          this.menulist[0].isDisplay = false
          this.menulist[1].isDisplay = false
          this.menulist[2].isDisplay = true
          break
      }
    }
  }
}
</script>

<style lang="less" scoped>
.top-Nav {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #242424;
}
.search-input {
  margin-left: 50px;
  /deep/ input.el-input__inner {
    border-radius: 20px;
    border: 0;
  }
}
.el-menu.el-menu--horizontal {
  border-bottom: 0;
  > .el-menu-item {
    border-bottom: 0;
  }
  > .el-menu-item.is-active {
    background-color: #000000 !important;
  }
  > .el-menu-item:hover {
    background-color: #000000 !important;
  }
}
.top-link {
  margin-left: 20px;
}
.creator-btn.el-button {
  background-color: transparent;
  border: 1px solid #4f4f4f;
  color: #cccccc;
}
/deep/ .el-badge__content.is-fixed {
  transform: translateY(50%) translateX(150%);
}
/deep/ .el-badge__content {
  border: 0;
  font-size: 10px;
  height: 15px;
  line-height: 15px;
  background-color: #c20c0c;
}
.triangle {
  display: block;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 6px 6px 6px;
  border-color: transparent transparent #c20c0c transparent;
  position: absolute;
  left: 45%;
  bottom: -3px;
}
</style>
