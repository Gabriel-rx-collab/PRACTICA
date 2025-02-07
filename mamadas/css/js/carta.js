document.getElementById('open-btn').addEventListener('click', function() {
    document.querySelector('.card').classList.add('open');
});

document.getElementById('close-btn').addEventListener('click', function() {
    document.querySelector('.card').classList.remove('open');
});