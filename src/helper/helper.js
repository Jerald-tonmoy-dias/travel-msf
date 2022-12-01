export function toggleClassForHover(id) {
    const parent = document.getElementById(id);
    parent.classList.toggle('active');

}
export function handleContactCheckBox(id) {
    document.getElementById(id).classList.toggle('active');
    document.getElementById('contactwith_5').classList.remove('active');
}

export function handleDonNotContact() {
    document.getElementById('contactwith_1').classList.remove('active');
    document.getElementById('contactwith_2').classList.remove('active');
    document.getElementById('contactwith_3').classList.remove('active');
    document.getElementById('contactwith_4').classList.remove('active');
    document.getElementById('contactwith_5').classList.toggle('active');
}