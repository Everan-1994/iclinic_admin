<style>

</style>
<template>
    <div>
        <Card>
            <h4>{{department_title}}</h4>
            <Divider/>

            <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="120">
                <Row>
                    <Col span="8">
                        <FormItem label="机构标识" prop="jgdm">
                            <Input v-model="formValidate.jgdm" placeholder="机构标识"></Input>
                        </FormItem>
                    </Col>
                    <Col span="8">
                        <FormItem label="科室编码" prop="ksbm">
                            <Input v-model="formValidate.ksbm" placeholder="科室编码"></Input>
                        </FormItem>
                    </Col>
                    <Col span="8">
                        <FormItem label="科室名称" prop="ksmc">
                            <Input v-model="formValidate.ksmc" placeholder="科室名称"></Input>
                        </FormItem>
                    </Col>
                </Row>
                <Row>
                    <Col span="12">
                        <FormItem label="标准科室代码" prop="bzksdm">
                            <Input v-model="formValidate.bzksdm" placeholder="标准科室代码"></Input>
                        </FormItem>
                    </Col>
                    <Col span="12">
                        <FormItem label="医保局代码" prop="ybjdm">
                            <Input v-model="formValidate.ybjdm" placeholder="医保局代码"></Input>
                        </FormItem>
                    </Col>
                </Row>
                <FormItem label="科室简介">
                    <Input v-model="formValidate.ksjs" type="textarea" :autosize="{minRows: 5, maxRows: 15}"
                           placeholder="科室简介"></Input>
                </FormItem>
                <Row>
                    <Col span="8">
                        <FormItem label="数据生成时间" prop="sjscsj">
                            <DatePicker v-model="formValidate.sjscsj" type="date" placeholder="请选择数据生成时间"></DatePicker>
                        </FormItem>
                    </Col>
                    <Col span="8">
                        <FormItem label="撤销标志" prop="cxbz">
                            <Select v-model="formValidate.cxbz" clearable>
                                <Option value="1">正常</Option>
                                <Option value="2">修改</Option>
                                <Option value="3">撤销</Option>
                            </Select>
                        </FormItem>
                    </Col>
                    <Col span="8">
                        <FormItem label="填报日期" prop="tbrqsj">
                            <DatePicker v-model="formValidate.tbrqsj" type="date" placeholder="请选择出生日期"></DatePicker>
                        </FormItem>
                    </Col>
                </Row>
                <FormItem style="margin-top: 5%;">
                    <Button type="success" @click="sumbitDepartment('formValidate')">保存</Button>
                    <Button type="text" to="/resource/department-list">返回科室列表</Button>
                </FormItem>
            </Form>
        </Card>
    </div>
</template>
<script type="text/ecmascript-6">

    import {addDepartment, editDepartment, departmentDetail} from '@/api/department'

    export default {
        name: 'add_edit_department',
        data() {
            return {
                formValidate: {
                    jgdm: '', ksbm: '', ybjdm: '',
                    ksmc: '', bzksdm: '', ksjs: '',
                    sjscsj: '', tbrqsj: '', cxbz: ''
                },
                ruleValidate: {
                    jgdm: [
                        {required: true, message: '请填写机构标识', trigger: 'blur'},
                        {max: 30, message: '长度不能超过30个字符', trigger: 'blur'}
                    ],
                    bzksdm: [
                        {required: true, message: '请填写标准科室代码', trigger: 'blur'},
                        {max: 8, message: '长度不能超过8个字符', trigger: 'blur'}
                    ],
                    ybjdm: [
                        {max: 8, message: '长度不能超过8个字符', trigger: 'blur'}
                    ],
                    ksmc: [
                        {required: true, message: '请填写科室名称', trigger: 'blur'},
                        {max: 32, message: '长度不能超过32个字符', trigger: 'blur'}
                    ],
                    ksbm: [
                        {required: true, message: '请填写科室编码', trigger: 'blur'},
                        {max: 10, message: '长度不能超过10个字符', trigger: 'blur'}
                    ],
                    sjscsj: [
                        {required: true, type: 'date', message: '请选择数据生成时间', trigger: 'change'}
                    ],
                    tbrqsj: [
                        {required: true, type: 'date', message: '请选择填报日期', trigger: 'change'}
                    ],
                    cxbz: [
                        {required: true, message: '请选择撤销标志', trigger: 'change'}
                    ],
                }
            }
        },
        created() {
            this.department_title = this.$route.params.id >= 0 ? '编辑科室信息' : '添加科室信息'
            this.setDepartment()
        },
        methods: {
            setDepartment() {
                let id = this.$route.params.id
                var that = this
                if (id >= 0) {
                    departmentDetail(id).then(function (res) {
                        if (res.data.errorCode === 0) {
                            let data = res.data.data
                            that.formValidate = {
                                jgdm: data.jgdm, ksbm: data.ksbm, ybjdm: data.ybjdm,
                                ksmc: data.ksmc, bzksdm: data.bzksdm, ksjs: data.ksjs,
                                sjscsj: data.sjscsj, tbrqsj: data.tbrqsj, cxbz: data.cxbz
                            }
                        } else {
                            that.$Message.info('数据渲染失败')
                        }
                    }).catch(function (err) {
                        that.$Message.info('接口获取失败')
                    })
                } else {
                    that.formValidate = {}
                }
            },
            sumbitDepartment(name) {
                let id = this.$route.params.id
                var that = this
                let data = this.formValidate
                let data2 = {
                    jgdm: data.jgdm, ksbm: data.ksbm, ybjdm: data.ybjdm,
                    ksmc: data.ksmc, bzksdm: data.bzksdm,
                    cxbz: data.cxbz, ksjs: data.ksjs
                };

                data2.sjscsj = Date.parse(data.sjscsj) / 1000
                data2.tbrqsj = Date.parse(data.tbrqsj) / 1000

                this.$refs[name].validate((valid) => {
                    if (valid) {
                        if (id >= 0) {
                            editDepartment(data2, id).then(function (res) {
                                if (res.data.errorCode == 0) {
                                    that.$Message.info('保存成功')
                                    that.$router.push({
                                        name: 'department_list'
                                    })
                                } else {
                                    that.$Message.info(res.data.message || '保存失败')
                                }
                            }).catch(function (err) {
                                that.$Message.info(err.data.message || '接口获取失败')
                            })
                        } else {
                            addDepartment(data2).then(function (res) {
                                if (res.data.errorCode == 0) {
                                    that.$Message.info('保存成功')
                                    that.$router.push({
                                        name: 'department_list'
                                    })
                                } else {
                                    that.$Message.info(res.data.message || '保存失败')
                                }
                            }).catch(function (err) {
                                that.$Message.info(err.data.message || '接口获取失败')
                            })
                        }
                    } else {
                    }
                })
            },
        },
    }
</script>
