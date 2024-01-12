// Nếu gọi một method mà trước nó không có '.' thì this sẽ trỏ ra global


const ssA23 = {
    // Thuộc tính - property
    name: 'SamSung Galaxy A23',
    color: 'blue',
    weight: 450,

    // Phương thức - method
    takePhoto() {
        console.log(this);
    },
    child: {
        name: 'Child Object',
        methodChild() {
            console.log(this);
        }
    }
};


function Car(name, color, weight) {
    this.name = name;
    this.color = color;
    this.weight = weight;
    this.run = function() {
        console.log('Running...', this);
    }
}

const mercedesS450 = new Car('Mercedes S450', 'emerald', 1200);
mercedesS450.run()