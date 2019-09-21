<style>

</style>
<template>
  <div>
    <Card>
      <h4>{{server_title}}</h4>
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
            <FormItem label="服务点名称" prop="fwdmc">
              <Input v-model="formValidate.fwdmc" placeholder="服务点名称"></Input>
            </FormItem>
          </Col>
          <Col span="8">
            <FormItem label="行政区划代码" prop="xzqhdm">
              <Input v-model="formValidate.xzqhdm" placeholder="行政区划代码"></Input>
            </FormItem>
          </Col>
          <Col span="8">
            <FormItem label="服务点类型" prop="fwdlx">
              <Select v-model="formValidate.fwdlx" clearable>
                <Option value="1">类型1</Option>
                <Option value="2">类型2</Option>
              </Select>
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col span="6">
            <FormItem label="服务点成立日期" prop="fwdclrq">
              <DatePicker v-model="formValidate.fwdclrq" type="date" placeholder="请选择服务点成立日期"></DatePicker>
            </FormItem>
          </Col>
          <Col span="6">
            <FormItem label="单位隶属关系代码" prop="dwlsgxdm">
              <Input v-model="formValidate.dwlsgxdm" placeholder="单位隶属关系代码"></Input>
            </FormItem>
          </Col>
          <Col span="6">
            <FormItem label="分类管理类别代码" prop="fwdflgllbdm">
              <Select v-model="formValidate.fwdflgllbdm" clearable>
                <Option value="1">类别1</Option>
                <Option value="2">类别2</Option>
              </Select>
            </FormItem>
          </Col>
          <Col span="6">
            <FormItem label="服务点分类代码" prop="fwdfldm">
              <Input v-model="formValidate.fwdfldm" placeholder="服务点分类代码"></Input>
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col span="6">
            <FormItem label="服务网点代码" prop="fwwddm">
              <Input v-model="formValidate.fwwddm" placeholder="服务网点代码"></Input>
            </FormItem>
          </Col>
          <Col span="6">
            <FormItem label="经济类型代码" prop="jjlxdm">
              <Input v-model="formValidate.jjlxdm" placeholder="经济类型代码"></Input>
            </FormItem>
          </Col>
          <Col span="12">
            <FormItem label="地址" prop="dz">
              <Input v-model="formValidate.dz" placeholder="地址"></Input>
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col span="8">
            <FormItem label="服务点医院级别" prop="fwdyyjb">
              <Select v-model="formValidate.fwdyyjb" clearable>
                <Option value="1">级别1</Option>
                <Option value="2">级别2</Option>
              </Select>
            </FormItem>
          </Col>
          <Col span="8">
            <FormItem label="服务点医院等级" prop="fwdyydj">
              <Select v-model="formValidate.fwdyydj" clearable>
                <Option value="1">等级1</Option>
                <Option value="2">等级2</Option>
              </Select>
            </FormItem>
          </Col>
          <Col span="8">
            <FormItem label="互联网医院网址" prop="hlwyywz">
              <Input v-model="formValidate.hlwyywz" placeholder="互联网医院网址"></Input>
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col span="8">
            <FormItem label="许可证有效期" prop="xkzyxq">
              <DatePicker v-model="formValidate.xkzyxq" type="date" placeholder="请选择许可证有效期"></DatePicker>
            </FormItem>
          </Col>
          <Col span="8">
            <FormItem label="许可证号码" prop="xkzhm">
              <Input v-model="formValidate.xkzhm" placeholder="许可证号码"></Input>
            </FormItem>
          </Col>
          <Col span="8">
            <FormItem label="许可项目名称" prop="xkxmmc">
              <Input v-model="formValidate.xkxmmc" placeholder="许可项目名称"></Input>
            </FormItem>
          </Col>
        </Row>
        <Row>

          <Col span="8">
            <FormItem label="开办资金金额数">
              <Input v-model="formValidate.kbzjjes" placeholder="开办资金金额数"></Input>
            </FormItem>
          </Col>
          <Col span="8">
            <FormItem label="法人代表/负责人">
              <Input v-model="formValidate.frdb" placeholder="法人代表/负责人"></Input>
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col span="6">
            <FormItem label="地方标志" prop="fwdszdmzzzdfbz">
              <Select v-model="formValidate.fwdszdmzzzdfbz" placeholder="服务点所在地民族自治地方标志" clearable>
                <Option value="1">是</Option>
                <Option value="2">否</Option>
              </Select>
            </FormItem>
          </Col>
          <Col span="6">
            <FormItem label="是否分支服务点" prop="sffzjg">
              <Select v-model="formValidate.sffzjg" clearable>
                <Option value="1">是</Option>
                <Option value="2">否</Option>
              </Select>
            </FormItem>
          </Col>
          <Col span="6">
            <FormItem label="服务点第二名称">
              <Input v-model="formValidate.jgdemc" placeholder="服务点第二名称"></Input>
            </FormItem>
          </Col>
          <Col span="6">
            <FormItem label="邮政编码">
              <Input v-model="formValidate.yzbm" placeholder="邮政编码"></Input>
            </FormItem>
          </Col>
        </Row>
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
          <Button type="success" @click="sumbitServer('formValidate')">保存</Button>
          <Button type="text" to="/resource/server-list">返回服务点列表</Button>
        </FormItem>
      </Form>
    </Card>
  </div>
