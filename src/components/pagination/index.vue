<template>
  <div class="pagination">
    <el-pagination
      :background="true"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="current"
      :page-sizes="[10, 20, 30, 40]"
      :page-size="pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total">
    </el-pagination>
  </div>
</template>

<script>
export default {
  name: 'pagination',
  props: ['total', 'current', 'pageSize'],
  data () {
    return {}
  },
  methods: {
    handleSizeChange (val) {
      this.$emit('size', val)
    },
    handleCurrentChange (val) {
      this.$emit('current', val)
    }
  }
}
</script>

<style lang="scss" scoped>
.pagination {
  text-align: right;
  margin-top: 10px;
}
</style>
