<template>
  <div id="app">
    <h1 class="title">Calculatrice</h1>
    <div class="calculator">
      <input type="text" class="result"
               :value="result" readonly />
      <div class="buttons">
        <button class="number" 
                @click="handleClick('7')">7</button>
        <button class="number"
                @click="handleClick('8')">8</button>
        <button class="number"
                @click="handleClick('9')">9</button>
        <button class="operator"
                @click="handleOperatorClick('/')">/</button>

        <button class="number"
                @click="handleClick('4')">4</button>
        <button class="number" 
                @click="handleClick('5')">5</button>
        <button class="number"
                @click="handleClick('6')">6</button>
        <button class="operator"
                @click="handleOperatorClick('*')">*</button>

        <button class="number"
                @click="handleClick('1')">1</button>
        <button class="number"
                @click="handleClick('2')">2</button>
        <button class="number" 
                @click="handleClick('3')">3</button>
        <button class="operator"
                @click="handleOperatorClick('-')">-</button>

        <button class="number"
                @click="handleClick('0')">0</button>
        <button class="number"
                @click="handleClick('.')">.</button>
        <button class="number" 
                @click="handleClick('00')">00</button>

        <button class="operator" 
                @click="handleOperatorClick('+')">+</button>

        <button class="clear"
                @click="handleClear">C</button>
        <button class="equal"
                @click="calculate()">=</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      result: '',
      calculated: false
     
    };
  },
  methods: {
    handleClick(value) {
      if (this.calculated) {

        this.result = value;
        this.calculated = false;
      } else {
        this.result += value;
      }
    },
    handleClear() {
      this.result = '';
      this.calculated = false; 
    },
    handleClearEntry() {
      if (this.result && this.result.length > 0) {
        this.result = this.result.slice(0, -1);
        if (this.result.length === 0) {
          this.handleClear();
        }
      } else {
        this.handleClear();
      }
    },
    handleOperatorClick(operator) {

      if (/[+*/-]$/.test(this.result)) {
        this.result = this.result.slice(0, -1) + operator;
      } else {
       
        this.result += operator;
      }
      this.calculated = false; 
    },
    calculate() {
      try {
        let evaluatedResult = eval(this.result.
            replace(/(^|[^0-9])0+(\d+)/g, '$1$2'));
        if (evaluatedResult === Infinity ||
            evaluatedResult === -Infinity) {
          throw new Error('Tu ne peux pas diviser par zéro');
        }
        this.result = Number.isFinite(evaluatedResult)
                      ? evaluatedResult : 'Erreur';
        this.calculated = true;
       } catch (error) {
        if (error.message === 'Tu ne peux pas diviser par zéro') {
          this.result = 'Tu ne peux pas diviser par zéro';
        } else {
          this.result = 'Erreur';
        }
      }
    }
  }
};
</script>

<style src="./Calculator.css">
</style>