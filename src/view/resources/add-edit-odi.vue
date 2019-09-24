<style>

</style>
<template>
  <div>
    <Card>
      <h4>{{odi_title}}</h4>
      <Divider/>

      <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="120">
        <Row>
          <Col span="6">
            <FormItem label="机构标识" prop="jgdm">
              <Input v-model="formValidate.jgdm" placeholder="机构标识"></Input>
            </FormItem>
          </Col>
          <Col span="6">
            <FormItem label="月份" prop="nf">
              <DatePicker v-model="formValidate.nf" type="month" placeholder="请选择月份"></DatePicker>
            </FormItem>
          </Col>
          <Col span="6">
            <FormItem label="机构数量" >
              <Input v-model="formValidate.pcjgsl" placeholder="派出（分支）机构数量"></Input>
            </FormItem>
          </Col>
          <Col span="6">
            <FormItem label="部署平台" prop="bspt">
              <Select v-model="formValidate.bspt" clearable>
                <Option value="1">平台1</Option>
                <Option value="2">平台2</Option>
              </Select>
            </FormItem>
          </Col>
        </Row>
        <FormItem label="网络架构图地址">
          <Input v-model="formValidate.wljgtdz" type="textarea" :autosize="{minRows: 5, maxRows: 15}"
                 placeholder="网络架构图地址"></Input>
        </FormItem>
        <FormItem label="架构描述">
          <Input v-model="formValidate.jgmsxx" type="textarea" :autosize="{minRows: 5, maxRows: 15}"
                 placeholder="架构描述"></Input>
        </FormItem>
        <Row>
          <Col span="6">
            <FormItem label="机房面积">
              <Input v-model="formValidate.jfmj" placeholder="机房面积"></Input>
            </FormItem>
          </Col>
          <Col span="6">
            <FormItem label="职工总数" prop="zgzs">
              <Input v-model="formValidate.zgzs" placeholder="职工总数"></Input>
            </FormItem>
          </Col>
          <Col span="6">
            <FormItem label="客户服务人员总数" prop="khfwryzs">
              <Input v-model="formValidate.khfwryzs" placeholder="客户服务人员总数"></Input>
            </FormItem>
          </Col>
          <Col span="6">
            <FormItem label="业务用房面积" prop="ywyfmj">
              <Input v-model="formValidate.ywyfmj" placeholder="业务用房面积"></Input>
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col span="8">
            <FormItem label="总收入" prop="zsr">
              <Input v-model="formValidate.zsr" placeholder="总收入"></Input>
            </FormItem>
          </Col>
          <Col span="8">
            <FormItem label="总支出" prop="zzc">
              <Input v-model="formValidate.zzc" placeholder="总支出"></Input>
            </FormItem>
          </Col>
          <Col span="8">
            <FormItem label="总资产" prop="zzch">
              <Input v-model="formValidate.zzch" placeholder="总资产"></Input>
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col span="8">
            <FormItem label="流动资产" prop="ldzc">
              <Input v-model="formValidate.ldzc" placeholder="流动资产"></Input>
            </FormItem>
          </Col>
          <Col span="8">
            <FormItem label="对外投资" prop="dwtz">
              <Input v-model="formValidate.dwtz" placeholder="对外投资"></Input>
            </FormItem>
          </Col>
          <Col span="8">
            <FormItem label="固定资产" prop="gdzc">
              <Input v-model="formValidate.gdzc" placeholder="固定资产"></Input>
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col span="8">
            <FormItem label="无形资产及开办费" prop="wxzcjkbf">
              <Input v-model="formValidate.wxzcjkbf" placeholder="无形资产及开办费"></Input>
            </FormItem>
          </Col>
          <Col span="8">
            <FormItem label="负债" prop="fz">
              <Input v-model="formValidate.fz" placeholder="负债"></Input>
            </FormItem>
          </Col>
          <Col span="8">
            <FormItem label="净资产" prop="jzc">
              <Input v-model="formValidate.jzc" placeholder="净资产"></Input>
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
          <Button type="success" @click="sumbitOdi('formValidate')">保存</Button>
          <Button type="text" to="/resource/odi-list">返回机构业务发展信息列表</Button>
        </FormItem>
      </Form>
    </Card>
  </div>
