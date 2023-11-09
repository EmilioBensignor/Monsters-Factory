<template>
  <div>
    <div class="divBienvenida">
      <div class="bienvenida">
        <h1>Creá tu monstruo aterrador</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium aliquid eum vel, fugit ullam laborum. Laudantium eos nostrum cupiditate exercitationem, voluptates iste ab ratione eius optio velit eaque fugit voluptatum. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed nemo eaque culpa excepturi alias itaque exercitationem illum unde odio debitis, sint dolorum illo officia repellendus at nesciunt eligendi nisi magnam. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum natus ut in dolorem inventore ipsum ducimus, ab atque qui tenetur hic cum ullam eum blanditiis minima modi, reprehenderit vel autem?
        </p>
      </div>
    </div>
    <div class="forms-display">
      <form v-on:submit.prevent>
        <fieldset class="gridForms">
          <div class="form-fila">
            <div>
              <label for="nombre">Nombre</label>
              <input type="text" id="nombre" v-model="monstruo.nombre">
              <div class="divError">
                <p :class="verificar.nombre ? 'mostrarError' : 'ocultarError'">Ingrese un nombre</p>
              </div>
            </div>
            <div>
              <label for="apodo">Apodo</label>
              <input type="text" id="apodo" v-model="monstruo.apodo">
              <div class="divError">
                <p :class="verificar.apodo ? 'mostrarError' : 'ocultarError'">Ingrese un apodo</p>
              </div>
            </div>
            <div>
              <label for="profesion">Profesión</label>
              <input type="text" id="profesion" v-model="monstruo.profesion">
              <div class="divError">
                <p :class="verificar.profesion ? 'mostrarError' : 'ocultarError'">Ingrese una profesión</p>
              </div>
            </div>
          </div>
          <div class="form-fila">
            <div>
              <label for="peso">Peso</label>
              <input type="number" id="peso" v-model.number="monstruo.peso">
              <div class="divError">
                <p :class="verificar.peso ? 'mostrarError' : 'ocultarError'">Ingrese un peso mayor a 0</p>
              </div>
            </div>
            <div>
              <label for="altura">Altura</label>
              <input type="number" id="altura" v-model.number="monstruo.altura">
              <div class="divError">
                <p :class="verificar.altura ? 'mostrarError' : 'ocultarError'">Ingrese una altura mayor a 0</p>
              </div>
            </div>
            <div class="selectForm">
              <label for="color">Color</label>
              <select id="color" v-model="monstruo.color">
                <option v-for="item in options" v-bind:value="item.value" v-bind:key="item.value">
                  {{ item.text }}
                </option>
              </select>
              <div class="divError">
                <p :class="verificar.color ? 'mostrarError' : 'ocultarError'">Ingrese un color</p>
              </div>
            </div>
          </div>
        </fieldset>
        <fieldset class="sectionAtributos">
          <div class="h2-span">
            <h2>Elige los atributos de tu monstruo</h2>
            <div class="divSpanPuntos">
              <span>{{ puntos }}</span>
            </div>
          </div>
          <div class="pDescripcion">
            <p>Tienes 15 puntos para distribuir entre los atributos de tu monstruo. Recuerda que si no utilizas todos los
              puntos ¡tu monstruo será menos poderoso!</p>
          </div>
          <div class="divAtributos">
            <div>
              <p>Fuerza</p>
              <div>
                <button class="btnResta" @click="bajarOSubirCant('menos', 'fuerza')">-</button>
                <span>{{ monstruo.cantFuerza }}</span>
                <button class="btnSuma" @click="bajarOSubirCant('mas', 'fuerza')">+</button>
              </div>
            </div>
            <div>
              <p>Agilidad</p>
              <div>
                <button class="btnResta" @click="bajarOSubirCant('menos', 'agilidad')">-</button>
                <span>{{ monstruo.cantAgilidad }}</span>
                <button class="btnSuma" @click="bajarOSubirCant('mas', 'agilidad')">+</button>
              </div>
            </div>
            <div>
              <p>Inteligencia</p>
              <div>
                <button class="btnResta" @click="bajarOSubirCant('menos', 'inteligencia')">-</button>
                <span>{{ monstruo.cantInteligencia }}</span>
                <button class="btnSuma" @click="bajarOSubirCant('mas', 'inteligencia')">+</button>
              </div>
            </div>
          </div>
        </fieldset>
        <div class="btnCrear">
          <button @click="validarCampos(monstruo)">Crear monstruo</button>
        </div>
      </form>
      <div class="cardPrincipal">
        <div class="divH3">
          <h3 v-if="monstruo.nombre !== ''">{{ monstruo.nombre | uppercase }} <span v-if="monstruo.apodo !== ''">"{{
            monstruo.apodo | capitalize }}"</span></h3>
        </div>
        <div class="divImgMonstruo">
          <img v-if="monstruo.color" :src="obtenerUrlImg(monstruo.color)" :alt="obtenerAltImg(monstruo.color)">
        </div>
        <div class="divProfesion">
          <p v-if="monstruo.profesion !== ''"><strong>Profesión:</strong> {{ this.monstruo.profesion | capitalize }} </p>
        </div>
        <div class="divPeso">
          <p v-if="monstruo.peso > 0"><strong>Peso:</strong> {{ this.monstruo.peso }} kg </p>
        </div>
        <div class="divAltura">
          <p v-if="monstruo.altura > 0"><strong>Altura:</strong> {{ this.monstruo.altura }} cm </p>
        </div>
        <div class="divAtributosCard">
          <p><strong>Fuerza:</strong> {{ this.monstruo.cantFuerza }} </p>
          <p><strong>Agilidad:</strong> {{ this.monstruo.cantAgilidad }} </p>
          <p><strong>Inteligencia:</strong> {{ this.monstruo.cantInteligencia }} </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  data: function () {
    return {
      verificar: {
        nombre: false,
        apodo: false,
        profesion: false,
        peso: false,
        altura: false,
        color: false,
      },
      monstruo: {
        nombre: "",
        apodo: "",
        profesion: "",
        peso: "",
        altura: "",
        color: "",
        imagen: "",
        alt: "",
        cantFuerza: 0,
        cantAgilidad: 0,
        cantInteligencia: 0,
      },
      options: [
        { text: 'Seleccione', value: '' },
        { text: 'Verde', value: 'verde', url: '../assets/monstruo_verde.png', alt: 'monstruo verde' },
        { text: 'Azul', value: 'azul', url: '../assets/monstruo_azul.png', alt: 'monstruo azul' },
        { text: 'Violeta', value: 'violeta', url: '../assets/monstruo_violeta.png', alt: 'monstruo violeta' },
        { text: 'Rosa', value: 'rosa', url: '../assets/monstruo_rosa.png', alt: 'monstruo rosa' },
        { text: 'Amarillo', value: 'amarillo', url: '../assets/monstruo_amarillo.png', alt: 'monstruo amarillo' }
      ],
      puntos: 15,
    }
  },
  methods: {
    validarCampos: function () {
      if (this.monstruo.nombre === "") {
        this.verificar.nombre = true;
      } else {
        this.verificar.nombre = false;
        if (this.monstruo.apodo === "") {
          this.verificar.apodo = true;
        } else {
          this.verificar.apodo = false;
          if (this.monstruo.profesion === "") {
            this.verificar.profesion = true;
          } else {
            this.verificar.profesion = false;
            if (this.monstruo.peso <= 0) {
              this.verificar.peso = true;
            } else {
              this.verificar.peso = false;
              if (this.monstruo.altura <= 0) {
                this.verificar.altura = true;
              } else {
                this.verificar.altura = false;
                if (this.monstruo.color === "") {
                  this.verificar.color = true;
                } else {
                  this.verificar.color = false;
                  this.enviarFormulario(this.monstruo);
                }
              }
            }
          }
        }
      }
    },
    enviarFormulario: function (monstruo) {
      this.agregarMonstruo(monstruo);
      this.monstruo = { nombre: "", apodo: "", profesion: "", peso: "", altura: "", cantFuerza: 0, cantAgilidad: 0, cantInteligencia: 0 };
      this.puntos = 15;
    },

    bajarOSubirCant: function (modificacion, atributo) {
      if (this.puntos <= 0) {
        this.puntos = 0;
        if (modificacion === 'menos') {
          if (atributo === 'fuerza') {
            this.monstruo.cantFuerza--;
            this.puntos++;
          }
          if (atributo === 'agilidad') {
            this.monstruo.cantAgilidad--;
            this.puntos++;
          }
          if (atributo === 'inteligencia') {
            this.monstruo.cantInteligencia--;
            this.puntos++;
          }
        }
      } else {
        if (atributo === 'fuerza') {
          if (modificacion === 'mas') {
            this.monstruo.cantFuerza++;
            this.puntos--;
          } else if (modificacion === 'menos') {
            if (this.monstruo.cantFuerza > 0) {
              this.monstruo.cantFuerza--;
              this.puntos++;
            } else if (this.monstruo.cantFuerza < 0) {
              this.monstruo.cantFuerza = 0;
            }
          }
        } else if (atributo === 'agilidad') {
          if (modificacion === 'mas') {
            this.monstruo.cantAgilidad++;
            this.puntos--;
          } else if (modificacion === 'menos') {
            if (this.monstruo.cantAgilidad > 0) {
              this.monstruo.cantAgilidad--;
              this.puntos++;
            } else if (this.monstruo.cantAgilidad < 0) {
              this.monstruo.cantAgilidad = 0;
            }
          }
        } else if (atributo === 'inteligencia') {
          if (modificacion === 'mas') {
            this.monstruo.cantInteligencia++;
            this.puntos--;
          } else if (modificacion === 'menos') {
            if (this.monstruo.cantInteligencia > 0) {
              this.monstruo.cantInteligencia--;
              this.puntos++;
            } else if (this.monstruo.cantInteligencia < 0) {
              this.monstruo.cantInteligencia = 0;
            }
          }
        }
      }
    },

    agregarMonstruo: function (nuevoMonstruo) {
      if (!localStorage.local) {
        this.arrayMonstruos = []
      } else {
        this.arrayMonstruos = JSON.parse(localStorage.getItem('local'))
      }
      this.arrayMonstruos.push(nuevoMonstruo);
      localStorage.setItem('local', JSON.stringify(this.arrayMonstruos));
      this.$router.push('/monstruos');
    },
    obtenerUrlImg: function (colorSeleccionado) {
      for (const option of this.options) {
        if (option.value === colorSeleccionado) {
          this.monstruo.imagen = option.url;
          return option.url;
        }
      }
      return '';
    },

    obtenerAltImg: function (colorSeleccionado) {
      for (const option of this.options) {
        if (option.value === colorSeleccionado) {
          this.monstruo.alt = option.alt;
          return option.alt;
        }
      }
      return '';
    },
  }
}
</script>

