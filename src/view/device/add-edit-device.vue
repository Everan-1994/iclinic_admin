<style>

</style>
<template>
    <div>
        <Card>
            <h4>{{device_title}}</h4>
            <Divider/>

            <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="120">
                <Row>
                    <Col span="8">
                        <FormItem label="机构标识" prop="jgdm">
                            <Input v-model="formValidate.jgdm" placeholder="机构标识"></Input>
                        </FormItem>
                    </Col>
                    <Col span="8">
                        <FormItem label="设备代号" prop="sbdh">
                            <Input v-model="formValidate.sbdh" placeholder="设备代号"></Input>
                        </FormItem>
                    </Col>
                    <Col span="8">
                        <FormItem label="设备名称" prop="sbmc">
                            <Input v-model="formValidate.sbmc" placeholder="设备名称"></Input>
                        </FormItem>
                    </Col>
                </Row>
                <Row>
                    <Col span="6">
                        <FormItem label="设备台数" prop="tpsbts">
                            <Input v-model="formValidate.tpsbts" placeholder="同批购进相同型号设备台数"></Input>
                        </FormItem>
                    </Col>
                    <Col span="6">
                        <FormItem label="产地" prop="cd">
                            <Select v-model="formValidate.cd" clearable>
                                <Option value="1">进口</Option>
                                <Option value="2">国产</Option>
                                <Option value="3">合资</Option>
                                <Option value="4">未知</Option>
                            </Select>
                        </FormItem>
                    </Col>
                    <Col span="12">
                        <FormItem label="生产厂家" prop="sccj">
                            <Input v-model="formValidate.sccj" placeholder="生产厂家"></Input>
                        </FormItem>
                    </Col>
                </Row>
                <Row>
                    <Col span="6">
                        <FormItem label="设备类型">
                            <Select v-model="formValidate.sblx" clearable>
                                <Option value="1">服务器</Option>
                                <Option value="2">网络设备</Option>
                                <Option value="3">软件</Option>
                            </Select>
                        </FormItem>
                    </Col>
                    <Col span="12">
                        <FormItem label="设备型号" prop="sbxh">
                            <Input v-model="formValidate.sbxh" placeholder="设备型号"></Input>
                        </FormItem>
                    </Col>
                    <Col span="6">
                        <FormItem label="购买日期" prop="gmrq">
                            <DatePicker v-model="formValidate.gmrq" type="date" placeholder="请选择购买日期"></DatePicker>
                        </FormItem>
                    </Col>
                </Row>
                <FormItem label="设备参数">
                    <Input v-model="formValidate.sbcs" type="textarea" :autosize="{minRows: 5, maxRows: 15}"
                           placeholder="设备参数"></Input>
                </FormItem>
                <FormItem label="用途">
                    <Input v-model="formValidate.yt" type="textarea" :autosize="{minRows: 5, maxRows: 15}"
                           placeholder="用途"></Input>
                </FormItem>
                <Row>
                    <Col span="6">
                        <FormItem label="设备价值金额">
                            <Input v-model="formValidate.sbjzje" placeholder="设备价值金额"></Input>
                        </FormItem>
                    </Col>
                    <Col span="6">
                        <FormItem label="购进时新旧情况">
                            <Select v-model="formValidate.gjsxqk" clearable>
                                <Option value="1">新设备</Option>
                                <Option value="2">二手设备</Option>
                            </Select>
                        </FormItem>
                    </Col>
                    <Col span="6">
                        <FormItem label="理论设计寿命">
                            <Input v-model="formValidate.llsjsm" placeholder="理论设计寿命"></Input>
                        </FormItem>
                    </Col>
                    <Col span="6">
                        <FormItem label="使用情况" prop="syqk">
                            <Select v-model="formValidate.syqk" clearable>
                                <Option value="1">启用</Option>
                                <Option value="2">未启用</Option>
                                <Option value="3">报废</Option>
                            </Select>
                        </FormItem>
                    </Col>
                </Row>
                <FormItem label="备注" prop="bz">
                    <Input v-model="formValidate.bz" type="textarea" :autosize="{minRows: 5, maxRows: 15}"
                           placeholder="备注"></Input>
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
                    <Button type="success" @click="sumbitDevice('formValidate')">保存</Button>
                    <Button type="text" to="/device/device-list">返回设备列表</Button>
                </FormItem>
            </Form>
        </Card>
    </div>
