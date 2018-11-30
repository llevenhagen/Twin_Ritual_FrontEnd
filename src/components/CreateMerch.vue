<template>
  <div class="create-container">
    <panel title="Merch Metadata">
      <h2>Add Merch</h2>
      <form>
        <input
        type="text"
        name="name"
        v-model="merch.name"
        autocomplete="off"
        placeholder="name"/>
        <input
        type="text"
        name="image"
        v-model="merch.image"
        autocomplete="off"
        placeholder="image"/>
        <input
        type="decimal"
        name="price"
        v-model="merch.price"
        autocomplete="off"
        placeholder="price"/>
        <input
        type="text"
        name="description"
        v-model="merch.description"
        autocomplete="off"
        placeholder="description"/>
        In Stock:
        <input
        type="checkbox"
        name="in_stock"
        autocomplete="off"
        v-model="merch.in_stock"/>
        <button @click="create">
        Add Merch</button>
      </form>
    </panel>
  </div>
</template>

<script>
import Panel from '@/components/Panel'
import MerchService from '@/services/MerchService'

export default {
  data () {
    return {
      merch: {
        name: null,
        image: null,
        price: null,
        description: null,
        in_stock: null
      }
    }
  },
  components: {
    Panel
  },
  methods: {
    async create () {
      event.preventDefault()
      try {
        await MerchService.post(this.merch)
        this.$router.push('/merch')
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>

<style scope>
.create-container {
  text-align: center;
  margin: auto;
}

</style>