<style>
/* Bienvenida */
.divBienvenida{
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 2vw;
}

.bienvenida{
  width: 70vw;
}

h1{
  text-align: center;
  margin-bottom: 1vw;
}

.bienvenida p{
  text-align: center;
}

/* Forms */

.forms-display {
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin: 2vw 0;
}

form {
  width: 45%;
  background-color: #B7CE63;
  border: 4px solid #424E18;
  border-radius: 10px;
  padding: 1vw;
}

fieldset {
  border: none;
}

.gridForms {
  display: flex;
  flex-direction: column;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  padding: 0.5vw 0.5vw 0 0.5vw;
}

.form-fila {
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  margin-bottom: 1.5vw;
}

.form-fila div {
  display: flex;
  flex-direction: column;
}

label {
  font-size: 1vw;
}

input,
select {
  margin-top: 0.5vw;
  width: 11vw;
  font-size: 1vw;
  padding: 0.3vw;
  background-color: white;
  border-radius: 5px;
  border: 1px solid #282F0E;
}

.selectForm {
  display: flex;
  flex-direction: column;
}

.divError {
  height: 0.5vw;
}

.mostrarError {
  color: red;
  font-size: 0.8vw;
  font-weight: bold;
  width: 10vw;
}

.ocultarError {
  display: none;
}

