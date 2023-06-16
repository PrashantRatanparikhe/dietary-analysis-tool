<template>
  <div class="text-center ml-10 pb-10">
    <v-row>
      <v-col
        class="mt-8"
        sm="2"
      >
        <span>Showing {{ offset }} - {{ perPage }} of {{ meta.total }}</span>
      </v-col>
      <v-col
        class="mt-3"
        sm="1"
      >
        <v-btn
          class="ma-2"
          icon="mdi-chevron-left"
          :disabled="meta.page === 1"
          @click="$emit('previousClicks')"
        />
      </v-col>
      <v-col
        class="mt-3"
        sm="1"
      >
        <v-btn
          class="ma-2"
          icon="mdi-chevron-right"
          :disabled="perPage >= meta.total"
          @click="$emit('nextClicks')"
        />
      </v-col>
    </v-row>
  </div>
</template>

<script>

export default {
  name: 'PaginationBlock',
  props: {
    meta: {
      type: Object,
      required: true
    },
  },
  computed: {
    perPage() {
      return this.meta.page * this.meta.limit;
    },
    offset() {
      return this.meta.limit * (this.meta.page - 1);
    }
  }
}
</script>