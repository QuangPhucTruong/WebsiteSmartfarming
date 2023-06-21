// Dieu chinh nut nhan may bom 
let img = document.querySelector('waterpump');
let quatbat = document.querySelector('#quatbat');
let quattat = document.querySelector('#quattat');

quatbat.addEventListener('click', ()=>{ 
    waterpump.src = ('./images/waterpump.png');
    firebase.database().ref('/Control/Waterpump').set({
        Attribute: 1
    });
}); 

quattat.addEventListener('click', ()=>{
    waterpump.src = ('./images/pump_off.png');
    firebase.database().ref('/Control/Waterpump').set({
        Attribute: 0
    });
}); 

// Dieu chinh nut nhan may lanh
let img_1 = document.querySelector('maylanh');
let bat = document.querySelector('#batmay');
let tat = document.querySelector('#tatmay');

bat.addEventListener('click', ()=>{
    maylanh.src = ('./images/air.png');
    firebase.database().ref('/Control/Maylanh').set({
        Attribute: 1
    });
});
tat.addEventListener('click', ()=>{
    maylanh.src = ('./images/air_off.png');
    firebase.database().ref('/Control/Maylanh').set({
        Attribute: 0
    });
});

//Dieu chinh nut nhan mayphun suong
let img_2 = document.querySelector('mayphunsuong');
let on = document.querySelector('#onmode');
let off = document.querySelector('#offmode');

on.addEventListener('click', ()=>{
    mayphunsuong.src = ('./images/phunsuong.png');
    firebase.database().ref('/Control/Mayphunsuong').set({
        Attribute: 1
    });
});
off.addEventListener('click', ()=>{
    mayphunsuong.src = ('./images/phunsuong_off.png');
    firebase.database().ref('/Control/Mayphunsuong').set({
        Attribute: 0
    });
});








