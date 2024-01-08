function Validator(formSelector) {
    var formRules = {};
    var _this = this;

    function getParent(element, selector) {
        while (element.parentElement) {
            if (element.parentElement.matches(selector))
                return element.parentElement;
            element = element.parentElement;
        }
    }
    
    /*
        Quy ước tạo rule:
        - Nếu có lỗi thì retun `errorMessage`
        - Nếu không thì return `undefined`
    */

    var validatorRules = {
        required: function (value) {
            return value ? undefined : 'Vui lòng nhập trường này';
        },
        email: function (value) {
            let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regex.test(value) ? undefined : 'Trường này phải là email';
        },
        min: function (min) {
            return function (value) {
                return value.length >= min ? undefined : `Vui lòng nhập ít nhất ${min} ký tự`;
            }
        },
        max: function (max) {
            return function (value) {
                return value.length <= max ? undefined : `Vui lòng nhập tối đa ${max} ký tự`;
            }
        },
    };

    // Lấy ra formElement trong DOM theo 'formSelector'
    var formElement = document.querySelector(formSelector);

    // Chỉ thực hiện khi có element trong DOM
    if (formElement) {

        var inputs = formElement.querySelectorAll('[name][rules]')

        for (let input of inputs) {
            var rules = input.getAttribute('rules').split('|');

            for (let rule of rules) {
                var ruleInfo;
                var isRuleHasValue = rule.includes(':');

                if (isRuleHasValue) {
                    ruleInfo = rule.split(':');
                    rule = ruleInfo[0];
                }

                var ruleFunc = validatorRules[rule];

                if (isRuleHasValue) {
                    ruleFunc = ruleFunc(ruleInfo[1]);
                }

                if (Array.isArray(formRules[input.name])) {
                    formRules[input.name].push(ruleFunc)
                } else {
                    formRules[input.name] = [ruleFunc];
                }
            }

            // Lắng nghe sự kiện để validate (blur, change, ...)    
            input.onblur = handleValidate;
            input.oninput = handleClearError;

        }

        function handleValidate(event) {
            var rules = formRules[event.target.name];
            var errorMessage;

            for (let rule of rules) {
                errorMessage = rule(event.target.value);
                if (errorMessage) break;
            }

            // Nếu có lỗi thì hiển thị message lỗi
            if (errorMessage) {
                var formGroup = getParent(event.target, '.form-group');
                if (formGroup) {
                    formGroup.classList.add('invalid');
                    var formMessage = formGroup.querySelector('.form-message');
                    if (formMessage) {
                        formMessage.innerText = errorMessage;
                    }
                }
            }

            return !errorMessage;
        }

        // Hàm clear message lỗi
        function handleClearError(event) {
            var formGroup = getParent(event.target, '.form-group');
            if (formGroup.classList.contains('invalid')) {
                formGroup.classList.remove('invalid');
                var formMessage = formGroup.querySelector('.form-message');

                if (formMessage)
                    formMessage.innerText = '';
            }
        }   

        // Xử lý hành vi submit form
        formElement.onsubmit = function (event) {
            event.preventDefault();

            var isFormValid = true;

            for (let input of inputs) {
                if (!handleValidate({ target: input })) {
                    isFormValid = false;
                }
            }

            if (isFormValid) {
                if (typeof _this.onSubmit === 'function') {
                    var formValues = Array.from(inputs).reduce(
                        function (values, input) {
                            switch (input.type) {
                                case 'radio':
                                    values[input.name] = formElement.querySelector('input[name="' + input.name + '"]:checked').value;
                                    break;

                                case 'checkbox':
                                    if (!input.matches(':checked')) {
                                        values[input.name] = '';
                                        return values;
                                    }
                                    if (!Array.isArray(values[input.name])) {
                                        values[input.name] = [];
                                    }
                                    values[input.name].push(input.value);
                                    break;

                                case 'file':
                                    values[input.name] = input.files;
                                    break;

                                default:
                                    values[input.name] = input.value;
                                    break;
                            }
                            return values;
                        },
                        {}
                    );
                    _this.onSubmit(formValues);
                } else {
                    formElement.submit();
                }
            }

        }

    }
}