// Create an object to map each key to its corresponding note
const keyToNote = {
  'key-1': 'C4',
  'key-2': 'C#4',
  'key-3': 'D4',
  'key-4': 'D#4',
  'key-5': 'E4',
  'key-6': 'F4',
  'key-7': 'F#4',
  'key-8': 'G4',
  'key-9': 'G#4',
  'key-10': 'A4',
  'key-11': 'A#4',
  'key-12': 'B4',
  'key-13': 'C5',
  'key-14': 'C#5',
  'key-15': 'D5',
  'key-16': 'D#5',
  'key-17': 'E5',
  'key-18': 'F5',
  'key-19': 'F#5',
  'key-20': 'G5',
  'key-21': 'G#5',
};

// Create a new synth object
const synth = new Tone.Synth().toDestination();

// Add click event listeners to all keys
const keys = document.querySelectorAll('.key');
keys.forEach((key) => {
  key.addEventListener('click', () => {
    // Get the note for the clicked key
    const note = keyToNote[key.id];

    // Play the note for 0.5 seconds
    synth.triggerAttackRelease(note, '0.5s');

    // Change the background color of the key temporarily
    key.style.backgroundColor = '#c0c0c0';
    setTimeout(() => {
      key.style.backgroundColor = '#ffffff';
    }, 100);
  });
});
