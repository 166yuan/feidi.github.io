<template>
    <div >
       <el-row>
             <el-col :span='24'>
                <div class="content">
                    <el-row>
                      <el-col :span="8" >
                        <el-card :body-style="{ padding: '0px' }">
                          <img src="../../../assets/water.png" class="image">
                          <div style="padding: 14px;">
                            <span>好吃的汉堡</span>
                            <div class="bottom clearfix">
                              <el-button type="text" class="button">操作按钮</el-button>
                            </div>
                          </div>
                        </el-card>
                      </el-col>
                    </el-row>
                </div>
             </el-col>  
       </el-row>
    </div>
</template>

<script>
    import ListJs from './List.js';
    module.exports = ListJs;
</script>