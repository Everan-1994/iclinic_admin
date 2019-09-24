<style>

</style>
<template>
  <div>
    <Card>
      <h4>{{record_title}}</h4>
      <Divider/>

      <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="120">
        <Row>
          <Col span="6">
            <FormItem label="机构标识" prop="jgdm">
              <Input v-model="formValidate.jgdm" placeholder="机构标识"></Input>
            </FormItem>
          </Col>
          <Col span="6">
            <FormItem label="服务网点代码" prop="fwwddm">
              <Input v-model="formValidate.fwwddm" placeholder="服务网点代码"></Input>
            </FormItem>
          </Col>
          <Col span="6">
            <FormItem label="就诊类型" prop="jzlx">
              <Input v-model="formValidate.jzlx" placeholder="就诊类型"></Input>
            </FormItem>
          </Col>
          <Col span="6">
            <FormItem label="卡类型" prop="klx">
              <Input v-model="formValidate.klx" placeholder="卡类型"></Input>
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col span="6">
            <FormItem label="卡号" prop="kh">
              <Input v-model="formValidate.kh" placeholder="卡号"></Input>
            </FormItem>
          </Col>
          <Col span="6">
            <FormItem label="门诊号" prop="mzh">
              <Input v-model="formValidate.mzh" placeholder="门诊号"></Input>
            </FormItem>
          </Col>
          <Col span="6">
            <FormItem label="科室编码" prop="ksbm">
              <Input v-model="formValidate.ksbm" placeholder="科室编码"></Input>
            </FormItem>
          </Col>
          <Col span="6">
            <FormItem label="科室名称" prop="ksmc">
              <Input v-model="formValidate.ksmc" placeholder="科室名称"></Input>
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col span="6">
            <FormItem label="患者姓名" prop="xm">
              <Input v-model="formValidate.xm" placeholder="患者姓名"></Input>
            </FormItem>
          </Col>
          <Col span="6">
            <FormItem label="性别" prop="xbdm">
              <Input v-model="formValidate.xbdm" placeholder="性别"></Input>
            </FormItem>
          </Col>
          <Col span="6">
            <FormItem label="出生日期" prop="csrq">
              <DatePicker v-model="formValidate.csrq" type="date" placeholder="请选择出生日期"></DatePicker>
            </FormItem>
          </Col>
          <Col span="6">
            <FormItem label="年龄（岁）" prop="nls">
              <Input v-model="formValidate.nls" placeholder="年龄（岁）"></Input>
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col span="6">
            <FormItem label="年龄（月）">
              <Input v-model="formValidate.nly" placeholder="年龄（月）"></Input>
            </FormItem>
          </Col>
          <Col span="6">
            <FormItem label="过敏史标识" prop="gmsbs">
              <Input v-model="formValidate.gmsbs" placeholder="过敏史标识"></Input>
            </FormItem>
          </Col>
          <Col span="6">
            <FormItem label="过敏史">
              <Input v-model="formValidate.gms" placeholder="过敏史"></Input>
            </FormItem>
          </Col>
          <Col span="6">
            <FormItem label="参保类别">
              <Input v-model="formValidate.cblb" placeholder="参保类别"></Input>
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col span="6">
            <FormItem label="就诊日期时间" prop="jzrqsj">
              <DatePicker v-model="formValidate.jzrqsj" type="date" placeholder="请选择就诊日期时间"></DatePicker>
            </FormItem>
          </Col>
          <Col span="6">
            <FormItem label="初诊标志代码" prop="czbzdm">
              <Input v-model="formValidate.czbzdm" placeholder="初诊标志代码"></Input>
            </FormItem>
          </Col>
        </Row>
        <FormItem label="就诊诊断说明">
          <Input v-model="formValidate.jzzdsm" type="textarea" :autosize="{minRows: 5, maxRows: 15}"
                 placeholder="就诊诊断说明"></Input>
        </FormItem>
        <FormItem label="主诉">
          <Input v-model="formValidate.zs" type="textarea" :autosize="{minRows: 5, maxRows: 15}"
                 placeholder="主诉"></Input>
        </FormItem>
        <FormItem label="现病史">
          <Input v-model="formValidate.xbs" type="textarea" :autosize="{minRows: 5, maxRows: 15}"
                 placeholder="现病史"></Input>
        </FormItem>
        <FormItem label="既往史">
          <Input v-model="formValidate.jws" type="textarea" :autosize="{minRows: 5, maxRows: 15}"
                 placeholder="既往史"></Input>
        </FormItem>
        <FormItem label="辅助检查项目">
          <Input v-model="formValidate.fzjcxm" type="textarea" :autosize="{minRows: 5, maxRows: 15}"
                 placeholder="辅助检查项目"></Input>
        </FormItem>
        <FormItem label="辅助检查结果">
          <Input v-model="formValidate.fzjcjg" type="textarea" :autosize="{minRows: 5, maxRows: 15}"
                 placeholder="辅助检查结果"></Input>
        </FormItem>
        <FormItem label="诊断代码">
          <Input v-model="formValidate.mzzzzddm" type="textarea" :autosize="{minRows: 5, maxRows: 15}"
                 placeholder="门诊症状-诊断代码"></Input>
        </FormItem>
        <FormItem label="诊断名称">
          <Input v-model="formValidate.mzzzzdmc" type="textarea" :autosize="{minRows: 5, maxRows: 15}"
                 placeholder="门诊症状-诊断名称"></Input>
        </FormItem>
        <Row>
          <Col span="8">
            <FormItem label="诊断编码类型" prop="mzzzzdbmlx">
              <Select v-model="formValidate.mzzzzdbmlx" clearable>
                <Option value="1">类型1</Option>
                <Option value="2">类型2</Option>
              </Select>
            </FormItem>
          </Col>
        </Row>
        <FormItem label="症状描述">
          <Input v-model="formValidate.zzms" type="textarea" :autosize="{minRows: 5, maxRows: 15}"
                 placeholder="症状描述"></Input>
        </FormItem>
        <FormItem label="辨证依据">
          <Input v-model="formValidate.bzyj" type="textarea" :autosize="{minRows: 5, maxRows: 15}"
                 placeholder="辨证依据"></Input>
        </FormItem>
        <FormItem label="治则治法">
          <Input v-model="formValidate.zzzf" type="textarea" :autosize="{minRows: 5, maxRows: 15}"
                 placeholder="治则治法"></Input>
        </FormItem>
        <FormItem label="健康指导">
          <Input v-model="formValidate.jkzd" type="textarea" :autosize="{minRows: 5, maxRows: 15}"
                 placeholder="健康指导"></Input>
        </FormItem>
        <FormItem label="处置计划">
          <Input v-model="formValidate.czjh" type="textarea" :autosize="{minRows: 5, maxRows: 15}"
                 placeholder="处置计划"></Input>
        </FormItem>
        <Row>
          <Col span="6">
            <FormItem label="应诊医生工号" prop="yzysgh">
              <Input v-model="formValidate.yzysgh" placeholder="应诊医生工号"></Input>
            </FormItem>
          </Col>
          <Col span="6">
            <FormItem label="应诊医师签名" prop="yzysjm">
              <Input v-model="formValidate.yzysjm" placeholder="应诊医师签名"></Input>
            </FormItem>
          </Col>
          <Col span="6">
            <FormItem label="卫生机构代码" prop="czylwsjgdm">
              <Input v-model="formValidate.czylwsjgdm" placeholder="初诊医疗卫生机构代码"></Input>
            </FormItem>
          </Col>
          <Col span="6">
            <FormItem label="卫生机构名称" prop="czylswjgmc">
              <Input v-model="formValidate.czylswjgmc" placeholder="初诊医疗卫生机构名称"></Input>
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col span="8">
            <FormItem label="就诊结束时间">
              <DatePicker v-model="formValidate.jzjssj" type="date" placeholder="就诊结束时间"></DatePicker>
            </FormItem>
          </Col>
          <Col span="8">
            <FormItem label="转诊标志">
              <Input v-model="formValidate.zzbz" placeholder="转诊标志"></Input>
            </FormItem>
          </Col>
          <Col span="8">
            <FormItem label="患者满意度">
              <Input v-model="formValidate.hzmyd" placeholder="患者满意度"></Input>
            </FormItem>
          </Col>
        </Row>
        <FormItem label="预留1">
          <Input v-model="formValidate.yl1" type="textarea" :autosize="{minRows: 5, maxRows: 15}"
                 placeholder="预留1"></Input>
        </FormItem>
        <FormItem label="预留2">
          <Input v-model="formValidate.yl2" type="textarea" :autosize="{minRows: 5, maxRows: 15}"
                 placeholder="预留2"></Input>
        </FormItem>
        <Row>
          <Col span="6">
            <FormItem label="电子处方文件存放地址">
              <Select v-model="formValidate.dzcfwjcfdz" clearable>
                <Option value="T">有</Option>
                <Option value="F">无</Option>
              </Select>
            </FormItem>
          </Col>
          <Col span="6">
            <FormItem label="医生端视频文件存放地址">
              <Select v-model="formValidate.ysdspwjcfdz" clearable>
                <Option value="T">有</Option>
                <Option value="F">无</Option>
              </Select>
            </FormItem>
          </Col>
          <Col span="6">
            <FormItem label="患者端视频文件存放地址">
              <Select v-model="formValidate.hzdspwjcfdz" clearable>
                <Option value="T">有</Option>
                <Option value="F">无</Option>
              </Select>
            </FormItem>
          </Col>
          <Col span="6">
            <FormItem label="交流音频存放地址">
              <Select v-model="formValidate.jlypcfdz" clearable>
                <Option value="T">有</Option>
                <Option value="F">无</Option>
              </Select>
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col span="6">
            <FormItem label="数据生成时间" prop="sjscsj">
              <DatePicker v-model="formValidate.sjscsj" type="date" placeholder="请选择数据生成时间"></DatePicker>
            </FormItem>
          </Col>
          <Col span="6">
            <FormItem label="密级">
              <Select v-model="formValidate.mj" clearable>
                <Option value="1">一般</Option>
                <Option value="2">个人信息加密</Option>
              </Select>
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
          <Button type="success" @click="sumbitRecord('formValidate')">保存</Button>
          <Button type="text" to="/service/record-list">返回门诊病历列表</Button>
        </FormItem>
      </Form>
    </Card>
  </div>
