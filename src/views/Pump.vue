<template>
  <div id="pump">
    <iframe src="http://localhost:8080/SoftwareDesign3D/index.html"
            scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
  </div>

</template>

<script>
export default {
  name: "Pump",
}
</script>


<style scoped>
#pump {
  margin-top: 5px;
}

iframe {
  margin-top: 8px;
  width: 90%;
  height: 640px;
}
</style>

