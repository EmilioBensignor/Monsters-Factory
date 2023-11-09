<template>
  <section class="minicards">
    <article v-for="(monstruo, index) in arrayMonstruos" v-bind:key="index" class="card">
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
export default {
  name: 'arrayCards',

  data: () => ({
    props: ['arrayMonstruos']
  }),
}
</script>
