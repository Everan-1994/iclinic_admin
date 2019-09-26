<style>

</style>
<template>
  <div>
    <Card>
      <h4>{{diagnose_title}}</h4>
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
            <FormItem label="诊断信息ID" prop="zdxxid">
              <Input v-model="formValidate.zdxxid" placeholder="诊断信息ID"></Input>
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
                <Option v-for="(sex, index) in gender" :key="index" :value="sex.code">{{ sex.name }}</Option>
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
          <Col span="8">
            <FormItem label="诊断类型编码" prop="zdlxbm">
              <Input v-model="formValidate.zdlxbm" placeholder="诊断类型编码"></Input>
            </FormItem>
          </Col>
          <Col span="8">
            <FormItem label="西医诊断编码" prop="xyzdbm">
              <Input v-model="formValidate.xyzdbm" placeholder="西医诊断编码"></Input>
            </FormItem>
          </Col>
          <Col span="8">
            <FormItem label="西医诊断编码类型" prop="xyzdbmlx">
              <Select v-model="formValidate.xyzdbmlx" clearable>
                <Option value="01">ICD-10</Option>
                <Option value="02">国标-95</Option>
                <Option value="03">国标-97</Option>
                <Option value="04">国家版-2012</Option>
                <Option value="05">省2017版</Option>
                <Option value="99">临时码</Option>
              </Select>
            </FormItem>
          </Col>
        </Row>
        <FormItem label="西医诊断名称" prop="xyzdmc">
          <Input v-model="formValidate.xyzdmc" type="textarea" :autosize="{minRows: 5, maxRows: 15}"
                 placeholder="西医诊断名称"></Input>
        </FormItem>
        <Row>
          <Col span="8">
            <FormItem label="中医诊断编码" prop="zyzdbm">
              <Input v-model="formValidate.zyzdbm" placeholder="中医诊断编码"></Input>
            </FormItem>
          </Col>
          <Col span="8">
            <FormItem label="中医诊断名称">
              <Input v-model="formValidate.zyzdmc" placeholder="中医诊断名称"></Input>
            </FormItem>
          </Col>
          <Col span="8">
            <FormItem label="中医诊断编码类型" prop="zyzdbmlx">
              <Select v-model="formValidate.zyzdbmlx" clearable>
                <Option value="01">ICD-10</Option>
                <Option value="02">国标-95</Option>
                <Option value="03">国标-97</Option>
                <Option value="04">国家版-2012</Option>
                <Option value="05">省2017版</Option>
                <Option value="99">临时码</Option>
              </Select>
            </FormItem>
          </Col>
        </Row>
        <FormItem label="诊断说明" prop="zdsm">
          <Input v-model="formValidate.zdsm" type="textarea" :autosize="{minRows: 5, maxRows: 15}"
                 placeholder="诊断说明"></Input>
        </FormItem>
        <Row>
          <Col span="6">
            <FormItem label="诊断标志" prop="zdbz">
              <Select v-model="formValidate.zdbz" clearable>
                <Option value="1">主要诊断</Option>
                <Option value="2">其他诊断</Option>
                <Option value="3">院感</Option>
                <Option value="4">病理诊断</Option>
                <Option value="5">中毒损伤</Option>
              </Select>
            </FormItem>
          </Col>
          <Col span="6">
            <FormItem label="诊断医生工号" prop="zdysgh">
              <Input v-model="formValidate.zdysgh" placeholder="诊断医生工号"></Input>
            </FormItem>
          </Col>
          <Col span="6">
            <FormItem label="诊断医生姓名" prop="zdysxm">
              <Input v-model="formValidate.zdysxm" placeholder="诊断医生姓名"></Input>
            </FormItem>
          </Col>
          <Col span="6">
            <FormItem label="诊断时间">
              <DatePicker v-model="formValidate.zdsj" type="datetime" placeholder="请选择诊断时间"></DatePicker>
            </FormItem>
          </Col>
        </Row>
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
          <Button type="success" @click="sumbitDiagnose('formValidate')">保存</Button>
          <Button type="text" to="/service/diagnose-list">返回医学诊断列表</Button>
        </FormItem>
      </Form>
    </Card>
  </div>
