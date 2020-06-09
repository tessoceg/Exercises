var sing = function () {
    // return the lyrics as a string ...
    let song = []
    for(let i = 99; i >= 0; i--) {
    if (i === 0) { song.push('No more bottles of beer on the wall, no more bottles of beer.',
    'Go to the store and buy some more, 99 bottles of beer on the wall.')
    } else {
    song.push(`${i} bottles of beer on the wall, ${i} bottles of beer.`, 
    `Take one down pass it around, ${i - 1} bottles of beer on the wall.`);
    } 
  }return song;
  };
  console.log(sing());