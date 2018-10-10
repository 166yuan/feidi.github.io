<template>
    <div class="login" :style="winSize">
       <el-row>
             <el-col :span='24'>
                <div class="content">
                    <el-form :model="registerForm" :rules="formRules" ref="registerForm" label-position="left" label-width="80px" class="card-box registerform">
                        <el-row>
                             <el-col :span="4">
                                <label>基本信息</label>
                             </el-col>
                             <el-col :span="20">
                                <el-form-item label="账号" prop="account">
                                    <el-input v-model="registerForm.account" placeholder="请输入账号"></el-input>
                                </el-form-item>
                                <el-form-item label="密码">
                                    <el-input v-model="registerForm.password" placeholder="请输入密码" type="password"></el-input>
                                </el-form-item>
                                <el-form-item label="水店外观图">
                                    <el-upload class="avatar-uploader" action="">
                                      <i class="el-icon-plus avatar-uploader-icon"></i>
                                    </el-upload>
                                </el-form-item>
                             </el-col>
                         </el-row>
                          <el-row>
                             <el-col :span="4">
                                <label>认证信息</label>
                             </el-col>
                             <el-col :span="20">
                                <el-form-item label="水店名称">
                                    <el-input placeholder="请输入水店名称"></el-input>
                                </el-form-item>
                                <el-form-item label="固定电话">
                                    <el-input placeholder="请输入固定电话" type="number"></el-input>
                                </el-form-item>
                                <el-form-item label="固定地址">
                                    <el-input placeholder="请输入水店地址"></el-input>
                                </el-form-item>
                                 <el-form-item label="工商营业执照原件扫描件（图片）">
                                    <el-upload class="avatar-uploader" action="">
                                      <i class="el-icon-plus avatar-uploader-icon"></i>
                                    </el-upload>
                                 </el-form-item>

                                 <el-form-item label="申请人身份证原件原件扫描件
">
                                    <el-upload class="avatar-uploader" action="">
                                      <i class="el-icon-plus avatar-uploader-icon"></i>
                                    </el-upload>
                                 </el-form-item>

                                  <el-form-item label="法人委托书原件扫描件

">
                                    <el-upload class="avatar-uploader" action="">
                                      <i class="el-icon-plus avatar-uploader-icon"></i>
                                    </el-upload>
                                 </el-form-item>
                                 
                             </el-col>
                         </el-row>
                    </el-form>
                </div>
             </el-col>  
       </el-row>
    </div>
</template>

<script>
    import RegisterJs from './Register.js';
    module.exports = RegisterJs;
</script>

<style scoped lang='less'>
    @import url(Register.less);
</style>