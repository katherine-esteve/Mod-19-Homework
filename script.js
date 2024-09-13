document.addEventListener('DOMContentLoaded', function() {
    // Add event listener to the element with class 'resume java'
    document.querySelector('.resume.java').addEventListener('click', function() {
        console.log('Resume download button clicked.');
        window.open('https://drive.google.com/file/d/1UPVoMAVgmsorNHNsmCU70PfDNg_H6sU9/view?usp=sharing', '_blank');
    });
});