</template>
<script type="text/ecmascript-6">

  import {addServer, editServer, serverDetail} from '@/api/server'

  export default {
    name: 'add_edit_server',
    data () {
      return {
        formValidate: {
          jgdm: '', zzjgdm: '', fwwddm: '', fwdmc: '', xzqhdm: '', fwdlx: '', fwdclrq: '',
          dwlsgxdm: '', fwdflgllbdm: '', fwdfldm: '', jjlxdm: '', dz: '',
          fwdyyjb: '', fwdyydj: '', hlwyywz: '', xkzhm: '', xkxmmc: '', xkzyxq: '',
          kbzjjes: '', frdb: '', fwdszdmzzzdfbz: '', sffzjg: '', fwddemc: '', fwdms: '',
          yzbm: '', dhhm: '', dwdzyx: '', bz: '', sjscsj: '', tbrqsj: '', cxbz: ''
        },
        ruleValidate: {
          fwwddm: [
            {required: true, message: '请填写服务网点代码', trigger: 'blur'}
          ],
          fwdfldm: [
            {required: true, message: '请填写服务点分类代码', trigger: 'blur'}
          ],
          xkzhm: [
            {required: true, message: '请填写许可证号码', trigger: 'blur'}
          ],
          fwdflgllbdm: [
            {required: true, message: '请选择分类管理类别代码', trigger: 'change'}
          ],
          fwdyyjb: [
            {required: true, message: '请选择服务点医院级别', trigger: 'change'}
          ],
          fwdyydj: [
            {required: true, message: '请选择服务点医院等级', trigger: 'change'}
          ],
          fwdszdmzzzdfbz: [
            {required: true, message: '请选择民族自治地方标志', trigger: 'change'}
          ],
          sffzjg: [
            {required: true, message: '请选择是否分支服务点', trigger: 'change'}
          ],
          fwdlx: [
            {required: true, message: '请选择服务点类型', trigger: 'change'}
          ],
          xkxmmc: [
            {required: true, message: '请填写许可项目名称', trigger: 'blur'}
          ],
          jgdm: [
            {required: true, message: '请填写服务点标识', trigger: 'blur'}
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
            {required: true, message: '请填写实体医院医疗组织服务点代码', trigger: 'blur'}
          ],
          fwdmc: [
            {required: true, message: '请填写服务点名称', trigger: 'blur'}
          ],
          xzqhdm: [
            {required: true, message: '请填写行政区划代码', trigger: 'blur'}
          ],
          styljgdj: [
            {required: true, message: '请选择实体医疗服务点等级', trigger: 'change'}
          ],
          fwdclrq: [
            {required: true, type: 'date', message: '请选择服务点成立日期', trigger: 'change'}
          ],
          xkzyxq: [
            {required: true, type: 'date', message: '请选择许可证有效期', trigger: 'change'}
          ],
          dwlsgxdm: [
            {required: true, message: '请填写单位隶属关系代码', trigger: 'blur'}
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
    created () {
      this.server_title = this.$route.params.id >= 0 ? '编辑服务点信息' : '添加服务点信息'
      this.setServer()
    },
    methods: {
      setServer () {
        let id = this.$route.params.id
        var that = this
        if (id >= 0) {
          serverDetail(id).then(function (res) {
            if (res.data.errorCode === 0) {
              let data = res.data.data
              that.formValidate = {
                jgdm: data.jgdm,
                zzjgdm: data.zzjgdm,
                fwwddm: data.fwwddm,
                fwdmc: data.fwdmc,
                xzqhdm: data.xzqhdm,
                fwdlx: data.fwdlx,
                fwdclrq: data.fwdclrq,
                jjlxdm: data.jjlxdm,
                dz: data.dz,
                fwdms: data.fwdms,
                dwlsgxdm: data.dwlsgxdm,
                fwdflgllbdm: data.fwdflgllbdm,
                fwdfldm: data.fwdfldm,
                xkzyxq: data.xkzyxq,
                fwdyyjb: data.fwdyyjb,
                fwdyydj: data.fwdyydj,
                hlwyywz: data.hlwyywz,
                xkzhm: data.xkzhm,
                xkxmmc: data.xkxmmc,
                kbzjjes: data.kbzjjes,
                frdb: data.frdb,
                fwdszdmzzzdfbz: data.fwdszdmzzzdfbz,
                sffzjg: data.sffzjg,
                fwddemc: data.fwddemc,
                yzbm: data.yzbm,
                dhhm: data.dhhm,
                dwdzyx: data.dwdzyx,
                bz: data.bz,
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
      sumbitServer (name) {
        let id = this.$route.params.id
        var that = this
        let data = this.formValidate
        let data2 = {
          jgdm: data.jgdm,
          zzjgdm: data.zzjgdm,
          fwwddm: data.fwwddm,
          fwdmc: data.fwdmc,
          xzqhdm: data.xzqhdm,
          fwdlx: data.fwdlx,
          jjlxdm: data.jjlxdm,
          dz: data.dz,
          fwdms: data.fwdms,
          dwlsgxdm: data.dwlsgxdm,
          fwdflgllbdm: data.fwdflgllbdm,
          fwdfldm: data.fwdfldm,
          fwdyyjb: data.fwdyyjb,
          fwdyydj: data.fwdyydj,
          hlwyywz: data.hlwyywz,
          xkzhm: data.xkzhm,
          xkxmmc: data.xkxmmc,
          kbzjjes: data.kbzjjes,
          frdb: data.frdb,
          fwdszdmzzzdfbz: data.fwdszdmzzzdfbz,
          sffzjg: data.sffzjg,
          fwddemc: data.fwddemc,
          yzbm: data.yzbm,
          dhhm: data.dhhm,
          dwdzyx: data.dwdzyx,
          bz: data.bz,
          cxbz: data.cxbz
        }
        data2.fwdclrq = Date.parse(data.fwdclrq) / 1000
        data2.xkzyxq = Date.parse(data.xkzyxq) / 1000
        data2.sjscsj = Date.parse(data.sjscsj) / 1000
        data2.tbrqsj = Date.parse(data.tbrqsj) / 1000

        this.$refs[name].validate((valid) => {
          if (valid) {
            if (id >= 0) {
              editServer(data2, id).then(function (res) {
                if (res.data.errorCode == 0) {
                  that.$Message.info('保存成功')
                  that.$router.push({
                    name: 'server_list'
                  })
                } else {
                  that.$Message.info(res.data.message || '保存失败')
                }
              }).catch(function (err) {
                that.$Message.info(err.data.message || '接口获取失败')
              })
            } else {
              addServer(data2).then(function (res) {
                if (res.data.errorCode == 0) {
                  that.$Message.info('保存成功')
                  that.$router.push({
                    name: 'server_list'
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
