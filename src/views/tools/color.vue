<template>
    <div id="color">
        <h2>拾色盘</h2>

        <el-row :gutter="5">
            <el-col :span="3">
                <el-color-picker v-model="hexColor"></el-color-picker>
            </el-col>
            <el-col :span="5"><label>{{hexColor}}</label></el-col>
            <el-col :span="5"><label>{{rgbColor}}</label></el-col>
        </el-row>
        <h2>颜色转换</h2>

        <el-form :model="hex" ref="hex" label-width="100px">
            <el-form-item
                    prop="color"
                    label="16进制颜色"
                    :rules="[
                           { required: true, pattern: '^#[\\d|A-E|a-e]{3}([\\d|A-E|a-e]{3})?$', message: '请输入正确的格式', trigger: 'blur' }
                    ]"
            >
                <el-input v-model="hex.color" v-on:blur="hexChange"></el-input>
            </el-form-item>
        </el-form>
        <el-form :inline="true" :model="rgb" ref="rgb" :rules="rgbRules" label-width="100px">
            <el-form-item
                    prop="r"
                    label="RGB颜色"
            >
                <el-input v-model="rgb.r" v-on:blur="rgbChange"></el-input>
            </el-form-item>
            <el-form-item prop="g">
                <el-input v-model="rgb.g" v-on:blur="rgbChange"></el-input>
            </el-form-item>
            <el-form-item prop="b">
                <el-input v-model="rgb.b" v-on:blur="rgbChange"></el-input>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
  import common from '../components/common.vue'

  export default {
    data() {
      var validateRgb = (rule, value, callback) => {
        if (value === "") {
          callback(new Error('请输入数值'));
        } else if (!common.isRelNum(value)) {
          callback(new Error('请输入数字'));
        } else if (value < 0 || value > 255) {
          callback(new Error('数值范围错误'));
        } else {
          callback();
        }
      };
      return {
        hexColor: '#409EFF',
        rgbColor: 'rgb(64, 158, 255)',
        hex: {
          color: '#666666'
        },
        rgb: {
          r: 102,
          g: 102,
          b: 102
        },
        rgbRules: {
          r: [
            {validator: validateRgb, required: true, trigger: 'blur'},
          ],
          g: [
            {validator: validateRgb, trigger: 'blur'},
          ],
          b: [
            {validator: validateRgb, trigger: 'blur'},
          ],
        }
      }
    },
    methods: {
      hexChange: function () {
        let color = this.$data.hex.color;
        let r = color.substring(1, 3);
        let g = color.substring(3, 5);
        let b = color.substring(5, 7);
        this.$data.rgb.r = parseInt(r, 16);
        this.$data.rgb.g = parseInt(g, 16);
        this.$data.rgb.b = parseInt(b, 16);
      },
      rgbChange: function () {
        let r = parseInt(this.$data.rgb.r).toString(16);
        let g = parseInt(this.$data.rgb.g).toString(16);
        let b = parseInt(this.$data.rgb.b).toString(16);
        this.$data.hex.color = "#" + r + g + b;
      }
    },
    watch: {
      hexColor: function (val) {
        let r = val.substring(1, 3);
        let g = val.substring(3, 5);
        let b = val.substring(5, 7);
        this.$data.rgbColor = 'rgb(' + parseInt(r, 16) + ', ' + parseInt(g, 16) + ', ' + parseInt(b, 16) + ')'
      }


    }
  }
</script>

<style lang="scss">
</style>
