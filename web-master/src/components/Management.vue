<template>

    <el-container style="height: 90%; border: 1px solid #eee">

        <el-header style="text-align: right; font-size: 12px">
            <span style="float: left; font-size: 18px">欢迎来到后台管理系统</span>
            <el-dropdown>
                <i class="el-icon-setting" style="margin-right: 15px"></i>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>查看</el-dropdown-item>
                    <el-dropdown-item>新增</el-dropdown-item>
                    <el-dropdown-item>删除</el-dropdown-item>

                </el-dropdown-menu>
            </el-dropdown>
            <el-dropdown>
                <span>用户名</span>
                <el-dropdown-menu>
                    <el-dropdown-item>个人信息</el-dropdown-item>
                    <el-dropdown-item>退出登录</el-dropdown-item>
                </el-dropdown-menu>

            </el-dropdown>

        </el-header>
        <el-container>
            <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
                <el-menu :default-openeds="['1', '3']">
                    <el-menu-item v-on:click="GotoPM()">
                        <template slot="title"  ><i class="el-icon-message" ></i>用户管理</template>
                    </el-menu-item>
                    <el-menu-item v-on:click="GotoAu()">
                        <template slot="title"><i class="el-icon-message"></i>权限管理</template>
                    </el-menu-item>
                    <el-menu-item v-on:click="GotoPro()">
                        <template slot="title"><i class="el-icon-message"></i>商品管理</template>
                    </el-menu-item>
                    <el-menu-item v-on:click="GotoOrder()">
                        <template slot="title"><i class="el-icon-message"></i>订单管理</template>
                    </el-menu-item>
                    <el-menu-item v-on:click="GotoData()">
                        <template slot="title"><i class="el-icon-message"></i>数据处理</template>
                    </el-menu-item>

                </el-menu>
            </el-aside>

            <el-main>

                <img src="../assets/首页.png">


<!--                <el-table :data="tableData">-->
<!--                    <el-table-column prop="date" label="日期" width="140">-->
<!--                    </el-table-column>-->
<!--                    <el-table-column prop="name" label="姓名" width="120">-->
<!--                    </el-table-column>-->
<!--                    <el-table-column prop="address" label="地址">-->
<!--                    </el-table-column>-->
<!--                </el-table>-->
            </el-main>

        </el-container>
    </el-container>


</template>
<style>
    .el-header {
        background-color: #B3C0D1;
        color: #333;
        line-height: 60px;
    }

    .el-aside {
        color: #333;
    }

    body > .el-container {
        margin-bottom: 40px;
    }


</style>

<script>
    export default {
        data() {
            const item = {
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄',
                url:'https://www.baidu.com/img/bd_logo1.png',
            };
            return {
                tableData: Array(20).fill(item)
            }
        },
        methods:{
            GotoPM(){
                this.$router.push("/peoplemanagement");
            },
            GotoAu(){
                this.$router.push("/authority");
            },
            GotoPro(){
                this.$router.push("/products");
            },
            GotoOrder(){
                this.$router.push("/order");
            },
            GotoData(){
                this.$router.push("/data");
            },
        }
    };
</script>