let ab  = ()=>{let  a  = 0;
    let b = 1;
    for (let i = 0; i < 100; i++){
        console.log(a)
        var c = a + b;
        b = a
        a = c
    }
    }
  ab()

