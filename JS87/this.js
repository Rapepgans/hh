const pencit ={
    color: 'Green',
    price: 120,
    weight: 120,
    about: function(){
        //return 'pencit iki regone '+regone+' rupiah';
        return 'pencit iki werno e ${this.color} jeneng';
    }

}
console.log(pencit.about());