</template>
<script type="text/ecmascript-6">

  import {addDiagnose, editDiagnose, diagnoseDetail} from '@/api/diagnose'
  import { _select } from '@/api/select'

  export default {
    name: 'add_edit_diagnose',
    data () {
      return {
        formValidate: {
          jgdm: '', fwwddm: '', zdxxid: '', kh: '',
          klx: '', mzh: '', xm: '', xbdm: '', csrq: '',
          nls: '', nly: '', jzrqsj: '', zdlxbm: '', xyzdbm: '', xyzdmc: '',
          xyzdbmlx: '', zyzdbm: '', zyzdmc: '', zyzdbmlx: '', zdsm: '',
          zdbz: '', zdysgh: '', zdysxm: '', zdsj: '', yl1: '', mj: '',
          sjscsj: '', tbrqsj: '', cxbz: ''
        },
        ruleValidate: {
          jgdm: [
            {required: true, message: '请填写机构标识', trigger: 'blur'},
            {max: 30, message: '长度不能超过30个字符', trigger: 'blur'}
          ],
          zdysxm: [
            {required: true, message: '请填写诊断医生姓名', trigger: 'blur'},
            {max: 50, message: '长度不能超过50个字符', trigger: 'blur'}
          ],
          zyzdbm: [
            {max: 20, message: '长度不能超过20个字符', trigger: 'blur'}
          ],
          xyzdbm: [
            {max: 20, message: '长度不能超过20个字符', trigger: 'blur'}
          ],
          xyzdbmlx: [
            {required: true, message: '请选择西医诊断编码类型', trigger: 'change'}
          ],
          zdysgh: [
            {required: true, message: '请填写诊断医生工号', trigger: 'blur'},
            {max: 30, message: '长度不能超过30个字符', trigger: 'blur'}
          ],
          zdbz: [
            {required: true, message: '请选择诊断标志', trigger: 'change'}
          ],
          zdsm: [
            {required: true, message: '请填写诊断说明', trigger: 'blur'},
            {max: 100, message: '长度不能超过100个字符', trigger: 'blur'}
          ],
          zyzdbmlx: [
            {required: true, message: '请选择中医诊断编码类型', trigger: 'change'}
          ],
          xyzdmc: [
            {required: true, message: '请填写西医诊断名称', trigger: 'blur'}
          ],
          zdlxbm: [
            {required: true, message: '请填写诊断类型编码', trigger: 'blur'},
            {max: 2, message: '长度不能超过2个字符', trigger: 'blur'}
          ],
          nls: [
            {required: true, type: 'string', message: '请填写年龄（岁）', trigger: 'blur'},
            {max: 3, message: '长度不能超过3个字符', trigger: 'blur'}
          ],
          nly: [
            {max: 10, message: '长度不能超过10个字符', trigger: 'blur'}
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
          zdxxid: [
            {required: true, message: '请填写诊断信息ID', trigger: 'blur'},
            {max: 30, message: '长度不能超过30个字符', trigger: 'blur'}
          ],
          fwwddm: [
            {required: true, message: '请填写服务网点代码', trigger: 'blur'},
            {max: 30, message: '长度不能超过30个字符', trigger: 'blur'}
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
        gender: [], // 性别代码
      }
    },
    created () {
      this.diagnose_title = this.$route.params.id >= 0 ? '编辑医学诊断信息' : '添加医学诊断信息'
      this.setDiagnose()
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
        }).catch(function(err) {
          console.log('获取下拉菜单：' + name + '失败！')
        })
      },
      setDiagnose () {
        let id = this.$route.params.id
        var that = this
        if (id >= 0) {
          diagnoseDetail(id).then(function (res) {
            if (res.data.errorCode === 0) {
              let data = res.data.data
              that.formValidate = {
                jgdm: data.jgdm, fwwddm: data.fwwddm, zdxxid: data.zdxxid, kh: data.kh,
                klx: data.klx, mzh: data.mzh, xm: data.xm, xbdm: data.xbdm, csrq: data.csrq,
                nls: data.nls, nly: data.nly, jzrqsj: data.jzrqsj, zdlxbm: data.zdlxbm,
                xyzdbm: data.xyzdbm, xyzdmc: data.xyzdmc,
                xyzdbmlx: data.xyzdbmlx, zyzdbm: data.zyzdbm,
                zyzdmc: data.zyzdmc, zyzdbmlx: data.zyzdbmlx, zdsm: data.zdsm,
                zdbz: data.zdbz, zdysgh: data.zdysgh, zdysxm: data.zdysxm,
                zdsj: data.zdsj, yl1: data.yl1, mj: data.mj,
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
      sumbitDiagnose (name) {
        let id = this.$route.params.id
        var that = this
        let data = this.formValidate
        let data2 = {
          jgdm: data.jgdm, fwwddm: data.fwwddm, zdxxid: data.zdxxid, kh: data.kh,
          klx: data.klx, mzh: data.mzh, xm: data.xm, xbdm: data.xbdm,
          nls: data.nls, nly: data.nly, zdlxbm: data.zdlxbm,
          xyzdbm: data.xyzdbm, xyzdmc: data.xyzdmc,
          xyzdbmlx: data.xyzdbmlx, zyzdbm: data.zyzdbm,
          zyzdmc: data.zyzdmc, zyzdbmlx: data.zyzdbmlx, zdsm: data.zdsm,
          zdbz: data.zdbz, zdysgh: data.zdysgh, zdysxm: data.zdysxm,
          yl1: data.yl1, mj: data.mj,
          cxbz: data.cxbz, ksjs: data.ksjs
        }

        data2.zdsj = Date.parse(data.zdsj) / 1000
        data2.csrq = Date.parse(data.csrq) / 1000
        data2.jzrqsj = Date.parse(data.jzrqsj) / 1000
        data2.sjscsj = Date.parse(data.sjscsj) / 1000
        data2.tbrqsj = Date.parse(data.tbrqsj) / 1000

        this.$refs[name].validate((valid) => {
          if (valid) {
            if (id >= 0) {
              editDiagnose(data2, id).then(function (res) {
                if (res.data.errorCode == 0) {
                  that.$Message.info('保存成功')
                  that.$router.push({
                    name: 'diagnose_list'
                  })
                } else {
                  that.$Message.info(res.data.message || '保存失败')
                }
              }).catch(function (err) {
                that.$Message.info(err.data.message || '接口获取失败')
              })
            } else {
              addDiagnose(data2).then(function (res) {
                if (res.data.errorCode == 0) {
                  that.$Message.info('保存成功')
                  that.$router.push({
                    name: 'diagnose_list'
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
