<?php

$path = $_SERVER['REQUEST_URI'];

$page = $_SERVER['REQUEST_URI'] == '/' ? 'index' : $_SERVER['REQUEST_URI'];

require_once '/var/www/public/pages/' . $page . '.php';
