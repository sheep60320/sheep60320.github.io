
        const VueApp = {
            data() {
                return {
                    money: 0,
                }
            },
            methods:{
                add:function(){
                    return this.money =  parseInt(this.money) + parseInt(event.target.parentElement.getAttribute('data-tab'));
                },
                remove:function(){
                    return this.money =  0;
                },
            },
        }
        Vue.createApp(VueApp).mount('#app')