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
                    <Button type="primary" @click="edit(0)" v-if="addAccess" style="margin-bottom: 10px;">添加选项
                    </Button>
                </Col>
            </Row>
            <Table ref="select" :columns="columns" :data="list" :loading="loading"
                   @on-selection-change="selectChange"></Table>
            <Row class="marginTop">
                <Col span="6">
                    <div style="padding-bottom: 1px; overflow: hidden;">
                        <Button type="error" @click="_delSelect" v-if="viewAccessAll">删除</Button>
                    </div>
                </Col>
                <Col span="18">

                </Col>
            </Row>
        </Card>
        <Modal
                v-model="model"
                :title="title"
                @on-cancel="cancel">
            <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
                <FormItem label="编码" prop="code">
                    <Input v-model="formValidate.code" placeholder="请输入编码"></Input>
                </FormItem>
                <FormItem label="名称" prop="name">
                    <Input v-model="formValidate.name" placeholder="请输入名称"></Input>
                </FormItem>
            </Form>
            <div slot="footer">
                <Button type="success" size="large" long :loading="update_loading" @click="update">提交</Button>
            </div>
        </Modal>
    </div>
</template>
<script type="text/ecmascript-6">
    import {hasOneOf} from '@/libs/tools'
    import {_select, addSelect, editSelect, delSelect} from '@/api/select'
    import {getLocalStorage} from '@/libs/util'

    export default {
        data() {
            return {
                code: 0,
                title: '',
                model: false,
                loading: true,
                update_loading: false,
                changeAccess: true,
                editAccessL: true,
                formValidate: {
                    code: '',
                    name: ''
                },
                ruleValidate: {
                    name: [
                        {required: true, message: '请输入名称', trigger: 'blur'}
                    ],
                    code: [
                        {required: true, message: '请输入编码', trigger: 'blur'}
                    ]
                },
                columns: [
                    {
                        type: 'selection',
                        width: 60,
                        align: 'center'
                    },
                    {
                        title: '编码',
                        key: 'code',
                    },
                    {
                        title: '名称',
                        key: 'name',
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
                                        icon: 'ios-create-outline',
                                        type: 'primary',
                                        size: 'small'
                                    },
                                    style: {
                                        marginRight: '5px'
                                    },
                                    on: {
                                        click: () => {
                                            this.edit(params.row)
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
            viewAccessAll() {
                this.changeAccess = getLocalStorage('access').split(',')
                const item = ['Delete:/admin/select']
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
            addAccess() {
                const addAccess = getLocalStorage('access').split(',')
                const item = ['Post:/admin/select']
                const arr = ['*']
                if (addAccess.toString() === arr.toString()) {
                    return true
                } else {
                    return hasOneOf(item, addAccess)
                }
            }

        },
        created() {
            this.setSelect(this.$route.name)
            this.editAccess()
        },
        methods: {
            editAccess() {
                const addAccess = getLocalStorage('access').split(',')
                const item = ['Put:/admin/select/{id:[0-9]+}']
                const arr = ['*']
                if (addAccess.toString() === arr.toString()) {
                    return true
                } else {
                    this.editAccessL = hasOneOf(item, addAccess)
                    return hasOneOf(item, addAccess)
                }
            },
            setSelect(model) {
                var _this = this
                _select(model).then(function (res) {
                    if (res.data.errorCode === 0) {
                        const data = res.data.data
                        _this.list = data
                        _this.loading = false
                    } else {
                        _this.$Message.info(res.data.messages || '数据渲染失败')
                    }
                }).catch(function (err) {
                    _this.$Message.info(err.data.messages || '接口获取失败')
                })
            },
            selectChange(selection) {
                const arr = []
                for (let i = 0; i < selection.length; i++) {
                    arr.push(selection[i].code)
                }
                this.selectArr = arr
            },
            _delSelect() {
                var _this = this
                const list = _this.$refs.select.getSelection()

                if (list.length === 0) {
                    this.$Message.error('请勾选要删除的记录')
                    return false
                }
                console.log(_this.selectArr);
                this.$Modal.confirm({
                    title: '温馨提示',
                    content: '确定要执行删除动作吗？',
                    onOk: () => {
                        delSelect(_this.selectArr, _this.$route.name).then(function (res) {
                            if (res.data.errorCode === 0) {
                                let arr = _this.list.filter(item => !_this.selectArr.some(ele => ele === item.code))
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
            edit(row) {
                this.model = true
                this.title = row === 0 ? '新增选项' : '编辑选项'
                if (row !== 0) {
                    this.code = row.code
                    this.formValidate = row
                }
            },
            update() {
                var that = this
                that.update_loading = true
                this.$refs.formValidate.validate((valid) => {
                    if (valid) {
                        that.formValidate.model = that.$route.name
                        if (that.code !== 0) {
                            that.formValidate.id = that.code
                            editSelect(that.formValidate).then(function (res) {
                                if (res.data.errorCode == 0) {
                                    that.$Message.info('保存成功')
                                    that.cancel()
                                    that.setSelect(that.$route.name)
                                } else {
                                    that.cancel()
                                    that.setSelect(that.$route.name)
                                    that.$Message.info(res.data.message || '保存失败')
                                }
                            }).catch(function (err) {
                                that.cancel()
                                that.$Message.info(err.data.message || '接口获取失败')
                            })
                        } else {
                            addSelect(that.formValidate).then(function (res) {
                                if (res.data.errorCode == 0) {
                                    that.$Message.info('保存成功')
                                    that.cancel()
                                    that.setSelect(that.$route.name)
                                } else {
                                    that.cancel()
                                    that.setSelect(that.$route.name)
                                    that.$Message.info(res.data.message || '保存失败')
                                }
                            }).catch(function (err) {
                                that.cancel()
                                that.$Message.info(err.data.message || '接口获取失败')
                            })
                        }
                    } else {
                        that.update_loading = false
                    }
                })
            },
            cancel () {
                this.model = false
                this.title = ''
                this.code = 0
                this.update_loading = false
                this.formValidate = {
                    code: '',
                    name: ''
                }
            }
        },
        watch: {
            '$route.name' () {
                this.setSelect(this.$route.name)
            }
        }
    }
</script>
