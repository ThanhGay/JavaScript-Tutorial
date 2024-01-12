// .bind() chủ động ràng buộc 'this' cho 1 function


// ===================== VD1 =======================
this.firstName = 'Minh';
this.lastName = 'Thu';

const teacher = {
    firstName: 'Minh',
    lastName: 'Thảo',
    getFullName() {
        console.log( `${this.firstName} ${this.lastName}`);
    },
};

const student = {
    firstName: 'Duc',
    lastName: 'Thanh',
}

const getTeacherName = teacher.getFullName;
const getStudentName = teacher.getFullName.bind(student);

// Case 1:
console.log(teacher.getFullName());     // Minh Thảo

// Case 2:
console.log(getTeacherName());          // Minh Thu
console.log(getStudentName());


// ==================== VD2 ======================
const button = document.querySelector('button');
button.onclick = teacher.getFullName.bind(teacher);



// ==================== VD3 ======================
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

console.log($('#heading'));


// ==================== VD4 ======================
const app = (() => {
    const cars = ['BMW']

    const root = $('#root');
    const input = $('#input');
    const submit = $('.submit');

    return {
        add(car) {;
            cars.push(car);
        },

        delete(index) {
            cars.splice(index, 1);
        },

        render() {
            const html = cars.map((car, index) => `
                <li>
                    ${car}
                    <span class="delete" data-index="${index}">&times</span>
                </li>
            `).join('')

            root.innerHTML = html;
        },

        handleDelete(event) {
            const deleteBtn = event.target.closest('.delete')
            if (deleteBtn){
                const index = deleteBtn.dataset.index;
                this.delete(index);
                this.render();
            }
        },

        init() {
            //hander DOM event
            submit.onclick = () => {
                const car = input.value;
                this.add(car);
                this.render();
                
                input.value = null;
                input.focus();
            }

            root.onclick = this.handleDelete.bind(this);

            this.render();
        },
    };
})();

app.init();
