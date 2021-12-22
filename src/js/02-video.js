import Player from '@vimeo/player';
import throttle from 'lodash/throttle';

const STORAGE_KEY = 'videoplayer-current-time';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

player.on('timeupdate', throttle(pausedTime, 1000));

function pausedTime() {
  player.getCurrentTime().then(function (seconds) {
    localStorage.setItem('videoplayer-current-time', JSON.stringify(seconds));
  });
}

const getTimeFromLocalStorage = JSON.parse(localStorage.getItem('videoplayer-current-time') || 0);

console.log(getTimeFromLocalStorage);
player.setCurrentTime(getTimeFromLocalStorage);