</template>
<script type="text/ecmascript-6">

  import {addRecord, editRecord, recordDetail} from '@/api/record'

  export default {
    name: 'add_edit_record',
    data() {
      return {
        formValidate: {
          jgdm: '', fwwddm: '', jzlx: '',
          kh: '', klx: '', mzh: '', ksbm: '', ksmc: '', xm: '',
          xbdm: '', csrq: '', nls: '', nly: '', gmsbs: '', gms: '',
          cblb: '', jzrqsj: '', jzzdsm: '', czbzdm: '', zs: '', xbs: '',
          jws: '', fzjcxm: '', fzjcjg: '', mzzzzddm: '', mzzzzdmc: '', mzzzzdbmlx: '',
          zzms: '', bzyj: '', zzzf: '', jkzd: '', czjh: '', yzysgh: '',
          yzysjm: '', czylwsjgdm: '', czylswjgmc: '', jzjssj: '', zzbz: '', hzmyd: '',
          yl1: '', yl2: '', dzcfwjcfdz: '', ysdspwjcfdz: '', hzdspwjcfdz: '', jlypcfdz: '',
          sjscsj: '', tbrqsj: '', cxbz: '', mj: ''
        },
        ruleValidate: {
          czylswjgmc: [
            {required: true, message: '请填写初诊医疗卫生机构名称', trigger: 'blur'}
          ],
          czylwsjgdm: [
            {required: true, message: '请填写初诊医疗卫生机构代码', trigger: 'blur'}
          ],
          yzysgh: [
            {required: true, message: '请填写应诊医生工号', trigger: 'blur'}
          ],
          yzysjm: [
            {required: true, message: '请填写应诊医师签名', trigger: 'blur'}
          ],
          jgdm: [
            {required: true, message: '请填写机构标识', trigger: 'blur'}
          ],
          mzzzzdbmlx: [
            {required: true, message: '请选择诊断编码类型', trigger: 'change'}
          ],
          gmsbs: [
            {required: true, message: '请填写过敏史标识', trigger: 'blur'}
          ],
          xbdm: [
            {required: true, message: '请填写性别代码', trigger: 'blur'}
          ],
          nls: [
            {required: true, message: '请填写年龄（岁）', trigger: 'blur'}
          ],
          xm: [
            {required: true, message: '请填写患者姓名', trigger: 'blur'}
          ],
          ksmc: [
            {required: true, message: '请填写科室名称', trigger: 'blur'}
          ],
          ksbm: [
            {required: true, message: '请填写科室编码', trigger: 'blur'}
          ],
          mzh: [
            {required: true, message: '请填写门诊号', trigger: 'blur'}
          ],
          klx: [
            {required: true, message: '请填写卡类型', trigger: 'blur'}
          ],
          kh: [
            {required: true, message: '请填写卡号', trigger: 'blur'}
          ],
          jzlx: [
            {required: true, message: '请填写就诊类型', trigger: 'blur'}
          ],
          fwwddm: [
            {required: true, message: '请填写服务网点代码', trigger: 'blur'}
          ],
          jzrqsj: [
            {required: true, type: 'date', message: '请选择就诊日期时间', trigger: 'change'}
          ],
          csrq: [
            {required: true, type: 'date', message: '请选择出生日期', trigger: 'change'}
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
      this.record_title = this.$route.params.id >= 0 ? '编辑门诊病历' : '添加门诊病历'
      this.setRecord()
    },
    methods: {
      setRecord() {
        let id = this.$route.params.id
        var that = this
        if (id >= 0) {
          recordDetail(id).then(function (res) {
            if (res.data.errorCode === 0) {
              let data = res.data.data
              that.formValidate = {
                jgdm: data.jgdm, fwwddm: data.fwwddm, jzlx: data.jzlx,
                kh: data.kh, klx: data.klx, mzh: data.mzh, ksbm: data.ksbm, ksmc: data.ksmc, xm: data.xm,
                xbdm: data.xbdm, csrq: data.csrq, nls: data.nls, nly: data.nly, gmsbs: data.gmsbs, gms: data.gms,
                cblb: data.cblb, jzrqsj: data.jzrqsj, jzzdsm: data.jzzdsm, czbzdm: data.czbzdm, zs: data.zs, xbs: data.xbs,
                jws: data.jws, fzjcxm: data.fzjcxm, fzjcjg: data.fzjcjg, mzzzzddm: data.mzzzzddm, mzzzzdmc: data.mzzzzdmc,
                mzzzzdbmlx: data.mzzzzdbmlx, zzms: data.zzms, bzyj: data.bzyj, zzzf: data.zzzf, jkzd: data.jkzd, czjh: data.czjh,
                yzysgh: data.yzysgh,  yzysjm: data.yzysjm, czylwsjgdm: data.czylwsjgdm, czylswjgmc: data.czylswjgmc,
                jzjssj: data.jzjssj, zzbz: data.zzbz, hzmyd: data.hzmyd, yl1: data.yl1, yl2: data.yl2, dzcfwjcfdz: data.dzcfwjcfdz,
                ysdspwjcfdz: data.ysdspwjcfdz, hzdspwjcfdz: data.hzdspwjcfdz, jlypcfdz: data.jlypcfdz,
                mj: data.mj, sjscsj: data.sjscsj, tbrqsj: data.tbrqsj, cxbz: data.cxbz
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
      sumbitRecord(name) {
        let id = this.$route.params.id
        var that = this
        let data = this.formValidate
        let data2 = {
          jgdm: data.jgdm, fwwddm: data.fwwddm, jzlx: data.jzlx,
          kh: data.kh, klx: data.klx, mzh: data.mzh, ksbm: data.ksbm, ksmc: data.ksmc, xm: data.xm,
          xbdm: data.xbdm, nls: data.nls, nly: data.nly, gmsbs: data.gmsbs, gms: data.gms,
          cblb: data.cblb, jzzdsm: data.jzzdsm, czbzdm: data.czbzdm, zs: data.zs, xbs: data.xbs,
          jws: data.jws, fzjcxm: data.fzjcxm, fzjcjg: data.fzjcjg, mzzzzddm: data.mzzzzddm, mzzzzdmc: data.mzzzzdmc,
          mzzzzdbmlx: data.mzzzzdbmlx, zzms: data.zzms, bzyj: data.bzyj, zzzf: data.zzzf, jkzd: data.jkzd, czjh: data.czjh,
          yzysgh: data.yzysgh,  yzysjm: data.yzysjm, czylwsjgdm: data.czylwsjgdm, czylswjgmc: data.czylswjgmc,
          zzbz: data.zzbz, hzmyd: data.hzmyd, yl1: data.yl1, yl2: data.yl2, dzcfwjcfdz: data.dzcfwjcfdz,
          ysdspwjcfdz: data.ysdspwjcfdz, hzdspwjcfdz: data.hzdspwjcfdz, jlypcfdz: data.jlypcfdz,
          mj: data.mj, cxbz: data.cxbz
        };

        data2.csrq = Date.parse(data.csrq) / 1000
        data2.jzrqsj = Date.parse(data.jzrqsj) / 1000
        data2.jzjssj = Date.parse(data.jzjssj) / 1000
        data2.sjscsj = Date.parse(data.sjscsj) / 1000
        data2.tbrqsj = Date.parse(data.tbrqsj) / 1000

        this.$refs[name].validate((valid) => {
          if (valid) {
            if (id >= 0) {
              editRecord(data2, id).then(function (res) {
                if (res.data.errorCode == 0) {
                  that.$Message.info('保存成功')
                  that.$router.push({
                    name: 'record_list'
                  })
                } else {
                  that.$Message.info(res.data.message || '保存失败')
                }
              }).catch(function (err) {
                that.$Message.info(err.data.message || '接口获取失败')
              })
            } else {
              addRecord(data2).then(function (res) {
                if (res.data.errorCode == 0) {
                  that.$Message.info('保存成功')
                  that.$router.push({
                    name: 'record_list'
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