/* Atributos */

.sectionAtributos {
  padding: 0 0.5vw;
}

.h2-span {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 2vw 0;
}

.divSpanPuntos {
  width: 2.5vw;
  height: 2.5vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #788D2A;
  border: 1px solid #485525;
  border-radius: 50%;
  padding: 0.3vw;
}

.divSpanPuntos span {
  color: #DEE6C6;
  font-size: 1.5vw;
}

.pDescripcion {
  font-size: 1vw;
  padding-right: 1vw;
  margin-bottom: 1vw;
}

.divAtributos {
  display: flex;
  justify-content: space-around;
}

.divAtributos div {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
}

.divAtributos div div {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

.divAtributos div div button {
  width: 1.5vw;
  height: 1.5vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #788D2A;
  border: 1px solid #485525;
  border-radius: 50%;
  color: #D5E0B8;
  font-size: 1.5vw;
  cursor: pointer;
}

.divAtributos p {
  font-size: 1vw;
  font-weight: bold;
  margin-bottom: 0.5vw;
}

.btnCrear {
  width: 95%;
  text-align: end;
  margin-top: 2vw;
}

.btnCrear button {
  background-color: #788D2A;
  border: 2px solid #485525;
  border-radius: 20px;
  color: #D5E0B8;
  font-size: 1vw;
  padding: 0.5vw;
  cursor: pointer;
}

/* Card Actual */

.cardPrincipal {
  background-color: #B7CE63;
  border: 4px solid #424E18;
  border-radius: 10px;
  width: 30vw;
  height: 32vw;
  padding: 0.5vw;
}

.divH3 {
  height: 2.5vw;
}

.cardPrincipal h3 {
  text-align: center;
  font-size: 2vw;
}

.cardPrincipal p {
  font-size: 1.5vw;
  text-align: center;
}

.divProfesion,
.divPeso,
.divAltura {
  height: 2vw;
  margin: 0.2vw;
}

.divImgMonstruo {
  height: 13vw;
  display: flex;
  justify-content: center;
  margin: 0.5vw;
}

.divImgMonstruo img {
  width: 10vw;
}

.divAtributosCard {
  margin-top: 1vw;
}

.divAtributosCard p {
  margin: 0.2vw;
}
</style>
