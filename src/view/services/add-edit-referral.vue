<style>

</style>
<template>
    <div>
        <Card>
            <h4>{{referral_title}}</h4>
            <Divider/>

            <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="120">
                <Row>
                    <Col span="8">
                        <FormItem label="机构标识" prop="jgdm">
                            <Input v-model="formValidate.jgdm" placeholder="机构标识"></Input>
                        </FormItem>
                    </Col>
                    <Col span="8">
                        <FormItem label="服务网点代码" prop="fwwddm">
                            <Input v-model="formValidate.fwwddm" placeholder="服务网点代码"></Input>
                        </FormItem>
                    </Col>
                    <Col span="8">
                        <FormItem label="转诊记录ID" prop="zzjlid">
                            <Input v-model="formValidate.zzjlid" placeholder="转诊记录ID"></Input>
                        </FormItem>
                    </Col>
                </Row>
                <Row>
                    <Col span="8">
                        <FormItem label="卡号" prop="kh">
                            <Input v-model="formValidate.kh" placeholder="卡号"></Input>
                        </FormItem>
                    </Col>
                    <Col span="8">
                        <FormItem label="卡类型" prop="klx">
                            <Select v-model="formValidate.klx" clearable>
                                <Option value="0">健康卡</Option>
                                <Option value="1">社保卡</Option>
                                <Option value="2">市民卡</Option>
                                <Option value="3">医院系统内部号</Option>
                                <Option value="4">计划免疫卡</Option>
                                <Option value="5">国家居民健康卡</Option>
                                <Option value="6">居民健康档案编号</Option>
                                <Option value="9">其他</Option>
                            </Select>
                        </FormItem>
                    </Col>
                    <Col span="8">
                        <FormItem label="门诊号" prop="mzh">
                            <Input v-model="formValidate.mzh" placeholder="门诊号"></Input>
                        </FormItem>
                    </Col>
                </Row>
                <Row>
                    <Col span="8">
                        <FormItem label="患者姓名" prop="xm">
                            <Input v-model="formValidate.xm" placeholder="患者姓名"></Input>
                        </FormItem>
                    </Col>
                    <Col span="8">
                        <FormItem label="性别代码" prop="xbdm">
                            <Select v-model="formValidate.xbdm" clearable>
                                <Option v-for="(sex, index) in gender" :key="index" :value="sex.code">{{ sex.name }}
                                </Option>
                            </Select>
                        </FormItem>
                    </Col>
                    <Col span="8">
                        <FormItem label="出生日期" prop="csrq">
                            <DatePicker v-model="formValidate.csrq" type="date" placeholder="请选择出生日期"></DatePicker>
                        </FormItem>
                    </Col>
                </Row>
                <Row>
                    <Col span="8">
                        <FormItem label="年龄（岁）" prop="nls">
                            <Input v-model="formValidate.nls" placeholder="年龄（岁）"></Input>
                        </FormItem>
                    </Col>
                    <Col span="8">
                        <FormItem label="年龄（月）" prop="nly">
                            <Input v-model="formValidate.nly" placeholder="年龄（月）"></Input>
                        </FormItem>
                    </Col>
                    <Col span="8">
                        <FormItem label="就诊日期" prop="jzrqsj">
                            <DatePicker v-model="formValidate.jzrqsj" type="date" placeholder="请选择就诊日期时间"></DatePicker>
                        </FormItem>
                    </Col>
                </Row>
                <Row>
                    <Col span="6">
                        <FormItem label="负责医生工号" prop="fzysgh">
                            <Input v-model="formValidate.fzysgh" placeholder="负责医生工号"></Input>
                        </FormItem>
                    </Col>
                    <Col span="6">
                        <FormItem label="负责医生姓名" prop="fzysxm">
                            <Input v-model="formValidate.fzysxm" placeholder="负责医生姓名"></Input>
                        </FormItem>
                    </Col>
                    <Col span="6">
                        <FormItem label="负责科室编码" prop="fzksbm">
                            <Input v-model="formValidate.fzksbm" placeholder="负责科室编码"></Input>
                        </FormItem>
                    </Col>
                    <Col span="6">
                        <FormItem label="负责科室名称" prop="fzksmc">
                            <Input v-model="formValidate.fzksmc" placeholder="负责科室名称"></Input>
                        </FormItem>
                    </Col>
                </Row>
                <FormItem label="转诊原因" prop="zzyy">
                    <Input v-model="formValidate.zzyy" type="textarea" :autosize="{minRows: 5, maxRows: 15}"
                           placeholder="转诊原因"></Input>
                </FormItem>
                <Row>
                    <Col span="6">
                        <FormItem label="转诊日期及时间" prop="zzsj">
                            <DatePicker v-model="formValidate.zzsj" type="datetime"
                                        placeholder="请选择转诊日期及时间"></DatePicker>
                        </FormItem>
                    </Col>
                    <Col span="6">
                        <FormItem label="转向医疗机构代码" prop="zxjgdm">
                            <Input v-model="formValidate.zxjgdm" placeholder="转向医疗机构代码"></Input>
                        </FormItem>
                    </Col>
                    <Col span="6">
                        <FormItem label="转向医疗机构名称" prop="zxjgmc">
                            <Input v-model="formValidate.zxjgmc" placeholder="转向医疗机构名称"></Input>
                        </FormItem>
                    </Col>
                    <Col span="6">
                        <FormItem label="转诊标志" prop="zzbz">
                            <Input v-model="formValidate.zzbz" placeholder="转诊标志"></Input>
                        </FormItem>
                    </Col>
                </Row>
                <Row>
                    <Col span="6">
                        <FormItem label="转向科室编码" prop="zxksbm">
                            <Input v-model="formValidate.zxksbm" placeholder="转向科室编码"></Input>
                        </FormItem>
                    </Col>
                    <Col span="6">
                        <FormItem label="转向科室名称" prop="zxksmc">
                            <Input v-model="formValidate.zxksmc" placeholder="转向科室名称"></Input>
                        </FormItem>
                    </Col>
                    <Col span="6">
                        <FormItem label="转向医生工号" prop="zxysgh">
                            <Input v-model="formValidate.zxysgh" placeholder="转向医生工号"></Input>
                        </FormItem>
                    </Col>
                    <Col span="6">
                        <FormItem label="转向医生姓名" prop="zxysxm">
                            <Input v-model="formValidate.zxysxm" placeholder="转向医生姓名"></Input>
                        </FormItem>
                    </Col>
                </Row>
                <FormItem label="主要既往史" prop="zyjws">
                    <Input v-model="formValidate.zyjws" type="textarea" :autosize="{minRows: 5, maxRows: 15}"
                           placeholder="主要既往史"></Input>
                </FormItem>
                <FormItem label="治疗经过" prop="zljg">
                    <Input v-model="formValidate.zljg" type="textarea" :autosize="{minRows: 5, maxRows: 15}"
                           placeholder="治疗经过"></Input>
                </FormItem>
                <FormItem label="康复建议" prop="xybzlfa">
                    <Input v-model="formValidate.xybzlfa" type="textarea" :autosize="{minRows: 5, maxRows: 15}"
                           placeholder="下一步治疗方案及康复建议"></Input>
                </FormItem>
                <Row>
                    <Col span="6">
                        <FormItem label="密级">
                            <Input v-model="formValidate.mj" placeholder="转向医疗机构名称"></Input>
                        </FormItem>
                    </Col>
                    <Col span="6">
                        <FormItem label="数据生成时间" prop="sjscsj">
                            <DatePicker v-model="formValidate.sjscsj" type="date" placeholder="请选择数据生成时间"></DatePicker>
                        </FormItem>
                    </Col>
                    <Col span="6">
                        <FormItem label="撤销标志" prop="cxbz">
                            <Select v-model="formValidate.cxbz" clearable>
                                <Option value="1">正常</Option>
                                <Option value="2">修改</Option>
                                <Option value="3">撤销</Option>
                            </Select>
                        </FormItem>
                    </Col>
                    <Col span="6">
                        <FormItem label="填报日期" prop="tbrqsj">
                            <DatePicker v-model="formValidate.tbrqsj" type="date" placeholder="请选择出生日期"></DatePicker>
                        </FormItem>
                    </Col>
                </Row>
                <FormItem style="margin-top: 5%;">
                    <Button type="success" @click="sumbitReferral('formValidate')">保存</Button>
                    <Button type="text" to="/service/referral-list">返回转诊记录列表</Button>
                </FormItem>
            </Form>
        </Card>
    </div>
