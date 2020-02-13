<template>
    <div id="calorie">
        <div class="title">主食</div>
        <table id="stapleFood" class="">
            <thead>
            <tr>
                <th>名字</th>
                <th>能量(千焦/每100g)</th>
                <th>能量(大卡/每100g)</th>
            </tr>
            </thead>
            <template v-for="food in stapleFood">
                <tr>
                    <td>{{ food.name }}</td>
                    <td>{{ food.joule }}</td>
                    <td>{{ food.calorie }}</td>
                </tr>
            </template>
        </table>
    </div>
</template>

<script type="text/javascript">
  export default {
    data() {
      return {
        stapleFood: [
          {name: '大米',joule:400, calorie:100},
          {name: '面',joule:400, calorie:100}
        ]
      }
    }
  }
</script>

<style>
</style>
