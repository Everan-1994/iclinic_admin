<style>

</style>
<template>
  <div>
    <Card>
      <h4>{{order_title}}</h4>
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
            <FormItem label="处方编号" prop="cfbh">
              <Input v-model="formValidate.cfbh" placeholder="处方编号"></Input>
            </FormItem>
          </Col>
          <Col span="6">
            <FormItem label="处方明细ID" prop="cfmxid">
              <Input v-model="formValidate.cfmxid" placeholder="处方明细ID"></Input>
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
            <FormItem label="卡类型" prop="klx">
              <Input v-model="formValidate.klx" placeholder="卡类型"></Input>
            </FormItem>
          </Col>
          <Col span="6">
            <FormItem label="处方开立日期" prop="cfklsj">
              <DatePicker v-model="formValidate.cfklsj" type="date" placeholder="请选择处方开立日期"></DatePicker>
            </FormItem>
          </Col>
          <Col span="6">
            <FormItem label="处方有效天数" prop="cfyxts">
              <Input v-model="formValidate.cfyxts" placeholder="处方有效天数"></Input>
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col span="6">
            <FormItem label="处方开立科室编码" prop="xfklksbm">
              <Input v-model="formValidate.xfklksbm" placeholder="处方开立科室编码"></Input>
            </FormItem>
          </Col>
          <Col span="12">
            <FormItem label="处方开立科室名称" prop="cfklksmc">
              <Input v-model="formValidate.cfklksmc" placeholder="处方开立科室名称"></Input>
            </FormItem>
          </Col>
          <Col span="6">
            <FormItem label="门诊号" prop="mzh">
              <Input v-model="formValidate.mzh" placeholder="门诊号"></Input>
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
            <FormItem label="就诊日期时间" prop="jzrqsj">
              <DatePicker v-model="formValidate.jzrqsj" type="date" placeholder="请选择就诊日期时间"></DatePicker>
            </FormItem>
          </Col>
          <Col span="12">
            <FormItem label="医嘱说明">
              <Input v-model="formValidate.yzsm" placeholder="医嘱说明"></Input>
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col span="6">
            <FormItem label="排序号" prop="pxh">
              <Input v-model="formValidate.pxh" placeholder="排序号"></Input>
            </FormItem>
          </Col>
          <Col span="6">
            <FormItem label="医嘱项目类型代码" prop="yzxmlxdm">
              <Input v-model="formValidate.yzxmlxdm" placeholder="医嘱项目类型代码"></Input>
            </FormItem>
          </Col>
          <Col span="6">
            <FormItem label="药品处方属性" prop="ypcfsx">
              <Input v-model="formValidate.ypcfsx" placeholder="药品处方属性"></Input>
            </FormItem>
          </Col>
          <Col span="6">
            <FormItem label="中药类别代码">
              <Input v-model="formValidate.zylbdm" placeholder="中药类别代码"></Input>
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col span="6">
            <FormItem label="处方明细医保编码" >
              <Input v-model="formValidate.cfmxybbm" placeholder="处方明细医保编码"></Input>
            </FormItem>
          </Col>
          <Col span="6">
            <FormItem label="药监药品ID">
              <Input v-model="formValidate.ypid" placeholder="药监药品ID"></Input>
            </FormItem>
          </Col>
          <Col span="6">
            <FormItem label="药物名称">
              <Input v-model="formValidate.ypmc" placeholder="药物名称"></Input>
            </FormItem>
          </Col>
          <Col span="6">
            <FormItem label="药品规格">
              <Input v-model="formValidate.ypgg" placeholder="药品规格"></Input>
            </FormItem>
          </Col>
        </Row>
        <FormItem label="处方明细名称" prop="cfmxmc">
          <Input v-model="formValidate.cfmxmc" type="textarea" :autosize="{minRows: 5, maxRows: 15}"
                 placeholder="处方明细名称"></Input>
        </FormItem>
        <Row>
          <Col span="6">
            <FormItem label="DDD值" >
              <Input v-model="formValidate.dddz" placeholder="DDD值"></Input>
            </FormItem>
          </Col>
          <Col span="6">
            <FormItem label="药物剂型代码" >
              <Input v-model="formValidate.ywjxdm" placeholder="药物剂型代码"></Input>
            </FormItem>
          </Col>
          <Col span="6">
            <FormItem label="药物使用次剂量" >
              <Input v-model="formValidate.ywsycjl" placeholder="药物使用次剂量"></Input>
            </FormItem>
          </Col>
          <Col span="6">
            <FormItem label="药物使用剂量单位" >
              <Input v-model="formValidate.ywsyjldw" placeholder="药物使用剂量单位"></Input>
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col span="6">
            <FormItem label="药物使用频次代码" >
              <Input v-model="formValidate.ywsypcdm" placeholder="药物使用频次代码"></Input>
            </FormItem>
          </Col>
          <Col span="6">
            <FormItem label="药物使用频次名称" >
              <Input v-model="formValidate.ywsypcmc" placeholder="药物使用频次名称"></Input>
            </FormItem>
          </Col>
          <Col span="6">
            <FormItem label="用药途径代码" >
              <Input v-model="formValidate.yytjdm" placeholder="用药途径代码"></Input>
            </FormItem>
          </Col>
          <Col span="6">
            <FormItem label="用药途径名称" >
              <Input v-model="formValidate.yytjmc" placeholder="用药途径名称"></Input>
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col span="8">
            <FormItem label="药物使用总剂量" >
              <Input v-model="formValidate.yysyzjl" placeholder="药物使用总剂量"></Input>
            </FormItem>
          </Col>
          <Col span="8">
            <FormItem label="处方药品组号" >
              <Input v-model="formValidate.cfypzh" placeholder="处方药品组号"></Input>
            </FormItem>
          </Col>
          <Col span="8">
            <FormItem label="中药饮片剂数" >
              <Input v-model="formValidate.zyypjs" placeholder="中药饮片剂数"></Input>
            </FormItem>
          </Col>
        </Row>
        <FormItem label="中药饮片处方">
          <Input v-model="formValidate.zyypcf" type="textarea" :autosize="{minRows: 5, maxRows: 15}"
                 placeholder="中药饮片处方"></Input>
        </FormItem>
        <Row>
          <Col span="12">
            <FormItem label="中药饮片煎煮法" >
              <Input v-model="formValidate.zyypjzf" placeholder="中药饮片煎煮法"></Input>
            </FormItem>
          </Col>
          <Col span="12">
            <FormItem label="中药用药方法" >
              <Input v-model="formValidate.zyyyff" placeholder="中药用药方法"></Input>
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col span="6">
            <FormItem label="发药剂量" >
              <Input v-model="formValidate.fyjl" placeholder="发药剂量"></Input>
            </FormItem>
          </Col>
          <Col span="6">
            <FormItem label="发药剂量单位" >
              <Input v-model="formValidate.fyjldw" placeholder="发药剂量单位"></Input>
            </FormItem>
          </Col>
          <Col span="6">
            <FormItem label="单价" prop="dj">
              <Input v-model="formValidate.dj" placeholder="单价"></Input>
            </FormItem>
          </Col>
          <Col span="6">
            <FormItem label="总金额" prop="zje">
              <Input v-model="formValidate.zje" placeholder="总金额"></Input>
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col span="8">
            <FormItem label="医师工号" prop="cfklysgh">
              <Input v-model="formValidate.cfklysgh" placeholder="处方开立医师工号"></Input>
            </FormItem>
          </Col>
          <Col span="8">
            <FormItem label="医师签名" prop="cfklysqm">
              <Input v-model="formValidate.cfklysqm" placeholder="处方开立医师签名"></Input>
            </FormItem>
          </Col>
          <Col span="8">
            <FormItem label="药剂师工号">
              <Input v-model="formValidate.cfshyjsgh" placeholder="处方审核药剂师工号"></Input>
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col span="8">
            <FormItem label="药剂师签名">
              <Input v-model="formValidate.cfshyjsqm" placeholder="处方审核药剂师签名"></Input>
            </FormItem>
          </Col>
          <Col span="8">
            <FormItem label="调配药剂师工号">
              <Input v-model="formValidate.cftpyjsgh" placeholder="处方调配药剂师工号"></Input>
            </FormItem>
          </Col>
          <Col span="8">
            <FormItem label="调配药剂师签名">
              <Input v-model="formValidate.cftpyjsqm" placeholder="处方调配药剂师签名"></Input>
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col span="6">
            <FormItem label="核对药剂师工号">
              <Input v-model="formValidate.cfhdyjsgh" placeholder="处方核对药剂师工号"></Input>
            </FormItem>
          </Col>
          <Col span="6">
            <FormItem label="核对药剂师签名">
              <Input v-model="formValidate.cfhdyjsqm" placeholder="处方核对药剂师签名"></Input>
            </FormItem>
          </Col>
          <Col span="6">
            <FormItem label="发药药剂师工号">
              <Input v-model="formValidate.cffyyjsgh" placeholder="处方发药药剂师工号"></Input>
            </FormItem>
          </Col>
          <Col span="6">
            <FormItem label="发药药剂师签名">
              <Input v-model="formValidate.cffyyjsqm" placeholder="处方发药药剂师签名"></Input>
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col span="8">
            <FormItem label="执行结果">
              <Input v-model="formValidate.zxjg" placeholder="执行结果"></Input>
            </FormItem>
          </Col>
          <Col span="8">
            <FormItem label="取药机构代码">
              <Input v-model="formValidate.qyjgdm" placeholder="取药机构代码"></Input>
            </FormItem>
          </Col>
          <Col span="8">
            <FormItem label="取药机构名称">
              <Input v-model="formValidate.qyjgmc" placeholder="取药机构名称"></Input>
            </FormItem>
          </Col>
        </Row>
        <FormItem label="备注">
          <Input v-model="formValidate.bz" type="textarea" :autosize="{minRows: 5, maxRows: 15}"
                 placeholder="备注"></Input>
        </FormItem>
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
          <Button type="success" @click="sumbitOrder('formValidate')">保存</Button>
          <Button type="text" to="/service/order-list">返回门诊处方列表</Button>
        </FormItem>
      </Form>
    </Card>
  </div>
