function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const app = Vue.createApp({
                data()  {
                    return {
                        myName: "Robert Nurse",
                        myAge:  64,
                        imageArray: [
                            'escovitch-fish2-4.jpg',
                            'flying-fish-and-coucou.jpg',
                            'IMG_7453.jpg'
                        ]


                    };
                },
                methods: {
                    myAgeInFiveYears() {
                        return this.myAge + 5;
                    },
                    myFavoriteNumber()  {
                        return Math.round(Math.random() * 100);
                    },
                    selectImage() {
                        const imageIndex = getRandomIntInclusive(0,2);
                        return 'images/' + this.imageArray[imageIndex];
                    }

                }

    }
);



// Which section of HTML should be controled by Vue. This will also control child elements
app.mount('#assignment') // Pass the CSS selector that is to be controlled by Vue