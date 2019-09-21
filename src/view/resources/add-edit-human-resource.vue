<style>

</style>
<template>
  <div>
    <Card>
      <h4>{{department_title}}</h4>
      <Divider/>

      <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="120">
        <Row>
          <Col span="6">
            <FormItem label="机构标识" prop="jgdm">
              <Input v-model="formValidate.jgdm" placeholder="机构标识"></Input>
            </FormItem>
          </Col>
          <Col span="6">
            <FormItem label="工号/账号" prop="yhrygh">
              <Input v-model="formValidate.yhrygh" placeholder="医护人员工号/登陆账号"></Input>
            </FormItem>
          </Col>
          <Col span="6">
            <FormItem label="医护人员姓名" prop="yhryxm">
              <Input v-model="formValidate.yhryxm" placeholder="医护人员姓名"></Input>
            </FormItem>
          </Col>
          <Col span="6">
            <FormItem label="性别" prop="xb">
              <Select v-model="formValidate.xb" clearable>
                <Option value="1">男</Option>
                <Option value="2">女</Option>
              </Select>
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col span="6">
            <FormItem label="出生日期" prop="csrq">
              <DatePicker v-model="formValidate.csrq" type="date" placeholder="请选择出生日期"></DatePicker>
            </FormItem>
          </Col>
          <Col span="6">
            <FormItem label="身份证号" prop="sfzh">
              <Input v-model="formValidate.sfzh" placeholder="身份证号"></Input>
            </FormItem>
          </Col>
          <Col span="6">
            <FormItem label="所属科室代码" prop="ksdm">
              <Input v-model="formValidate.ksdm" placeholder="所属科室代码"></Input>
            </FormItem>
          </Col>
          <Col span="6">
            <FormItem label="职务代码" prop="zyjszwdm">
              <Input v-model="formValidate.zyjszwdm" placeholder="专业技术职务代码"></Input>
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col span="6">
            <FormItem label="职务类别代码" prop="zyjszwlbdm">
              <Input v-model="formValidate.zyjszwlbdm" placeholder="专业技术职务类别代码"></Input>
            </FormItem>
          </Col>
          <Col span="6">
            <FormItem label="资质类别名称" prop="zzlbmc">
              <Input v-model="formValidate.zzlbmc" placeholder="资质类别名称"></Input>
            </FormItem>
          </Col>
          <Col span="6">
            <FormItem label="资格证书编号" prop="zgzsbm">
              <Input v-model="formValidate.zgzsbm" placeholder="资格证书编号"></Input>
            </FormItem>
          </Col>
          <Col span="6">
            <FormItem label="资格获得时间" prop="zghdsj">
              <DatePicker v-model="formValidate.zghdsj" type="date" placeholder="资格获得时间"></DatePicker>
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col span="6">
            <FormItem label="执业证书编码" prop="zyzsbm">
              <Input v-model="formValidate.zyzsbm" placeholder="执业证书编码"></Input>
            </FormItem>
          </Col>
          <Col span="6">
            <FormItem label="发证日期" prop="fzrq">
              <DatePicker v-model="formValidate.fzrq" type="date" placeholder="发证日期"></DatePicker>
            </FormItem>
          </Col>
          <Col span="12">
            <FormItem label="执业地点" prop="zydd">
              <Input v-model="formValidate.zydd" placeholder="执业地点"></Input>
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col span="6">
            <FormItem label="执业范围" prop="zyfw">
              <Input v-model="formValidate.zyfw" placeholder="执业范围"></Input>
            </FormItem>
          </Col>
          <Col span="6">
            <FormItem label="医疗机构代码" prop="zyzyyljgdm">
              <Input v-model="formValidate.zyzyyljgdm" placeholder="主要执业医疗机构代码"></Input>
            </FormItem>
          </Col>
          <Col span="6">
            <FormItem label="执业医院名称" prop="zyzyyymc">
              <Input v-model="formValidate.zyzyyymc" placeholder="主要执业医院名称"></Input>
            </FormItem>
          </Col>
          <Col span="6">
            <FormItem label="全科医生标志" prop="qkysbz">
              <Input v-model="formValidate.qkysbz" placeholder="全科医生标志"></Input>
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col span="6">
            <FormItem label="手机号码" prop="sjhm">
              <Input v-model="formValidate.sjhm" placeholder="手机号码"></Input>
            </FormItem>
          </Col>
          <Col span="6">
            <FormItem label="民族">
              <Input v-model="formValidate.mc" placeholder="民族"></Input>
            </FormItem>
          </Col>
          <Col span="12">
            <FormItem label="专长">
              <Input v-model="formValidate.zc" placeholder="专长"></Input>
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col span="6">
            <FormItem label="参加工作日期" prop="cjgzrq">
              <DatePicker v-model="formValidate.cjgzrq" type="date" placeholder="参加工作日期"></DatePicker>
            </FormItem>
          </Col>
          <Col span="6">
            <FormItem label="注册日期时间" prop="zcsj">
              <DatePicker v-model="formValidate.zcsj" type="date" placeholder="注册日期时间"></DatePicker>
            </FormItem>
          </Col>
          <Col span="6">
            <FormItem label="学历">
              <Select v-model="formValidate.xl" clearable>
                <Option value="1">学历1</Option>
                <Option value="2">学历2</Option>
                <Option value="3">学历3</Option>
              </Select>
            </FormItem>
          </Col>
          <Col span="6">
            <FormItem label="照片存放地址" prop="grzpcfdz">
              <Input v-model="formValidate.grzpcfdz" placeholder="个人照片存放地址"></Input>
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col span="12">
            <FormItem label="资格证存放地址" >
              <Input v-model="formValidate.zgzcfdz" placeholder="资格证存放地址"></Input>
            </FormItem>
          </Col>
          <Col span="12">
            <FormItem label="执业证存放地址" >
              <Input v-model="formValidate.zyzcfdz" placeholder="执业证存放地址"></Input>
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
          <Button type="success" @click="sumbitDepartment('formValidate')">保存</Button>
          <Button type="text" to="/resource/human-resource-list">返回人力资源列表</Button>
        </FormItem>
      </Form>
    </Card>
  </div>
