<template>
  <div class="home">
    <label class="letra">Carrito De Compra</label>
    <div class="ContenedorTabla">
      <table id="Tabla" class="table">
        <thead>
          <tr>
            <th>$$$$</th>
            <th>ORDEN</th>
            <th>CANTIDAD</th>
          </tr>
        </thead>
        <tbody>
            <tr v-for="data in Objeto">
                <td v-if="data.Valor > 0">
                    <label v-if="data.Orden == 'Jamon'">Q{{Totales(data.Orden, data.Valor, 50)}}.00</label>
                    <label v-if="data.Orden == 'Pinia'">Q{{Totales(data.Orden, data.Valor, 55)}}.00</label>
                    <label v-if="data.Orden == 'Peperoni'">Q{{Totales(data.Orden, data.Valor, 55)}}.00</label>
                    <label v-if="data.Orden == 'Leche'">Q{{Totales(data.Orden, data.Valor, 20)}}.00</label>
                    <label v-if="data.Orden == 'Frutas'">Q{{Totales(data.Orden, data.Valor, 35)}}.00</label>
                    <label v-if="data.Orden == 'Chocolate'">Q{{Totales(data.Orden, data.Valor, 25)}}.00</label>
                    <label v-if="data.Orden == 'Sprite'">Q{{Totales(data.Orden, data.Valor, 20)}}.00</label>
                    <label v-if="data.Orden == 'Agua'">Q{{Totales(data.Orden, data.Valor, 35)}}.00</label>
                    <label v-if="data.Orden == 'Cola'">Q{{Totales(data.Orden, data.Valor, 35)}}.00</label>
                </td>
                <td v-if="data.Valor > 0">
                  {{data.Orden}}
                </td>
                <td v-if="data.Valor > 0">
                  <input class="CosoNumero" type="number" v-model="data.Valor"/>
                </td>
            </tr>
        </tbody>
      </table>
    </div>  
    <br><button v-on:click="Pagar()" class="BotonCoso Pagar">Pagar</button>
    <h2>Total: {{total}}</h2>
  </div>
</template>
<script>
export default{
    data()
    {
        return{
            Objeto:[
                {Orden: "Jamon", Valor: parseInt(localStorage.getItem('Jamon'))},
                {Orden: "Peperoni", Valor: parseInt(localStorage.getItem('Peperoni'))},
                {Orden: "Pinia", Valor: parseInt(localStorage.getItem('Pinia'))},
                {Orden: "Sprite", Valor: parseInt(localStorage.getItem('Sprite'))},
                {Orden: "Agua", Valor: parseInt(localStorage.getItem('Agua'))},
                {Orden: "Cola", Valor: parseInt(localStorage.getItem('Cola'))},
                {Orden: "Leche", Valor: parseInt(localStorage.getItem('Leche'))},
                {Orden: "Frutas", Valor: parseInt(localStorage.getItem('Frutas'))},
                {Orden: "Chocolate", Valor: parseInt(localStorage.getItem('Chocolate'))}
                ],
            total: 0,
            Jamon: 0,
            Peperoni: 0,
            Pinia: 0,
            Sprite: 0,
            Agua: 0,
            Cola: 0,
            Leche: 0,
            Frutas: 0,
            Chocolate: 0,
        }
    },
    methods:
    {
        Totales(Orden, valor1, valor2)
        {
            switch(Orden)
            {
                case 'Jamon':
                    this.Jamon = valor1*valor2
                    break

                case 'Peperoni':    
                    this.Peperoni = valor1*valor2
                    break
                
                case 'Pinia':
                    this.Pinia = valor1*valor2
                    break

                case 'Sprite':    
                    this.Sprite = valor1*valor2
                    break
                    
                case 'Agua':
                    this.Agua = valor1*valor2
                    break

                case 'Cola':
                    this.Cola = valor1*valor2
                    break

                case 'Leche':
                    this.Leche = valor1*valor2
                    break

                case 'Frutas':
                    this.Frutas = valor1*valor2
                    break

                case 'Chocolate':
                    this.Chocolate = valor1*valor2
                    break
            }

            this.total = (this.Jamon + this.Peperoni + this.Pinia + this.Sprite + this.Agua + this.Cola + this.Leche + this.Frutas + this.Chocolate)

            return valor1*valor2
        },
        Pagar()
        {
            if(this.total > 0)
            {
                if(confirm("El Total A Pagar Es De: Q"+this.total+".00 | Estas Seguro De Pagar? "))
                {
                    localStorage.clear()
                    alert('Su Compra Se Realizo Con Exito')
                    window.location.href = '/'
                }
            }
            else
            {
                alert('Error Al Realizar La Compra Agrega Articulos Al Carrito...')
            }
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
  text-align: center;
}

.BotonCoso{
    width: 200px;
    height: 40px;
    color: white;
    background-color: violet;
    border-style: none;
    border-radius: 25px;
    font-size: 20px;
}

.Pagar:hover{
    cursor: pointer;
    background-color: blueviolet;
}

.letra{
    font-size: 30px;
}

.CosoNumero{
    width: 55px;
    height: 25px;
    border-radius: 20px;
    border-style: none;
    text-align: right;
    font-size: 16px;
}

.Eliminar{
    background-color: red;
    width: 45px;
    height: 25px;
}

.Eliminar:hover{
    background-color: brown;
    cursor: pointer;    
}


.ContenedorTabla{
    width: 370px;
    height: 70%;
    overflow: auto;
    border-style: solid;
}

table {
    width: 100%;
    text-align: left;
    margin: 0 0 1em 0;
    caption-side: top;
    font-size: 16px;
    text-align: center;
 }
 caption, td, th {
    padding: 0.3em;
 }
 th{
    border-right-style: solid;
    border-left-style: solid;
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