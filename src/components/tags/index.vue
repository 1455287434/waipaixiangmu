<template>
    <div class="tags">
      <div class="tags-wrap" style="">
        <div class="tags-item-wrap">
            <el-tag
              :class="{'select-tag': item.path === tagPath}"
              size="small"
              :key="index"
              v-for="(item, index) in tags"
              closable
              :disable-transitions="false"
              @click="handleClick(item)"
              @close="handleClose(index)">
              <!--<i v-if="item.path === tagPath" class="el-icon-location-outline" style="margin-right: -3px;"></i>-->
              <i class="tag-point"></i>
              {{ item.title }}
            </el-tag>
        </div>
      </div>
      <div class="tag-drop">
        <el-dropdown trigger="click" size="small" @command="handleTagClick">
        <span class="el-dropdown-link dropdown-text">标签选项<i class="el-icon-arrow-down el-icon--right"></i></span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="0">关闭其他</el-dropdown-item>
            <!--<el-dropdown-item command="1">关闭所有</el-dropdown-item>-->
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      tags: []
    }
  },
  computed: {
    tagPath () {
      return this.$route.fullPath
    }
  },
  created () {

  },
  watch: {
    '$route' (val) {
      val.meta.path = val.path
      console.log(val.meta)
      this.setTags({ ...val.meta })
    }
    // '$store.state.tagsJudge' (val) {
    //   this.tags = JSON.parse(sessionStorage.getItem('tags'))
    // }
  },
  mounted () {
    this.setTags(this.$route.meta)
    if (sessionStorage.getItem('tags')) {
      this.tags = JSON.parse(sessionStorage.getItem('tags'))
    } else {
      this.setTags(this.$route.meta)
    }
  },
  methods: {
    // 关闭
    handleClose (index) {
      if (this.tags.length <= 1) return false
      const delItem = this.tags.splice(index, 1)[0]
      const item = this.tags[index] ? this.tags[index] : this.tags[index - 1]
      delItem.path === this.$route.fullPath && this.$router.push(item.path)
      sessionStorage.setItem('tags', JSON.stringify(this.tags))
    },
    // 标签关闭
    handleClick (tag) {
      this.$router.push(tag.path)
    },
    // 设置标签
    setTags (data) {
      const isExist = this.tags.some(item => {
        return item.path === data.path
      })
      if (!isExist) {
        if (this.tags.length >= 10) {
          this.tags.shift()
        }
        this.tags.push(data)
        sessionStorage.setItem('tags', JSON.stringify(this.tags))
      } else {
        this.tags = JSON.parse(sessionStorage.getItem('tags'))
      }
    },
    // 关闭全部及关闭其他操作
    handleTagClick (val) {
      if (val === '0') {
        const newTag = this.tags.filter((v) => {
          return v.path === this.$route.fullPath && v
        })
        this.tags = newTag
        this.$router.push(newTag[0].path)
        sessionStorage.setItem('tags', JSON.stringify(this.tags))
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.tags {
  background-color: #fff;
  width: 100%;
  height: 34px;
  padding: 5px;
  box-sizing: border-box;
  overflow: hidden;
  position: relative;
  box-shadow:10px 5px 10px -15px #000;
  .tags-wrap {
    width: calc(100% - 90px);
    overflow: hidden;
  }
  .tags-item-wrap {
    min-width: 2000px;
  }
}
.tag-drop {
  position: absolute;
  right: 0;
  top:0;
  background-color: #f4f4f5;
  height: 100%;
  width: 90px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  /*z-index: 3;*/
  .dropdown-text {
    font-size: 13px !important;
    color: #909399 !important;
  }
}
.tag-point {
  display: block;
  width: 5px;
  height: 5px;
  background-color: #fff;
  float: left;
  margin-top: 8px;
  margin-right: 5px;
}
</style>
