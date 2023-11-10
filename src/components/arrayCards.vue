<template>
  <section class="minicards">
    <article v-for="(monstruo, index) in arrayCards" v-bind:key="index" class="card">
      <div class="divH4">
        <h4>{{ monstruo.nombre | uppercase }} "{{ monstruo.apodo | capitalize }}"</h4> <span class="XCerrar"
          @click="eliminarCard(index)">X</span>
      </div>
      <div class="divImgMonstruoCards">
        <img :src="monstruo.imagen" :alt="monstruo.alt">
      </div>
      <div class="divProfesionCards">
        <p><strong>Profesión:</strong> {{ monstruo.profesion | capitalize }} </p>
      </div>
      <div class="divPesoCards">
        <p><strong>Peso:</strong> {{ monstruo.peso }} kg </p>
      </div>
      <div class="divAlturaCards">
        <p><strong>Altura:</strong> {{ monstruo.altura }} cm </p>
      </div>
      <div class="divAtributosCardChica">
        <p><strong>Fuerza:</strong> {{ monstruo.cantFuerza }} </p>
        <p><strong>Agilidad:</strong> {{ monstruo.cantAgilidad }} </p>
        <p><strong>Inteligencia:</strong> {{ monstruo.cantInteligencia }} </p>
      </div>
    </article>
  </section>
</template>

<script>
import filtros from '@/views/filters.js';

export default {
  name: 'arrayCards',
  filters: filtros,
  data: () => ({
  }),
  props: ['arrayCards'],
  mounted() {
    console.log(this.arrayCards);
  }
}
</script>

<style>
/* Cards del Array */
.minicards {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin: 2vw;
}

.card {
  background-color: #788D2A;
  border: 4px solid #424E18;
  border-radius: 10px;
  width: 20vw;
  height: 22vw;
  padding: 0.5vw;
  margin: 1vw;
  color: whitesmoke;
}

.divH4 {
  height: 1.5vw;
  display: flex;
}

.XCerrar {
  color: red;
  font-weight: bold;
}

.card h4 {
  text-align: center;
  width: 19vw;
  font-size: 1.4vw;
}

.card p {
  font-size: 1vw;
  text-align: center;
}

.divProfesionCards,
.divPesoCards,
.divAlturaCards {
  height: 1vw;
  margin: 0.2vw;
}

.divImgMonstruoCards {
  height: 10vw;
  display: flex;
  justify-content: center;
  margin: 0.5vw;
}

.divImgMonstruoCards img {
  width: 8vw;
}

.divAtributosCardChica {
  margin-top: 0.5vw;
}

.divAtributosCardChica p {
  margin: 0vw;
}
</style>