</template>
<script type="text/ecmascript-6">

  import {addOdi, editOdi, odiDetail} from '@/api/odi'

  export default {
    name: 'add_edit_odi',
    data() {
      return {
        formValidate: {
          jgdm: '', nf: '', pcjgsl: '', bspt: '', wljgtdz: '',
          jgmsxx: '', jfmj:'', zgzs:'', khfwryzs:'', ywyfmj:'',
          zsr:'', zzc: '', zzch: '', ldzc: '', dwtz: '',
          gdzc: '', wxzcjkbf: '', fz: '', jzc: '',
          sjscsj: '', tbrqsj: '', cxbz: ''
        },
        ruleValidate: {
          jgdm: [
            {required: true, message: '请填写机构标识', trigger: 'blur'}
          ],
          jzc: [
            {required: true, message: '请填写净资产', trigger: 'blur'}
          ],
          fz: [
            {required: true, message: '请填写负债', trigger: 'blur'}
          ],
          wxzcjkbf: [
            {required: true, message: '请填写无形资产及开办费', trigger: 'blur'}
          ],
          gdzc: [
            {required: true, message: '请填写固定资产', trigger: 'blur'}
          ],
          dwtz: [
            {required: true, message: '请填写对外投资', trigger: 'blur'}
          ],
          ldzc: [
            {required: true, message: '请填写流动资产', trigger: 'blur'}
          ],
          zzc: [
            {required: true, message: '请填写总支出', trigger: 'blur'}
          ],
          zzch: [
            {required: true, message: '请填写总资产', trigger: 'blur'}
          ],
          zsr: [
            {required: true, message: '请填写总收入', trigger: 'blur'}
          ],
          ywyfmj: [
            {required: true, message: '请填写业务用房面积', trigger: 'blur'}
          ],
          khfwryzs: [
            {required: true, message: '请填写客户服务人员总数', trigger: 'blur'}
          ],
          zgzs: [
            {required: true, message: '请填写职工总数', trigger: 'blur'}
          ],
          bspt: [
            {required: true, message: '请选择部署平台', trigger: 'change'}
          ],
          nf: [
            {required: true, type: 'date', message: '请选择月份', trigger: 'change'}
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
      this.odi_title = this.$route.params.id >= 0 ? '编辑机构信息' : '添加机构信息'
      this.setOdi()
    },
    methods: {
      setOdi() {
        let id = this.$route.params.id
        var that = this
        if (id >= 0) {
          odiDetail(id).then(function (res) {
            if (res.data.errorCode === 0) {
              let data = res.data.data
              that.formValidate = {
                jgdm: data.jgdm, nf: data.nf, pcjgsl: data.pcjgsl, bspt: data.bspt, wljgtdz: data.wljgtdz,
                jgmsxx: data.jgmsxx, jfmj: data.jfmj, zgzs: data.zgzs, khfwryzs: data.khfwryzs,
                zsr: data.zsr, zzc: data.zzc, zzch: data.zzch, ldzc: data.ldzc, dwtz: data.dwtz,
                gdzc: data.gdzc, wxzcjkbf: data.wxzcjkbf, fz: data.fz, ywyfmj: data.ywyfmj,
                jzc: data.jzc, sjscsj: data.sjscsj, tbrqsj: data.tbrqsj, cxbz: data.cxbz
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
      sumbitOdi(name) {
        let id = this.$route.params.id
        var that = this
        let data = this.formValidate
        let data2 = {
          jgdm: data.jgdm, nf: data.nf, pcjgsl: data.pcjgsl, bspt: data.bspt, wljgtdz: data.wljgtdz,
          jgmsxx: data.jgmsxx, jfmj: data.jfmj, zgzs: data.zgzs, khfwryzs: data.khfwryzs,
          zsr: data.zsr, zzc: data.zzc, zzch: data.zzch, ldzc: data.ldzc, dwtz: data.dwtz,
          gdzc: data.gdzc, wxzcjkbf: data.wxzcjkbf, fz: data.fz,
          jzc: data.jzc, cxbz: data.cxbz, ywyfmj: data.ywyfmj,
        };

        data2.nf = Date.parse(data.nf) / 1000
        data2.sjscsj = Date.parse(data.sjscsj) / 1000
        data2.tbrqsj = Date.parse(data.tbrqsj) / 1000

        this.$refs[name].validate((valid) => {
          if (valid) {
            if (id >= 0) {
              editOdi(data2, id).then(function (res) {
                if (res.data.errorCode == 0) {
                  that.$Message.info('保存成功')
                  that.$router.push({
                    name: 'odi_list'
                  })
                } else {
                  that.$Message.info(res.data.message || '保存失败')
                }
              }).catch(function (err) {
                that.$Message.info(err.data.message || '接口获取失败')
              })
            } else {
              addOdi(data2).then(function (res) {
                if (res.data.errorCode == 0) {
                  that.$Message.info('保存成功')
                  that.$router.push({
                    name: 'odi_list'
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
