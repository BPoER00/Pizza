<template>
  <div class="home">
    <div class="ImagenPrincipal">
      <div class="PizzaPrincipal">
        <aside class="IzquierdaInfo">
          <h2 class="letras">Jueves</h2>
          <h3 class="letras">~ 2 x 1 ~</h3>
          <h3 class="letras">En Pizzas</h3>
          <h3 class="letras">$$$$</h3>
        </aside>
      </div>
    </div>
    <h2 class="PizzaClaseTexto">Ordenes Pizza</h2>
    <div class="ContenedorTabla">
      <table id="Tabla" class="table">
        <thead>
          <tr>
            <th>ORDEN</th>
            <th>PRECIO</th>
            <th>CARRITO</th>
          </tr>
        </thead>
        <tbody>
            <tr v-for="data in Pizzas">
                <td>
                  {{data.Pizza}}
                </td>
                <td>
                  {{data.Precio}}  
                </td>
                <td>
                  <button v-on:click="Agregar(data.Valor)">Agregar</button>
                </td>
            </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
export default{
  data(){
    return {
      Pizzas: [
        {Pizza: "Jamon", Precio: "Q50.00", Valor: "Jamon"},
        {Pizza: "Piña", Precio: "Q55.00", Valor: "Pinia"},
        {Pizza: "Peperoni", Precio: "Q55.00", Valor: "Peperoni"},
      ],

      ContadorJamon: parseInt(localStorage.getItem('Jamon')) >= 0 ? parseInt(localStorage.getItem('Jamon')) : 0,
      ContadorPinia: parseInt(localStorage.getItem('Pinia')) >= 0 ? parseInt(localStorage.getItem('Pinia')) : 0,
      ContadorPeperoni: parseInt(localStorage.getItem('Peperoni')) >= 0 ? parseInt(localStorage.getItem('Peperoni')) : 0
    }
  },
  methods:
  {
    Agregar(valor)
    {
      if(valor === "Jamon")
      {
        this.ContadorJamon += 1  
        localStorage.setItem(valor, this.ContadorJamon)
      }
      else if(valor === "Pinia")
      {
        this.ContadorPinia += 1
        localStorage.setItem(valor, this.ContadorPinia)
      }
      else if(valor === "Peperoni")
      {
        this.ContadorPeperoni += 1
        localStorage.setItem(valor, this.ContadorPeperoni)
      }
      alert("La Pizza: "+valor+" Fue Agregada Al Carrito")
    }
  }
}
</script>
<style>
.home {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: white;
  width: 370px;
  height: 570px;
  margin: 0px auto;
  background: black;
}

.ImagenPrincipal {
  width: 94.5%;
  height: 210px;
  border-style: solid;
  margin: 0px auto;
}

.PizzaPrincipal {
  width: 350px;
  height: 100%;
  background: url("../assets/PizzaGrande.png");
  background-repeat: no-repeat;
}

.IzquierdaInfo {
  float: left;
  width: 23%;
  height: 45%;
  margin-top: 45px;
  margin-left: 10px;
}

.letras {
  color: white;
  text-align: center;
  margin-top: -12px;
  margin-left: 6px;
}

.Opciones {
  width: 95.5%;
  height: 340px;
  margin: 0px auto;
  display: flex;
}

.IzquierdaOpciones,
.DerechaOpciones {
  width: 50%;
  height: 100%;
  margin-right: 0px;
}

.ArribaOpciones,
.AbajoOpciones {
  width: 100%;
  height: 50%;
}

.ImagenIzquierdaOpciones,
.ImagenAbajoOpciones,
.ImagenArribaOpciones {
  width: 100%;
  height: 100%;
}

.ImagenIzquierdaOpciones {
  background: url("../assets/Bebidas.png");
  background-size: cover;
}

.ImagenArribaOpciones {
  background: url("../assets/Pastel.png");
  background-size: cover;
}

.ImagenAbajoOpciones {
  background: url("../assets/Pizza1.png");
  background-size: cover;
}

.DireccionLink {
  text-decoration: none;
  color: white;
}

.DireccionLink:hover {
  opacity: 70%;
  background-color: white;
}

.Redireccionar {
  width: 97.8%;
  height: 100%;
  border-style: ridge;
  text-align: center;
}

.LetraOpciones {
  color: white;
  background: black;
  padding: 5px;
  padding-left: 50px;
  padding-right: 50px;
  display: block;
  opacity: 90%;
}

.Bebidas {
  margin-top: 310px;
}

.Pasteles {
  margin-top: 138px;
}

.Pizza {
  margin-top: 140px;
}

.PizzaClaseTexto {
  text-align: center;
}

.ContenedorTabla{
    width: 370px;
    height: 60%;
    overflow: auto;
}

table {
    width: 100%;
    text-align: left;
    margin: 0 0 1em 0;
    caption-side: top;
    font-size: 18px;
    text-align: center;
 }
 caption, td, th {
    padding: 0.3em;
 }
 th, td {
    width: 25%;
    color: white;
 }
 caption {
    font-weight: bold;
    font-style: italic;
 }
</style>