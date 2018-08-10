const getRandomColor = () => {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const debug = () => ({
  borderRadius: 4,
  borderWidth: 2,
  borderColor: getRandomColor(),
});


const variables = {
  $white1: 'rgb(255, 255, 255)',
  $white2: 'rgb(249, 249, 249)',
  $white3: 'rgb(233,233,233)',
  $profileImage: 40,
  $black1: 'rgb(22,22,22)',
  $black2: 'rgb(30,30,30)',
  $black3: 'rgb(5,5,5)',
  $userBarHeight: 50,
  $margin: 10,
};

export {
  debug,
  variables as default,
}