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
      <div class="Opciones">
        <aside class="IzquierdaOpciones">
          <div class="ImagenIzquierdaOpciones">
            <router-link to="/Bebidas">
              <a class="DireccionLink" href="">
                <div class="Redireccionar">
                  <label class="LetraOpciones Bebidas"> Bebidas </label>
                </div>
              </a>
            </router-link>
          </div>
        </aside>
        <div class="DerechaOpciones">
          <div class="ArribaOpciones">
            <div class="ImagenArribaOpciones">
              <router-link to="/Pasteles">
                <a class="DireccionLink" href="">
                  <div class="Redireccionar">
                    <label class="LetraOpciones Pasteles"> Pasteles </label>
                  </div>
                </a>                
              </router-link>
            </div>
          </div>
          <div class="AbajoOpciones">
            <div class="ImagenAbajoOpciones">
              <router-link to="/Pizza">
                <a class="DireccionLink" href="">
                  <div class="Redireccionar">
                    <label class="LetraOpciones Pizza"> Pizza </label>
                  </div>
                </a>                
              </router-link>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "HomeView",
  components: {
    HelloWorld,
  },
};
</script>

<style>
.home {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: white;
  width: 370px;
  height: 570px;
  margin: 0px auto;
  background: black;
}

.ImagenPrincipal{
  width: 94.5%;
  height: 210px;
  border-style: solid;
  margin: 0px auto;
}

.PizzaPrincipal{
  width: 350px;
  height: 100%;
  background: url("../assets/PizzaGrande.png");
  background-repeat: no-repeat;
}

.IzquierdaInfo{
  float: left;
  width: 23%;
  height: 45%;
  margin-top: 45px;
  margin-left: 10px;
}

.letras{
  color: white;
  text-align: center;
  margin-top: -12px;
  margin-left: 6px;
}

.Opciones{
  width: 95.5%;
  height: 340px;
  margin: 0px auto;
  display: flex;
}

.IzquierdaOpciones, .DerechaOpciones{
  width: 50%;
  height: 100%;
  margin-right: 0px;
}

.ArribaOpciones, .AbajoOpciones{
  width: 100%;
  height: 50%;
}

.ImagenIzquierdaOpciones, .ImagenAbajoOpciones, .ImagenArribaOpciones{
  width: 100%;
  height: 100%;
}

.ImagenIzquierdaOpciones{
    background: url('../assets/Bebidas.png');
    background-size: cover;

}

.ImagenArribaOpciones{
  background: url('../assets/Pastel.png');
  background-size: cover;
}

.ImagenAbajoOpciones{
  background: url('../assets/Pizza1.png');
  background-size: cover;
}

.DireccionLink{
  text-decoration: none;
  color: white;
}

.DireccionLink:hover{
  opacity: 70%;
  background-color: white;
}

.Redireccionar{
  width: 97.8%;
  height: 100%;
  border-style: ridge;
  text-align: center;
}

.LetraOpciones{
  color:white;
  background: black;
  padding: 5px;
  padding-left: 50px;
  padding-right: 50px;
  display: block;
  opacity: 90%;
}

.Bebidas{
  margin-top: 310px;
}

.Pasteles{
  margin-top: 138px;
}

.Pizza{
  margin-top: 140px;
}
</style>