</template>
<script type="text/ecmascript-6">

    import {addReferral, editReferral, referralDetail} from '@/api/referral'
    import {_select} from '@/api/select'

    export default {
        name: 'add_edit_referral',
        data() {
            const checkLen = (rule, value, callback) => {
                if (value >= 999) {
                    callback(new Error('长度不能超过3个字符'))
                } else {
                    callback()
                }
            }
            return {
                formValidate: {
                    jgdm: '', fwwddm: '', zzjlid: '',
                    kh: '', klx: '', mzh: '', xm: '', xbdm: '',
                    csrq: '', nls: '', nly: '', jzrqsj: '', fzysgh: '',
                    fzysxm: '', fzksbm: '', fzksmc: '', zzyy: '', zzsj: '',
                    zxjgdm: '', zxjgmc: '', zxksbm: '', zxksmc: '', zxysgh: '',
                    zxysxm: '', zyjws: '', zljg: '', xybzlfa: '', zzbz: '',
                    mj: '', sjscsj: '', tbrqsj: '', cxbz: ''
                },
                ruleValidate: {
                    jgdm: [
                        {required: true, message: '请填写机构标识', trigger: 'blur'},
                        {max: 30, message: '长度不能超过30个字符', trigger: 'blur'}
                    ],
                    xybzlfa: [
                        {max: 100, message: '长度不能超过100个字符', trigger: 'blur'}
                    ],
                    zyjws: [
                        {max: 100, message: '长度不能超过100个字符', trigger: 'blur'}
                    ],
                    zyjws: [
                        {max: 100, message: '长度不能超过100个字符', trigger: 'blur'}
                    ],
                    zxksbm: [
                        {max: 8, message: '长度不能超过8个字符', trigger: 'blur'}
                    ],
                    zxksmc: [
                        {max: 32, message: '长度不能超过32个字符', trigger: 'blur'}
                    ],
                    zxysgh: [
                        {max: 30, message: '长度不能超过30个字符', trigger: 'blur'}
                    ],
                    zxysxm: [
                        {max: 50, message: '长度不能超过50个字符', trigger: 'blur'}
                    ],
                    zzyy: [
                        {max: 100, message: '长度不能超过100个字符', trigger: 'blur'}
                    ],
                    fzysxm: [
                        {max: 100, message: '长度不能超过100个字符', trigger: 'blur'}
                    ],
                    fzysgh: [
                        {max: 30, message: '长度不能超过30个字符', trigger: 'blur'}
                    ],
                    zzjlid: [
                        {required: true, message: '请填写转诊记录ID', trigger: 'blur'},
                        {max: 30, message: '长度不能超过30个字符', trigger: 'blur'}
                    ],
                    zzbz: [
                        {required: true, message: '请填写转诊标志', trigger: 'blur'},
                        {max: 2, message: '长度不能超过2个字符', trigger: 'blur'}
                    ],
                    zxjgmc: [
                        {required: true, message: '请填写转向医疗机构名称', trigger: 'blur'},
                        {max: 70, message: '长度不能超过30个字符', trigger: 'blur'}
                    ],
                    zxjgdm: [
                        {required: true, message: '请填写转向医疗机构代码', trigger: 'blur'},
                        {max: 30, message: '长度不能超过30个字符', trigger: 'blur'}
                    ],
                    nls: [
                        {
                            required: true,
                            type: 'number',
                            message: '请填写年龄（岁）',
                            trigger: 'blur',
                            transform: (value) => Number(value)
                        },
                        {validator: checkLen, trigger: 'blur'}
                    ],
                    nly: [
                        {max: 10, message: '长度不能超过10个字符', trigger: 'blur'}
                    ],
                    fzksbm: [
                        {required: true, message: '请填写负责科室编码', trigger: 'blur'},
                        {max: 10, message: '长度不能超过10个字符', trigger: 'blur'}
                    ],
                    fzksmc: [
                        {required: true, message: '请填写负责科室名称', trigger: 'blur'},
                        {max: 50, message: '长度不能超过50个字符', trigger: 'blur'}
                    ],
                    mzh: [
                        {required: true, message: '请填写门诊号', trigger: 'blur'},
                        {max: 20, message: '长度不能超过20个字符', trigger: 'blur'}
                    ],
                    xm: [
                        {required: true, message: '请填写患者姓名', trigger: 'blur'},
                        {max: 50, message: '长度不能超过50个字符', trigger: 'blur'}
                    ],
                    xbdm: [
                        {required: true, message: '请选择性别', trigger: 'change'}
                    ],
                    klx: [
                        {required: true, message: '请选择卡类型', trigger: 'change'}
                    ],
                    kh: [
                        {required: true, message: '请填写卡号', trigger: 'blur'},
                        {max: 30, message: '长度不能超过30个字符', trigger: 'blur'}
                    ],
                    fwwddm: [
                        {required: true, message: '请填写服务网点代码', trigger: 'blur'},
                        {max: 30, message: '长度不能超过30个字符', trigger: 'blur'}
                    ],
                    zzsj: [
                        {required: true, type: 'date', message: '请选择转诊日期及时间', trigger: 'change'}
                    ],
                    jzrqsj: [
                        {required: true, type: 'date', message: '请选择就诊日期', trigger: 'change'}
                    ],
                    csrq: [
                        {required: true, type: 'date', message: '请选择出生日期', trigger: 'change'}
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
                },
                gender: []
            }
        },
        created() {
            this.referral_title = this.$route.params.id >= 0 ? '编辑转诊记录信息' : '添加转诊记录信息'
            this.setReferral()
            this.getSelectList('gender')
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
                }).catch(function (err) {
                    console.log('获取下拉菜单：' + name + '失败！')
                })
            },
            setReferral() {
                let id = this.$route.params.id
                var that = this
                if (id >= 0) {
                    referralDetail(id).then(function (res) {
                        if (res.data.errorCode === 0) {
                            let data = res.data.data
                            that.formValidate = {
                                jgdm: data.jgdm,
                                fwwddm: data.fwwddm,
                                zzjlid: data.zzjlid,
                                kh: data.kh,
                                klx: data.klx,
                                mzh: data.mzh,
                                xm: data.xm,
                                xbdm: data.xbdm,
                                csrq: data.csrq,
                                nls: data.nls,
                                nly: data.nly,
                                jzrqsj: data.jzrqsj,
                                fzysgh: data.fzysgh,
                                fzysxm: data.fzysxm,
                                fzksbm: data.fzksbm,
                                fzksmc: data.fzksmc,
                                zzyy: data.zzyy,
                                zzsj: data.zzsj,
                                zxjgdm: data.zxjgdm,
                                zxjgmc: data.zxjgmc,
                                zxksbm: data.zxksbm,
                                zxksmc: data.zxksmc,
                                zxysgh: data.zxysgh,
                                zxysxm: data.zxysxm,
                                zyjws: data.zyjws,
                                zljg: data.zljg,
                                xybzlfa: data.xybzlfa,
                                zzbz: data.zzbz,
                                mj: data.mj,
                                sjscsj: data.sjscsj,
                                tbrqsj: data.tbrqsj,
                                cxbz: data.cxbz
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
            sumbitReferral(name) {
                let id = this.$route.params.id
                var that = this
                let data = this.formValidate
                let data2 = {
                    jgdm: data.jgdm, fwwddm: data.fwwddm, zzjlid: data.zzjlid, kh: data.kh,
                    klx: data.klx, mzh: data.mzh, xm: data.xm, xbdm: data.xbdm,
                    nls: data.nls, nly: data.nly, fzysgh: data.fzysgh,
                    fzysxm: data.fzysxm, fzksbm: data.fzksbm, fzksmc: data.fzksmc, zzyy: data.zzyy,
                    zxjgdm: data.zxjgdm, zxjgmc: data.zxjgmc, zxksbm: data.zxksbm,
                    zxksmc: data.zxksmc, zxysgh: data.zxysgh, zxysxm: data.zxysxm, zyjws: data.zyjws,
                    zljg: data.zljg, xybzlfa: data.xybzlfa, zzbz: data.zzbz,
                    mj: data.mj, cxbz: data.cxbz
                }

                data2.zzsj = Date.parse(data.zzsj) / 1000
                data2.csrq = Date.parse(data.csrq) / 1000
                data2.jzrqsj = Date.parse(data.jzrqsj) / 1000
                data2.sjscsj = Date.parse(data.sjscsj) / 1000
                data2.tbrqsj = Date.parse(data.tbrqsj) / 1000

                this.$refs[name].validate((valid) => {
                    if (valid) {
                        if (id >= 0) {
                            editReferral(data2, id).then(function (res) {
                                if (res.data.errorCode == 0) {
                                    that.$Message.info('保存成功')
                                    that.$router.push({
                                        name: 'referral_list'
                                    })
                                } else {
                                    that.$Message.info(res.data.message || '保存失败')
                                }
                            }).catch(function (err) {
                                that.$Message.info(err.data.message || '接口获取失败')
                            })
                        } else {
                            addReferral(data2).then(function (res) {
                                if (res.data.errorCode == 0) {
                                    that.$Message.info('保存成功')
                                    that.$router.push({
                                        name: 'referral_list'
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
