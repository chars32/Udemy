<template>
  <div id="restaurante-add">
    <h2>Crear nuevo restaurante</h2>
    <form>
      <p>
        <label>Nombre</label>
        <input type="text">
      </p>
      <p>
        <label>Dirección</label>
        <input type="text">
      </p>
      <p>
        <label>Descripción</label>
        <textarea></textarea>
      </p>
      <p>
        <label>Precio</label>
        <select>
          <option value="">Selecciona una opción...</option>
          <option value="bajo">Bajo</option>
          <option value="normal">Normal</option>
          <option value="alto">Alto</option>
        </select>
      </p>
      <input type="submit" value="Guardar restaurante">
    </form>
  </div>
</template>