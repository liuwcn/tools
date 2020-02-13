<script>
  export default {
    logLevel: 1,
    isRelNum: function (str) {
      return /^-?\d+\.?\d*$/.test(str);
    }
  }
</script>