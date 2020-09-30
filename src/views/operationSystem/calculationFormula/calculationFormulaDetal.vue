<template>
  <div class="index">
    <div class="main-wrap">
      <div class="auto-num">
        <el-row :gutter="20">
          <el-col :span="10">
            <div style="display: inline-block; margin-left: 88px">
              <el-cascader-panel :options="options"></el-cascader-panel></div
          ></el-col>
          <el-col :span="10">
            <div class="Tips">
              *提示：只支持
              <span class="mg-6 mg-l-6">+</span>
              <span class="mg-6">-</span>
              <span class="mg-6">*</span>
              <span class="mg-6">/</span>
              <span class="mg-6">%</span>
              <span class="mg-6">^2</span>
              <span class="mg-6">()</span>
              运算符。 <span class="mg-6 mg-l-6">否则无效</span>
            </div>

            <div class="text-inp">
              <el-input
                type="textarea"
                :autosize="{ minRows: 6, maxRows: 10 }"
                placeholder="请输入内容"
                v-model="textarea2"
                resize="none"
              >
              </el-input>
              <div class="pos-r">
                <span class="mg-6 mg-l-6"> =</span>
                <div style="display: inline-block; width: 150px">
                  <el-input v-model="value2" placeholder="公式名"></el-input>
                </div>
              </div>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="10">
            <div style=" margin-left: 40px;margin-top: 40px;">
              <span style="vertical-align: top; margin-right: 20px;">备注</span>
              <div style="display: inline-block; width: 75%">
                <el-input
                  type="textarea"
                  :autosize="{ minRows: 6, maxRows: 10 }"
                  
                  placeholder="请输入内容"
                  v-model="textarea2"
                >
                </el-input>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
      <div class="btn-offset">
        <el-button @click="cancleFunc">返回</el-button>
        <el-button type="primary" @click="submitFunc">确认</el-button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value2: "",
      textarea2: "",
      options: [
        {
          value: "pvc1",
          label: "pvc1",
          children: [
            {
              value: "pvc1-1",
              label: "pvc1-1",
              disabled: true,
            },
            {
              value: "pvc1-2",
              label: "pvc1-2",
              disabled: true,
            },
          ],
        },
        {
          value: "pvc2",
          label: "pvc2",
          children: [
            {
              value: "pvc2-1",
              label: "pvc2-1",
              disabled: true,
            },
            {
              value: "pvc2-2",
              label: "pvc2-2",
              disabled: true,
            },
            {
              value: "pvc2-3",
              label: "pvc2-3",
              disabled: true,
            },
            {
              value: "pvc2-4",
              label: "pvc2-4",
              disabled: true,
            },
            {
              value: "pvc2-5",
              label: "pvc2-5",
              disabled: true,
            },
            {
              value: "pvc2-6",
              label: "pvc2-6",
              disabled: true,
            },
          ],
        },
        {
          value: "pvc3",
          label: "pvc3",
          children: [
            {
              value: "pvc3-1",
              label: "pvc3-1",
              disabled: true,
            },
            {
              value: "pvc3-2",
              label: "pvc3-2",
              disabled: true,
            },
            {
              value: "pvc3-3",
              label: "pvc3-3",
              disabled: true,
            },
          ],
        },
      ],
    };
  },
  methods: {
    diffFunc() {
      let flag = this.$route.query.flag;
      if (flag == "update") {
        // 编辑接口调用写在这里
        this.$router.go(-1);
        this.$message({
          type: "success",
          message: "修改成功!",
        });
      } else {
        // 新增接口写在这里
        this.$router.go(-1);
        this.$message({
          type: "success",
          message: "添加成功!",
        });
      }
    },

    // 返回事件
    cancleFunc() {
      this.$router.go(-1);
    },
    // 取消事件
    submitFunc() {
      this.diffFunc();
    },
  },
};
</script>
<style lang="scss" scoped>
.btn-offset {
  position: fixed;
  right: 50px;
  bottom: 100px;
}
.auto-num {
  margin-top: 50px;
}
.Tips {
  color: red;
  white-space: pre;
}
.mg-6 {
  margin-right: 20px;
}
.mg-l-6 {
  margin-left: 20px;
}
.text-inp {
  margin-top: 30px;
  width: 300px;
  position: relative;
}
.pos-r {
  width: 200px;
  position: absolute;
  left: 100%;
  top: 50%;
  transform: translateY(-50%);
}
</style>