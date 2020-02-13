<template>
    <div id="header">
        <el-menu :default-active="activeIndex" router mode="horizontal">
            <el-submenu index="life">
                <template slot="title">生活</template>
                <el-menu-item index="/food/calorie">卡路里计算</el-menu-item>
            </el-submenu>
            <el-submenu index="tools">
                <template slot="title">工具</template>
                <el-menu-item index="/tools/gpsTransform">GPS坐标转换</el-menu-item>
                <el-menu-item index="/tools/color">颜色</el-menu-item>
            </el-submenu>
            <el-submenu index="system">
                <template slot="title">系统</template>
                <el-menu-item index="/system/info">简介</el-menu-item>
            </el-submenu>
        </el-menu>
        <div class="line"></div>
    </div>
</template>

<script type="text/javascript">
  export default {
    data() {
      return {
        activeIndex: '/system/info'
      };
    }
  }
</script>

<style>
    .line{
        margin-bottom: 15px;
    }
</style>
