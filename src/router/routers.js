import Main from '@/components/main'
import {getAccess} from '@/libs/getAccess'

/**
 * iview-admin中meta除了原生参数外可配置的参数:
 * meta: {
 *  hideInMenu: (false) 设为true后在左侧菜单不会显示该页面选项
 *  notCache: (false) 设为true后页面不会缓存
 *  access: (null) 可访问该页面的权限数组，当前路由设置的权限会影响子路由
 *  icon: (-) 该页面在左侧菜单、面包屑和标签导航处显示的图标，如果是自定义图标，需要在图标名称前加下划线'_'
 *  beforeCloseName: (-) 设置该字段，则在关闭当前tab页时会去'@/router/before-close.js'里寻找该字段名对应的方法，作为关闭前的钩子函数
 * }
 */

export default [
    {
        path: '/login',
        name: 'login',
        meta: {
            title: 'Login - 登录',
            hideInMenu: true
        },
        component: () => import('@/view/login/login.vue')
    },
    {
        path: '/',
        name: '_home',
        redirect: '/home',
        component: Main,
        meta: {
            hideInMenu: true,
            notCache: true
        },
        children: [
            {
                path: '/home',
                name: 'home',
                meta: {
                    hideInMenu: true,
                    title: '首页',
                    notCache: true
                },
                component: () => import('@/view/single-page/home')
            }
        ]
    },
    {
        path: '/user',
        name: '用户中心',
        component: Main,
        meta: {
            hideInMenu: true,
            notCache: true
        },
        children: [
            {
                path: 'info',
                meta: {
                    hideInMenu: true,
                    title: '个人信息',
                    notCache: true
                },
                component: () => import('@/view/user/info')
            }
        ]
    },
    {
        path: '/resource',
        name: 'resource',
        meta: {
            icon: 'logo-buffer',
            title: '医疗资源数据',
            notCache: true,
            access: getAccess([
                '*',
                'Get:/admin/resource',
                'Get:/admin/resource/{id:[0-9]+}',
                'Put:/admin/resource/{id:[0-9]+}',
                'Post:/admin/resource',
                'Delete:/admin/resource'
            ]),
        },
        component: Main,
        children: [
            {
                path: 'add-edit/:id',
                name: 'add_edit_organization',
                meta: {
                    icon: 'md-flower',
                    title: route => `${route.params.id >= 0 ? '编辑机构信息' : '添加机构信息'}`,
                    notCache: true,
                    hideInMenu: true,
                    access: getAccess(["*","Get:/admin/organization/{id:[0-9]+}","Put:/admin/organization/{id:[0-9]+}","Post:/admin/organization"]),
                    beforeCloseName: 'before_close_normal'
                },
                component: () => import('@/view/resources/add-edit-organization.vue')
            },
            {
                path: 'organization-list',
                name: 'organization_list',
                meta: {
                    access: getAccess(["*","Get:/admin/organization","Delete:/admin/organization"]),
                    // access: Access,
                    icon: 'md-albums',
                    title: '机构组织',
                    notCache: true,
                },
                component: () => import('@/view/resources/organization-list'),
            },
            {
                path: 'add-edit-server/:id',
                name: 'add_edit_server',
                meta: {
                    icon: 'md-flower',
                    title: route => `${route.params.id >= 0 ? '编辑服务点信息' : '添加服务点信息'}`,
                    notCache: true,
                    hideInMenu: true,
                    access: getAccess(["*","Get:/admin/server/{id:[0-9]+}","Put:/admin/server/{id:[0-9]+}","Post:/admin/server"]),
                    beforeCloseName: 'before_close_normal'
                },
                component: () => import('@/view/resources/add-edit-server.vue')
            },
            {
                path: 'server-list',
                name: 'server_list',
                meta: {
                    access: getAccess(["*","Get:/admin/server","Delete:/admin/server"]),
                    // access: Access,
                    icon: 'md-albums',
                    title: '服务点',
                    notCache: true,
                },
                component: () => import('@/view/resources/server-list'),
            },
            {
                path: 'add-edit-odi/:id',
                name: 'add_edit_odi',
                meta: {
                    icon: 'md-flower',
                    title: route => `${route.params.id >= 0 ? '编辑机构业务开展信息' : '添加机构业务开展信息'}`,
                    notCache: true,
                    hideInMenu: true,
                    access: getAccess(["*","Get:/admin/odi/{id:[0-9]+}","Put:/admin/odi/{id:[0-9]+}","Post:/admin/odi"]),
                    beforeCloseName: 'before_close_normal'
                },
                component: () => import('@/view/resources/add-edit-odi.vue')
            },
            {
                path: 'odi-list',
                name: 'odi_list',
                meta: {
                    access: getAccess(["*","Get:/admin/odi","Delete:/admin/odi"]),
                    // access: Access,
                    icon: 'md-albums',
                    title: '机构业务开展情况',
                    notCache: true,
                },
                component: () => import('@/view/resources/odi-list'),
            },
            {
                path: 'add-edit-department/:id',
                name: 'add_edit_department',
                meta: {
                    icon: 'md-flower',
                    title: route => `${route.params.id >= 0 ? '编辑科室信息' : '添加科室信息'}`,
                    notCache: true,
                    hideInMenu: true,
                    access: getAccess(["*","Get:/admin/department/{id:[0-9]+}","Put:/admin/department/{id:[0-9]+}","Post:/admin/department"]),
                    beforeCloseName: 'before_close_normal'
                },
                component: () => import('@/view/resources/add-edit-department.vue')
            },
            {
                path: 'department-list',
                name: 'department_list',
                meta: {
                    access: getAccess(["*","Get:/admin/department","Delete:/admin/department"]),
                    // access: Access,
                    icon: 'md-albums',
                    title: '科室',
                    notCache: true,
                },
                component: () => import('@/view/resources/department-list'),
            },
            {
                path: 'add-edit-human-resource/:id',
                name: 'add_edit_human_resource',
                meta: {
                    icon: 'md-flower',
                    title: route => `${route.params.id >= 0 ? '编辑人力资源信息' : '添加人力资源信息'}`,
                    notCache: true,
                    hideInMenu: true,
                    access: getAccess(["*","Get:/admin/hr/{id:[0-9]+}","Put:/admin/hr/{id:[0-9]+}","Post:/admin/hr"]),
                    beforeCloseName: 'before_close_normal'
                },
                component: () => import('@/view/resources/add-edit-human-resource.vue')
            },
            {
                path: 'human-resource-list',
                name: 'human_resource_list',
                meta: {
                    access: getAccess(["*","Get:/admin/hr","Delete:/admin/hr"]),
                    // access: Access,
                    icon: 'md-albums',
                    title: '人力资源信息',
                    notCache: true,
                },
                component: () => import('@/view/resources/human-resource-list'),
            },
        ]
    },
    {
        path: '/device',
        name: 'device',
        meta: {
            icon: 'ios-cube',
            title: '设备资源管理',
            notCache: true,
            access: getAccess(['*',
                'Get:/admin/device',
                'Get:/admin/device/{id:[0-9]+}',
                'Put:/admin/device/{id:[0-9]+}',
                'Post:/admin/device',
                'Delete:/admin/device'
            ]),
        },
        component: Main,
        children: [
            {
                path: 'add-edit-device/:id',
                name: 'add_edit_device',
                meta: {
                    icon: 'md-contact',
                    title: route => `${route.params.id >= 0 ? '编辑设备信息' : '添加设备信息'}`,
                    notCache: true,
                    hideInMenu: true,
                    access: getAccess(["*","Get:/admin/device/{id:[0-9]+}","Put:/admin/device/{id:[0-9]+}","Post:/admin/device"]),
                    beforeCloseName: 'before_close_normal'
                },
                component: () => import('@/view/device/add-edit-device.vue')
            },
            {
                path: 'list',
                name: 'device_list',
                meta: {
                    access: getAccess(["*","Get:/admin/device","Delete:/admin/device"]),
                    // access: Access,
                    icon: 'ios-cube',
                    title: '设备资源管理',
                    notCache: true,
                },
                component: () => import('@/view/device/device-list.vue'),
            }
        ]
    },
    {
        path: '/person',
        name: 'person',
        meta: {
            icon: 'ios-contacts',
            title: '个人信息管理',
            notCache: true,
            access: getAccess(['*',
                'Get:/admin/person',
                'Get:/admin/person/{id:[0-9]+}',
                'Put:/admin/person/{id:[0-9]+}',
                'Post:/admin/person',
                'Delete:/admin/person'
            ]),
        },
        component: Main,
        children: [
            {
                path: 'add-edit/:id',
                name: 'add_edit_person',
                meta: {
                    icon: 'md-contact',
                    title: route => `${route.params.id >= 0 ? '编辑个人信息' : '添加个人信息'}`,
                    notCache: true,
                    hideInMenu: true,
                    access: getAccess(["*","Get:/admin/person/{id:[0-9]+}","Put:/admin/person/{id:[0-9]+}","Post:/admin/person"]),
                    beforeCloseName: 'before_close_normal'
                },
                component: () => import('@/view/person/add-edit-person.vue')
            },
            {
                path: 'list',
                name: 'person_list',
                meta: {
                    access: getAccess(["*","Get:/admin/person","Delete:/admin/person"]),
                    // access: Access,
                    icon: 'md-person',
                    title: '个人信息管理',
                    notCache: true,
                },
                component: () => import('@/view/person/person-list.vue'),
            }
        ]
    },
    {
        path: '/member',
        name: 'member',
        meta: {
            icon: 'md-contacts',
            title: '成员管理',
            notCache: true,
            // access: Access
            access: getAccess(['*', 'Get:/admin/members', 'Post:/admin/members', 'Delete:/admin/members', 'Get:/admin/members/{id}', 'Put:/admin/members', 'Patch:/admin/members'])
        },
        component: Main,
        children: [
            {
                path: 'member-list',
                name: 'member-list',
                meta: {
                    // access: Access,
                    icon: 'md-contact',
                    title: '成员列表',
                    notCache: true,
                    access: getAccess(['*', 'Get:/admin/members', 'Delete:/admin/members', 'Patch:/admin/members'])
                },
                component: () => import('@/view/member/member-list')
            },

            {
                path: 'member-add',
                name: 'member-add',
                meta: {
                    icon: 'md-flower',
                    title: '添加成员',
                    // access: Access,
                    hideInMenu: true,
                    access: getAccess(['*', 'Post:/admin/members']),
                    beforeCloseName: 'before_close_normal'
                },
                component: () => import('@/view/member/member-add-edit')
            },
            {
                path: 'member-edit/:id',
                name: 'member-edit',
                meta: {
                    icon: 'md-flower',
                    title: '编辑成员',
                    // access: Access,
                    hideInMenu: true,
                    access: getAccess(['*', 'Get:/admin/members/{id}', 'Put:/admin/members']),
                    beforeCloseName: 'before_close_normal'
                },
                component: () => import('@/view/member/member-add-edit')
            },
            {
                path: 'role-list',
                name: 'role-list',
                meta: {
                    // access: Access,
                    icon: 'md-school',
                    title: '角色列表',
                    notCache: true,
                    access: getAccess(['*', 'Get:/admin/roles', 'Post:/admin/roles', 'Delete:/admin/roles', 'Get:/admin/roles/{id:[0-9]+}', 'Put:/admin/roles'])
                },
                component: () => import('@/view/member/role-list')
            },

            {
                path: 'role-add/:id',
                name: 'role-add',
                meta: {
                    icon: 'md-flower',
                    title: '添加角色',
                    notCache: true,
                    // access: Access,
                    hideInMenu: true,
                    access: getAccess(['*', 'Post:/admin/roles']),
                    beforeCloseName: 'before_close_normal'
                },
                component: () => import('@/view/member/role-add-edit')
            },
            {
                path: 'role-edit/:id',
                name: 'role-edit',
                meta: {
                    icon: 'md-flower',
                    title: '编辑角色',
                    notCache: true,
                    // access: Access,
                    hideInMenu: true,
                    access: getAccess(['*', 'Get:/admin/roles/{id:[0-9]+}', 'Put:/admin/roles']),
                    beforeCloseName: 'before_close_normal'
                },
                component: () => import('@/view/member/role-add-edit')
            },
        ]
    },
    {
        path: '/permission',
        name: 'permission',
        meta: {
            icon: 'ios-medal',
            title: '权限管理',
            notCache: true,
            // access: Access
            access: getAccess(['*', 'Get:/admin/actions', 'Post:/admin/actions', 'Delete:/admin/actions', 'Post:/admin/actions/route', 'Put:/admin/actions', 'Patch:/admin/actions/sort'])
        },
        component: Main,
        children: [
            {
                path: 'list',
                name: 'permission-list',
                meta: {
                    // access: Access,
                    icon: 'ios-ribbon',
                    title: '权限列表',
                    notCache: true,
                    access: getAccess(['*', 'Get:/admin/actions', 'Delete:/admin/actions'])
                },
                component: () => import('@/view/permission/list')
            },

            {
                path: 'add',
                name: 'permission-add',
                meta: {
                    icon: 'md-flower',
                    title: '添加权限',
                    // access: Access,
                    hideInMenu: true,
                    beforeCloseName: 'before_close_normal',
                    access: getAccess(['*', 'Post:/admin/actions'])
                },
                component: () => import('@/view/permission/add')
            },
        ]
    },
    {
        path: '/operation',
        name: 'operation',
        meta: {
            icon: 'ios-paper',
            title: '日志管理',
            notCache: true,
            access: getAccess(['*', 'Get:/admin/operation']),
        },
        component: Main,
        children: [
            {
                path: 'log',
                name: 'operation_list',
                meta: {
                    access: getAccess(['*', 'Get:/admin/operation']),
                    icon: 'ios-paper',
                    title: '日志列表',
                    notCache: true,
                },
                component: () => import('@/view/operation-log/operation-list'),
            },
        ]
    },
    {
        path: '/401',
        name: 'error_401',
        meta: {
            hideInMenu: true
        },
        component: () => import('@/view/error-page/401.vue')
    },
    {
        path: '/500',
        name: 'error_500',
        meta: {
            hideInMenu: true
        },
        component: () => import('@/view/error-page/500.vue')
    },
    {
        path: '*',
        name: 'error_404',
        meta: {
            hideInMenu: true
        },
        component: () => import('@/view/error-page/404.vue')
    }
]
