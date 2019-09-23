<style>

</style>
<template>
    <div>
        <Card>
            <h4>{{organization_title}}</h4>
            <Divider/>

            <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="120">
                <Row>
                    <Col span="12">
                        <FormItem label="机构标识" prop="jgdm">
                            <Input v-model="formValidate.jgdm" placeholder="机构标识"></Input>
                        </FormItem>
                    </Col>
                    <Col span="12">
                        <FormItem label="统一社会信用代码" prop="zzjgdm">
                            <Input v-model="formValidate.zzjgdm" placeholder="统一社会信用代码"></Input>
                        </FormItem>
                    </Col>
                </Row>
                <Row>
                    <Col span="8">
                        <FormItem label="机构名称" prop="jgmc">
                            <Input v-model="formValidate.jgmc" placeholder="机构名称"></Input>
                        </FormItem>
                    </Col>
                    <Col span="8">
                        <FormItem label="行政区划代码" prop="xzqhdm">
                            <Input v-model="formValidate.xzqhdm" placeholder="行政区划代码"></Input>
                        </FormItem>
                    </Col>
                    <Col span="8">
                        <FormItem label="机构类型" prop="jglx">
                            <Select v-model="formValidate.jglx" clearable>
                                <Option value="1">类型1</Option>
                                <Option value="2">类型2</Option>
                            </Select>
                        </FormItem>
                    </Col>
                </Row>
                <Row>
                    <Col span="6">
                        <FormItem label="机构成立日期" prop="jgclrq">
                            <DatePicker v-model="formValidate.jgclrq" type="date" placeholder="请选择机构成立日期"></DatePicker>
                        </FormItem>
                    </Col>
                    <Col span="6">
                        <FormItem label="单位隶属关系代码" prop="dwlsgxdm">
                            <Input v-model="formValidate.dwlsgxdm" placeholder="单位隶属关系代码"></Input>
                        </FormItem>
                    </Col>
                    <Col span="6">
                        <FormItem label="分类管理类别代码" prop="jgflgllbdm">
                            <Select v-model="formValidate.jgflgllbdm" clearable>
                                <Option value="1">类别1</Option>
                                <Option value="2">类别2</Option>
                            </Select>
                        </FormItem>
                    </Col>
                    <Col span="6">
                        <FormItem label="机构分类代码" prop="jgfldm">
                            <Input v-model="formValidate.jgfldm" placeholder="机构分类代码"></Input>
                        </FormItem>
                    </Col>
                </Row>
                <Row>
                    <Col span="6">
                        <FormItem label="经济类型代码" prop="jjlxdm">
                            <Input v-model="formValidate.jjlxdm" placeholder="经济类型代码"></Input>
                        </FormItem>
                    </Col>
                    <Col span="10">
                        <FormItem label="地址" prop="dz">
                            <Input v-model="formValidate.dz" placeholder="地址"></Input>
                        </FormItem>
                    </Col>
                    <Col span="8">
                        <FormItem label="医疗组织机构代码" prop="styyzzjgdm">
                            <Input v-model="formValidate.styyzzjgdm" placeholder="实体医院医疗组织机构代码"></Input>
                        </FormItem>
                    </Col>
                </Row>
                <Row>
                    <Col span="8">
                        <FormItem label="实体医院名称" prop="styymc">
                            <Input v-model="formValidate.styymc" placeholder="实体医院名称"></Input>
                        </FormItem>
                    </Col>
                    <Col span="8">
                        <FormItem label="实体医疗机构级别" prop="styljgjb">
                            <Select v-model="formValidate.styljgjb" clearable>
                                <Option value="1">级别1</Option>
                                <Option value="2">级别2</Option>
                            </Select>
                        </FormItem>
                    </Col>
                    <Col span="8">
                        <FormItem label="实体医疗机构等级" prop="styljgdj">
                            <Select v-model="formValidate.styljgdj" clearable>
                                <Option value="1">等级1</Option>
                                <Option value="2">等级2</Option>
                            </Select>
                        </FormItem>
                    </Col>
                </Row>
                <Row>
                    <Col span="6">
                        <FormItem label="互联网医院网址" prop="hlwyywz">
                            <Input v-model="formValidate.hlwyywz" placeholder="互联网医院网址"></Input>
                        </FormItem>
                    </Col>
                    <Col span="6">
                        <FormItem label="许可证号码" prop="xkzhm">
                            <Input v-model="formValidate.xkzhm" placeholder="许可证号码"></Input>
                        </FormItem>
                    </Col>
                    <Col span="6">
                        <FormItem label="许可项目名称" prop="xkxmmc">
                            <Input v-model="formValidate.xkxmmc" placeholder="许可项目名称"></Input>
                        </FormItem>
                    </Col>
                    <Col span="6">
                        <FormItem label="许可证有效期" prop="xkzyxq">
                            <DatePicker v-model="formValidate.xkzyxq" type="date" placeholder="请选择许可证有效期"></DatePicker>
                        </FormItem>
                    </Col>
                </Row>
                <Row>
                    <Col span="6">
                        <FormItem label="信息安全等级保护" prop="xxaqdjbh">
                            <Select v-model="formValidate.xxaqdjbh" clearable>
                                <Option value="1">保护1</Option>
                                <Option value="2">保护2</Option>
                            </Select>
                        </FormItem>
                    </Col>
                    <Col span="6">
                        <FormItem label="证书编号">
                            <Input v-model="formValidate.xxaqdjbhbh" placeholder="信息安全等级保护证书编号"></Input>
                        </FormItem>
                    </Col>
                    <Col span="6">
                        <FormItem label="开办资金金额数" prop="kbzjjes">
                            <Input v-model="formValidate.kbzjjes" placeholder="开办资金金额数"></Input>
                        </FormItem>
                    </Col>
                    <Col span="6">
                        <FormItem label="法人代表/负责人" prop="frdb">
                            <Input v-model="formValidate.frdb" placeholder="法人代表/负责人"></Input>
                        </FormItem>
                    </Col>
                </Row>
                <Row>
                    <Col span="6">
                        <FormItem label="地方标志" prop="jgszdmzzzdfbz">
                            <Select v-model="formValidate.jgszdmzzzdfbz" placeholder="机构所在地民族自治地方标志" clearable>
                                <Option value="1">是</Option>
                                <Option value="2">否</Option>
                            </Select>
                        </FormItem>
                    </Col>
                    <Col span="6">
                        <FormItem label="是否分支机构" prop="sffzjg">
                            <Select v-model="formValidate.sffzjg" clearable>
                                <Option value="1">是</Option>
                                <Option value="2">否</Option>
                            </Select>
                        </FormItem>
                    </Col>
                    <Col span="6">
                        <FormItem label="机构第二名称">
                            <Input v-model="formValidate.jgdemc" placeholder="机构第二名称"></Input>
                        </FormItem>
                    </Col>
                    <Col span="6">
                        <FormItem label="邮政编码">
                            <Input v-model="formValidate.yzbm" placeholder="邮政编码"></Input>
                        </FormItem>
                    </Col>
                </Row>
                <FormItem label="机构描述">
                    <Input v-model="formValidate.jgms" type="textarea" :autosize="{minRows: 5, maxRows: 15}"
                           placeholder="机构描述"></Input>
                </FormItem>
                <Row>
                    <Col span="12">
                        <FormItem label="电话号码">
                            <Input v-model="formValidate.dhhm" placeholder="电话号码(总机/查询台)"></Input>
                        </FormItem>
                    </Col>
                    <Col span="12">
                        <FormItem label="单位电子信箱">
                            <Input v-model="formValidate.dwdzyx" placeholder="单位电子信箱(E-mail)"></Input>
                        </FormItem>
                    </Col>
                </Row>
                <FormItem label="备注">
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
                    <Button type="success" @click="sumbitOrganization('formValidate')">保存</Button>
                    <Button type="text" to="/resource/organization-list">返回机构组织列表</Button>
                </FormItem>
            </Form>
        </Card>
    </div>
