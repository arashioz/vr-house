export default {
    base:'/api',
    Auth:{
        base:'/application',
        signUp:'sign-up',
        signIn:'sign-in'

    },
    User:{
        base:'/users',
        create:'/user',
        read:'/user/:id',
        update:'/user/:id',
        delete:'/user/:id'
    },
}