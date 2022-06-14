<script setup>
import { ref } from "vue";
let team1 = ref([]);
let team2 = ref([]);
let names = ref("");
let arr = ref([]);

const sortear = () => {
  arr.value = [];
  team1.value = [];
  team2.value = [];

  arr.value = names.value.split("\n").filter((value) => value.trim());

  console.log(arr.value);

  arr.value = arr.value.sort((a, b) =>
    Math.random() >= 0.5 ? a.localeCompare(b) : b.localeCompare(a)
  );

  team1.value.push(arr.value[0]);
  team1.value.push(arr.value[1]);
  team1.value.push(arr.value[2]);
  team1.value.push(arr.value[3]);
  team1.value.push(arr.value[4]);

  team2.value.push(arr.value[5]);
  team2.value.push(arr.value[6]);
  team2.value.push(arr.value[7]);
  team2.value.push(arr.value[8]);
  team2.value.push(arr.value[9]);
};
</script>

<template>
  <main>
    <div class="about">
      <h1 class="my-md">Sortear sem patente</h1>
      <textarea
        v-model="names"
        cols="40"
        rows="10"
        class="textarea"
        placeholder="Nomes"
      ></textarea>
      <div class="my-md">
        <button class="button" @click="sortear">Sortear</button>
      </div>
      <div class="flex">
        <div class="w-50">
          <h2>Time 1</h2>
          <div v-for="item in team1" :key="item" class="mb-sm">
            {{ item }}
          </div>
        </div>
        <div class="w-50">
          <h2>Time 2</h2>
          <div v-for="item in team2" :key="item" class="mb-sm">
            {{ item }}
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style>
.flex {
  display: flex;
}

.w-50 {
  width: 50%;
}

.mb-md {
  margin-bottom: 2rem;
}

.my-md {
  margin-top: 2rem;
  margin-bottom: 2rem;
}

.mb-sm {
  margin-bottom: 1rem;
}

.textarea {
  background-color: var(--color-background-soft);
  color: var(--color-text);
  font-size: 1.1rem;
}

.button {
  padding: 1rem 2rem;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  background-color: rgb(0, 189, 126);
  color: var(--vt-c-white);
}

.button:hover {
  background-color: rgba(0, 189, 126, 0.6);
  cursor: pointer;
}
</style>