</template>
<script type="text/ecmascript-6">

    import {addOrganization, editOrganization, organizationDetail} from '@/api/organization'

    export default {
        name: 'add_edit_organization',
        data() {
            return {
                formValidate: {
                    jgdm: '', zzjgdm: '', jgmc: '', xzqhdm: '', jglx: '', jgclrq: '',
                    dwlsgxdm: '', jgflgllbdm: '', jgfldm: '', jjlxdm: '', dz: '',
                    styyzzjgdm: '', styymc: '', styljgjb: '', styljgdj: '', hlwyywz: '', xkzhm: '',
                    xkxmmc: '', xkzyxq: '', xxaqdjbh: '', xxaqdjbhbh: '', kbzjjes: '', frdb: '',
                    jgszdmzzzdfbz: '', sffzjg: '', jgdemc: '', jgms: '', yzbm: '', dhhm: '',
                    dwdzyx: '', bz: '', sjscsj: '', tbrqsj: '', cxbz: ''
                },
                ruleValidate: {
                    xkzhm: [
                        {required: true, message: '请填写许可证号码', trigger: 'blur'}
                    ],
                    kbzjjes: [
                        {required: true, message: '请填写开办资金金额数', trigger: 'blur'}
                    ],
                    jgszdmzzzdfbz: [
                        {required: true, message: '请选择民族自治地方标志', trigger: 'change'}
                    ],
                    sffzjg: [
                        {required: true, message: '请选择是否分支机构', trigger: 'change'}
                    ],
                    frdb: [
                        {required: true, message: '请填写法人代表/负责人', trigger: 'blur'}
                    ],
                    xkxmmc: [
                        {required: true, message: '请填写许可项目名称', trigger: 'blur'}
                    ],
                    jgdm: [
                        {required: true, message: '请填写机构标识', trigger: 'blur'}
                    ],
                    hlwyywz: [
                        {required: true, message: '请填写互联网医院网址', trigger: 'blur'}
                    ],
                    styymc: [
                        {required: true, message: '请填写实体医院名称', trigger: 'blur'}
                    ],
                    zzjgdm: [
                        {required: true, message: '请填写统一社会信用代码', trigger: 'blur'}
                    ],
                    jjlxdm: [
                        {required: true, message: '请填写经济类型代码', trigger: 'blur'}
                    ],
                    dz: [
                        {required: true, message: '请填写地址', trigger: 'blur'}
                    ],
                    styyzzjgdm: [
                        {required: true, message: '请填写实体医院医疗组织机构代码', trigger: 'blur'}
                    ],
                    jgmc: [
                        {required: true, message: '请填写机构名称', trigger: 'blur'}
                    ],
                    xzqhdm: [
                        {required: true, message: '请填写行政区划代码', trigger: 'blur'}
                    ],
                    jgfldm: [
                        {required: true, message: '请填写机构分类代码', trigger: 'blur'}
                    ],
                    jglx: [
                        {required: true, message: '请选择级别类型', trigger: 'change'}
                    ],
                    styljgjb: [
                        {required: true, message: '请选择实体医疗机构级别', trigger: 'change'}
                    ],
                    xxaqdjbh: [
                        {required: true, message: '请选择信息安全等级保护', trigger: 'change'}
                    ],
                    styljgdj: [
                        {required: true, message: '请选择实体医疗机构等级', trigger: 'change'}
                    ],
                    jgclrq: [
                        {required: true, type: 'date', message: '请选择机构成立日期', trigger: 'change'}
                    ],
                    xkzyxq: [
                        {required: true, type: 'date', message: '请选择许可证有效期', trigger: 'change'}
                    ],
                    dwlsgxdm: [
                        {required: true, message: '请填写单位隶属关系代码', trigger: 'blur'}
                    ],
                    jgflgllbdm: [
                        {required: true, message: '请选择分类管理类别代码', trigger: 'change'}
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
            this.organization_title = this.$route.params.id >= 0 ? '编辑机构信息' : '添加机构信息'
            this.setOrganization()
        },
        methods: {
            setOrganization() {
                let id = this.$route.params.id
                var that = this
                if (id >= 0) {
                    organizationDetail(id).then(function (res) {
                        if (res.data.errorCode === 0) {
                            let data = res.data.data
                            that.formValidate = {
                                jgdm: data.jgdm, zzjgdm: data.zzjgdm, jgmc: data.jgmc, xzqhdm: data.xzqhdm, jglx: data.jglx, jgclrq: data.jgclrq,
                                dwlsgxdm: data.dwlsgxdm, jgflgllbdm: data.jgflgllbdm, jgfldm: data.jgfldm, jjlxdm: data.jjlxdm, dz: data.dz,
                                styyzzjgdm: data.styyzzjgdm, styymc: data.styymc, styljgjb: data.styljgjb, styljgdj: data.styljgdj, hlwyywz: data.hlwyywz,
                                xkzhm: data.xkzhm, xkxmmc: data.xkxmmc, xkzyxq: data.xkzyxq, xxaqdjbh: data.xxaqdjbh, xxaqdjbhbh: data.xxaqdjbhbh, kbzjjes: data.kbzjjes,
                                frdb: data.frdb, jgszdmzzzdfbz: data.jgszdmzzzdfbz, sffzjg: data.sffzjg, jgdemc: data.jgdemc, jgms: data.jgms, yzbm: data.yzbm,
                                dhhm: data.dhhm, dwdzyx: data.dwdzyx, bz: data.bz, sjscsj: data.sjscsj, tbrqsj: data.tbrqsj, cxbz: data.cxbz
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
            sumbitOrganization(name) {
                let id = this.$route.params.id
                var that = this
                let data = this.formValidate
                let data2 = {
                    jgdm: data.jgdm, zzjgdm: data.zzjgdm, jgmc: data.jgmc, xzqhdm: data.xzqhdm, jglx: data.jglx,
                    dwlsgxdm: data.dwlsgxdm, jgflgllbdm: data.jgflgllbdm, jgfldm: data.jgfldm, jjlxdm: data.jjlxdm, dz: data.dz,
                    styyzzjgdm: data.styyzzjgdm, styymc: data.styymc, styljgjb: data.styljgjb, styljgdj: data.styljgdj, hlwyywz: data.hlwyywz,
                    xkzhm: data.xkzhm, xkxmmc: data.xkxmmc, xxaqdjbh: data.xxaqdjbh, xxaqdjbhbh: data.xxaqdjbhbh, kbzjjes: data.kbzjjes,
                    frdb: data.frdb, jgszdmzzzdfbz: data.jgszdmzzzdfbz, sffzjg: data.sffzjg, jgdemc: data.jgdemc, jgms: data.jgms, yzbm: data.yzbm,
                    dhhm: data.dhhm, dwdzyx: data.dwdzyx, bz: data.bz, cxbz: data.cxbz
                };
                data2.jgclrq = Date.parse(data.jgclrq) / 1000
                data2.xkzyxq = Date.parse(data.xkzyxq) / 1000
                data2.sjscsj = Date.parse(data.sjscsj) / 1000
                data2.tbrqsj = Date.parse(data.tbrqsj) / 1000

                this.$refs[name].validate((valid) => {
                    if (valid) {
                        if (id >= 0) {
                            editOrganization(data2, id).then(function (res) {
                                if (res.data.errorCode == 0) {
                                    that.$Message.info('保存成功')
                                    that.$router.push({
                                        name: 'organization_list'
                                    })
                                } else {
                                    that.$Message.info(res.data.message || '保存失败')
                                }
                            }).catch(function (err) {
                                that.$Message.info(err.data.message || '接口获取失败')
                            })
                        } else {
                            addOrganization(data2).then(function (res) {
                                if (res.data.errorCode == 0) {
                                    that.$Message.info('保存成功')
                                    that.$router.push({
                                        name: 'organization_list'
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
