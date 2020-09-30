<template>
<div class="index">
    <div class="main-wrap">
        <div class="search-wrap">
            <el-form :inline="true" class="demo-form-inline">
                <el-form-item>
                    <el-input v-model="selectForm.user" placeholder="审批人"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="default" @click="">查询</el-button>
                    <el-button type="default" @click="">重置</el-button>
                </el-form-item>
                <el-form-item class="fr">
                    <el-button type="primary" @click="">新增</el-button>
                    <el-button type="danger" @click="">删除</el-button>
                </el-form-item>
            </el-form>
        </div>
        <div class="table-wrap">
            <el-table border :data="tableData" stripe style="width: 100%">
                <el-table-column prop="date" label="名称" width="180">
                </el-table-column>
                <el-table-column prop="name" label="参数" width="180">
                </el-table-column>
                <el-table-column prop="address" label="表达式">
                </el-table-column>
                <el-table-column prop="address" label="备注">
                </el-table-column>
                <el-table-column prop="address" label="状态">
                    <template slot-scope="scope">
                        <el-tag size="mini" effect="dark">正常</el-tag>
                    </template>
                </el-table-column>
                <el-table-column label="操作">
                    <template slot-scope="scope">
                        <el-button type="text" size="mini">修改</el-button>
                        <el-button type="text" size="mini">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
    </div>
</div>
</template>

<script>
export default {
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
        }
    }
}
</script>

<style scoped>

</style>
