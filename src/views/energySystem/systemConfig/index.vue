<template>
<div class="index">
    <div class="main-wrap">
        <div class="search-wrap">
            <el-form :inline="true" class="demo-form-inline">
                <el-form-item>
                    <el-input v-model="selectForm.user" placeholder="审批人"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="default" @click="searchFn">查询</el-button>
                    <el-button type="default" @click="resetFn">重置</el-button>
                </el-form-item>
                <el-form-item class="fr">
                    <el-button type="primary" @click="addFn('add')">新增</el-button>
                    <el-button type="danger" @click="deleteFn('', 'select')">删除</el-button>
                </el-form-item>
            </el-form>
        </div>
        <div class="table-wrap">
            <el-table border :data="tableData" stripe @selection-change="handleSelectionChange" style="width: 100%">
                <el-table-column type="selection" width="55"> </el-table-column>
                <el-table-column prop="date" label="名称" width="180">
                </el-table-column>
                <el-table-column prop="name" label="参数" width="180">
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
                        <el-button type="text" size="mini" @click="addFn('edit')">修改</el-button>
                        <el-button type="text" size="mini" @click="deleteFn(scope.row, 'one')">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
    </div>
    <!--新增-->
    <el-dialog :title="title" :visible.sync="dialogVisible" top="10vh" width="700px">
        <div>
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px">
                <el-form-item label="名称" prop="name">
                    <el-input v-model="ruleForm.name"></el-input>
                </el-form-item>
                <el-form-item label="参数" prop="name">
                    <el-input v-model="ruleForm.name"></el-input>
                </el-form-item>
                <el-form-item label="表达式" prop="name">
                    <el-input v-model="ruleForm.name"></el-input>
                </el-form-item>
                <el-form-item label="备注" prop="desc">
                    <el-input type="textarea" v-model="ruleForm.desc"></el-input>
                </el-form-item>
            </el-form>
        </div>
        <div slot="footer" class="dialog-footer">
            <el-button @click="resetForm('ruleForm')">取 消</el-button>
            <el-button type="primary" @click="submitForm('ruleForm')">确 定</el-button>
        </div>
    </el-dialog>
</div>
</template>

<script>
export default {
    <<
    <<
    <<
    < HEAD
    name: 'index',
    data() {
        return {
            selectForm: {
                user: ''
            },
            tableData: [{
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }, {
                date: '2016-05-04',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1517 弄'
            }, {
                date: '2016-05-01',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1519 弄'
            }, {
                date: '2016-05-03',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1516 弄'
            }]
        } ===
        ===
        =
        name: 'index',
            data() {
                return {
                    dialogVisible: false,
                    title: '新增',
                    selectForm: {
                        user: ''
                    },
                    tableData: [{
                        date: '2016-05-02',
                        name: '王小虎',
                        address: '上海市普陀区金沙江路 1518 弄'
                    }, {
                        date: '2016-05-04',
                        name: '王小虎',
                        address: '上海市普陀区金沙江路 1517 弄'
                    }, {
                        date: '2016-05-01',
                        name: '王小虎',
                        address: '上海市普陀区金沙江路 1519 弄'
                    }, {
                        date: '2016-05-03',
                        name: '王小虎',
                        address: '上海市普陀区金沙江路 1516 弄'
                    }],
                    ruleForm: {
                        name: ''
                    },
                    rules: {
                        name: [{
                                required: true,
                                message: '请输入活动名称',
                                trigger: 'blur'
                            },
                            {
                                min: 3,
                                max: 5,
                                message: '长度在 3 到 5 个字符',
                                trigger: 'blur'
                            }
                        ]
                    },
                    multipleSelection: []
                }
            },
            methods: {
                // 获取列表
                getList() {
                    // do something
                },
                // 添加方法
                addFn(type) {
                    this.dialogVisible = !this.dialogVisible
                    if (type === 'add') {
                        this.title = '新增'
                    } else {
                        this.title = '修改'
                    }
                },
                // 添加校验
                submitForm(formName) {
                    this.$refs[formName].validate((valid) => {
                        if (valid) {
                            alert('submit!')
                        } else {
                            console.log('error submit!!')
                            return false
                        }
                    })
                    this.dialogVisible = false
                },
                // 添加，修改函数
                submitFn() {

                },
                deleteFn(val, type) {
                    if (type === 'select') {
                        if (this.multipleSelection.length === 0) {
                            this.$message.error('请选择需要删除的项目')
                            return
                        }
                    }
                    this.$confirm('此操作将永久删除, 是否继续?', '提示', {
                        confirmButtonText: '确定',
                        cancelButtonText: '取消',
                        type: 'warning'
                    }).then(() => {
                        this.$message({
                            type: 'success',
                            message: '删除成功!'
                        })
                        this.getList()
                    }).catch(() => {
                        this.$message({
                            type: 'info',
                            message: '已取消删除'
                        })
                    })
                },
                handleSelectionChange(val) {
                    this.multipleSelection = val
                },
                searchFn() {
                    this.getList()
                },
                resetFn() {
                    this.getList()
                },
                resetForm(formName) {
                    this.$refs[formName].resetFields()
                    this.dialogVisible = false >>>
                        >>>
                        >
                        3 ba1e10db04036c9d681699c03c38e91f8cea2b8
                }
            }
</script>

<style scoped>
</style>