</template>
<script type="text/ecmascript-6">

    import {addDevice, editDevice, deviceDetail} from '@/api/device'

    export default {
        name: 'add_edit_device',
        data() {
            const checkLen = (rule, value, callback) => {
                if (value > 999) {
                    callback(new Error('长度不能超过3个字符'))
                } else {
                    callback()
                }
            }
            return {
                formValidate: {
                    jgdm: '', sbdh: '', sbmc: '', tpsbts: '', cd: '', sccj: '',
                    sbxh: '', sbcs: '', sblx: '', gmrq: '', yt: '',
                    sbjzje: '', gjsxqk: '', llsjsm: '', syqk: '', bz: '',
                    sjscsj: '', tbrqsj: '', cxbz: ''
                },
                ruleValidate: {
                    jgdm: [
                        {required: true, message: '请填写机构标识', trigger: 'blur'},
                        {max: 30, message: '长度不能超过30个字符', trigger: 'blur'}
                    ],
                    syqk: [
                        {required: true, message: '请选择使用情况', trigger: 'change'}
                    ],
                    llsjsm: [
                        {max: 3, message: '长度不能超过3个字符', trigger: 'blur'}
                    ],
                    bz: [
                        {max: 100, message: '长度不能超过100个字符', trigger: 'blur'}
                    ],
                    sccj: [
                        {max: 120, message: '长度不能超过120个字符', trigger: 'blur'}
                    ],
                    sbxh: [
                        {max: 120, message: '长度不能超过120个字符', trigger: 'blur'}
                    ],
                    cd: [
                        {required: true, message: '请选择产地', trigger: 'change'}
                    ],
                    gmrq: [
                        {required: true, type: 'date', message: '请选择购买日期', trigger: 'change'}
                    ],
                    sbmc: [
                        {required: true, message: '请填写设备名称', trigger: 'blur'},
                        {max: 20, message: '长度不能超过20个字符', trigger: 'blur'}
                    ],
                    tpsbts: [
                        {required: true, type: "number", message: '请填写设备台数', trigger: 'blur', transform:(value) => Number(value)},
                        {validator: checkLen, trigger: 'blur'}
                    ],
                    sbdh: [
                        {required: true, message: '请填写设备代号', trigger: 'blur'},
                        {max: 30, message: '长度不能超过30个字符', trigger: 'blur'}
                    ],
                    sjscsj: [
                        {required: true, type: 'date', message: '请选择请数据生成时间', trigger: 'change'}
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
            this.device_title = this.$route.params.id >= 0 ? '编辑设备信息' : '添加设备信息'
            this.setDevice()
        },
        methods: {
            setDevice() {
                let id = this.$route.params.id
                var that = this
                if (id >= 0) {
                    deviceDetail(id).then(function (res) {
                        if (res.data.errorCode === 0) {
                            let data = res.data.data
                            that.formValidate = {
                                jgdm: data.jgdm, sbdh: data.sbdh, sbmc: data.sbmc, tpsbts: data.tpsbts, cd: data.cd, sccj: data.sccj,
                                sbxh: data.sbxh, sbcs: data.sbcs, sblx: data.sblx, gmrq: data.gmrq, yt: data.yt,
                                sbjzje: data.sbjzje, gjsxqk: data.gjsxqk, llsjsm: data.llsjsm, syqk: data.syqk, bz: data.bz,
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
            sumbitDevice(name) {
                let id = this.$route.params.id
                var that = this
                let data = this.formValidate
                let data2 = {
                    jgdm: data.jgdm, sbdh: data.sbdh, sbmc: data.sbmc, tpsbts: data.tpsbts,
                    sbxh: data.sbxh, sbcs: data.sbcs, sblx: data.sblx, yt: data.yt,
                    sbjzje: data.sbjzje, gjsxqk: data.gjsxqk, llsjsm: data.llsjsm, syqk: data.syqk,
                    cxbz: data.cxbz, cd: data.cd, sccj: data.sccj, bz: data.bz
                };

                data2.gmrq = Date.parse(data.gmrq) / 1000
                data2.sjscsj = Date.parse(data.sjscsj) / 1000
                data2.tbrqsj = Date.parse(data.tbrqsj) / 1000

                this.$refs[name].validate((valid) => {
                    if (valid) {
                        if (id >= 0) {
                            editDevice(data2, id).then(function (res) {
                                if (res.data.errorCode == 0) {
                                    that.$Message.info('保存成功')
                                    that.$router.push({
                                        name: 'device_list'
                                    })
                                } else {
                                    that.$Message.info(res.data.message || '保存失败')
                                }
                            }).catch(function (err) {
                                that.$Message.info(err.data.message || '接口获取失败')
                            })
                        } else {
                            addDevice(data2).then(function (res) {
                                if (res.data.errorCode == 0) {
                                    that.$Message.info('保存成功')
                                    that.$router.push({
                                        name: 'device_list'
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
