<style>

</style>
<template>
    <div>
        <Card>
            <h4>{{person_title}}</h4>
            <Divider/>

            <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="120">
                <Row>
                    <Col span="12">
                        <FormItem label="机构标识" prop="jgdm">
                            <Input v-model="formValidate.jgdm" placeholder="机构标识"></Input>
                        </FormItem>
                    </Col>
                    <Col span="12">
                        <FormItem label="卡类型/卡号" prop="kh">
                            <Input v-model="formValidate.kh">
                            <Select v-model="formValidate.klx" slot="prepend" style="width: 100px">
                                <Option value="1">卡类型1</Option>
                                <Option value="2">卡类型2</Option>
                            </Select>
                            </Input>
                        </FormItem>
                    </Col>
                </Row>
                <Row>
                    <Col span="12">
                        <FormItem label="证件类型/证件号">
                            <Input v-model="formValidate.zjhm">
                            <Select v-model="formValidate.zjlbdm" slot="prepend" style="width: 100px">
                                <Option value="1">证件类型1</Option>
                                <Option value="2">证件类型2</Option>
                            </Select>
                            </Input>
                        </FormItem>
                    </Col>
                    <Col span="6">
                        <FormItem label="姓名" prop="xm">
                            <Input v-model="formValidate.xm" placeholder="姓名"></Input>
                        </FormItem>
                    </Col>
                    <Col span="6">
                        <FormItem label="性别" prop="xbdm">
                            <Select v-model="formValidate.xbdm" clearable>
                                <Option value="1">性别1</Option>
                                <Option value="2">性别2</Option>
                            </Select>
                        </FormItem>
                    </Col>
                </Row>
                <Row>
                    <Col span="6">
                        <FormItem label="患者属性">
                            <Select v-model="formValidate.hzsx" clearable>
                                <Option value="1">属性1</Option>
                                <Option value="2">属性2</Option>
                            </Select>
                        </FormItem>
                    </Col>
                    <Col span="6">
                        <FormItem label="婚姻状况">
                            <Select v-model="formValidate.hyztdm" clearable>
                                <Option value="1">状态1</Option>
                                <Option value="2">状态2</Option>
                            </Select>
                        </FormItem>
                    </Col>
                    <Col span="6">
                        <FormItem label="出生日期" prop="csrq">
                            <DatePicker v-model="formValidate.csrq" type="date" placeholder="请选择出生日期"></DatePicker>
                        </FormItem>
                    </Col>
                    <Col span="6">
                        <FormItem label="民族">
                            <Select v-model="formValidate.mzdm" clearable>
                                <Option value="1">民族1</Option>
                                <Option value="2">民族2</Option>
                            </Select>
                        </FormItem>
                    </Col>
                </Row>
                <Row>
                    <Col span="8">
                        <FormItem label="国籍">
                            <Select v-model="formValidate.gjdm" clearable>
                                <Option value="1">国籍1</Option>
                                <Option value="2">国籍2</Option>
                            </Select>
                        </FormItem>
                    </Col>
                    <Col span="8">
                        <FormItem label="档案号">
                            <Input v-model="formValidate.jgnbdah" placeholder="机构内部档案号"></Input>
                        </FormItem>
                    </Col>
                    <Col span="8">
                        <FormItem label="文化程度">
                            <Select v-model="formValidate.whcddm" clearable>
                                <Option value="1">程度1</Option>
                                <Option value="2">程度2</Option>
                            </Select>
                        </FormItem>
                    </Col>
                </Row>
                <Row>
                    <Col span="8">
                        <FormItem label="固定电话">
                            <Input v-model="formValidate.gddhhm" placeholder="固定电话"></Input>
                        </FormItem>
                    </Col>
                    <Col span="8">
                        <FormItem label="手机号码">
                            <Input v-model="formValidate.sjhm" placeholder="手机号码"></Input>
                        </FormItem>
                    </Col>
                    <Col span="8">
                        <FormItem label="电子邮箱">
                            <Input v-model="formValidate.dzyj" placeholder="电子邮箱"></Input>
                        </FormItem>
                    </Col>
                </Row>
                <Row>
                    <Col span="8">
                        <FormItem label="职业类别">
                            <Select v-model="formValidate.zylbdm" clearable>
                                <Option value="1">职业1</Option>
                                <Option value="2">职业2</Option>
                            </Select>
                        </FormItem>
                    </Col>
                    <Col span="8">
                        <FormItem label="出生地划码">
                            <Input v-model="formValidate.csdxzqhm" placeholder="出生地行政区划码"></Input>
                        </FormItem>
                    </Col>
                    <Col span="8">
                        <FormItem label="居住地划码">
                            <Input v-model="formValidate.jzdxzqhm" placeholder="居住地行政区划码"></Input>
                        </FormItem>
                    </Col>
                </Row>
                <Row>
                    <Col span="12">
                        <FormItem label="出生地址">
                            <Input v-model="formValidate.csd" placeholder="出生地址"></Input>
                        </FormItem>
                    </Col>
                    <Col span="12">
                        <FormItem label="居住地址">
                            <Input v-model="formValidate.jzdz" placeholder="居住地址"></Input>
                        </FormItem>
                    </Col>
                </Row>
                <Row>
                    <Col span="8">
                        <FormItem label="户口地划码">
                            <Input v-model="formValidate.hkdxzqhm" placeholder="户口地行政区划码"></Input>
                        </FormItem>
                    </Col>
                    <Col span="16">
                        <FormItem label="户口地址">
                            <Input v-model="formValidate.hkdz" placeholder="户口地址"></Input>
                        </FormItem>
                    </Col>
                </Row>
                <Row>
                    <Col span="6">
                        <FormItem label="联系人姓名">
                            <Input v-model="formValidate.lxrxm" placeholder="联系人姓名"></Input>
                        </FormItem>
                    </Col>
                    <Col span="6">
                        <FormItem label="联系人电话">
                            <Input v-model="formValidate.lxrdh" placeholder="联系人电话"></Input>
                        </FormItem>
                    </Col>
                    <Col span="6">
                        <FormItem label="ABO血型">
                            <Select v-model="formValidate.abo" clearable>
                                <Option value="1">血型1</Option>
                                <Option value="2">血型2</Option>
                            </Select>
                        </FormItem>
                    </Col>
                    <Col span="6">
                        <FormItem label="RH血型">
                            <Select v-model="formValidate.rh" clearable>
                                <Option value="1">血型1</Option>
                                <Option value="2">血型2</Option>
                            </Select>
                        </FormItem>
                    </Col>
                </Row>
                <Row>
                    <Col span="8">
                        <FormItem label="参保类型">
                            <Select v-model="formValidate.cblbdm" clearable>
                                <Option value="1">参保1</Option>
                                <Option value="2">参保2</Option>
                            </Select>
                        </FormItem>
                    </Col>
                    <Col span="8">
                        <FormItem label="个人档案ID">
                            <Input v-model="formValidate.grdaid" placeholder="个人档案ID"></Input>
                        </FormItem>
                    </Col>
                    <Col span="8">
                        <FormItem label="数据生成时间">
                            <DatePicker v-model="formValidate.sjscsj" type="date" placeholder="请选择数据生成时间"></DatePicker>
                        </FormItem>
                    </Col>
                </Row>
                <Row>
                    <Col span="8">
                        <FormItem label="密级">
                            <Select v-model="formValidate.mj" clearable>
                                <Option value="1">一般</Option>
                                <Option value="2">个人信息加密</Option>
                            </Select>
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
                <FormItem label="预留1" prop="yl1">
                    <Input v-model="formValidate.yl1" type="textarea" :autosize="{minRows: 5, maxRows: 15}"
                           placeholder="预留1"></Input>
                </FormItem>
                <FormItem label="预留2" prop="yl2">
                    <Input v-model="formValidate.yl2" type="textarea" :autosize="{minRows: 5, maxRows: 15}"
                           placeholder="预留2"></Input>
                </FormItem>
                <FormItem style="margin-top: 5%;">
                    <Button type="success" @click="submitPersonDetail('formValidate')">保存</Button>
                    <Button type="text" to="/person/list">返回个人信息列表</Button>
                </FormItem>
            </Form>
        </Card>
    </div>
