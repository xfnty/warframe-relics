<template>
  <table v-show='item.show' :id='item.name'>
    <tr>
      <th colspan='2'>{{ item.name }} Prime</th>
    </tr>
    <tr v-for="(part, index) in item.parts" :key="index">
      <td class='primeParts'>{{ part.name }}</td>
      <td>
        <span v-for="(relic, index) in part.relics" :key="index"
          :class='[relic.rarity, relic.vaulted ? "vaulted" : ""]'>{{ relic.name }}</span>
      </td>
    </tr>
  </table>
</template>

<script>
export default {
  name: 'PrimeTable',
  props: {
    item: Object
  }
}
</script>

<style scoped lang="scss">
table {
  border-collapse: collapse;
  color: white;
  font-size: 0.8em;
  width: 44em;
  margin-top: 1em;
}

th,
td {
  border: 1px solid gray;
}

th {
  font-size: 1.2em;
  line-height: 3em;
}

td {
  padding: 0.3em;

  &.primeParts {
    width: 12em;
  }
}

span {
  display: inline-block;
  font-weight: bold;
  padding: 0.2em 0.5em;
  text-align: center;
  width: 5em;

  &.C {
    color: #C47222;
  }

  &.UC {
    color: #C0C0C0;
  }

  &.R {
    color: #C09B0F;
  }

  &.vaulted {
    font-weight: normal;
    opacity: 0.4;
  }
}
</style>
