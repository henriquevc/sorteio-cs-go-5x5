<script setup>
import { ref } from "vue";

const arraySorted = ref([]);
const patentsGC = ref([]);
const typePlataform = ref("mm");
const patentsMM = ref([
  { name: "Prata 1", value: 1 },
  { name: "Prata 2", value: 2 },
  { name: "Prata 3", value: 3 },
  { name: "Prata 4", value: 4 },
  { name: "Prata 5", value: 5 },
  { name: "Prata 6", value: 6 },
  { name: "Ouro 1", value: 7 },
  { name: "Ouro 2", value: 8 },
  { name: "Ouro 3", value: 9 },
  { name: "Ouro 4", value: 10 },
  { name: "Ak 1", value: 11 },
  { name: "Ak 2", value: 12 },
  { name: "Ak Cruzada", value: 13 },
  { name: "Sherif", value: 14 },
  { name: "Aguia 1", value: 15 },
  { name: "Aguia 2", value: 16 },
  { name: "Supremo", value: 17 },
  { name: "Global", value: 18 },
]);

// patentes gc
for (let i = 1; i <= 20; i++) {
  patentsGC.value.push({ name: `Level ${i}`, value: i });
}

const playersWithPatents = ref([]);
for (let i = 0; i < 10; i++) {
  playersWithPatents.value.push({
    name: "",
    patent: null,
  });
}

const team1 = ref([]);
const team2 = ref([]);
const sortear = () => {
  arraySorted.value = [];
  team1.value = [];
  team2.value = [];
  playersWithPatents.value.forEach((player) => {
    arraySorted.value.push(player);
  });

  arraySorted.value = arraySorted.value.sort((a, b) => b.patent - a.patent);

  team1.value.push(arraySorted.value[0]); // primeiro melhor
  team1.value.push(arraySorted.value[2]); // terceiro melhor
  team1.value.push(arraySorted.value[4]); // quinto melhor
  team1.value.push(arraySorted.value[7]); // oitavo melhor
  team1.value.push(arraySorted.value[9]); // ultimo melhor

  team2.value.push(arraySorted.value[1]); // segundo melhor
  team2.value.push(arraySorted.value[3]); // terceiro melhor
  team2.value.push(arraySorted.value[5]); // quarto melhor
  team2.value.push(arraySorted.value[6]); // quinto melhor
  team2.value.push(arraySorted.value[8]); // sexto melhor
};
</script>

<template>
  <main>
    <div class="my-md">
      <input
        type="radio"
        id="mm"
        class="input radio"
        name="tipoCamp"
        value="mm"
        v-model="typePlataform"
      />
      <label for="mm">MM</label>
      <input
        type="radio"
        id="gc"
        name="tipoCamp"
        class="input radio"
        value="gc"
        v-model="typePlataform"
      />
      <label for="gc">GC</label>
    </div>
    <div>
      <div
        v-for="(player, index) in playersWithPatents"
        :key="index"
        class="grid grid-cols-2 gap-x-4 my-md"
      >
        <input
          type="text"
          name=""
          v-model="player.name"
          :placeholder="`${index + 1}º jogador`"
          class="input"
        />
        <select
          v-model="player.patent"
          v-if="typePlataform === 'mm'"
          class="select input"
          placeholder="Escolha a patente"
        >
          <option value="" disabled selected>Escolha a patente</option>
          <option
            class="option"
            v-for="patent in patentsMM"
            :key="patent.value"
            :value="patent.value"
            :selected="patent.selected"
          >
            {{ patent.name }}
          </option>
        </select>
        <select
          v-model="player.patent"
          v-if="typePlataform === 'gc'"
          class="select input"
          placeholder="Escolha a patente"
        >
          <option value="" disabled selected>Escolha a patente</option>
          <option
            class="option"
            v-for="patent in patentsGC"
            :key="patent.value"
            :value="patent.value"
          >
            {{ patent.name }}
          </option>
        </select>
      </div>
    </div>

    <button @click="sortear" class="button is-primary is-medium" type="button">
      Organizar times
    </button>

    <h1 class="mt-md" v-if="team1.length && team2.length">Sorteados</h1>
    <div class="flex mt-md" v-if="team1.length && team2.length">
      <div class="w-50">
        <h2 class="mb-sm">Time 1</h2>
        <div v-for="item in team1" :key="item" class="mb-sm">
          {{ item.name }} -
          {{
            typePlataform === "mm"
              ? patentsMM.find((p) => p.value === item.patent).name
              : patentsGC.find((p) => p.value === item.patent).name
          }}
        </div>
        <div v-if="team1 && team1.length">
          Soma:
          {{
            team1.reduce((sum, item) => sum + item.patent, 0) || "não sorteado"
          }}
        </div>
      </div>
      <div class="w-50">
        <h2 class="mb-sm">Time 2</h2>
        <div v-for="item in team2" :key="item" class="mb-sm">
          {{ item.name }} -
          {{
            typePlataform === "mm"
              ? patentsMM.find((p) => p.value === item.patent).name
              : patentsGC.find((p) => p.value === item.patent).name
          }}
        </div>
        <div v-if="team2 && team2.length">
          Soma:
          {{
            team2.reduce((sum, item) => sum + item.patent, 0) || "não sorteado"
          }}
        </div>
      </div>
    </div>
  </main>
</template>
<style>
main {
  margin-bottom: 8rem;
}
.flex {
  display: flex;
}

.grid {
  display: grid;
}

.grid-cols-2 {
  grid-template-columns: repeat(2, 1fr);
}

.gap-x-4 {
  grid-gap: 2rem;
}

.no-wrap {
  flex-wrap: nowrap;
}

.items-center {
  align-items: center;
}

.flex-row {
  flex-direction: row;
}

.flex-column {
  flex-direction: column;
}

.w-50 {
  width: 50%;
}

.mt-md {
  margin-top: 2rem;
}

.mb-sm {
  margin-bottom: 1rem;
}

.my-md {
  margin-top: 2rem;
  margin-bottom: 2rem;
}

.mx-md {
  margin-left: 2rem;
  margin-right: 2rem;
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

.input {
  border-style: none;
  padding: 1rem 0.5rem;
  background-color: var(--color-background-soft);
  color: var(--color-text);
  font-size: 1.1rem;
}

.input + label {
  font-size: 1.2rem;
  margin-right: 36px;
  margin-left: 8px;
}

.select {
  border-style: none;
  padding: 1rem 0.5rem;
  background-color: var(--color-background-soft);
  color: var(--color-text);
  min-width: 150px;
}

.select .option {
  font-size: 1.15rem;
  padding: 2rem 0;
}
</style>