</template>
<script type="text/ecmascript-6">

    import {addPerson, editPerson, personDetail} from '@/api/person'

    export default {
        name: 'add_edit_server',
        data() {
            return {
                formValidate: {
                    jgdm: '', klx: '', kh: '', zjlbdm: '', zjhm: '',
                    xm: '', xbdm: '', xbmc: '', hzsx: '', hyztdm: '',
                    csrq: '', mzdm: '', gjdm: '', jgnbdah: '', whcddm: '',
                    gddhhm: '', sjhm: '', dzyj: '', zylbdm: '', csdxzqhm: '',
                    jzdxzqhm: '', csd: '', jzdz: '', hkdxzqhm: '', hkdz: '',
                    lxrxm: '', lxrdh: '', abo: '', rh: '', cblbdm: '',
                    grdaid: '', tbrqsj: '', sjscsj: '', mj: '', cxbz: '',
                    yl1: '', yl2: ''
                },
                ruleValidate: {
                    jgdm: [
                        {required: true, message: '请填写机构标识', trigger: 'blur'}
                    ],
                    kh: [
                        {required: true, message: '请填写卡号', trigger: 'blur'}
                    ],
                    xm: [
                        {required: true, message: '请填写姓名', trigger: 'blur'}
                    ],
                    xbdm: [
                        {required: true, message: '请选择性别', trigger: 'change'}
                    ],
                    csrq: [
                        {required: true, type: 'date', message: '请选择出生日期', trigger: 'change'}
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
            this.person_title = this.$route.params.id >= 0 ? '编辑个人信息' : '添加个人信息'
            this.setPersonDetail()
        },
        methods: {
            setPersonDetail() {
                let id = this.$route.params.id
                var that = this
                if (id >= 0) {
                    personDetail(id).then(function (res) {
                        if (res.data.errorCode === 0) {
                            let data = res.data.data
                            that.formValidate = {
                                jgdm: data.jgdm, klx: data.klx, kh: data.kh, zjlbdm: data.zjlbdm, zjhm: data.zjhm,
                                xm: data.xm, xbdm: data.xbdm, xbmc: data.xbmc, hzsx: data.hzsx, hyztdm: data.hyztdm,
                                csrq: data.csrq, mzdm: data.mzdm, gjdm: data.gjdm, jgnbdah: data.jgnbdah, whcddm: data.whcddm,
                                gddhhm: data.gddhhm, sjhm: data.sjhm, dzyj: data.dzyj, zylbdm: data.zylbdm, csdxzqhm: data.csdxzqhm,
                                jzdxzqhm: data.jzdxzqhm, csd: data.csd, jzdz: data.jzdz, hkdxzqhm: data.hkdxzqhm, hkdz: data.hkdz,
                                lxrxm: data.lxrxm, lxrdh: data.lxrdh, abo: data.abo, rh: data.rh, cblbdm: data.cblbdm,
                                grdaid: data.grdaid, tbrqsj: data.tbrqsj, sjscsj: data.sjscsj, mj: data.mj, cxbz: data.cxbz,
                                yl1: '', yl2: ''
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
            submitPersonDetail(name) {
                let id = this.$route.params.id
                var that = this
                let data = this.formValidate
                let data2 = {
                    jgdm: data.jgdm, klx: data.klx, kh: data.kh, zjlbdm: data.zjlbdm, zjhm: data.zjhm,
                    xm: data.xm, xbdm: data.xbdm, xbmc: data.xbmc, hzsx: data.hzsx, hyztdm: data.hyztdm,
                    csrq: data.csrq, mzdm: data.mzdm, gjdm: data.gjdm, jgnbdah: data.jgnbdah, whcddm: data.whcddm,
                    gddhhm: data.gddhhm, sjhm: data.sjhm, dzyj: data.dzyj, zylbdm: data.zylbdm, csdxzqhm: data.csdxzqhm,
                    jzdxzqhm: data.jzdxzqhm, csd: data.csd, jzdz: data.jzdz, hkdxzqhm: data.hkdxzqhm, hkdz: data.hkdz,
                    lxrxm: data.lxrxm, lxrdh: data.lxrdh, abo: data.abo, rh: data.rh, cblbdm: data.cblbdm,
                    grdaid: data.grdaid, tbrqsj: data.tbrqsj, sjscsj: data.sjscsj, mj: data.mj, cxbz: data.cxbz,
                    yl1: '', yl2: ''
                };
                data2.xbmc = '男'
                data2.sjscsj = data.sjscsj ?
                    Date.parse(data.sjscsj) / 1000 : ''
                data2.csrq = Date.parse(data.csrq) / 1000
                data2.tbrqsj = Date.parse(data.tbrqsj) / 1000

                this.$refs[name].validate((valid) => {
                    if (valid) {
                        if (id >= 0) {
                            editPerson(data2, id).then(function (res) {
                                if (res.data.errorCode == 0) {
                                    that.$Message.info('保存成功')
                                    that.$router.push({
                                        name: 'person_list'
                                    })
                                } else {
                                    that.$Message.info(res.data.message || '保存失败')
                                }
                            }).catch(function (err) {
                                that.$Message.info(err.data.message || '接口获取失败')
                            })
                        } else {
                            addPerson(data2).then(function (res) {
                                if (res.data.errorCode == 0) {
                                    that.$Message.info('保存成功')
                                    that.$router.push({
                                        name: 'person_list'
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
