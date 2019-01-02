/* Created by Nishant Sahoo on 02/01/2019 */
const scribble = require('scribbletune');

let beeth = scribble.clip({
    notes: ['d4', 'd5', 'a4', 'g4', 'g5', 'a4', 'f#5', 'a4', 'd4', 'd5', 'a4', 'g4', 'g5', 'a4', 'f#5', 'a4', 'e4', 'd5', 'a4', 'g4', 'g5', 'a4', 'f#5', 'a4', 'e4', 'd5', 'a4', 'g4', 'g5', 'a4', 'f#5', 'a4', 'g4', 'd5', 'a4', 'g4', 'g5', 'a4', 'f#5', 'a4', 'g4', 'd5', 'a4', 'g4', 'g5', 'a4', 'f#5', 'a4', 'd4', 'd5', 'a4', 'g4', 'g5', 'a4', 'f#5', 'a4', 'd4', 'd5', 'a4', 'g4', 'g5', 'a4', 'f#5', 'a4'],
    pattern: 'xxxxxxxxxxxxxxxx'.repeat(4),
    sizzle: true
});  
 
scribble.midi(beeth, 'sweet-child-o-mine.mid');