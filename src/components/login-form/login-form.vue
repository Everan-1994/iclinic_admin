<template>
    <Form ref="loginForm" :model="form" :rules="rules" @keydown.enter.native="handleSubmit">
        <FormItem prop="email">
            <Input v-model="form.email" placeholder="请输入邮箱">
            <span slot="prepend">
          <Icon :size="16" type="ios-person"></Icon>
        </span>
            </Input>
        </FormItem>
        <FormItem prop="password">
            <Input type="password" v-model="form.password" placeholder="请输入密码">
            <span slot="prepend">
          <Icon :size="14" type="md-lock"></Icon>
        </span>
            </Input>
        </FormItem>
        <FormItem>
            <Button @click="handleSubmit" type="primary" :loading="load" long>登录</Button>
        </FormItem>
    </Form>
</template>
<script>
    export default {
        name: 'LoginForm',
        props: {
            emailRules: {
                type: Array,
                default: () => {
                    return [
                        {required: true, message: '邮箱不能为空', trigger: 'blur'}
                    ]
                }
            },
            passwordRules: {
                type: Array,
                default: () => {
                    return [
                        {required: true, message: '密码不能为空', trigger: 'blur'}
                    ]
                }
            },
            load: {
                type: Boolean
            },
        },
        data() {
            return {
                form: {
                    email: null,
                    password: null
                }
            }
        },
        computed: {
            rules() {
                return {
                    email: this.emailRules,
                    password: this.passwordRules
                }
            }
        },
        methods: {
            handleSubmit() {
                this.$refs.loginForm.validate((valid) => {
                    if (valid) {
                        this.$emit('on-success-valid', {
                            email: this.form.email,
                            password: this.form.password
                        })
                    }
                })
            }
        }
    }
</script>
