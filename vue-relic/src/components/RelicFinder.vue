<template>
  <div id="relic">
    <div>
      <span id="updateDate">{{ updateDate }}</span>
    </div>
    <div>
      <h2>Warframe Relic Finder</h2>
    </div>
    <div>
      <input id="search" type="text" placeholder="e.g. ash" v-model="search">
    </div>
    <div>
      <input id="showBtn" type="button" :value="button.value" v-on:click="showHide">
    </div>
    <div id="buttons" v-show="button.show">
      <input v-for="(t, index) in tables" :key="index" type="button" :value="t.name" :class="{ on : t.show }"
        v-on:click="buttonClick(index)">
    </div>
    <div>
      <PrimeTable v-for="(item, index) in tables" v-bind:item="item" v-bind:key="index" v-bind:id="item.name"
        v-show="item.show"></PrimeTable>
    </div>
  </div>
</template>

<script>
import data from '../assets/prime.json'
import PrimeTable from './PrimeTable.vue'

export default {
  name: "RelicFinder",
  data() {
    return {
      search: data.search,
      updateDate: data.updateDate,
      button: data.button,
      tables: data.tables
    }
  },
  methods: {
    buttonClick: function (index) {
      this.tables[index].show = !this.tables[index].show
    },
    showHide: function () {
      this.button.value = this.button.show ? "Show buttons" : "Hide buttons"
      this.button.show = !this.button.show
    }
  },
  components: {
    PrimeTable
  },
  watch: {
    search: function (value) {
      this.tables.forEach(t => {
        t.show = false;
      })

      if (value.length == 0) {
        return
      }

      const re = new RegExp(".*" + value + ".*", "i");
      this.tables.forEach(t => {
        if (re.test(t.name)) {
          t.show = true;
        }
      })
    }
  }
}
</script>

<style scoped lang="scss">
#updateDate {
  color: white;
  font-size: 0.6em;
  margin-left: 4px;
}

div {
  margin-bottom: 10px;
}

h2 {
  color: white;
  margin: 0 0 0 4px;
  padding: 0;
}

input {
  background-color: #222;
  border: 1px solid gray;
  border-radius: 3px;
  color: white;
  font-size: 0.8em;
  margin: 0.2em 0.2em;

  &#search {
    padding: 0.3em;
    width: 15em;
  }

  &#showBtn {
    background-color: #444;
    padding: 0.4em;
    width: 10em;
  }

  &.on {
    background-color: #C09B0F;
  }

  &[type="button"] {
    outline: none;
  }
}

/*～620px*/
@media all and (max-width: 620px)
{
  #updateDate {
    font-size: 0.5em;
    margin: 0 0 0 3px;
  }

  h2 {
    margin: 0 0 0 3px;
    font-size: 1em;
  }

  #search {
    line-height: 2.5em;
  }

  input[type="button"] {
    display: none;
  }

  table {
    width: 92vw;
  }

  td.primeParts {
    width: 20vw;
  }
}
</style>
