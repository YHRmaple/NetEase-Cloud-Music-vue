<template>
  <div>
    <el-carousel slot-scope="" trigger="click" height="280px">
      <el-carousel-item :style="{ backgroundImage: 'url(' + item.backgroundImg + ')' }" v-for="item in urlList" :key="item.id">
        <a :href="item.href">
          <el-image style="width:730px;height:280px" :src="item.url"></el-image>
        </a>
      </el-carousel-item>
      <el-image :src="downloadUrl" style="cursor: pointer;position：absolute; left:68.5%; z-index:5; width: 254px; height: 280px" @click="downLoad"></el-image>
    </el-carousel>
    <div class="discover-main">
      <!-- 左侧 -->
      <div class="left-list">
        <div class="recommend">
          <div class="circle"></div>
          <span style="margin-left:10px">热门推荐</span>
          <div class="tab">
            <span v-for="tag in hotPlayList" :key="tag.id">
              {{ tag.name }}
              <span style="margin: 0 20px 0 20px">|</span>
            </span>
          </div>
          <span class="more">更多</span>
        </div>
        <div class="new-album">新碟上架</div>
        <div class="Leaderboard">榜单</div>
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
// import { HotPlayList } from '../../API/discover'
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
          name: '华语',
          id: 1
        },
        {
          name: '流行',
          id: 2
        },
        {
          name: '电子',
          id: 3
        }
      ]
    }
  },
  created() {
    /* this.getHotPlayList() */
  },
  methods: {
    /* getHotPlayList() {
      HotPlayList().then(res => {
        this.hotPlayList = res.data.tags
        console.log(this.hotPlayList)
      })
    }, */
    downLoad() {
      this.$router.push('/download')
    }
  }
}
</script>
<style lang="less" scoped>
.el-carousel__item {
  background-position: center center;
  background-size: 6000px;
  > a .el-image {
    left: 40%;
    transform: translateX(-50%);
  }
}
/deep/ .el-carousel__button {
  width: 8px;
  height: 8px;
  border-radius: 4px;
}
/deep/ .el-carousel__button:hover {
  background-color: #c20c0c;
}
/deep/ .el-carousel__indicator.is-active button {
  background-color: #c20c0c;
}
.left-list {
  width: 730px;
  position: absolute;
  left: 40%;
  transform: translateX(-50%);
  padding: 20px 20px 40px 20px;
  border: 1px solid #d3d3d3;
}
.recommend {
  font-size: 20px;
  border-bottom: 2px solid #c10d0c;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-bottom: 5px;
  > .tab {
    margin: 0 0 0 20px;
    color: #666;
    font-size: 12px;
  }
  > .more {
    float: right;
  }
  > .circle {
    width: 15px;
    height: 15px;
    border: 4px solid #c10d0c;
    border-radius: 50%;
  }
}
.right-list {
  width: 254px;
  background-color: skyblue;
  position: absolute;
  left: 68.5%;
}
</style>
