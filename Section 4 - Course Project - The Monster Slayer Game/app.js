function getRandomValue(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
    data() {
        return({
            playerHealth: 100,
            monsterHealth: 100,
            currentRound: 0,
            winner: null,
            surrendered: false,
            battleLog: []
        });
    },
    watch: {
        playerHealth(currentValue) {
            if (currentValue <= 0 && this.monsterHealth <= 0) {
                // This is a draw
                this.winner = 'draw';

            } else if (currentValue <= 0) {
                // Player lost
                this.winner = 'monster';
            }

        },

        monsterHealth(currentValue) {
            if (currentValue <= 0 && this.playerHealth <= 0) {
                // This is a draw
                this.winner = 'draw';

            } else if (currentValue <= 0) {
                // Monster lost
                this.winner = 'player';
            }

        }

    },

    methods: {
        attackMonster() {
            // Monster health diminished by 5 to 12
            const attactValue = getRandomValue(5, 12);
            this.monsterHealth -= attactValue;
            this.battleLog.push("Monster attacked: health reduced by " + attactValue);
            this.currentRound++;
            if (this.monsterHealth < 0) {
                this.monsterHealth = 0;
            }
            else {
                this.attackPlayer();
            }
        },
        attackPlayer() {
            // Player health diminished by 8 to 15 - monster hits harder
            const attactValue = getRandomValue(8, 15);
            this.playerHealth -= attactValue;
            this.battleLog.push("Player attacked: health reduced by " + attactValue);
            if (this.playerHealth < 0) {
                this.playerHealth = 0;
            }
        },
        specialAttackMonster() {
            this.currentRound++;
            const attackValue = getRandomValue(10, 25);
            this.monsterHealth -= attackValue;
            this.battleLog.push("Special monster attacked: health reduced by " + attackValue);
            if (this.monsterHealth < 0) {
                this.monsterHealth = 0;
            }
            else {
                this.attackPlayer();
            }
        },
        healPlayer() {
            this.currentRound++;
            const healValue = getRandomValue(8, 20);
            if (this.playerHealth + healValue  > 100) {
                this.playerHealth = 100;
            } else {
                this.playerHealth += healValue;
                this.battleLog.push("Player healed: health increased by " + healValue);
            }
            this.attackPlayer();
        },
        restartGame() {
            this.currentRound = 0;
            this.playerHealth = this.monsterHealth = 100;
            this.winner = null;
            this.surrendered = false;
            this.battleLog.splice(0);
        },
        surrender() {
            this.playerHealth = 0;
            this.winner = 'monster';
            this.surrendered = true;
            this.currentRound = 0;
            this.battleLog.push("Player surrendered!");
        },

        specialAttackCheck() {
            return (this.winner | this.currentRoundCheck() | this.surrendered)
        },

        
        currentRoundCheck() {
            return ((this.currentRound % 3) != 0);
        }

    },

    computed: {
        monsterBarStyles() {
            if (this.monsterHealth < 0) {
                return { width: '0%'}
            }
            else {
                return {width: this.monsterHealth +'%'};
            }
        },
        
        playerBarStyles() {
            if (this.playerHealth < 0) {
                return { width: '0%'}
            } else{
                return {width: this.playerHealth +'%'};
            }
        }

    }
});

app.mount('#game');