</template>
<script type="text/ecmascript-6">

  import {addHuman, editHuman, humanDetail} from '@/api/human'

  export default {
    name: 'add_edit_human_resource',
    data() {
      return {
        formValidate: {
          jgdm: '', yhrygh: '', yhryxm: '', xb: '', csrq: '',
          sfzh: '', ksdm: '', zyjszwdm: '', zyjszwlbdm: '', zzlbmc: '', zgzsbm: '',
          zghdsj: '', zyzsbm: '', fzrq: '', zydd: '', zyfw: '', zyzyyljgdm: '',
          zyzyyymc: '', qkysbz: '', sjhm: '', zc: '', mc: '', cjgzrq: '',
          zcsj: '', xl: '', grzpcfdz: '', zgzcfdz: '', zyzcfdz: '',
          sjscsj: '', tbrqsj: '', cxbz: ''
        },
        ruleValidate: {
          jgdm: [
            {required: true, message: '请填写机构标识', trigger: 'blur'}
          ],
          grzpcfdz: [
            {required: true, message: '请填写个人照片存放地址', trigger: 'blur'}
          ],
          sjhm: [
            {required: true, message: '请填写手机号码', trigger: 'blur'}
          ],
          qkysbz: [
            {required: true, message: '请填写全科医生标志', trigger: 'blur'}
          ],
          zyzyyymc: [
            {required: true, message: '请填写主要执业医院名称', trigger: 'blur'}
          ],
          zyzyyljgdm: [
            {required: true, message: '请填写主要执业医疗机构代码', trigger: 'blur'}
          ],
          zyfw: [
            {required: true, message: '请填写执业范围', trigger: 'blur'}
          ],
          zyzsbm: [
            {required: true, message: '请填写执业证书编码', trigger: 'blur'}
          ],
          zydd: [
            {required: true, message: '请填写执业地点', trigger: 'blur'}
          ],
          zgzsbm: [
            {required: true, message: '请填写资格证书编号', trigger: 'blur'}
          ],
          zzlbmc: [
            {required: true, message: '请填写资质类别名称', trigger: 'blur'}
          ],
          zyjszwlbdm: [
            {required: true, message: '请填写专业技术职务类别代码', trigger: 'blur'},
            {max: 3, message: '长度不能超过3位', trigger: 'blur'}
          ],
          zyjszwdm: [
            {required: true, message: '请填写专业技术职务代码', trigger: 'blur'},
            {max: 3, message: '长度不能超过3位', trigger: 'blur'}
          ],
          ksdm: [
            {required: true, message: '请填写所属科室代码', trigger: 'blur'}
          ],
          sfzh: [
            {required: true, message: '请填写身份证号', trigger: 'blur'}
          ],
          xb: [
            {required: true, message: '请填选择性别', trigger: 'change'}
          ],
          yhryxm: [
            {required: true, message: '请填写医护人员姓名', trigger: 'blur'}
          ],
          yhrygh: [
            {required: true, message: '请填写医护人员工号/账号', trigger: 'blur'}
          ],
          zcsj: [
            {required: true, type: 'date', message: '请选择注册日期时间', trigger: 'change'}
          ],
          zghdsj: [
            {required: true, type: 'date', message: '请选择资格获得时间', trigger: 'change'}
          ],
          cjgzrq: [
            {required: true, type: 'date', message: '请选择参加工作日期', trigger: 'change'}
          ],
          fzrq: [
            {required: true, type: 'date', message: '请选择发证日期', trigger: 'change'}
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
      this.department_title = this.$route.params.id >= 0 ? '编辑人力资源信息' : '添加人力资源信息'
      this.setDepartment()
    },
    methods: {
      setDepartment() {
        let id = this.$route.params.id
        var that = this
        if (id >= 0) {
          humanDetail(id).then(function (res) {
            if (res.data.errorCode === 0) {
              let data = res.data.data
              that.formValidate = {
                jgdm: data.jgdm, yhrygh: data.yhrygh, yhryxm: data.yhryxm, xb: data.xb, csrq: data.csrq,
                sfzh: data.sfzh, ksdm: data.ksdm, zyjszwdm: data.zyjszwdm, zyjszwlbdm: data.zyjszwlbdm, zzlbmc: data.zzlbmc,
                zgzsbm: data.zgzsbm, zghdsj: data.zghdsj, zyzsbm: data.zyzsbm, fzrq: data.fzrq, zydd: data.zydd, zyfw: data.zyfw,
                zyzyyljgdm: data.zyzyyljgdm, zyzyyymc: data.zyzyyymc, qkysbz: data.qkysbz, sjhm: data.sjhm, zc: data.zc, mc: data.mc,
                cjgzrq: data.cjgzrq, zcsj: data.zcsj, xl: data.xl, grzpcfdz: data.grzpcfdz, zgzcfdz: data.zgzcfdz, zyzcfdz: data.zyzcfdz,
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
          jgdm: data.jgdm, yhrygh: data.yhrygh, yhryxm: data.yhryxm, xb: data.xb,
          sfzh: data.sfzh, ksdm: data.ksdm, zyjszwdm: data.zyjszwdm, zyjszwlbdm: data.zyjszwlbdm, zzlbmc: data.zzlbmc,
          zgzsbm: data.zgzsbm, zyzsbm: data.zyzsbm, zydd: data.zydd, zyfw: data.zyfw,
          zyzyyljgdm: data.zyzyyljgdm, zyzyyymc: data.zyzyyymc, qkysbz: data.qkysbz, sjhm: data.sjhm, zc: data.zc,
          xl: data.xl, grzpcfdz: data.grzpcfdz, zgzcfdz: data.zgzcfdz, zyzcfdz: data.zyzcfdz,
          cxbz: data.cxbz, mc: data.mc
        };

        data2.csrq = Date.parse(data.csrq) / 1000
        data2.fzrq = Date.parse(data.fzrq) / 1000
        data2.zcsj = Date.parse(data.zcsj) / 1000
        data2.zghdsj = Date.parse(data.zghdsj) / 1000
        data2.cjgzrq = Date.parse(data.cjgzrq) / 1000
        data2.sjscsj = Date.parse(data.sjscsj) / 1000
        data2.tbrqsj = Date.parse(data.tbrqsj) / 1000

        this.$refs[name].validate((valid) => {
          if (valid) {
            if (id >= 0) {
              editHuman(data2, id).then(function (res) {
                if (res.data.errorCode == 0) {
                  that.$Message.info('保存成功')
                  that.$router.push({
                    name: 'human_resource_list'
                  })
                } else {
                  that.$Message.info(res.data.message || '保存失败')
                }
              }).catch(function (err) {
                that.$Message.info(err.data.message || '接口获取失败')
              })
            } else {
              addHuman(data2).then(function (res) {
                if (res.data.errorCode == 0) {
                  that.$Message.info('保存成功')
                  that.$router.push({
                    name: 'human_resource_list'
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
