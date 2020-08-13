<template>
  <div>
    <el-carousel trigger="click" height="280px">
      <el-carousel-item :style="{ backgroundImage: 'url(' + item.backgroundImg + ')' }" v-for="item in urlList" :key="item.id">
        <a :href="item.href">
          <el-image style="width:730px;height:280px" :src="item.url"></el-image>
        </a>
      </el-carousel-item>
      <el-image
        :src="downloadUrl"
        style="cursor: pointer; position: absolute; right: 11%; z-index:20; width: 254px; height: 280px"
        @click="downLoad"
      ></el-image>
    </el-carousel>
    <div class="discover-main">
      <!-- 左侧 -->
      <div class="left-list">
        <div class="part">
          <div class="top-head">
            <div class="circle"></div>
            <router-link to="/discover/playlist" class="hot-rec">
              <span style="margin-left:10px">热门推荐</span>
            </router-link>
            <div class="tab">
              <span v-for="tag in hotPlayList" :key="tag.id">
                <router-link :to="tag.path">{{ tag.name }}</router-link>
                <span style="margin: 0 20px 0 20px">|</span>
              </span>
            </div>
            <router-link to="/discover/playlist" class="more" @click.native="changePath()">
              更多
            </router-link>
            <i class="el-icon-right" style="font-size:12px;color:#C10D0C;font-weight: 1000"></i>
          </div>
          <div class="album-list">
            <ul>
              <li v-for="album in personalizedList" :key="album.id">
                <div class="u-cover">
                  <el-image style="width:140px;height:140px" :src="album.picUrl"></el-image>
                  <div class="bottom">
                    <i class="el-icon-headset" style="margin-left:5px"></i>
                    {{ parseInt(album.playCount / 10000) }}万
                    <i class="el-icon-video-play" style="float:right;font-size:20px;line-height:27px;margin-right:8px"></i>
                  </div>
                </div>
                <p>{{ album.name }}</p>
              </li>
            </ul>
          </div>
        </div>
        <div class="part">
          <div class="top-head">
            <div class="circle"></div>
            <router-link to="/discover/playlist" class="hot-rec">
              <span style="margin-left:10px">新碟上架</span>
            </router-link>
            <div class="tab"></div>
            <router-link to="/discover/playlist" class="more" @click.native="changePath()">
              更多
            </router-link>
            <i class="el-icon-right" style="font-size:12px;color:#C10D0C;font-weight: 1000"></i>
          </div>
          <div class="album-roller">
            <el-carousel :autoplay="false" arrow="always" height="180px" indicator-position="none">
              <el-carousel-item v-for="item in newAlbumList" :key="item.id">
                <ul>
                  <li v-for="liItem in item.arrayList" :key="liItem.id">
                    <div class="album-container">
                      <el-image style="width:100px;height:100px;cursor:pointer" :src="liItem.picUrl"></el-image>
                      <p class="al-name">{{ liItem.name }}</p>
                      <p class="art-name">{{ liItem.artist.name }}</p>
                    </div>
                  </li>
                </ul>
              </el-carousel-item>
            </el-carousel>
          </div>
        </div>
        <div class="part">
          <div class="top-head">
            <div class="circle"></div>
            <router-link to="/discover/playlist" class="hot-rec">
              <span style="margin-left:10px">榜单</span>
            </router-link>
            <div class="tab top"></div>
            <router-link to="/discover/playlist" class="more" @click.native="changePath()">
              更多
            </router-link>
            <i class="el-icon-right" style="font-size:12px;color:#C10D0C;font-weight: 1000"></i>
          </div>
          <div class="top-list">
            <el-col class="col" :span="8" v-for="item in toplList" :key="item.id">
              <div class="top-title">
                <el-image class="top-cover" :src="item.coverImgUrl"></el-image>
                <div class="btn">
                  <p class="title-name">{{ item.name }}</p>
                  <i class="el-icon-video-play"></i>
                  <i class="el-icon-folder-add"></i>
                </div>
              </div>
              <el-row class="row" v-for="li in 11" :key="li">
                {{ li + 'yhr' }}
              </el-row>
            </el-col>
          </div>
        </div>
      </div>
      <!-- 右侧 -->
      <div class="right-list">
        <div>用户登录</div>
        <div>入住歌手</div>
        <div>热门主播</div>
      </div>
    </div>
  </div>
