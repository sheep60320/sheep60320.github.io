
const VueApp = {
    data() {
        return {
            sex: '',
            height: 0,
            kilo: 0,
            age: 0,
            ans: '',
            note: '',
        }
    },
    watch: {
        sex() {
            this.calculate();
        },
        height() {
            this.calculate();
        },
        kilo() {
            this.calculate();
        },
        age() {
            this.calculate();
        }
    },
    methods:{
        calculate:function(){
            if(this.sex == '' || this.height < 100 || this.height > 200 || this.kilo < 1 || this.kilo > 200 || this.age < 1 || this.age > 200){
                this.ans = '';
                return;
            }

            var bmi = this.kilo / (this.height * this.height / 10000);

            var sex_num = 0;
            if(this.sex == '男'){
                sex_num = 1;
            }

            var fat = Math.floor(10 * ((1.2 * bmi) + (0.23 * this.age - 5.4) - (sex_num * 10.8))) / 10;
            
            this.ans = fat + '%';

            if(this.sex == '男'){
                this.note = 'images/note1.jpg';
            }else{
                this.note = 'images/note2.jpg';
            }
        }
    },
}
Vue.createApp(VueApp).mount('#app')