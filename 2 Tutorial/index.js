var app = new Vue({
    el:'#cv',
    data: {
        ime:'Uros',
        prezime:'Mijatov'
    },
    methods:{
        detalji: function () {
            Godiste = 2003;
            Boja_kose = 'Braon';
            boja_ociju = 'Plavo Zelene'
            return 'Moje ime je ' + this.ime + '. Oci su mi ' + boja_ociju  + ' boje.';
        }
    }
})