</template>
<script>
import { getPersonalized, getNewAlbum, getTopList } from '../../API/discover'
export default {
  data() {
    return {
      downloadUrl: require('../../assets/homeImg/download.jpg'),
      urlList: [
        {
          id: '1',
          url: require('../../assets/homeImg/1.jpg'),
          backgroundImg: require('../../assets/homeImg/b1.jpg'),
          href: 'https://music.163.com/#/song?id=1466053895'
        },
        {
          id: '2',
          url: require('../../assets/homeImg/2.jpg'),
          backgroundImg: require('../../assets/homeImg/b2.jpg'),
          href: 'https://music.163.com/#/album?id=83878976'
        },
        {
          id: '3',
          url: require('../../assets/homeImg/3.jpg'),
          backgroundImg: require('../../assets/homeImg/b3.jpg'),
          href: 'https://music.163.com/#/song?id=1459678124'
        },
        {
          id: '4',
          url: require('../../assets/homeImg/4.jpg'),
          backgroundImg: require('../../assets/homeImg/b4.jpg'),
          href: 'https://music.163.com/#/album?id=93048548'
        },
        {
          id: '5',
          url: require('../../assets/homeImg/5.jpg'),
          backgroundImg: require('../../assets/homeImg/b5.jpg'),
          href: 'https://music.163.com/#/song?id=1467073899'
        },
        {
          id: '6',
          url: require('../../assets/homeImg/6.jpg'),
          backgroundImg: require('../../assets/homeImg/b6.jpg'),
          href: 'https://music.163.com/#/song?id=1466910225'
        },
        {
          id: '7',
          url: require('../../assets/homeImg/7.jpg'),
          backgroundImg: require('../../assets/homeImg/b7.jpg'),
          href: 'https://music.163.com/#/song?id=1465957765'
        },
        {
          id: '8',
          url: require('../../assets/homeImg/8.jpg'),
          backgroundImg: require('../../assets/homeImg/b8.jpg'),
          href: 'https://music.163.com/#/song?id=1466643383'
        },
        {
          id: '9',
          url: require('../../assets/homeImg/9.jpg'),
          backgroundImg: require('../../assets/homeImg/b9.jpg'),
          href: 'https://music.163.com/#/song?id=1466851751'
        },
        {
          id: '10',
          url: require('../../assets/homeImg/10.jpg'),
          backgroundImg: require('../../assets/homeImg/b10.jpg'),
          href: 'https://music.163.com/#/song?id=1466303986'
        }
      ],
      hotPlayList: [
        {
          path: '/discover/playlist',
          name: '华语',
          id: 1
        },
        {
          path: '/discover/playlist',
          name: '流行',
          id: 2
        },
        {
          path: '/discover/playlist',
          name: '电子',
          id: 3
        }
      ],
      getInfo: {
        limit: 8
      },
      newAlbumInfo: {
        limit: 10
      },
      personalizedList: [],
      newAlbumList: [
        {
          id: 1,
          arrayList: []
        },
        {
          id: 2,
          arrayList: []
        },
        {
          id: 3,
          arrayList: []
        }
      ],
      toplList: []
    }
  },
  created() {
    this.initializeProject()
  },
  methods: {
    /* 获取初始显示数据 */
    initializeProject() {
      /* 获取推荐歌单 */
      getPersonalized(this.getInfo).then(res => {
        this.personalizedList = res.data.result
      })
      /* 获取新碟上架 */
      getNewAlbum().then(res => {
        this.newAlbumList[0].arrayList = res.data.albums.slice(0, 5)
        this.newAlbumList[1].arrayList = res.data.albums.slice(5, 10)
        this.newAlbumList[2].arrayList = res.data.albums.slice(10)
        console.log(this.newAlbumList)
      })
      /* 获取所有榜单 */
      getTopList().then(res => {
        this.toplList = res.data.list.slice(0, 3)
        console.log(this.toplList)
      })
    },
    // 下载
    downLoad() {
      this.$router.push('/download')
    },
    // 修改当前导航
    changePath() {
      this.resetSetItem('subPath', '/discover/playlist')
      // console.log('123')
    }
  }
}
</script>
<style lang="less" scoped>
/deep/ .el-carousel__button {
  width: 8px;
  height: 8px;
  border-radius: 4px;
}
/deep/ .el-carousel__indicator:hover button {
  background-color: #c20c0c;
}
/deep/ .el-carousel__indicator.is-active button {
  background-color: #c20c0c;
}
.el-carousel__item {
  background-position: center center;
  background-size: 6000px;
  > a .el-image {
    left: 40%;
    transform: translateX(-50%);
  }
}
.left-list {
  width: 730px;
  position: absolute;
  left: 40%;
  transform: translateX(-50%);
  padding: 20px 20px 40px 20px;
  border: 1px solid #d3d3d3;
}
.part {
  > .top-head {
    font-size: 20px;
    border-bottom: 2px solid #c10d0c;
    padding-bottom: 5px;
    > .hot-rec {
      color: #333333;
    }
    > .hot-rec:hover {
      text-decoration: none;
      color: #333333;
    }
    > .tab {
      width: 320px;
      display: inline-block;
      margin: 0 0 0 20px;
      color: #666;
      font-size: 12px;
    }
    > .top {
      width: 360px;
    }
    > .more {
      // float: right;
      display: inline-block;
      margin-left: 200px;
      font-size: 12px;
      color: #666;
    }
    > .circle {
      display: inline-block;
      width: 15px;
      height: 15px;
      border: 4px solid #c10d0c;
      border-radius: 50%;
    }
  }
  > .album-list {
    > ul {
      margin: 20px 0 0 -40px;
      padding: 0;
      > li {
        width: 180px;
        height: 234px;
        padding: 0 0 30px 40px;
        list-style: none;
        float: left;
        > .u-cover {
          width: 140px;
          height: 140px;
          color: #ccc;
          position: relative;
          display: block;
          cursor: pointer;
          border: 1px solid #d9d9d9;
          > .bottom {
            line-height: 27px;
            width: 100%;
            height: 27px;
            color: #ccc;
            position: absolute;
            bottom: 0;
            left: 0;
            background-color: rgba(0, 0, 0, 0.5);
            font-size: 12px;
          }
        }
        > p {
          margin: 8px 0 3px 0;
          font-size: 14px;
        }
        > p:hover {
          text-decoration: underline;
          cursor: pointer;
        }
      }
    }
    > ul::after {
      content: '';
      clear: both;
      display: block;
    }
  }
  > .album-roller {
    width: 686px;
    height: 186px;
    margin: 20px 0 37px 0;
    background-color: #f5f5f5;
    > .el-carousel /deep/ .el-carousel__container {
      > .el-carousel__arrow {
        background-color: transparent;
        width: 20px;
        height: 20px;
        color: #878787;
        font-size: 20px;
        > i {
          font-weight: 1000;
        }
      }
      > .el-carousel__arrow--right {
        right: 0;
      }
      > .el-carousel__arrow--left {
        left: 0;
      }
      > .el-carousel__item ul {
        ::after {
          content: '';
          display: block;
          clear: both;
        }
        > li {
          width: 110px;
          height: 150px;
          margin-left: 11px;
          list-style: none;
          float: left;
          font-size: 12px;
          > .album-container {
            > .al-name {
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
            }
            > .al-name:hover {
              text-decoration: underline;
              cursor: pointer;
            }
            > .art-name {
              color: #666666;
            }
            > .art-name:hover {
              text-decoration: underline;
              cursor: pointer;
            }
          }
        }
      }
    }
  }
  > .top-list {
    height: 472px;
    border: 1px #d2d2d2 solid;
    border-right: 0px;
    margin: 20px 0 37px 0;
    ::after {
      content: '';
      display: block;
      clear: both;
    }
    > .col {
      background-color: #f4f4f4;
      background-clip: padding-box;
      border-right: 1px #d2d2d2 solid;
      > .row {
        height: 32px;
      }
      > .row:nth-child(2n) {
        background-clip: padding-box;
        background-color: #e8e8e8;
      }
      > .top-title {
        width: 230px;
        height: 118px;
        padding: 18px 0 0 19px;
        ::after {
          content: '';
          display: block;
          clear: both;
        }
        > .top-cover {
          width: 80px;
          height: 80px;
          float: left;
          //display: inline;
        }
        > .btn {
          float: left;
          margin: 4px 0 0 10px;
          > .title-name {
            margin: 0;
            font-size: 14px;
            font-weight: bold;
          }
          > i {
            font-size: 25px;
            margin: 10px 10px 0 0;
            font-weight: bold;
            color: #b9b9b9;
          }
          > el-icon-video-play:hover {
            color: black;
          }
        }
      }
    }
  }
  /* > .top-list:nth-child(1) {
    border-right: 1px #d2d2d2 solid;
  } */
}
/* .new-album {
  > .top-head {
    font-size: 20px;
    border-bottom: 2px solid #c10d0c;
    padding-bottom: 5px;
    > .circle {
      display: inline-block;
      width: 15px;
      height: 15px;
      border: 4px solid #c10d0c;
      border-radius: 50%;
    }
  }
} */
a,
a:link,
a:visited {
  color: #666;
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}

.right-list {
  width: 254px;
  background-color: skyblue;
  position: absolute;
  left: 68.5%;
}
</style>
