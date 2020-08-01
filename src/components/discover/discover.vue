<template>
  <div>
    <el-carousel slot-scope="" trigger="click" height="284px">
      <el-carousel-item :style="{ backgroundImage: 'url(' + item.backgroundImg + ')' }" v-for="item in urlList" :key="item.id">
        <el-image style="width:730px;height:284px" :src="item.url"></el-image>
      </el-carousel-item>
      <el-image :src="downloadUrl" style="position：'absolute'; rigth:10px; z-index:5; width: 254px; height: 285px"></el-image>
    </el-carousel>
  </div>
</template>
<script>
export default {
  data() {
    return {
      downloadUrl: require('../../assets/homeImg/download.jpg'),
      urlList: [
        {
          id: '1',
          url: require('../../assets/homeImg/1.jpg'),
          backgroundImg: require('../../assets/homeImg/b1.jpg')
        },
        {
          id: '2',
          url: require('../../assets/homeImg/2.jpg'),
          backgroundImg: require('../../assets/homeImg/b2.jpg')
        },
        {
          id: '3',
          url: require('../../assets/homeImg/3.jpg'),
          backgroundImg: require('../../assets/homeImg/b3.jpg')
        },
        {
          id: '4',
          url: require('../../assets/homeImg/4.jpg'),
          backgroundImg: require('../../assets/homeImg/b4.jpg')
        },
        {
          id: '5',
          url: require('../../assets/homeImg/5.jpg'),
          backgroundImg: require('../../assets/homeImg/b5.jpg')
        },
        {
          id: '6',
          url: require('../../assets/homeImg/6.jpg'),
          backgroundImg: require('../../assets/homeImg/b6.jpg')
        },
        {
          id: '7',
          url: require('../../assets/homeImg/7.jpg'),
          backgroundImg: require('../../assets/homeImg/b7.jpg')
        },
        {
          id: '8',
          url: require('../../assets/homeImg/8.jpg'),
          backgroundImg: require('../../assets/homeImg/b8.jpg')
        },
        {
          id: '9',
          url: require('../../assets/homeImg/9.jpg'),
          backgroundImg: require('../../assets/homeImg/b9.jpg')
        },
        {
          id: '10',
          url: require('../../assets/homeImg/10.jpg'),
          backgroundImg: require('../../assets/homeImg/b10.jpg')
        }
      ]
    }
  }
}
</script>
<style lang="less" scoped>
.el-carousel__item {
  background-position: center center;
  background-size: 6000px;
  > .el-image {
    left: 50%;
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
.down-load {
  background-image: url('../../assets/homeImg/download.jpg');
}
</style>
