<template>
    <div id="gps">
        <el-row :gutter="20">
            <el-col :span="10">
                <div class="grid-content bg-purple-light gps-content">
                    <el-input type="textarea" v-model="left"
                              :autosize="{minRows: 20}">
                    </el-input>
                </div>
            </el-col>
            <el-col :span="4">
                <div class="grid-content center">
                    <el-select v-model="selected" placeholder="请选择模式">
                        <el-option v-for="item in options"
                                   :key="item.value"
                                   :label="item.label"
                                   :value="item.value">
                        </el-option>
                    </el-select>

                    <el-button-group class="btnGroup">
                        <el-button type="primary" v-on:click="toLeft" icon="el-icon-d-arrow-left"
                                   circle></el-button>
                        <el-button type="primary" v-on:click="toRight"
                                   icon="el-icon-d-arrow-right"
                                   circle></el-button>
                    </el-button-group>
                    <div class="info">
                        <span>格式：</span>
                        <p>1、经度 + 英文半角逗号 + 纬度</p>
                        <p>2、多条换行</p>
                        <span>示例：</span>
                        <p>120.41512,30.51234</p>
                        <p>172.43144,69.46134</p>
                    </div>
                </div>
            </el-col>
            <el-col :span="10">
                <div class="grid-content bg-purple-light gps-content">
                    <el-input type="textarea" v-model="right"
                              :autosize="{minRows: 20}">
                    </el-input>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
  import common from '../components/common.vue'

  export default {
    data() {
      return {
        options: [{
          value: '0',
          label: '百度 < > 高德'
        }],
        selected: '0',
        left: '',
        right: ''
      }
    },
    methods: {
      toRight: function () {
        let selected = this.$data.selected, source = this.$data.left;
        let items = source.split('\n');
        let result = '';
        if (selected === '0') {
          items.forEach(function (item, idx) {
            let arr = item.split(',');
            let res;
            if (arr.length === 2) {
              let longitude = arr[0];
              let latitude = arr[1];
              if (common.isRelNum(longitude) && common.isRelNum(latitude)) {
                let X_PI = Math.PI * 3000.0 / 180.0;
                let x = longitude - 0.0065;
                let y = latitude - 0.006;
                let z = Math.sqrt(x * x + y * y) - 0.00002 * Math.sin(y * X_PI);
                let theta = Math.atan2(y, x) - 0.000003 * Math.cos(x * X_PI);
                let longitude2 = z * Math.cos(theta);
                let latitude2 = z * Math.sin(theta);
                res = longitude2 + ',' + latitude2
              }
            }
            if (!res) res = 'error';
            result += res;
            if (idx < items.length - 1) result += '\n';
          })
        }
        this.$data.right = result;
      },
      toLeft: function () {
        let selected = this.$data.selected, source = this.$data.right;
        let items = source.split('\n');
        let result = '';
        if (selected === '0') {
          items.forEach(function (item, idx) {
            let arr = item.split(',');
            let res;
            if (arr.length === 2) {
              let longitude = arr[0];
              let latitude = arr[1];
              if (common.isRelNum(longitude) && common.isRelNum(latitude)) {
                let X_PI = Math.PI * 3000.0 / 180.0;
                let x = longitude, y = latitude;
                let z = Math.sqrt(x * x + y * y) + 0.00002 * Math.sin(y * X_PI);
                let theta = Math.atan2(y, x) + 0.000003 * Math.cos(x * X_PI);
                let longitude2 = z * Math.cos(theta) + 0.0065;
                let latitude2 = z * Math.sin(theta) + 0.006;
                res = longitude2 + ',' + latitude2
              }
            }
            if (!res) res = 'error';
            result += res;
            if (idx < items.length - 1) result += '\n';
          })
        }
        this.$data.left = result;
      }
    },
    watch: {
      selected: function (val) {
        console.log(val);
      }
    }
  }
</script>

<style lang="scss">
    .center {
        text-align: center;

        .info {
            text-align: left;
        }
    }

    .btnGroup {
        margin-top: 60px;
    }

    .info {
        margin-top: 60px;
    }
</style>