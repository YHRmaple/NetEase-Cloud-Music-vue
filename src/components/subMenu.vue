<template>
  <el-container>
    <el-header height="35px" :width="screenWidth">
      <el-menu :router="true" mode="horizontal" background-color="#C20C0C" text-color="#FFFFFF" :default-active="subActivePath" active-text-color="#ffffff">
        <el-menu-item v-for="subItem in subMenuList" :key="subItem.id" :index="subItem.path" @click="saveSubPath(subItem.path)">
          {{ subItem.authName }}
        </el-menu-item>
      </el-menu>
    </el-header>
    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
</template>
<script>
export default {
  data() {
    return {
      screenWidth: window.screen.width,
      subActivePath: '/discover',
      subMenuList: [
        {
          id: '0',
          authName: '推荐',
          path: '/discover'
        },
        {
          id: '1',
          authName: '排行榜',
          path: '/discover/toplist'
        },
        {
          id: '2',
          authName: '歌单',
          path: '/discover/playlist'
        },
        {
          id: '3',
          authName: '主播电台',
          path: '/discover/djradio'
        },
        {
          id: '4',
          authName: '歌手',
          path: '/discover/artist'
        },
        {
          id: '5',
          authName: '新碟上架',
          path: '/discover/album'
        }
      ]
    }
  },
  created() {
    if (window.sessionStorage.getItem('subPath') === null) {
      this.subActivePath = '/discover'
      // console.log(this.subActivePath + '123')
    } else {
      this.subActivePath = window.sessionStorage.getItem('subPath')
      // console.log(this.subActivePath)
    }
    window.addEventListener('setItem', () => {
      this.subActivePath = sessionStorage.getItem('subPath')
    })
  },
  methods: {
    saveSubPath(path) {
      window.sessionStorage.setItem('subPath', path)
      this.subActivePath = path
    }
  }
}
</script>
<style lang="less" scoped>
.el-header {
  background-color: #c20c0c;
}
.el-menu.el-menu--horizontal {
  border-bottom: 0;
  padding-left: 290px;
  width: 600px;
  > .el-menu-item {
    border-bottom: 0;
    height: 20px;
    font-style: normal;
    font-size: small;
    line-height: 19px;
    padding: 0 13px;
    margin: 7px 17px 0 17px;
    border-radius: 20px;
  }
  > .el-menu-item.is-active {
    background-color: #9b0909 !important;
  }
  > .el-menu-item:hover {
    background-color: #9b0909 !important;
  }
}
</style>
