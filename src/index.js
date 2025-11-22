const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const phone = document.getElementById('phone');
const email = document.getElementById('email');
const saveBtn = document.querySelector('.btn-primary');
const clearBtn = document.querySelector('.btn-ghost');

saveBtn.addEventListener('click', () => {
    const userData = {
        firstName: firstName.value,
        lastName: lastName.value,
        phone: phone.value,
        email: email.value.value
    };
    localStorage.setItem('userData', JSON.stringify(userData));
    alert('Data saved successfully!');
});

clearBtn.addEventListener('click', () => {
    localStorage.removeItem('userData');
    firstName.value = '';
    lastName.value = '';
    phone.value = '';
    email.value = '';
    alert('Data cleared successfully!');
});

window.addEventListener('load', () => {
    const savedData = localStorage.getItem('userData');
    if (savedData) {
        const userData = JSON.parse(savedData);
        firstName.value = userData.firstName;
        lastName.value = userData.lastName;
        phone.value = userData.phone;
        email.value = userData.email;
    }
});

