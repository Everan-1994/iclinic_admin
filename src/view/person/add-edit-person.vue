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
                                <Option v-for="(lx, index) in klx" :key="index" :value="lx.value">{{ lx.name }}</Option>
                            </Select>
                            </Input>
                        </FormItem>
                    </Col>
                </Row>
                <Row>
                    <Col span="12">
                        <FormItem label="证件类型/证件号" prop="zjhm">
                            <Input v-model="formValidate.zjhm">
                            <Select v-model="formValidate.zjlbdm" slot="prepend" style="width: 100px">
                                <Option v-for="(idc, index) in idcard" :key="index" :value="idc.code">{{ idc.name }}</Option>
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
                                <Option v-for="(sex, index) in gender" :key="index" :value="sex.code">{{ sex.name }}</Option>
                            </Select>
                        </FormItem>
                    </Col>
                </Row>
                <Row>
                    <Col span="6">
                        <FormItem label="患者属性">
                            <Select v-model="formValidate.hzsx" clearable>
                                <Option value="00">自费</Option>
                                <Option value="21">广州医保</Option>
                                <Option value="99">其他</Option>
                            </Select>
                        </FormItem>
                    </Col>
                    <Col span="6">
                        <FormItem label="婚姻状况">
                            <Select v-model="formValidate.hyztdm" clearable>
                                <Option v-for="(m, index) in marriage" :key="index" :value="m.code">{{ m.name }}</Option>
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
                                <Option v-for="(n, index) in nation" :key="index" :value="n.code">{{ n.name }}</Option>
                            </Select>
                        </FormItem>
                    </Col>
                </Row>
                <Row>
                    <Col span="8">
                        <FormItem label="国籍">
                            <Select v-model="formValidate.gjdm" clearable>
                                <Option v-for="(c, index) in country" :key="index" :value="c.code">{{ c.name }}</Option>
                            </Select>
                        </FormItem>
                    </Col>
                    <Col span="8">
                        <FormItem label="档案号" prop="jgnbdah">
                            <Input v-model="formValidate.jgnbdah" placeholder="机构内部档案号"></Input>
                        </FormItem>
                    </Col>
                    <Col span="8">
                        <FormItem label="文化程度">
                            <Select v-model="formValidate.whcddm" clearable>
                                <Option v-for="(e,index) in education" :key="index" :value="e.code">{{ e.name }}</Option>
                            </Select>
                        </FormItem>
                    </Col>
                </Row>
                <Row>
                    <Col span="8">
                        <FormItem label="固定电话" prop="gddhhm">
                            <Input v-model="formValidate.gddhhm" placeholder="固定电话"></Input>
                        </FormItem>
                    </Col>
                    <Col span="8">
                        <FormItem label="手机号码" prop="sjhm">
                            <Input v-model="formValidate.sjhm" placeholder="手机号码"></Input>
                        </FormItem>
                    </Col>
                    <Col span="8">
                        <FormItem label="电子邮箱" prop="dzyj">
                            <Input v-model="formValidate.dzyj" placeholder="电子邮箱"></Input>
                        </FormItem>
                    </Col>
                </Row>
                <Row>
                    <Col span="8">
                        <FormItem label="职业类别">
                            <Select v-model="formValidate.zylbdm" clearable>
                                <Option v-for="(c, index) in career" :key="index" :value="c.code">{{ c.name }}</Option>
                            </Select>
                        </FormItem>
                    </Col>
                    <Col span="8">
                        <FormItem label="出生地划码" prop="csdxzqhm">
                            <Input v-model="formValidate.csdxzqhm" placeholder="出生地行政区划码"></Input>
                        </FormItem>
                    </Col>
                    <Col span="8">
                        <FormItem label="居住地划码" prop="jzdxzqhm">
                            <Input v-model="formValidate.jzdxzqhm" placeholder="居住地行政区划码"></Input>
                        </FormItem>
                    </Col>
                </Row>
                <Row>
                    <Col span="12">
                        <FormItem label="出生地址" prop="csd">
                            <Input v-model="formValidate.csd" placeholder="出生地址"></Input>
                        </FormItem>
                    </Col>
                    <Col span="12">
                        <FormItem label="居住地址" prop="jzdz">
                            <Input v-model="formValidate.jzdz" placeholder="居住地址"></Input>
                        </FormItem>
                    </Col>
                </Row>
                <Row>
                    <Col span="8">
                        <FormItem label="户口地划码" prop="hkdxzqhm">
                            <Input v-model="formValidate.hkdxzqhm" placeholder="户口地行政区划码"></Input>
                        </FormItem>
                    </Col>
                    <Col span="16">
                        <FormItem label="户口地址" prop="hkdz">
                            <Input v-model="formValidate.hkdz" placeholder="户口地址"></Input>
                        </FormItem>
                    </Col>
                </Row>
                <Row>
                    <Col span="6">
                        <FormItem label="联系人姓名" prop="lxrxm">
                            <Input v-model="formValidate.lxrxm" placeholder="联系人姓名"></Input>
                        </FormItem>
                    </Col>
                    <Col span="6">
                        <FormItem label="联系人电话" prop="lxrdh">
                            <Input v-model="formValidate.lxrdh" placeholder="联系人电话"></Input>
                        </FormItem>
                    </Col>
                    <Col span="6">
                        <FormItem label="ABO血型">
                            <Select v-model="formValidate.abo" clearable>
                                <Option v-for="(a, index) in abo" :key="index" :value="a.code">{{ a.name }}</Option>
                            </Select>
                        </FormItem>
                    </Col>
                    <Col span="6">
                        <FormItem label="RH血型">
                            <Select v-model="formValidate.rh" clearable>
                                <Option v-for="(r, index) in rh" :key="index" :value="r.code">{{ r.name }}</Option>
                            </Select>
                        </FormItem>
                    </Col>
                </Row>
                <Row>
                    <Col span="8">
                        <FormItem label="参保类型">
                            <Select v-model="formValidate.cblbdm" clearable>
                                <Option v-for="(i, index) in insurance" :key="index" :value="i.code">{{ i.name }}</Option>
                            </Select>
                        </FormItem>
                    </Col>
                    <Col span="8">
                        <FormItem label="个人档案ID" prop="grdaid">
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
    import { _select } from '@/api/select'

    export default {
        name: 'add_edit_person',
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
                        {required: true, message: '请填写机构标识', trigger: 'blur'},
                        {max: 30, message: '长度不能超过30个字符', trigger: 'blur'}
                    ],
                    kh: [
                        {required: true, message: '请填写卡号', trigger: 'blur'},
                        {max: 30, message: '长度不能超过30个字符', trigger: 'blur'}
                    ],
                    grdaid: [
                        {max: 30, message: '长度不能超过30个字符', trigger: 'blur'}
                    ],
                    gddhhm: [
                        {max: 20, message: '长度不能超过20个字符', trigger: 'blur'}
                    ],
                    jzdz: [
                        {max: 200, message: '长度不能超过200个字符', trigger: 'blur'}
                    ],
                    lxrdh: [
                        {max: 50, message: '长度不能超过50个字符', trigger: 'blur'}
                    ],
                    lxrxm: [
                        {max: 50, message: '长度不能超过50个字符', trigger: 'blur'}
                    ],
                    hkdz: [
                        {max: 200, message: '长度不能超过200个字符', trigger: 'blur'}
                    ],
                    csd: [
                        {max: 200, message: '长度不能超过200个字符', trigger: 'blur'}
                    ],
                    hkdxzqhm: [
                        {max: 15, message: '长度不能超过15个字符', trigger: 'blur'}
                    ],
                    jzdxzqhm: [
                        {max: 15, message: '长度不能超过15个字符', trigger: 'blur'}
                    ],
                    csdxzqhm: [
                        {max: 15, message: '长度不能超过15个字符', trigger: 'blur'}
                    ],
                    sjhm: [
                        {max: 20, message: '长度不能超过20个字符', trigger: 'blur'}
                    ],
                    dzyj: [
                        {max: 70, message: '长度不能超过70个字符', trigger: 'blur'}
                    ],
                    jgnbdah: [
                        {max: 32, message: '长度不能超过32个字符', trigger: 'blur'}
                    ],
                    zjhm: [
                        {max: 20, message: '长度不能超过20个字符', trigger: 'blur'}
                    ],
                    xm: [
                        {required: true, message: '请填写姓名', trigger: 'blur'},
                        {max: 50, message: '长度不能超过50个字符', trigger: 'blur'}
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
                },
                klx: [
                    {
                        value: 0,
                        name: '健康卡'
                    },
                    {
                        value: 1,
                        name: '社保卡'
                    },
                    {
                        value: 2,
                        name: '市民卡'
                    },
                    {
                        value: 3,
                        name: '医院系统内部号'
                    },
                    {
                        value: 4,
                        name: '计划免疫卡'
                    },
                    {
                        value: 5,
                        name: '国家居民健康卡'
                    },
                    {
                        value: 6,
                        name: '居民健康档案编号'
                    },
                    {
                        value: 9,
                        name: '其他'
                    }
                ], // 卡类型
                idcard: [], // 身份证类型
                gender: [], // 性别代码
                marriage: [], // 婚姻状况
                nation: [], // 名族代码
                country: [], // 国籍代码
                education: [], // 文化程度
                career: [], // 职业类别
                abo: [], // abo 血型
                rh: [], // rh 血型
                insurance: [], // 参保类型
            }
        },
        created() {
            this.person_title = this.$route.params.id >= 0 ? '编辑个人信息' : '添加个人信息'
            this.setPersonDetail()
            this.getSelectList('idcard')
            this.getSelectList('gender')
            this.getSelectList('marriage')
            this.getSelectList('nation')
            this.getSelectList('country')
            this.getSelectList('education')
            this.getSelectList('career')
            this.getSelectList('abo')
            this.getSelectList('rh')
            this.getSelectList('insurance')
        },
        methods: {
            getSelectList(name) {
                let _this = this
                _select(name).then(function (res) {
                    if (res.data.errorCode === 0) {
                        _this[`${name}`] = res.data.data
                    } else {
                        console.log('获取下拉菜单：' + name + '失败！')
                    }
                }).catch(function(err) {
                    console.log('获取下拉菜单：' + name + '失败！')
                })
            },
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

                this.gender.forEach((val) => {
                    if (data.xbdm == val.code) {
                        data2.xbmc = val.name // 性别名称赋值
                    }
                })

                this.nation.forEach((val) => {
                    if (data.mzdm == val.code) {
                        data2.mzmc = val.name // 民族名称赋值
                    }
                })

                this.country.forEach((val) => {
                    if (data.gjdm == val.code) {
                        data2.gjmc = val.name // 民族名称赋值
                    }
                })

                this.education.forEach((val) => {
                    if (data.whcddm == val.code) {
                        data2.whcdmc = val.name // 文化程度名称赋值
                    }
                })

                this.career.forEach((val) => {
                    if (data.zylbdm == val.code) {
                        data2.zylbmc = val.name // 职业类别名称赋值
                    }
                })

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
