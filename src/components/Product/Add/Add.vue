<template>
    <div >
       <el-row>
             <el-col :span='24'>
                <div class="content">
                     <el-form ref="form" label-position="left" label-width="40px">
                        <el-row>
                             <el-col :span="4">
                                <label>基本信息</label>
                             </el-col>
                             <el-col :span="20">
                                <el-form-item label="品牌">
                                     <el-select v-model="brand_value" placeholder="请选择">
                                        <el-option
                                          v-for="item in brands"
                                          :key="item.value"
                                          :label="item.label"
                                          :value="item.value">
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                                <el-form-item label="名称">
                                    <el-select v-model="name_value" placeholder="请选择">
                                        <el-option
                                          v-for="item in names"
                                          :key="item.value"
                                          :label="item.label"
                                          :value="item.value">
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                                <el-form-item label="规格">
                                     <el-select v-model="style_value" placeholder="请选择">
                                        <el-option
                                          v-for="item in styles"
                                          :key="item.value"
                                          :label="item.label"
                                          :value="item.value">
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                                <el-form-item label="商品库存">
                                    <el-select v-model="store_value" placeholder="请选择">
                                        <el-option
                                          v-for="item in stores"
                                          :key="item.value"
                                          :label="item.label"
                                          :value="item.value">
                                        </el-option>
                                    </el-select>
                                    
                                </el-form-item>
                             </el-col>
                             <el-button>重置</el-button>
                             <el-button type="primary">提交</el-button>
                         </el-row>
                     </el-form>
                </div>
             </el-col>  
       </el-row>
    </div>
</template>

<script>
    import AddJs from './Add.js';
    module.exports = AddJs;
</script>