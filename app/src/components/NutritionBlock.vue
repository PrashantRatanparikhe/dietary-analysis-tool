<template>
<v-card >
  <v-card-title>
  Nutritions
  </v-card-title>
  <v-card-text class="py-0">
  <v-row align="center" no-gutters>
    <v-col cols="8" class="text-left pb-4">
      <v-chip
        class="ml-2 mt-2"
        color="orange"
        text-color="white"
        :size="size"
        prepend-icon="mdi-barley"
      >
        Carbohydrates
      </v-chip>
    </v-col>
    <v-col
      align="center"
      :class="size === 'small' ? '' : 'text-h6'"
      cols="4"
    >
      {{ nutritions.carbohydrates }}g
    </v-col>
  </v-row>
  <v-row align="center" no-gutters>
    <v-col cols="8" class="text-left pb-4">
      <v-chip
        class="ml-2"
        color="indigo"
        text-color="white"
        :size="size"
        prepend-icon="mdi-food-variant"
      >
        Protein
      </v-chip>
    </v-col>
    <v-col
      align="center"
      :class="size === 'small' ? '' : 'text-h6'"
      cols="4"
    >
      {{ nutritions.protein }}g
    </v-col>
  </v-row>
  <v-row align="center" no-gutters>
    <v-col cols="8" class="text-left pb-4">
      <v-chip
        class="ml-2"
        color="primary"
        text-color="white"
        :size="size"
        prepend-icon="mdi-weight-kilogram"
      >
        Fat
      </v-chip>
    </v-col>
    <v-col
      align="center"
      :class="size === 'small' ? '' : 'text-h6'"
      cols="4"
    >
      {{ nutritions.fat }}g
    </v-col>
  </v-row>
  <v-row align="center" no-gutters>
    <v-col cols="8" class="text-left pb-4">
      <v-chip
        class="ml-2"
        color="green"
        text-color="white"
        :size="size"
        prepend-icon="mdi-fire"
      >
        Calories
      </v-chip>
    </v-col>
    <v-col
      align="center"
      :class="size === 'small' ? '' : 'text-h6'"
      cols="4"
    >
      {{ nutritions.calories }}g
    </v-col>
  </v-row>
  <v-row align="center" no-gutters>
    <v-col cols="8" class="text-left pb-4">
      <v-chip
        class="ml-2"
        color="teal"
        text-color="white"
        :size="size"
        prepend-icon="mdi-cube-outline"
      >
        Sugar
      </v-chip>
    </v-col>
    <v-col
      align="center"
      :class="size === 'small' ? '' : 'text-h6'"
      cols="4"
    >
      {{ nutritions.sugar }}g
    </v-col>
  </v-row>
  </v-card-text>
</v-card>
</template>

<script>
export default {
  name: 'NutritionBlock',
  props: {
    nutritions: {
      type: Object,
      required: true
    },
    size: {
      type: String,
      required: true
    },
  },
}
</script>