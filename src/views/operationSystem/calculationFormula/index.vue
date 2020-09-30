<template>
  <div class="index">
    <div class="main-wrap">
      <div class="search-wrap">
        <el-form :inline="true" class="demo-form-inline">
          <el-form-item>
            <el-input
              v-model="selectForm.user"
              placeholder="计算公式"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="default" @click="searchFn">查询</el-button>
            <el-button type="default" @click="resetFn">重置</el-button>
          </el-form-item>
          <el-form-item class="fr">
            <el-button type="primary" @click="addFn('add')">新增</el-button>
            <el-button type="danger" @click="deleteFn('', 'select')"
              >删除</el-button
            >
          </el-form-item>
        </el-form>
      </div>
      <div class="table-wrap">
        <el-table
          border
          :data="tableData"
          stripe
          @selection-change="handleSelectionChange"
          style="width: 100%"
        >
          <el-table-column type="selection" width="55"> </el-table-column>
          <el-table-column prop="date" label="名称" width="180">
          </el-table-column>
          <el-table-column prop="address" label="表达式"> </el-table-column>
          <el-table-column prop="address" label="备注"> </el-table-column>
          <el-table-column prop="address" label="状态">
            <template slot-scope="scope">
              <el-tag size="mini" effect="dark">正常</el-tag>
            </template>
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button type="text" size="mini" @click="addFn('edit')"
                >修改</el-button
              >
              <el-button
                type="text"
                size="mini"
                @click="deleteFn(scope.row, 'one')"
                >删除</el-button
              >
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
    <!--新增-->

    <el-dialog
      :title="title"
      :visible.sync="dialogVisible"
      top="10vh"
      width="1200px"
    >
      <div class="main-wrap">
        <div class="auto-num">
          <el-row :gutter="20">
            <el-col :span="10">
              <div>
                <div
                  style="
                    display: inline-block;
                    vertical-align: top;
                    margin-left: 20px;
                    margin-right: 25px;
                  "
                >
                  变量名
                </div>
                <div style="display: inline-block">
                  <el-cascader-panel :options="options"></el-cascader-panel>
                </div>
              </div>
            </el-col>
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
            <el-col :span="20">
              <div style="margin-left: 40px; margin-top: 40px">
                <span style="vertical-align: top; margin-right: 20px"
                  >备注</span
                >
                <div style="display: inline-block; width: 77%">
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
        <div style="overflow:hidden">
          <span slot="footer" class="btnsun">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="btnFunc">确 定</el-button>
          </span>
        </div> 
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "index",
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
      dialogVisible: false,
      title: "新增",
      selectForm: {
        user: "",
      },
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
      ],
      ruleForm: {
        name: "",
      },
      rules: {
        name: [
          {
            required: true,
            message: "请输入活动名称",
            trigger: "blur",
          },
          {
            min: 3,
            max: 5,
            message: "长度在 3 到 5 个字符",
            trigger: "blur",
          },
        ],
      },
      multipleSelection: [],
    };
  },
  methods: {
    // 获取列表
    getList() {
      // do something
    },
    // 添加方法
    addFn(type) {
      //   this.dialogVisible = !this.dialogVisible;
      if (type === "add") {
        this.title = "新增";
        this.dialogVisible = true;
      } else {
        this.title = "修改";
        this.dialogVisible = true;
      }
    },
    btnFunc() {
      this.flagFunc();
    },
    // 添加校验
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
      this.dialogVisible = false;
    },
    flagFunc() {
      if (this.title == "新增") {
        // 新增的请求接口写在这里
        this.$message({
          type: "success",
          message: "添加成功!",
        });
        this.dialogVisible = false;
      } else {
        // 修改的请求接口写在这里
        this.$message({
          type: "success",
          message: "修改成功!",
        });
        this.dialogVisible = false;
      }
    },
    // 添加，修改函数
    submitFn() {},
    deleteFn(val, type) {
      if (type === "select") {
        if (this.multipleSelection.length === 0) {
          this.$message.error("请选择需要删除的项目");
          return;
        }
      }
      this.$confirm("此操作将永久删除, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "删除成功!",
          });
          this.getList();
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    searchFn() {
      this.getList();
    },
    resetFn() {
      this.getList();
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
      this.dialogVisible = false;
    },
  },
};
</script>

<style scoped>
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
.dialog-footer {
  float: right;
}
.btnsun {
  margin-top: 20px;
  text-align: right;
  float: right;
}
</style>
