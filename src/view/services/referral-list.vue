<style>
  .marginTop {
    margin-top: 20px;
  }

  .mleft {
    margin-left: 10px;
  }
</style>
<template>
  <div>
    <Card>
      <Row class="marginTop">
        <Col span="4">
          <Button type="primary" @click="addReferral" v-if="addAccess" to="/service/add-edit-referral/-1">添加转诊记录
          </Button>
        </Col>
        <Col span="20" style="margin-bottom: 15px;">
                    <span style="">
                        <Input v-model="keyword" placeholder="请输入关键字" class="mleft" style="width: 200px"/>
                        <DatePicker type="datetimerange" placement="bottom-end" v-model="fdate"
                                    placeholder="选择添加科室的时间范围"
                                    style="width: 280px" class="mleft"></DatePicker>
                        <Button type="info" icon="ios-search" class="mleft" @click="query">查询</Button>
                        <Button type="default" icon="md-refresh" class="mleft" @click="resetQuery">重置查询</Button>
                    </span>
        </Col>
      </Row>
      <Table ref="referral" :columns="columns" :data="list" :loading="loading"
             @on-selection-change="selctChange"></Table>
      <Row class="marginTop">
        <Col span="6">
          <div style="padding-bottom: 1px; overflow: hidden;">
            <Button type="error" @click="delReferral" v-if="viewAccessAll">删除</Button>
          </div>
        </Col>
        <Col span="18" v-show="showPage">
          <div style="margin: 10px; padding-bottom: 1px; overflow: hidden;">
            <div style="float: right; width: 80%; text-align: right;">
              <Page :total="total"
                    :current="page"
                    :page-size="pageSize"
                    @on-change="changePage"
                    @on-page-size-change="changePageSize"
                    show-sizer
                    show-elevator
                    show-total
                    :page-size-opts="pageSizeOpts"
                    :placement="'top'">
              </Page>
            </div>
          </div>
        </Col>
      </Row>
    </Card>
  </div>
