<template>
  <div class="main">
    <div class="main__section">
      <span class="main__update-date">{{ updateDate }}</span>
    </div>
    <div class="main__section">
      <h2 class="main__title">Warframe Relic Finder</h2>
    </div>
    <div class="main__section">
      <input class="main__input--search" type="text" placeholder="e.g. ash" v-model="search">
    </div>
    <div class="main__section">
      <input class="main__input--button-show" type="button" :value="button.value" v-on:click="showHide">
    </div>
    <div v-show="button.show">
      <input
        class="main__input--button-prime"
        type="button"
        v-for="(t, index) in tables" :key="index"
        :value="t.name"
        :class="{ 'main__input--button-selected' : t.show }"
        v-on:click="buttonClick(index)">
    </div>
    <div class="main__section">
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
.main {
  &__section {
    margin-bottom: 10px;
  }

  &__update-date {
    color: white;
    font-size: 0.6em;
    margin-left: 4px;
  }

  &__title {
    color: white;
    margin: 0 0 0 4px;
    padding: 0;
  }

  &__input {
    @mixin __input {
      background-color: #222;
      border: 1px solid gray;
      border-radius: 3px;
      color: white;
      font-size: 0.8em;
      margin: 0.2em 0.2em;
    }

    &--search {
      @include __input;
      padding: 0.3em;
      width: 15em;
    }

    @mixin --button {
      @include __input;
      outline: none;
    }

    &--button-show {
      @include --button;
      background-color: #444;
      padding: 0.4em;
      width: 10em;
    }

    &--button-prime {
      @include --button;
    }

    &--button-selected {
      background-color: #C09B0F;
    }
  }
}

/*～620px*/
@media all and (max-width: 620px)
{
  .main {
    &__update-date {
      font-size: 0.5em;
      margin: 0 0 0 3px;
    }

    &__title {
      font-size: 1em;
      margin: 0 0 0 3px;
    }

    &__input {
      &--search {
        line-height: 2.5em;
      }

      &--button-show {
        display: none;
      }

      &--button-prime {
        display: none;
      }
    }
  }
}
</style>
