let clicks = 121;
getData();


document.getElementById( 'testBtn' ).addEventListener( 'click', updateCounter );





function updateCounter() {
  clicks++;
  document.getElementById( 'counter' ).innerHTML= clicks;

  localStorage.setItem( 'counter Update', clicks );



}

function getData() {


  const data = localStorage.getItem( 'counter Update' );
  if ( data ){

    clicks= parseInt( data ) ;

  }



}
function animateValue( id, start, end, duration ) {
  // assumes integer values for start and end

  let obj = document.getElementById( 'counter' );
  let range = end - start;
  // no timer shorter than 50ms (not really visible any way)
  let minTimer = 50;
  // calc step time to show all interediate values
  let stepTime = Math.abs( Math.floor( duration / range ) );

  // never go below minTimer
  stepTime = Math.max( stepTime, minTimer );

  // get current time and calculate desired end time
  let startTime = new Date().getTime();
  let endTime = startTime + duration;
  let timer;

  function run() {
    let now = new Date().getTime();
    let remaining = Math.max( ( endTime - now ) / duration, 0 );
    let value = Math.round( end - ( remaining * range ) );
    obj.innerHTML = value;
    if ( value == end ) {
      clearInterval( timer );
    }
  }

  timer = setInterval( run, stepTime );
  run();
}

animateValue( 'value', 0, clicks, 3000 );