</template>
<script type="text/ecmascript-6">

  import {addOrder, editOrder, orderDetail} from '@/api/order'

  export default {
    name: 'add_edit_order',
    data() {
      return {
        formValidate: {
          jgdm: '', fwwddm: '', cfbh: '',
          cfmxid: '', kh: '', klx: '', cfklsj: '', cfyxts: '', xfklksbm: '',
          cfklksmc: '', mzh: '', xm: '', xbdm: '', csrq: '', nls: '', nly: '',
          jzrqsj: '', yzsm: '', pxh: '', yzxmlxdm: '', ypcfsx: '', zylbdm: '',
          cfmxybbm: '', ypid: '', cfmxmc: '', ypmc: '', ypgg: '', dddz: '',
          ywjxdm: '', ywsycjl: '', ywsyjldw: '', ywsypcdm: '', ywsypcmc: '', yytjdm: '',
          yytjmc: '', yysyzjl: '', cfypzh: '', zyypcf: '', zyypjs: '', zyypjzf: '',
          zyyyff: '', fyjl: '', fyjldw: '', dj: '', zje: '', cfklysgh: '', cfklysqm: '',
          cfshyjsgh: '', cfshyjsqm: '', cftpyjsgh: '', cftpyjsqm: '', cfhdyjsgh: '', cfhdyjsqm: '',
          cffyyjsgh: '', cffyyjsqm: '', zxjg: '', bz: '', qyjgdm: '', qyjgmc: '',
          sjscsj: '', tbrqsj: '', cxbz: '', mj: ''
        },
        ruleValidate: {
          jgdm: [
            {required: true, message: '请填写机构标识', trigger: 'blur'}
          ],
          cfklysqm: [
            {required: true, message: '请填写处方开立医师签名', trigger: 'blur'}
          ],
          cfklysgh: [
            {required: true, message: '请填写处方开立医师工号', trigger: 'blur'}
          ],
          zje: [
            {required: true, message: '请填写总金额', trigger: 'blur'}
          ],
          dj: [
            {required: true, message: '请填写单价', trigger: 'blur'}
          ],
          cfmxmc: [
            {required: true, message: '请填写处方明细名称', trigger: 'blur'}
          ],
          ypcfsx: [
            {required: true, message: '请填写药品处方属性', trigger: 'blur'}
          ],
          yzxmlxdm: [
            {required: true, message: '请填写医嘱项目类型代码', trigger: 'blur'}
          ],
          pxh: [
            {required: true, message: '请填写排序号', trigger: 'blur'}
          ],
          xfklksbm: [
            {required: true, message: '请填写处方开立科室编码', trigger: 'blur'}
          ],
          cfklksmc: [
            {required: true, message: '请填写处方开立科室名称', trigger: 'blur'}
          ],
          cfyxts: [
            {required: true, message: '请填写处方有效天数', trigger: 'blur'}
          ],
          cfmxid: [
            {required: true, message: '请填写处方明细ID', trigger: 'blur'}
          ],
          xbdm: [
            {required: true, message: '请填写性别代码', trigger: 'blur'}
          ],
          cfbh: [
            {required: true, message: '请填写处方编号', trigger: 'blur'}
          ],
          nls: [
            {required: true, message: '请填写年龄（岁）', trigger: 'blur'}
          ],
          xm: [
            {required: true, message: '请填写患者姓名', trigger: 'blur'}
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
          fwwddm: [
            {required: true, message: '请填写服务网点代码', trigger: 'blur'}
          ],
          cfklsj: [
            {required: true, type: 'date', message: '请选择处方开立日期', trigger: 'change'}
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
      this.order_title = this.$route.params.id >= 0 ? '编辑门诊处方' : '添加门诊处方'
      this.setOrder()
    },
    methods: {
      setOrder() {
        let id = this.$route.params.id
        var that = this
        if (id >= 0) {
          orderDetail(id).then(function (res) {
            if (res.data.errorCode === 0) {
              let data = res.data.data
              that.formValidate = {
                jgdm: data.jgdm, fwwddm: data.fwwddm, cfbh: data.cfbh,
                cfmxid: data.cfmxid, kh: data.kh, klx: data.klx, cfklsj: data.cfklsj, cfyxts: data.cfyxts, xfklksbm: data.xfklksbm,
                cfklksmc: data.cfklksmc, mzh: data.mzh, xm: data.xm, xbdm: data.xbdm, csrq: data.csrq, nls: data.nls, nly: data.nly,
                jzrqsj: data.jzrqsj, yzsm: data.yzsm, pxh: data.pxh, yzxmlxdm: data.yzxmlxdm, ypcfsx: data.ypcfsx, zylbdm: data.zylbdm,
                cfmxybbm: data.cfmxybbm, ypid: data.ypid, cfmxmc: data.cfmxmc, ypmc: data.ypmc, ypgg: data.ypgg, dddz: data.dddz,
                ywjxdm: data.ywjxdm, ywsycjl: data.ywsycjl, ywsyjldw: data.ywsyjldw, ywsypcdm: data.ywsypcdm, ywsypcmc: data.ywsypcmc, yytjdm: data.yytjdm,
                yytjmc: data.yytjmc, yysyzjl: data.yysyzjl, cfypzh: data.cfypzh, zyypcf: data.zyypcf, zyypjs: data.zyypjs, zyypjzf: data.zyypjzf,
                zyyyff: data.zyyyff, fyjl: data.fyjl, fyjldw: data.fyjldw, dj: data.dj, zje: data.zje, cfklysgh: data.cfklysgh, cfklysqm: data.cfklysqm,
                cfshyjsgh: data.cfshyjsgh, cfshyjsqm: data.cfshyjsqm, cftpyjsgh: data.cftpyjsgh, cftpyjsqm: data.cftpyjsqm, cfhdyjsgh: data.cfhdyjsgh, cfhdyjsqm: data.cfhdyjsqm,
                cffyyjsgh: data.cffyyjsgh, cffyyjsqm: data.cffyyjsqm, zxjg: data.zxjg, bz: data.bz, qyjgdm: data.qyjgdm, qyjgmc: data.qyjgmc,
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
      sumbitOrder(name) {
        let id = this.$route.params.id
        var that = this
        let data = this.formValidate
        let data2 = {
          jgdm: data.jgdm, fwwddm: data.fwwddm, cfbh: data.cfbh,
          cfmxid: data.cfmxid, kh: data.kh, klx: data.klx, cfyxts: data.cfyxts, xfklksbm: data.xfklksbm,
          cfklksmc: data.cfklksmc, mzh: data.mzh, xm: data.xm, xbdm: data.xbdm, csrq: data.csrq, nls: data.nls, nly: data.nly,
          yzsm: data.yzsm, pxh: data.pxh, yzxmlxdm: data.yzxmlxdm, ypcfsx: data.ypcfsx, zylbdm: data.zylbdm,
          cfmxybbm: data.cfmxybbm, ypid: data.ypid, cfmxmc: data.cfmxmc, ypmc: data.ypmc, ypgg: data.ypgg, dddz: data.dddz,
          ywjxdm: data.ywjxdm, ywsycjl: data.ywsycjl, ywsyjldw: data.ywsyjldw, ywsypcdm: data.ywsypcdm, ywsypcmc: data.ywsypcmc, yytjdm: data.yytjdm,
          yytjmc: data.yytjmc, yysyzjl: data.yysyzjl, cfypzh: data.cfypzh, zyypcf: data.zyypcf, zyypjs: data.zyypjs, zyypjzf: data.zyypjzf,
          zyyyff: data.zyyyff, fyjl: data.fyjl, fyjldw: data.fyjldw, dj: data.dj, zje: data.zje, cfklysgh: data.cfklysgh, cfklysqm: data.cfklysqm,
          cfshyjsgh: data.cfshyjsgh, cfshyjsqm: data.cfshyjsqm, cftpyjsgh: data.cftpyjsgh, cftpyjsqm: data.cftpyjsqm, cfhdyjsgh: data.cfhdyjsgh, cfhdyjsqm: data.cfhdyjsqm,
          cffyyjsgh: data.cffyyjsgh, cffyyjsqm: data.cffyyjsqm, zxjg: data.zxjg, bz: data.bz, qyjgdm: data.qyjgdm, qyjgmc: data.qyjgmc,
          mj: data.mj, sjscsj: data.sjscsj, tbrqsj: data.tbrqsj, cxbz: data.cxbz
        };

        data2.csrq = Date.parse(data.csrq) / 1000
        data2.cfklsj = Date.parse(data.cfklsj) / 1000
        data2.jzrqsj = Date.parse(data.jzrqsj) / 1000
        data2.sjscsj = Date.parse(data.sjscsj) / 1000
        data2.tbrqsj = Date.parse(data.tbrqsj) / 1000

        this.$refs[name].validate((valid) => {
          if (valid) {
            if (id >= 0) {
              editOrder(data2, id).then(function (res) {
                if (res.data.errorCode == 0) {
                  that.$Message.info('保存成功')
                  that.$router.push({
                    name: 'order_list'
                  })
                } else {
                  that.$Message.info(res.data.message || '保存失败')
                }
              }).catch(function (err) {
                that.$Message.info(err.data.message || '接口获取失败')
              })
            } else {
              addOrder(data2).then(function (res) {
                if (res.data.errorCode == 0) {
                  that.$Message.info('保存成功')
                  that.$router.push({
                    name: 'order_list'
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
