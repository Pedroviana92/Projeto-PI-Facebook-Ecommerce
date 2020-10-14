function CalcComida() {

    var qte = document.getElementById('num');
    qte = 0;
  
    document.getElementById('menos').click(function() {
      qte--;
    });
    document.getElementById('mais').click(function() {
      qte++;
    });
  }

  function CalcBebida() {

    var bebida = document.getElementById('num');
    bebida = 0;
  
    document.getElementById('menos').click(function() {
      bebida--;
    });
    document.getElementById('mais').click(function() {
      bebida++;
    });
  }