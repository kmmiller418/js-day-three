function outer(){
    let a = 'a';
    let b = {key: 'value'};

    console.log(a);
    console.log(b);

    function inner(a, b) {
        a = 'A';
        b = {key: 'new Value'}
        b.key= 'new new Value'
        console.log(a);
        console.log(b);
    }

    inner(a,b);
    console.log(a);
    console.log(b);
  }
  
  outer();