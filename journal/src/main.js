import { journal } from './journal';
import './styles.css';
import $ from 'jquery';
import 'bootstrap';

$(document).ready(function() {
  $('form').submit(function(event) {
    event.preventDefault();

  });
});
