 
        function validateForm() {
          let x = document.forms["myForm"]["searchBarcode"].value;
          let y = document.forms["myForm"]["nome"].value;
          if (x == "" && y == "" ) {
            alert("Insira o nome ou o código de algum produto para pesquisar");
            return false;
          }
        }