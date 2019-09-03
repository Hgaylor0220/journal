import { Entry} from './journal';
import './styles.css';
import $ from 'jquery';
import 'bootstrap';


$(document).ready(function() {
  $('form#inputForm').submit(function(event) {
    event.preventDefault();
    var newEntry = new Entry($('input#entryInput').val());
    var vowels = 0;
    var consonants = 0;
    vowels = newEntry.vowels();
    consonants = newEntry.consonants();

    console.log(vowels);
    console.log(consonants);

  });
});
