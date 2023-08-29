// Container unrated
const containerUnrated = document.querySelector('.container-unrated');
containerUnrated.addEventListener('mousemove', () => {
   containerUnrated.style.width = 'auto';
   containerUnrated.style.backgroundColor = '#2a2a2e';
   containerUnrated.style.display = 'block';
   containerUnrated.style.transition = 'width 0.3s ease';
});

containerUnrated.addEventListener('mouseout', () => {
   containerUnrated.style.backgroundColor = '#121216';
   containerUnrated.style.transition = 'width 0.3s ease';
});

// Container easy
const containerEasy = document.querySelector('.container-easy');
const difficultEasyLabel = document.querySelector('.difficult-easy-label');
containerEasy.addEventListener('mousemove', () => {
   containerEasy.style.width = 'auto';
   containerEasy.style.backgroundColor = '#2a2a2e';
   containerEasy.style.display = 'block';
   containerEasy.style.transition = 'width 0.3s ease';

   difficultEasyLabel.style.color = 'blue';
});

containerEasy.addEventListener('mouseout', () => {
   containerEasy.style.backgroundColor = '#121216';
   containerEasy.style.transition = 'width 0.3s ease';

   difficultEasyLabel.style.color = '';
});

// Container normal
const containerNormal = document.querySelector('.container-normal');
const difficultNormalLabel = document.querySelector('.difficult-normal-label');
containerNormal.addEventListener('mousemove', () => {
   containerNormal.style.width = 'auto';
   containerNormal.style.backgroundColor = '#2a2a2e';
   containerNormal.style.display = 'block';
   containerNormal.style.transition = 'width 0.3s ease';

   difficultNormalLabel.style.color = 'green';
});

containerNormal.addEventListener('mouseout', () => {
   containerNormal.style.backgroundColor = '#121216';
   containerNormal.style.transition = 'width 0.3s ease';

   difficultNormalLabel.style.color = '';
});

// Container hard
const containerHard = document.querySelector('.container-hard');
const difficultHardLabel = document.querySelector('.difficult-hard-label');
containerHard.addEventListener('mousemove', () => {
   containerHard.style.width = 'auto';
   containerHard.style.backgroundColor = '#2a2a2e';
   containerHard.style.display = 'block';
   containerHard.style.transition = 'width 0.3s ease';

   difficultHardLabel.style.color = 'yellow';
});

containerHard.addEventListener('mouseout', () => {
   containerHard.style.backgroundColor = '#121216';
   containerHard.style.transition = 'width 0.3s ease';

   difficultHardLabel.style.color = '';
});

// Container harder
const containerHarder = document.querySelector('.container-harder');
const difficultHarderLabel = document.querySelector('.difficult-harder-label');
containerHarder.addEventListener('mousemove', () => {
   containerHarder.style.width = 'auto';
   containerHarder.style.backgroundColor = '#2a2a2e';
   containerHarder.style.display = 'block';
   containerHarder.style.transition = 'width 0.3s ease';

   difficultHarderLabel.style.color = 'red';
});

containerHarder.addEventListener('mouseout', () => {
   containerHarder.style.backgroundColor = '#121216';
   containerHarder.style.transition = 'width 0.3s ease';

   difficultHarderLabel.style.color = '';
});

// Container insane
const containerInsane = document.querySelector('.container-insane');
const difficultInsaneLabel = document.querySelector('.difficult-insane-label');
containerInsane.addEventListener('mousemove', () => {
   containerInsane.style.width = 'auto';
   containerInsane.style.backgroundColor = '#2a2a2e';
   containerInsane.style.display = 'block';
   containerInsane.style.transition = 'width 0.3s ease';

   difficultInsaneLabel.style.color = 'purple';
});

containerInsane.addEventListener('mouseout', () => {
   containerInsane.style.backgroundColor = '#121216';
   containerInsane.style.transition = 'width 0.3s ease';

   difficultInsaneLabel.style.color = '';
});