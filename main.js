document.querySelector('.burgers').addEventListener('click', () => {
    document.querySelector('.burgers').style.display = 'none';
    document.querySelector('.noneLines').style.display = 'flex';
    document.querySelector('.uiBar').style.height = '360px';
    document.querySelector('.mobileBar').style.height = '390px';
});

document.querySelector('.noneLines').addEventListener('click', () => {
    document.querySelector('.burgers').style.display = 'flex';
    document.querySelector('.noneLines').style.display = 'none';
    document.querySelector('.uiBar').style.height = '60px';
    document.querySelector('.mobileBar').style.height = '90px';
});