</template>
<script type="text/ecmascript-6">
  import {hasOneOf} from '@/libs/tools'
  import {referralList, delReferral} from '@/api/referral'
  import {getLocalStorage} from '@/libs/util'

  export default {
    name: 'referral_list',
    data () {
      return {
        total: 0,
        page: 1,
        pageSize: 10,
        pageSizeOpts: [10, 20, 30, 50, 100],
        order: 'sort',
        sort: 'desc',
        showPage: false,
        keyword: '',
        fdate: '',
        loading: true,
        changeAccess: true,
        editAccessL: true,
        columns: [
          {
            type: 'selection',
            width: 60,
            align: 'center'
          },
          {
            title: '机构标识',
            key: 'jgdm',
            render: (h, params) => {
              if ((new Date().getTime() - new Date(params.row.created_at).getTime()) <= 300000) {
                return h('span', [
                  params.row.jgdm,
                  h('tag', {
                    style: {
                      marginLeft: '10px',
                      fontWeight: 'bold',
                      color: '#fff'
                    },
                    props: {
                      color: '#009b00'
                    }
                  }, 'NEW')
                ])
              } else {
                return h('span', [
                  params.row.jgdm
                ])
              }
            }
          },
          {
            title: '服务网点代码',
            key: 'fwwddm',
            align: 'center',
            render: (h, params) => {
              return h('span', [
                params.row.fwwddm
              ])
            }
          },
          {
            title: '转诊记录ID',
            key: 'zzjlid',
            align: 'center',
            render: (h, params) => {
              return h('span', [
                params.row.zzjlid
              ])
            }
          },
          {
            title: '卡号',
            key: 'kh',
            align: 'center',
            render: (h, params) => {
              return h('span', [
                params.row.kh
              ])
            }
          },
          {
            title: '添加时间',
            key: 'created_at',
            align: 'center',
            width: 180,
            render: (h, params) => {
              return h('span', [
                params.row.created_at
              ])
            }
          },
          {
            title: '操作',
            width: 300,
            align: 'center',
            key: 'operation',
            render: (h, params) => {
              return h('div', [
                h('Button', {
                  props: {
                    icon: 'ios-search',
                    type: 'success',
                    size: 'small'
                  },
                  style: {
                    marginRight: '5px'
                  },
                  on: {
                    click: () => {

                    }
                  }
                }, '详情'),
                h('Button', {
                  props: {
                    icon: 'ios-create-outline',
                    to: '/service/add-edit-referral/' + params.row.id,
                    type: 'primary',
                    size: 'small'
                  },
                  style: {
                    marginRight: '5px',
                    display: this.editAccessL ? 'inline-block;' : 'none'
                  },
                  on: {
                    click: () => {
                      this.editReferral(params.row.id)
                    }
                  }
                }, '编辑')
              ])
            }
          }
        ],
        list: [],
        isShow: false,
        selectArr: [],
        sortAccessL: true
      }
    },
    computed: {
      // 删除权限限制
      viewAccessAll () {
        this.changeAccess = getLocalStorage('access').split(',')
        const item = ['Delete:/admin/referral']
        const arr = ['*']
        if (this.changeAccess.toString() === arr.toString()) {
          return true
        } else {
          if (!hasOneOf(item, this.changeAccess)) {
            this.columns[0].type = 'html'
          }
          return hasOneOf(item, this.changeAccess)
        }
      },
      // 添加权限限制
      addAccess () {
        const addAccess = getLocalStorage('access').split(',')
        const item = ['Post:/admin/referral']
        const arr = ['*']
        if (addAccess.toString() === arr.toString()) {
          return true
        } else {
          return hasOneOf(item, addAccess)
        }
      }

    },
    created () {
      this.setReferralList()
      this.editAccess()
    },
    methods: {
      editAccess () {
        const addAccess = getLocalStorage('access').split(',')
        const item = ['Put:/admin/referral/{id:[0-9]+}']
        const arr = ['*']
        if (addAccess.toString() === arr.toString()) {
          return true
        } else {
          this.editAccessL = hasOneOf(item, addAccess)
          return hasOneOf(item, addAccess)
        }
      },
      setReferralList () {
        var _this = this
        const params = {
          keyword: _this.keyword,
          bspt: _this.bspt,
          page: _this.page,
          pageSize: _this.pageSize,
          startTime: _this.fdate && _this.fdate[0] ? Date.parse(_this.fdate[0]) / 1000 : 0,
          endTime: _this.fdate && _this.fdate[1] ? Date.parse(_this.fdate[1]) / 1000 : 0
        }

        referralList(params).then(function (res) {
          if (res.data.errorCode === 0) {
            const data = res.data.data
            _this.list = data.data
            _this.total = data.total
            _this.showPage = data.total > _this.pageSize
            _this.loading = false
          } else {
            _this.$Message.info(res.data.messages || '数据渲染失败')
          }
        }).catch(function (err) {
          _this.$Message.info(err.data.messages || '接口获取失败')
        })
      },
      selctChange (selection) {
        const arr = []
        for (let i = 0; i < selection.length; i++) {
          arr.push(selection[i].id)
        }
        this.selectArr = arr
      },
      delReferral () {
        var _this = this

        const list = _this.$refs.referral.getSelection()

        if (list.length === 0) {
          this.$Message.error('请勾选要删除的转诊记录')
          return false
        }

        this.$Modal.confirm({
          title: '温馨提示',
          content: '确定要执行删除动作吗？',
          onOk: () => {
            const ids = {}
            ids.ids = _this.selectArr
            delReferral(ids).then(function (res) {
              if (res.data.errorCode === 0) {
                let arr = _this.list.filter(item => !_this.selectArr.some(ele => ele === item.id))
                _this.list = arr
                _this.$Message.info('删除成功')
              } else {
                _this.$Message.info(res.data.messages || '删除失败')
              }
            }).catch(function (err) {
              _this.$Message.info(err.data.messages || '接口获取失败')
            })
          },
          onCancel: () => {
            this.$Message.info('取消删除')
          }

        })
      },
      editReferral (id) {
        const route = {
          name: 'add_edit_odi',
          params: {
            id
          },
          meta: {
            title: `${id >= 0 ? '编辑转诊记录' : '添加转诊记录'}`
          }
        }
        this.$router.push(route)
      },
      addReferral () {
        let id = -1
        const route = {
          name: 'add_edit_odi',
          params: {
            id
          },
          meta: {
            title: `${id >= 0 ? '编辑转诊记录' : '添加转诊记录'}`
          }
        }
        this.$router.push(route)
      },
      changePage (value) {
        this.loading = true
        this.page = value
        this.setReferralList()
      },
      changePageSize (value) {
        this.loading = true
        this.pageSize = value
        this.setReferralList()
      },
      query () {
        this.loading = true
        this.page = 1
        this.setReferralList()
      },
      resetQuery () {
        this.loading = true
        this.page = 1
        this.keyword = ''
        this.fdate = ''
        this.setReferralList()
      }
    }
  }
</script>
