<template>
<div class="login">
    <div class="login-wrap header-p">
        <div class="auto-p">
            <h1 class="title">海制造用户登录</h1>
            <el-input class="bt-20" v-model="input" placeholder="请输入内容"></el-input>
            <el-input class="bt-20" v-model="input" placeholder="请输入内容"></el-input>
            <el-button class="bt-20" type="primary" style="width: 100%" @click="submit">登录</el-button>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: "index",
    methods: {
        submit() {
            this.$router.push("/selectSystem");
        },
    },
};
</script>

<style scoped>
.login {
    height: 100%;
    background: url("https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1601395994606&di=43dfbc0266bdc39295a5e64e1939f3aa&imgtype=0&src=http%3A%2F%2Fbpic.588ku.com%2Fback_pic%2F05%2F84%2F84%2F695c74b4c7bff61.jpg") no-repeat center center;
    background-size: cover;
    -webkit-background-size: cover;
    /*background-color: #409EFF;*/
}

.header-p {
    position: relative;
}

.auto-p {
    position: absolute;
    transform: translateY(-50%) translateX(-50%);
    text-align: center;
    top: 50%;
    left: 50%;
}

.bt-20 {
    margin-top: 20px;
    text-align: center;
}

.title {
    text-align: center;
    -webkit-text-fill-color: transparent;
    background-image: -webkit-linear-gradient(bottom, #11466d, #20c2de, #25dbd3);
    -webkit-background-clip: text;

}

.login-wrap {
    width: 500px;
    height: 600px;
    /*background-color: #fff;*/
    position: absolute;
    right: 10%;
    top: 50%;
    transform: translateY(-50%);
    border-radius: 5px;
    /*border: 2px solid #172e52;*/
}
</style>
